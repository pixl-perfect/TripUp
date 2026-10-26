// Mock data + the bits of real logic the prototype runs on (splits, balances, debt simplification).
import data from './data.json';

export const DATA = data;
export const ME = data._meta.currentUserId;

export const PEOPLE = Object.fromEntries(data.users.map((u) => [u.id, u]));
export const person = (id) => PEOPLE[id];
export const people = (ids) => ids.map(person);
export const nameOf = (id) => (id === ME ? 'You' : PEOPLE[id].name);

export const PLACES = Object.fromEntries(data.places.map((p) => [p.id, p]));
export const PLACE_IMG = { r_ramiro: 'img/ramiro.jpg', r_taberna: 'img/taberna.jpg', r_saobento: 'img/saobento.jpg' };
export const SHORT = { r_ramiro: 'Ramiro', r_taberna: 'Taberna', r_saobento: 'São Bento' };

// "€1,368.50"
export const eur = (cents) =>
  '€' + (Math.abs(cents) / 100).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function joinNames(ids) {
  const n = ids.map(nameOf);
  if (n.length <= 1) return n.join('');
  return n.slice(0, -1).join(', ') + ' and ' + n[n.length - 1];
}

// Shares per person for an expense with item-level splits. Each item is split equally among its people,
// shares are rounded to the cent at the end.
export function sharesFor(items) {
  const raw = {};
  for (const it of items) {
    if (!it.splitAmong.length) continue;
    const each = it.amount / it.splitAmong.length;
    for (const id of it.splitAmong) raw[id] = (raw[id] || 0) + each;
  }
  return Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, Math.round(v)]));
}

// Trip-wide balances. Positive = is owed, negative = owes.
export function balancesFor(expenses) {
  const bal = Object.fromEntries(data.users.map((u) => [u.id, 0]));
  for (const e of expenses) {
    const shares = e.shares || sharesFor(e.items);
    const total = e.total ?? e.items.reduce((a, it) => a + it.amount, 0);
    bal[e.paidBy] += total;
    for (const [id, s] of Object.entries(shares)) bal[id] -= s;
    // Rounding: odd cents left over from equal splits are absorbed by whoever is owed the most.
    const left = total - Object.values(shares).reduce((a, b) => a + b, 0);
    if (left) {
      const top = Object.entries(bal).sort((a, b) => b[1] - a[1])[0][0];
      bal[top] -= left;
    }
  }
  return bal;
}

// Number of transfers if everyone paid back each payer directly (netted per pair).
export function pairwiseCount(expenses) {
  const pair = {};
  for (const e of expenses) {
    const shares = e.shares || sharesFor(e.items);
    for (const [id, s] of Object.entries(shares)) {
      if (id === e.paidBy || !s) continue;
      const [a, b] = [id, e.paidBy].sort();
      const k = a + '|' + b;
      pair[k] = (pair[k] || 0) + (a === id ? s : -s);
    }
  }
  return Object.values(pair).filter((v) => Math.abs(v) > 0).length;
}

// Greedy debt simplification: biggest debtor pays biggest creditor until everyone is even.
export function simplify(balances) {
  const cred = Object.entries(balances).filter(([, v]) => v > 0).map(([id, v]) => ({ id, v }));
  const debt = Object.entries(balances).filter(([, v]) => v < 0).map(([id, v]) => ({ id, v: -v }));
  const out = [];
  while (cred.length && debt.length) {
    cred.sort((a, b) => b.v - a.v);
    debt.sort((a, b) => b.v - a.v);
    const c = cred[0], d = debt[0];
    const amt = Math.min(c.v, d.v);
    out.push({ from: d.id, to: c.id, amount: amt });
    c.v -= amt; d.v -= amt;
    if (c.v === 0) cred.shift();
    if (d.v === 0) debt.shift();
  }
  return out;
}

export const BASE_EXPENSES = data.expenses;
export const TRIP_SPEND = (extra = 0) => BASE_EXPENSES.reduce((a, e) => a + e.total, 0) + extra;
