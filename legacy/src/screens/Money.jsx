// 08 Add expense · 09 Settle up · 10 All squared up
import React, { useEffect, useState } from 'react';
import { useApp, WITH_REN, billExpense, billSummary } from '../store.jsx';
import { Avatar, IconButton, Icon, SegmentItem, Button, TransferRow } from '../ds.jsx';
import { DATA, ME, PEOPLE, PLACES, eur, balancesFor, nameOf, joinNames, people, TRIP_SPEND } from '../logic.js';

function useCountUp(target, from, ms = 900) {
  const [v, setV] = useState(from);
  useEffect(() => {
    let raf, start;
    const step = (t) => {
      start = start || t;
      const k = Math.min(1, (t - start) / ms);
      setV(Math.round(from + (target - from) * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return v;
}

export function Expense() {
  const { state, dispatch, toast } = useApp();
  const bill = state.bill;
  const exp = billExpense(bill);
  const place = PLACES[state.dinner || 'r_taberna'];
  const itemsMode = bill.mode === 'items';

  // Group people by what they pay: "You, Maya, Jonas, Lea · €47.83 each"
  const groups = {};
  WITH_REN.forEach((id) => { const v = exp.shares[id] || 0; (groups[v] = groups[v] || []).push(id); });
  const groupList = Object.entries(groups).sort((a, b) => b[0] - a[0]);

  const save = () => { dispatch({ type: 'saveExpense' }); toast('Bill saved · everyone’s balance updated'); };

  return (
    <div className="screen expense">
      <header className="row gap12 px topbar">
        <IconButton variant="solid" icon="x" label="Cancel" size={36} onClick={() => dispatch({ type: 'go', screen: 'trip' })} />
        <div className="flex1 center minw0">
          <div className="t-title-m">Add expense</div>
          <div className="t-caption c-accent ellipsis">Dinner · {place.name}</div>
        </div>
        <Button variant="ghost" size="M" onClick={save}>Save</Button>
      </header>

      <div className="scroll expense-body">
        <div className="center stack8 px">
          <div className="t-numeric-xl">{eur(exp.total)}</div>
          <div className="row gap8 center-x wrap">
            <span className="paidby"><Avatar size="S" person={PEOPLE.ari} /> Paid by you</span>
            <span className="scanned"><Icon name="scan" size={14} /> Receipt scanned · 3 items</span>
          </div>
        </div>

        <div className="px">
          <div className="segment" role="tablist" aria-label="Split mode">
            <SegmentItem selected={!itemsMode} onClick={() => dispatch({ type: 'billMode', mode: 'equal' })}>Equally</SegmentItem>
            <SegmentItem selected={itemsMode} onClick={() => dispatch({ type: 'billMode', mode: 'items' })}>By item</SegmentItem>
          </div>
        </div>

        {!itemsMode ? (
          <div className="px stack8">
            <div className="itemcard">
              <div className="row-between"><span className="t-body-m-strong">Whole bill</span><span className="t-numeric-m">{eur(exp.total)}</span></div>
              <div className="row gap8">
                {people(WITH_REN).map((p) => {
                  const on = bill.items[0].splitAmong.includes(p.id) && bill.items.every((it) => it.splitAmong.includes(p.id));
                  return <AvatarToggle key={p.id} p={p} on={on} onClick={() => dispatch({ type: 'toggleEqualPerson', person: p.id })} />;
                })}
              </div>
              <div className="t-caption c-secondary">Split equally · {eur(Math.round(exp.total / WITH_REN.length))} each for {WITH_REN.length}</div>
            </div>
            <p className="hint">Not fair for everyone? Switch to <button type="button" className="link" onClick={() => dispatch({ type: 'billMode', mode: 'items' })}>By item</button> to leave people out of parts of the bill.</p>
          </div>
        ) : (
          <div className="px stack8">
            {bill.items.map((it, i) => {
              const out = WITH_REN.filter((id) => !it.splitAmong.includes(id));
              return (
                <div key={it.id} className="itemcard">
                  <div className="row-between"><span className="t-body-m-strong">{it.name}</span><span className="t-numeric-m">{eur(it.amount)}</span></div>
                  <div className="row gap8">
                    {people(WITH_REN).map((p) => (
                      <AvatarToggle key={p.id} p={p} on={it.splitAmong.includes(p.id)} pulse={state.hint && i === 1 && (p.id === 'nic' || p.id === 'ren')}
                        onClick={() => dispatch({ type: 'toggleItemPerson', item: it.id, person: p.id })} />
                    ))}
                  </div>
                  <div className={'t-caption ' + (out.length ? 'c-accent' : 'c-secondary')}>
                    {out.length
                      ? `${joinNames(out)} left out · ${eur(Math.round(it.amount / it.splitAmong.length))} each for ${it.splitAmong.length}`
                      : `Everyone · ${eur(Math.round(it.amount / it.splitAmong.length))} each`}
                  </div>
                </div>
              );
            })}
            {state.hint && <p className="hint">Tap a face to take someone off an item. Nic and Ren skipped the wine.</p>}
          </div>
        )}

        <div className="px">
          <div className="perperson" aria-live="polite">
            {groupList.map(([v, ids]) => (
              <div key={v} className="row gap8">
                <span className="tu-avatars" style={{ gap: -4 }}>{people(ids).map((p) => <Avatar key={p.id} size="S" person={p} />)}</span>
                <span className="flex1 t-body-s c-secondary ellipsis">{ids.map(nameOf).join(', ')}</span>
                <span className="t-body-s-strong">{eur(+v)} each</span>
              </div>
            ))}
          </div>
        </div>
        <div className="px"><Button onClick={save}>Save expense</Button></div>
        <div style={{ height: 24 }} />
      </div>
    </div>
  );
}

function AvatarToggle({ p, on, onClick, pulse }) {
  return (
    <button type="button" className={'avtoggle' + (on ? '' : ' is-off') + (pulse ? ' pulse' : '')} aria-pressed={on}
      aria-label={`${nameOf(p.id)} ${on ? 'included' : 'left out'}`} onClick={onClick}>
      <Avatar size="M" person={p} />
      {!on && <span className="avtoggle__x"><Icon name="x" size={12} /></span>}
    </button>
  );
}

export function Settle() {
  const { state, dispatch, toast } = useApp();
  const before = balancesFor(DATA.expenses)[ME];
  const after = balancesFor([...DATA.expenses, billExpense(state.bill)])[ME];
  const shown = useCountUp(after, before, 1100);
  const { pairwise } = billSummary(state.bill);
  const tr = state.transfers;
  const paid = tr.filter((t) => t.status === 'paid').length;
  const pending = tr.filter((t) => t.status === 'pending');
  const slow = pending.length ? pending[pending.length - 1].from : null;
  const spend = TRIP_SPEND(billExpense(state.bill).total);

  return (
    <div className="screen settle">
      <header className="row gap12 px topbar">
        <IconButton icon="chevron-left" label="Back to trip" onClick={() => dispatch({ type: 'go', screen: 'trip' })} />
        <div className="flex1 center t-title-m">Settle up</div>
        <span style={{ width: 40 }} />
      </header>
      <div className="scroll settle-body">
        <div className="px">
          <div className="balcard">
            <div className="t-label on-grad-soft">Lisbon long weekend · {eur(spend)} spent</div>
            <div className="t-body-m on-grad">{shown < 0 ? 'You owe' : "You're owed"}</div>
            <div className="t-numeric-xl on-grad">{eur(shown)}</div>
            <span className="waspill t-caption">Before dinner you {before < 0 ? 'owed' : 'were owed'} {eur(before)}</span>
          </div>
        </div>
        <div className="px">
          <button type="button" className="link t-body-s-strong" onClick={() => dispatch({ type: 'sheet', sheet: 'balances' })}>See everyone's balance</button>
        </div>
        <div className="px stack8">
          <div className="row-between">
            <span className="t-label c-tertiary">{tr.length} payments instead of {pairwise}</span>
            <span className="t-body-s-strong c-success">{paid} of {tr.length} paid</span>
          </div>
          <div className="progress"><span style={{ width: `${(paid / tr.length) * 100}%` }} /></div>
        </div>
        <div className="px stack8" aria-live="polite">
          {tr.map((t) => (
            <TransferRow key={t.id + t.status} title={`${nameOf(t.from)} → ${nameOf(t.to)}`}
              subtitle={t.status === 'paid' ? `${t.method} · ${t.time}` : 'Waiting'} amount={eur(t.amount)} status={t.status}
              people={[PEOPLE[t.from], PEOPLE[t.to]]} />
          ))}
        </div>
        <div className="px">
          {pending.length > 0 && pending.every((t) => t.from === slow) ? (
            <Button variant="secondary" icon="bell" disabled={state.nudged}
              onClick={() => { dispatch({ type: 'nudge' }); toast(`Nudge sent · ${PEOPLE[slow].name} got a one-tap pay link`); }}>
              {state.nudged ? `${PEOPLE[slow].name} is paying…` : `Nudge ${PEOPLE[slow].name}`}
            </Button>
          ) : pending.length > 0 ? (
            <p className="t-caption c-tertiary center">Payments land here live as people pay from their notification.</p>
          ) : (
            <p className="t-body-s-strong c-success center">Everyone's paid</p>
          )}
        </div>
        <div style={{ height: 48, flex: 'none' }} />
      </div>
    </div>
  );
}

const CONFETTI = [[60, 120, 'coral'], [320, 96, 'amber'], [96, 250, 'violet'], [300, 236, 'teal'], [40, 330, 'amber'], [350, 320, 'coral'], [180, 80, 'violet']];

export function Done() {
  const { state, dispatch, toast } = useApp();
  const spend = TRIP_SPEND(billExpense(state.bill).total);
  return (
    <div className="screen done">
      <div className="done-bg" aria-hidden="true" />
      {CONFETTI.map(([x, y, c], i) => <span key={i} className={'confetti c-' + c} style={{ left: x, top: y, animationDelay: i * 0.08 + 's' }} aria-hidden="true" />)}
      <div className="done-close"><IconButton icon="x" label="Close" onClick={() => dispatch({ type: 'go', screen: 'trip' })} /></div>
      <div className="done-content scroll">
        <div className="bigcheck"><span><Icon name="check" size={40} /></span></div>
        <div className="center stack4">
          <h1 className="t-display-l">All squared up!</h1>
          <p className="t-body-m c-secondary">Everyone's paid. Lisbon is officially settled.</p>
        </div>
        <div className="row gap12 center-x">
          <span className="tu-avatars" style={{ gap: -4 }}>{people(WITH_REN).map((p) => <Avatar key={p.id} size="M" person={p} />)}</span>
          <span className="t-body-s c-secondary">All 6 notified</span>
        </div>
        <div className="stats">
          <div><span className="t-numeric-m">{eur(spend).replace(/\.00$/, '')}</span><span className="t-caption c-secondary">spent</span></div>
          <div><span className="t-numeric-m">{state.transfers.length}</span><span className="t-caption c-secondary">payments</span></div>
          <div><span className="t-numeric-m">4 days</span><span className="t-caption c-secondary">together</span></div>
        </div>
        <div className="recap">
          <div className="recap__photos">
            {['beach', 'drinks', 'selfie'].map((i) => <span key={i} style={{ backgroundImage: `url(img/${i}.jpg)` }} />)}
          </div>
          <div className="row gap8">
            <div className="flex1 tu-row__text"><div className="t-body-m-strong">Your Lisbon recap</div><div className="t-caption c-secondary">52 photos · 14 places · 4 days</div></div>
            <Button variant="secondary" size="M" icon="share" onClick={() => toast('Recap link copied · ready for WhatsApp')}>Share</Button>
          </div>
        </div>
        <Button onClick={() => { dispatch({ type: 'go', screen: 'home' }); toast('New trip started with the Lisbon crew'); }}>Plan the next trip</Button>
        <div className="center"><Button variant="ghost" size="M" onClick={() => dispatch({ type: 'go', screen: 'trip' })}>Back to trip</Button></div>
      </div>
    </div>
  );
}
