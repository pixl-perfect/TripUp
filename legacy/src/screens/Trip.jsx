// 02 Trip overview (+ 07 Itinerary updated, once the poll has closed)
import React from 'react';
import { useApp, WITH_REN, BASE_MEMBERS } from '../store.jsx';
import { Avatar, IconButton, Icon, SegmentItem, ItineraryItem, Button } from '../ds.jsx';
import { PLACES, PLACE_IMG, people, eur, balancesFor, DATA, ME } from '../logic.js';
import { billExpense } from '../store.jsx';

export function TripHero({ onBack }) {
  const { toast } = useApp();
  return (
    <>
      <div className="hero" aria-hidden="true">
        <img src="img/lisbon.jpg" alt="" />
        <div className="hero__shade" />
      </div>
      <div className="hero-bar">
        <IconButton icon="chevron-left" label="Back to trips" onClick={onBack} />
        <span className="flex1" />
        <IconButton icon="share" label="Share trip" onClick={() => toast('Invite link copied')} />
        <IconButton icon="more" label="More" onClick={() => toast('Trip settings · not part of this demo')} />
      </div>
      <div className="hero-title">
        <div className="t-label c-accent-on-photo">Day 4 of 4 · Last night</div>
        <h1 className="t-display-l on-photo">Lisbon long weekend</h1>
        <div className="t-body-s on-photo">22–25 Oct · Casa in Graça</div>
      </div>
    </>
  );
}

export function TripTabs({ active, unread, onChange }) {
  return (
    <div className="segment" role="tablist">
      <SegmentItem selected={active === 'trip'} onClick={() => onChange('trip')}>Overview</SegmentItem>
      <SegmentItem selected={active === 'chat'} onClick={() => onChange('chat')}>
        Chat {unread > 0 && active !== 'chat' && <span className="badge" aria-label={`${unread} unread`}>{unread}</span>}
      </SegmentItem>
    </div>
  );
}

export default function Trip() {
  const { state, dispatch, toast } = useApp();
  const members = state.renAdded ? WITH_REN : BASE_MEMBERS;
  const go = (screen) => dispatch({ type: 'go', screen });
  const place = state.dinner && PLACES[state.dinner];
  const bal = state.settled ? 0 : state.expenseSaved ? balancesFor([...DATA.expenses, billExpense(state.bill)])[ME] : balancesFor(DATA.expenses)[ME];
  const counts = state.poll && state.poll.status === 'closed'
    ? state.poll.options.map((o) => Object.values(state.poll.votes).filter((v) => v === o).length).sort((a, b) => b - a).join('–')
    : '';

  return (
    <div className="screen trip">
      <TripHero onBack={() => go('home')} />
      <div className="trip-content scroll">
        <div className="row px members">
          <span className="tu-avatars" style={{ gap: -4 }}>
            {people(members).map((p) => <Avatar key={p.id} size="M" person={p} className={p.id === 'ren' ? 'pop-in' : ''} />)}
          </span>
          <IconButton variant="solid" icon="plus" label="Add people" size={34} onClick={() => dispatch({ type: 'sheet', sheet: 'addPeople' })} className="addbtn" />
          <span className="flex1" />
          <span className="t-body-s c-secondary">{members.length} going</span>
        </div>

        <div className="px"><TripTabs active="trip" unread={state.chatUnread} onChange={go} /></div>

        <div className="row-between px">
          <span className="t-label c-tertiary">Today · Sun 25 Oct</span>
          <button type="button" className="link t-body-s-strong" onClick={() => dispatch({ type: 'sheet', sheet: 'itinerary' })}>Full itinerary</button>
        </div>

        <div className="itin px">
          {!place && <ItineraryItem state="done" time="15:00" title="Belém Tower" subtitle="Done · 1h 20m" />}
          <ItineraryItem state="now" time="17:30" title="Back to the house" subtitle="Now · getting ready" />
          {place ? (
            <div className="itin-dinner slide-in">
              <span className="tu-itin__time c-poll">20:30</span>
              <div className="itin-dinner__card">
                <div className="row gap12">
                  <span className="photo56" style={{ backgroundImage: `url(${PLACE_IMG[state.dinner]})` }} />
                  <div className="tu-row__text">
                    <div className="tu-row__title">{place.name}</div>
                    <div className="tu-row__sub">Dinner · picked by poll {counts}</div>
                  </div>
                </div>
                <div className="row gap8">
                  <Button variant="secondary" size="M" icon="tram" onClick={() => toast('Opening directions in Apple Maps')} className="flex1">Directions · 12 min</Button>
                  <Button variant="primary" size="M" icon="receipt" onClick={() => go('expense')} className="flex1">
                    {state.expenseSaved ? 'Bill added' : 'Add the bill'}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <ItineraryItem state="undecided" time="20:30" title="Dinner" subtitle="Not decided yet" chip={state.poll ? 'Poll live' : 'Start a poll'}
              onClick={() => { if (state.poll) go('chat'); else { go('chat'); setTimeout(() => dispatch({ type: 'sheet', sheet: 'createPoll' }), 250); } }} />
          )}
          <ItineraryItem state="planned" time="23:00" title="Drinks in Bairro Alto" subtitle="Planned by Lea" />
        </div>

        <div className="tiles px">
          <button type="button" className="tile" onClick={() => (state.expenseSaved ? go('settle') : dispatch({ type: 'sheet', sheet: 'balances' }))}>
            <span className={'tile__icon ' + (bal < 0 ? 'is-danger' : 'is-success')}><Icon name="euro" size={16} /></span>
            <span className="t-caption c-secondary">{bal < 0 ? 'You owe' : bal > 0 ? "You're owed" : 'All even'}</span>
            <span className={'t-body-s-strong ' + (bal < 0 ? 'c-danger' : 'c-success')}>{eur(bal)}</span>
          </button>
          <button type="button" className="tile" onClick={() => dispatch({ type: 'sheet', sheet: 'photos' })}>
            <span className="tile__icon is-poll"><Icon name="image" size={16} /></span>
            <span className="t-caption c-secondary">Photos</span>
            <span className="t-body-s-strong">48 shared</span>
          </button>
          <button type="button" className="tile" onClick={() => dispatch({ type: 'sheet', sheet: 'livemap' })}>
            <span className="tile__icon is-success"><Icon name="location" size={16} /></span>
            <span className="t-caption c-secondary">Live map</span>
            <span className="t-body-s-strong">4 sharing</span>
          </button>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}
