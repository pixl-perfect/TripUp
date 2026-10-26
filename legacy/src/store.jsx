// App state for the Lisbon scenario. One reducer, plus timed "other people" events to simulate real time.
import React, { createContext, useContext, useEffect, useReducer, useRef, useCallback } from 'react';
import { DATA, ME, PLACES, SHORT, balancesFor, simplify, pairwiseCount, sharesFor } from './logic.js';

const LISBON = DATA.trips[0];
export const BASE_MEMBERS = LISBON.memberIds; // ari, nic, maya, jonas, lea
export const WITH_REN = LISBON.memberIdsAfterAddingRen;

// Votes from the rest of the group, played in order (from tripup-mock-data.json → poll.voteTimeline).
const OTHER_VOTES = DATA.poll.voteTimeline.filter((v) => v.userId !== ME);

const PAY_METHOD = { ren: 'Apple Pay', nic: 'Bank transfer', jonas: 'Card', lea: 'Bank transfer', maya: 'Bank transfer', ari: 'Apple Pay' };
const PAY_TIME = ['23:42', '23:44', '23:47', '23:50', '23:51', '23:52'];

const BILL_ITEMS = DATA.newExpense.items.map((it, i) => ({
  id: 'it' + i,
  name: ['Food · shared plates', 'Wine · 2 bottles', 'Water & soft drinks'][i] || it.name,
  amount: it.amount,
}));

export const initialState = {
  screen: 'home',
  sheet: null,
  theme: 'dark',
  renAdded: false,
  sofiaAdded: false,
  tomAdded: false,
  chatUnread: 3,
  myMessages: [],
  poll: null, // { status, votes: {userId: optionId}, options, question, step, closedAt, winner, tie }
  dinner: null, // placeId once the poll closes
  showIsland: false,
  bill: {
    mode: 'equal',
    items: BILL_ITEMS.map((it) => ({ ...it, splitAmong: [...WITH_REN] })),
  },
  expenseSaved: false,
  transfers: [],
  paidCount: 0,
  nudged: false,
  settled: false,
  toast: null,
  banner: null,
  hint: true,
};

function closePoll(poll) {
  const counts = {};
  for (const o of poll.options) counts[o] = 0;
  for (const v of Object.values(poll.votes)) counts[v] = (counts[v] || 0) + 1;
  const max = Math.max(...Object.values(counts));
  const top = poll.options.filter((o) => counts[o] === max);
  if (top.length > 1) return { ...poll, status: 'tie', tied: top };
  return { ...poll, status: 'closed', winner: top[0] };
}

function reducer(s, a) {
  switch (a.type) {
    case 'go':
      return { ...s, screen: a.screen, sheet: null, chatUnread: a.screen === 'chat' ? 0 : s.chatUnread };
    case 'sheet':
      return { ...s, sheet: a.sheet };
    case 'theme':
      return { ...s, theme: s.theme === 'dark' ? 'light' : 'dark' };
    case 'toast':
      return { ...s, toast: a.text ? { text: a.text, id: Date.now() } : null };
    case 'banner':
      return { ...s, banner: a.banner };
    case 'add':
      return { ...s, [a.key]: true };
    case 'say':
      return { ...s, myMessages: [...s.myMessages, { text: a.text, t: a.t }] };

    case 'pollSend': {
      const voters = s.renAdded ? WITH_REN : BASE_MEMBERS;
      return {
        ...s,
        sheet: null,
        screen: 'chat',
        chatUnread: 0,
        poll: { status: 'live', question: a.question, options: a.options, voters, votes: {}, step: 0, closeLabel: a.closeLabel },
      };
    }
    case 'vote': {
      if (!s.poll || s.poll.status !== 'live') return s;
      return { ...s, poll: maybeClose({ ...s.poll, votes: { ...s.poll.votes, [a.user]: a.option } }) };
    }
    case 'otherVote': {
      if (!s.poll || s.poll.status !== 'live') return s;
      const v = a.vote;
      if (!s.poll.voters.includes(v.userId)) return { ...s, poll: { ...s.poll, step: s.poll.step + 1 } };
      const option = s.poll.options.includes(v.optionId) ? v.optionId : s.poll.options[s.poll.step % s.poll.options.length];
      return { ...s, poll: maybeClose({ ...s.poll, step: s.poll.step + 1, votes: { ...s.poll.votes, [v.userId]: option } }) };
    }
    case 'breakTie':
      return { ...s, poll: { ...s.poll, status: 'closed', winner: a.option } };
    case 'island':
      return { ...s, showIsland: a.on };
    case 'dinnerAdded':
      return { ...s, dinner: s.poll.winner };

    case 'billMode':
      return { ...s, bill: { ...s.bill, mode: a.mode } };
    case 'toggleItemPerson': {
      const items = s.bill.items.map((it) => {
        if (it.id !== a.item) return it;
        const has = it.splitAmong.includes(a.person);
        if (has && it.splitAmong.length === 1) return it;
        return { ...it, splitAmong: has ? it.splitAmong.filter((p) => p !== a.person) : WITH_REN.filter((p) => p === a.person || it.splitAmong.includes(p)) };
      });
      return { ...s, hint: false, bill: { ...s.bill, items } };
    }
    case 'toggleEqualPerson': {
      const all = s.bill.items[0].splitAmong;
      const has = all.includes(a.person);
      if (has && all.length === 1) return s;
      const next = has ? all.filter((p) => p !== a.person) : WITH_REN.filter((p) => p === a.person || all.includes(p));
      return { ...s, bill: { ...s.bill, items: s.bill.items.map((it) => ({ ...it, splitAmong: next })) } };
    }
    case 'saveExpense': {
      const tr = simplify(balancesFor([...DATA.expenses, billExpense(s.bill)]));
      // Ari's incoming transfers land first, then the rest, so "who still owes" reads naturally.
      // Lea is the slow payer in the story, so her transfers sit last (as in the hi-fi).
      const order = (t) => (t.from === 'lea' ? 100 + (t.to === ME ? 10 : 0) : t.to === ME ? 0 : 10);
      tr.sort((x, y) => order(x) - order(y));
      return {
        ...s,
        expenseSaved: true,
        screen: 'settle',
        sheet: null,
        transfers: tr.map((t, i) => ({ ...t, id: 't' + i, status: 'pending', method: PAY_METHOD[t.from], time: null })),
        paidCount: 0,
      };
    }
    case 'pay': {
      const idx = s.transfers.findIndex((t) => t.id === a.id);
      if (idx < 0 || s.transfers[idx].status === 'paid') return s;
      const transfers = s.transfers.map((t) => (t.id === a.id ? { ...t, status: 'paid', time: PAY_TIME[s.paidCount] || '23:55' } : t));
      const settled = transfers.every((t) => t.status === 'paid');
      return { ...s, transfers, paidCount: s.paidCount + 1, settled };
    }
    case 'nudge':
      return { ...s, nudged: true };
    case 'reset':
      return { ...initialState, theme: s.theme };
    case 'jump':
      return { ...jumpTo(a.step), theme: s.theme };
    default:
      return s;
  }
}

function maybeClose(poll) {
  const done = poll.voters.every((v) => poll.votes[v]);
  return done ? closePoll(poll) : poll;
}

export function billExpense(bill) {
  const items = bill.items.map((it) => ({ amount: it.amount, splitAmong: it.splitAmong }));
  const total = items.reduce((a, it) => a + it.amount, 0);
  return { id: 'exp_06', paidBy: ME, total, items, shares: sharesFor(items) };
}

export function billSummary(bill) {
  return { ...billExpense(bill), pairwise: pairwiseCount([...DATA.expenses, billExpense(bill)]) };
}

// Demo shortcuts from the side panel: put the app in the state right before each scenario step.
function jumpTo(step) {
  const s = { ...initialState };
  const pollDone = {
    status: 'closed', question: DATA.poll.question, options: DATA.poll.optionIds, voters: WITH_REN, step: 5,
    votes: { ari: 'r_taberna', maya: 'r_ramiro', jonas: 'r_ramiro', lea: 'r_taberna', ren: 'r_taberna', nic: 'r_saobento' },
    winner: 'r_taberna', closeLabel: 'All 6 vote or 19:45',
  };
  if (step >= 2) Object.assign(s, { screen: 'trip' });
  if (step >= 3) Object.assign(s, { renAdded: true, screen: 'chat', chatUnread: 0, myMessages: [] });
  if (step >= 5) Object.assign(s, { poll: pollDone, dinner: 'r_taberna', screen: 'trip' });
  if (step >= 6) Object.assign(s, { screen: 'expense', bill: { ...s.bill, mode: 'equal' } });
  if (step >= 7) {
    const bill = { mode: 'items', items: s.bill.items.map((it, i) => (i === 1 ? { ...it, splitAmong: ['ari', 'maya', 'jonas', 'lea'] } : it)) };
    let st = reducer({ ...s, bill, hint: false }, { type: 'saveExpense' });
    if (step >= 8) {
      for (const t of st.transfers) st = reducer(st, { type: 'pay', id: t.id });
      st = { ...st, screen: 'done', nudged: true };
    }
    return st;
  }
  return s;
}

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timers = useRef([]);
  const later = useCallback((ms, fn) => { const t = setTimeout(fn, ms); timers.current.push(t); return t; }, []);
  const toast = useCallback((text) => dispatch({ type: 'toast', text }), []);

  // Toasts fade after 2.6s.
  useEffect(() => {
    if (!state.toast) return;
    const t = setTimeout(() => dispatch({ type: 'toast', text: null }), 2600);
    return () => clearTimeout(t);
  }, [state.toast]);

  // Live poll: other people's votes arrive every ~1.6s. Nic votes last, once Ari has voted.
  const poll = state.poll;
  useEffect(() => {
    if (!poll || poll.status !== 'live') return;
    const next = OTHER_VOTES[poll.step];
    if (!next) return;
    const isLast = poll.step === OTHER_VOTES.length - 1;
    if (isLast && !poll.votes[ME]) return; // wait for Ari
    const t = setTimeout(() => dispatch({ type: 'otherVote', vote: next }), isLast ? 3800 : poll.step === 0 ? 1800 : 1600);
    return () => clearTimeout(t);
  }, [poll && poll.step, poll && poll.status, poll && poll.votes[ME]]);

  // Dynamic Island live activity while the poll waits on its last vote.
  const votedCount = poll ? Object.keys(poll.votes).length : 0;
  useEffect(() => {
    if (!poll || poll.status !== 'live') { dispatch({ type: 'island', on: false }); return; }
    if (votedCount === poll.voters.length - 1) {
      dispatch({ type: 'island', on: true });
      const t = setTimeout(() => dispatch({ type: 'island', on: false }), 3400);
      return () => clearTimeout(t);
    }
  }, [votedCount, poll && poll.status]);

  // Poll closes → winner goes into the itinerary, everyone gets a push.
  useEffect(() => {
    if (!poll || poll.status !== 'closed' || state.dinner) return;
    dispatch({ type: 'dinnerAdded' });
    const p = PLACES[poll.winner];
    dispatch({ type: 'banner', banner: { kind: 'decided', title: 'Lisbon long weekend', body: `Dinner's decided: ${p.name} at 20:30`, cta: 'See itinerary' } });
  }, [poll && poll.status]);

  // Payments land live after the bill is saved: everyone except the last debtor pays on their own.
  useEffect(() => {
    if (state.screen !== 'settle' || !state.expenseSaved) return;
    const pending = state.transfers.filter((t) => t.status === 'pending');
    if (!pending.length) return;
    const slow = state.transfers[state.transfers.length - 1].from; // the one who needs a nudge
    const auto = pending.filter((t) => t.from !== slow);
    if (auto.length) {
      const t = setTimeout(() => dispatch({ type: 'pay', id: auto[0].id }), state.paidCount === 0 ? 1400 : 1300);
      return () => clearTimeout(t);
    }
    if (state.nudged) {
      const t = setTimeout(() => dispatch({ type: 'pay', id: pending[0].id }), 1500);
      return () => clearTimeout(t);
    }
  }, [state.screen, state.transfers, state.nudged, state.paidCount]);

  // Last payment in → everyone gets the confirmation.
  useEffect(() => {
    if (!state.settled || state.screen !== 'settle') return;
    const t = setTimeout(() => dispatch({ type: 'go', screen: 'done' }), 1400);
    return () => clearTimeout(t);
  }, [state.settled]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return <Ctx.Provider value={{ state, dispatch, toast, later }}>{children}</Ctx.Provider>;
}

// Clock in the status bar follows the story.
export function clockFor(s) {
  if (s.screen === 'done') return '23:52';
  if (s.screen === 'settle') return ['23:41', '23:42', '23:44', '23:47', '23:50', '23:51'][s.paidCount] || '23:51';
  if (s.screen === 'expense') return '23:38';
  if (s.dinner) return s.screen === 'home' ? '19:06' : '19:05';
  if (s.poll) return ['18:40', '18:43', '18:47', '18:52', '18:58', '19:04'][s.poll.step] || '19:04';
  if (s.renAdded) return '18:38';
  return '18:34';
}

// Which scenario step (1–8) the app is in, for the demo panel.
export function stepFor(s) {
  if (s.screen === 'done') return 8;
  if (s.screen === 'settle') return 7;
  if (s.screen === 'expense') return 6;
  if (s.dinner) return 5;
  if (s.poll) return 4;
  if (s.screen === 'chat' || s.sheet === 'createPoll') return 3;
  if (s.screen === 'trip') return 2;
  return 1;
}

export { SHORT };
