// Bottom sheets: 03 Add people, 05 Create poll, plus full itinerary, balances, photos and live map.
import React, { useState } from 'react';
import { useApp, WITH_REN, BASE_MEMBERS, billExpense } from '../store.jsx';
import { SheetGrabber, Button, IconButton, Icon, TextField, PersonRow, ChipButton, Avatar } from '../ds.jsx';
import { DATA, PEOPLE, PLACES, PLACE_IMG, eur, balancesFor, nameOf, people } from '../logic.js';

export function Sheet({ title, onClose, children, className = '', left, right, label }) {
  return (
    <div className="sheet-wrap">
      <button type="button" className="dim" aria-label="Close" onClick={onClose} />
      <section className={'sheet ' + className} role="dialog" aria-modal="true" aria-label={label || title}>
        <SheetGrabber />
        <div className="sheet-head px">
          {left}
          <h2 className={left ? 't-title-m center flex1' : 't-title-l flex1'}>{title}</h2>
          {right}
        </div>
        <div className="sheet-body scroll">{children}</div>
      </section>
    </div>
  );
}

export function AddPeople() {
  const { state, dispatch, toast } = useApp();
  const close = () => dispatch({ type: 'sheet', sheet: null });
  const [q, setQ] = useState('');
  const rows = [
    { key: 'renAdded', person: PEOPLE.ren, name: 'Ren Tanaka', sub: 'Friend of Lea & Jonas' },
    { key: 'sofiaAdded', name: 'Sofia Ramos', initials: 'SR', color: 'var(--neutral-500)', sub: 'Friend of Maya' },
    { key: 'tomAdded', name: 'Tom Hale', initials: 'TH', color: 'var(--neutral-600)', sub: 'In your contacts' },
  ].filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <Sheet title="Add people" onClose={close} right={<Button variant="ghost" size="M" onClick={close}>Done</Button>}>
      <div className="stack16 px">
        <TextField placeholder="Search name or phone number" label="Search name or phone number" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="invite">
          <span className="invite__icon"><Icon name="link" size={18} /></span>
          <div className="tu-row__text">
            <div className="t-body-m-strong">Share invite link</div>
            <div className="t-body-s c-secondary">Opens straight into the trip. No sign-up needed to vote.</div>
          </div>
          <IconButton variant="solid" icon="copy" label="Copy invite link" onClick={() => toast('Invite link copied')} />
        </div>
        <div className="t-label c-tertiary">Suggested · friends of the group</div>
        <div className="stack4">
          {rows.map((r) => (
            <PersonRow key={r.key} person={r.person} name={r.name} initials={r.initials} color={r.color} subtitle={r.sub}
              added={state[r.key]}
              onAdd={() => { dispatch({ type: 'add', key: r.key }); if (r.key === 'renAdded') toast('Ren added · she can vote in the next poll'); else toast(`${r.name.split(' ')[0]} added`); }} />
          ))}
        </div>
        <div className="note">
          <Icon name="clock" size={18} />
          <span className="t-body-s c-secondary">Ren joins from tonight. They are excluded from previous expense settlements.</span>
        </div>
      </div>
    </Sheet>
  );
}

const SUGGESTIONS = ['r_ramiro', 'r_taberna', 'r_saobento'];
const PLACE_META = {
  r_ramiro: ['Lively & loud · Seafood', '€€ · 15 min walk'],
  r_taberna: ['Cosy · Small plates', '€€ · 12 min by tram'],
  r_saobento: ['Late-night classic · Steak', '€€€ · 14 min by Uber'],
};

export function CreatePoll() {
  const { state, dispatch, toast } = useApp();
  const close = () => dispatch({ type: 'sheet', sheet: null });
  const [kind, setKind] = useState('Place');
  const [question, setQuestion] = useState(DATA.poll.question);
  const [opts, setOpts] = useState(SUGGESTIONS);
  const [toItin, setToItin] = useState(true);
  const count = state.renAdded ? WITH_REN.length : BASE_MEMBERS.length;
  const missing = SUGGESTIONS.filter((o) => !opts.includes(o));

  return (
    <Sheet title="New poll" onClose={close} className="sheet--tall" left={<IconButton variant="solid" icon="x" label="Close" size={36} onClick={close} />} right={<span style={{ width: 36 }} />}>
      <div className="stack12 px">
        <div className="chips" role="tablist" aria-label="Poll template">
          {['Place', 'Time', 'Yes / No', 'Custom'].map((k) => (
            <ChipButton key={k} role="tab" aria-selected={kind === k} tone={kind === k ? 'selected' : 'default'}
              onClick={() => (k === 'Place' ? setKind(k) : toast(`${k} polls work the same way · this demo uses Place`))}>{k}</ChipButton>
          ))}
        </div>
        <div className="stack8">
          <span className="t-label c-tertiary">Question</span>
          <TextField icon={null} label="Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </div>
        <div className="row-between">
          <span className="t-label c-tertiary">Options · near Casa in Graça</span>
          <ChipButton tone="accent" onClick={() => (missing.length ? setOpts([...opts, missing[0]]) : toast('Showing the 3 closest places that are open now'))}>
            <Icon name="search" size={14} /> Search nearby
          </ChipButton>
        </div>
        <div className="stack8">
          {opts.map((o) => (
            <div key={o} className="optcard">
              <span className="photo56 r12" style={{ backgroundImage: `url(${PLACE_IMG[o]})` }} />
              <div className="tu-row__text">
                <div className="t-body-m-strong">{PLACES[o].name}</div>
                <div className="t-body-s c-secondary">{PLACE_META[o][0]}</div>
                <div className="t-caption c-tertiary">{PLACE_META[o][1]}</div>
              </div>
              <IconButton variant="plain" icon="x" label={`Remove ${PLACES[o].name}`} onClick={() => setOpts(opts.filter((x) => x !== o))} />
            </div>
          ))}
          <button type="button" className="addopt" onClick={() => (missing.length ? setOpts([...opts, missing[0]]) : toast('Search nearby to add more places'))}>
            <Icon name="plus" size={16} /> Add option
          </button>
        </div>
        <div className="settings">
          <button type="button" className="setrow" onClick={() => toast('Closes when all vote, or at 19:45 at the latest')}>
            <Icon name="clock" size={18} />
            <span className="flex1 t-body-m">Closes</span>
            <span className="t-body-s c-secondary">All {count} vote or 19:45</span>
            <Icon name="chevron-right" size={16} className="c-tertiary" />
          </button>
          <div className="divider" />
          <label className="setrow">
            <Icon name="calendar" size={18} />
            <span className="flex1 tu-row__text">
              <span className="t-body-m">Add winner to itinerary</span>
              <span className="t-caption c-secondary">Dinner · 20:30</span>
            </span>
            <input type="checkbox" className="switch" checked={toItin} onChange={(e) => setToItin(e.target.checked)} />
          </label>
        </div>
        <Button disabled={opts.length < 2 || !question.trim()}
          onClick={() => { dispatch({ type: 'pollSend', question, options: opts }); toast(`Poll sent · all ${count} notified`); }}>
          Send to group · {count} people
        </Button>
        <div style={{ height: 8 }} />
      </div>
    </Sheet>
  );
}

export function FullItinerary() {
  const { dispatch } = useApp();
  const close = () => dispatch({ type: 'sheet', sheet: null });
  const { state } = useApp();
  return (
    <Sheet title="Full itinerary" onClose={close} className="sheet--tall" right={<Button variant="ghost" size="M" onClick={close}>Done</Button>}>
      <div className="stack16 px">
        {DATA.itinerary.days.map((d) => (
          <div key={d.date} className="stack8">
            <div className="t-label c-tertiary">{d.label}</div>
            {d.items.map((it) => {
              let title = it.title, sub = it.type[0].toUpperCase() + it.type.slice(1), st = it.status === 'done' ? 'done' : it.status === 'now' ? 'now' : 'planned';
              if (it.status === 'undecided') { if (state.dinner) { title = PLACES[state.dinner].name; sub = 'Dinner · picked by poll'; } else { st = 'undecided'; sub = 'Not decided yet'; } }
              if (!it.status) st = 'done';
              return (
                <div key={it.id} className={'mini-itin ' + st}>
                  <span className="t-body-s-strong c-secondary w44">{it.time}</span>
                  <span className="flex1"><span className="t-body-m-strong">{title}</span><br /><span className="t-caption c-secondary">{st === 'now' ? 'Now' : sub}</span></span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Sheet>
  );
}

export function Balances() {
  const { state, dispatch } = useApp();
  const close = () => dispatch({ type: 'sheet', sheet: null });
  const before = balancesFor(DATA.expenses);
  const after = state.expenseSaved ? balancesFor([...DATA.expenses, billExpense(state.bill)]) : null;
  const ids = state.renAdded || state.expenseSaved ? WITH_REN : BASE_MEMBERS;
  return (
    <Sheet title="Everyone's balance" onClose={close} right={<Button variant="ghost" size="M" onClick={close}>Done</Button>}>
      <div className="stack8 px">
        <p className="t-body-s c-secondary">Trip-wide, across all {DATA.expenses.length + (after ? 1 : 0)} expenses. Green is owed, red owes.</p>
        {people(ids).map((p) => {
          const v = state.settled ? 0 : (after || before)[p.id];
          return (
            <div key={p.id} className="balrow">
              <Avatar size="M" person={p} />
              <div className="flex1 tu-row__text">
                <div className="t-body-m-strong">{nameOf(p.id)}{p.id === 'ren' ? ' · joined tonight' : ''}</div>
                {after && !state.settled && <div className="t-caption c-tertiary">Before dinner {before[p.id] < 0 ? 'owed' : before[p.id] > 0 ? 'was owed' : 'even'} {eur(before[p.id])}</div>}
              </div>
              <span className={'t-numeric-m ' + (v < 0 ? 'c-danger' : v > 0 ? 'c-success' : 'c-secondary')}>{v < 0 ? '−' : v > 0 ? '+' : ''}{eur(v)}</span>
            </div>
          );
        })}
        {!state.expenseSaved && <p className="t-caption c-tertiary">Settle up unlocks when the last bill of the trip is in.</p>}
      </div>
    </Sheet>
  );
}

export function Photos() {
  const { dispatch } = useApp();
  const close = () => dispatch({ type: 'sheet', sheet: null });
  const imgs = ['beach', 'drinks', 'selfie', 'lisbon', 'taberna', 'ramiro'];
  return (
    <Sheet title="Trip album" onClose={close} right={<Button variant="ghost" size="M" onClick={close}>Done</Button>}>
      <div className="px stack8">
        <p className="t-body-s c-secondary">48 photos · saved from the chat by everyone</p>
        <div className="album">{imgs.map((i) => <span key={i} style={{ backgroundImage: `url(img/${i}.jpg)` }} />)}</div>
      </div>
    </Sheet>
  );
}

export function LiveMap() {
  const { dispatch } = useApp();
  const close = () => dispatch({ type: 'sheet', sheet: null });
  const rows = [['maya', '8 min away · Graça'], ['lea', 'At the house'], ['jonas', '2 min away'], ['ari', 'At the house · you']];
  return (
    <Sheet title="Live map" onClose={close} right={<Button variant="ghost" size="M" onClick={close}>Done</Button>}>
      <div className="px stack8">
        <div className="bigmap" style={{ backgroundImage: 'url(img/minimap.jpg)' }}><span className="loccard__dot" /></div>
        {rows.map(([id, sub]) => (
          <div key={id} className="balrow"><Avatar size="M" person={PEOPLE[id]} /><div className="flex1 tu-row__text"><div className="t-body-m-strong">{nameOf(id)}</div><div className="t-caption c-secondary">{sub}</div></div></div>
        ))}
      </div>
    </Sheet>
  );
}
