// 01 Home · map with trip pins + trips sheet
import React, { useState } from 'react';
import { useApp } from '../store.jsx';
import { Avatar, IconButton, Icon, ChipButton, TripCard, SheetGrabber } from '../ds.jsx';
import { DATA, PEOPLE, person } from '../logic.js';

const PINS = [
  { id: 'trip_roskilde', label: 'Roskilde · Jul', img: 'img/roskilde.jpg', x: 213, y: 78 },
  { id: 'trip_berlin', label: 'Berlin · Mar', img: 'img/berlin.jpg', x: 274, y: 144 },
  { id: 'trip_ski', label: 'Val Thorens · Feb', img: 'img/valthorens.jpg', x: 189, y: 266 },
];

const membersOf = (t) => t.memberIds.filter((id) => PEOPLE[id]).map(person);

function cardProps(t, s) {
  switch (t.id) {
    case 'trip_lisbon':
      return { title: t.name, subtitle: '22–25 Oct · Day 4 of 4', chip: s.settled ? 'Settled' : 'Happening now', chipTone: s.settled ? 'success' : 'accent',
        photo: 'img/lisbon.jpg', people: (s.renAdded ? t.memberIdsAfterAddingRen : t.memberIds).map(person) };
    case 'trip_ski':
      return { title: 'Ski week · Val Thorens', subtitle: '13–20 Feb 2027 · in 111 days', chip: '2 open polls', chipTone: 'poll', photo: 'img/valthorens.jpg', people: membersOf(t) };
    case 'trip_roskilde':
      return { title: 'Roskilde Festival', subtitle: '27 Jun–4 Jul 2026 · €1,284 spent', chip: 'Settled', chipTone: 'success', photo: 'img/roskilde.jpg', people: membersOf(t) };
    case 'trip_berlin':
      return { title: 'Berlin weekend', subtitle: '13–15 Mar 2026 · €612 spent', chip: 'Settled', chipTone: 'success', photo: 'img/berlin.jpg', people: membersOf(t) };
    default:
      return { title: t.name };
  }
}

// Array, not object: integer-like keys ("2026") would be reordered ahead of "Upcoming".
const TABS = [
  ['Upcoming', ['trip_lisbon', 'trip_ski']],
  ['2026', ['trip_lisbon', 'trip_roskilde', 'trip_berlin']],
  ['2025', []],
];
const tabIds = (k) => TABS.find((t) => t[0] === k)[1];

export default function Home() {
  const { state, dispatch, toast } = useApp();
  const [tab, setTab] = useState('Upcoming');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const openTrip = (id) => (id === 'trip_lisbon' ? dispatch({ type: 'go', screen: 'trip' }) : toast(`${cardProps(DATA.trips.find((t) => t.id === id), state).title} opens in the full app`));

  let ids = tabIds(tab);
  if (q.trim()) {
    const n = q.trim().toLowerCase();
    ids = DATA.trips.filter((t) => (t.name + ' ' + t.destination).toLowerCase().includes(n)).map((t) => t.id);
  }
  const trips = ids.map((id) => DATA.trips.find((t) => t.id === id));

  return (
    <div className="screen home">
      <div className="home-map" aria-hidden="true">
        <img src="img/home-map.jpg" alt="" />
        <div className="home-map__shade" />
        <div className="home-map__glow" />
      </div>

      {PINS.map((p) => (
        <button key={p.id} type="button" className="pin" style={{ left: p.x, top: p.y }} onClick={() => openTrip(p.id)}>
          <span className="pin__photo" style={{ backgroundImage: `url(${p.img})` }} />
          <span className="pin__label">{p.label}</span>
        </button>
      ))}
      <button type="button" className="pin pin--now" style={{ left: 8, top: 362 }} onClick={() => openTrip('trip_lisbon')}>
        <span className="pin__photo" style={{ backgroundImage: 'url(img/lisbon.jpg)' }} />
        <span className="pin__label">Lisbon · Now</span>
      </button>

      <div className="home-top">
        <Avatar size="L" person={PEOPLE.ari} />
        <label className="home-search">
          <Icon name="search" size={18} />
          <span className="sr-only">Search trips and places</span>
          <input value={q} onChange={(e) => { setQ(e.target.value); setOpen(true); }} placeholder="Search trips & places" />
        </label>
        <IconButton variant="accent" icon="plus" label="Plan a new trip" size={44} onClick={() => toast('New trips start here · not part of this demo')} />
      </div>

      <section className={'trips-sheet' + (open ? ' is-open' : '')} aria-label="Your trips">
        <button type="button" className="grabber-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Show the map' : 'Show all trips'}>
          <SheetGrabber />
        </button>
        <div className="row-between px">
          <h1 className="t-display-m">Your trips</h1>
          <span className="t-caption c-tertiary">4 trips · 4 countries</span>
        </div>
        <div className="chips px" role="tablist">
          {TABS.map(([k]) => (
            <ChipButton key={k} role="tab" aria-selected={tab === k && !q} tone={tab === k && !q ? 'selected' : 'default'} onClick={() => { setTab(k); setQ(''); }}>{k}</ChipButton>
          ))}
        </div>
        <div className="trips-list px">
          {trips.map((t) => <TripCard key={t.id} {...cardProps(t, state)} onClick={() => openTrip(t.id)} />)}
          {!trips.length && <p className="empty t-body-s c-secondary">{q ? 'No trips match that.' : 'No trips in 2025 yet.'}</p>}
          <button type="button" className="newtrip" onClick={() => toast('New trips start here · not part of this demo')}>
            <Icon name="plus" size={18} /> Plan a new trip
          </button>
        </div>
      </section>
    </div>
  );
}
