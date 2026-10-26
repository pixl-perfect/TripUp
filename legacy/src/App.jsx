import React, { useEffect, useState } from 'react';
import { AppProvider, useApp, clockFor, stepFor } from './store.jsx';
import { StatusBar, HomeIndicator, Toast, NotificationBanner, Icon } from './ds.jsx';
import { PLACES, SHORT, ME } from './logic.js';
import Home from './screens/Home.jsx';
import Trip from './screens/Trip.jsx';
import Chat from './screens/Chat.jsx';
import { Expense, Settle, Done } from './screens/Money.jsx';
import { AddPeople, CreatePoll, FullItinerary, Balances, Photos, LiveMap } from './screens/Sheets.jsx';

const SCREENS = { home: Home, trip: Trip, chat: Chat, expense: Expense, settle: Settle, done: Done };
const SHEETS = { addPeople: AddPeople, createPoll: CreatePoll, itinerary: FullItinerary, balances: Balances, photos: Photos, livemap: LiveMap };
const ON_IMAGE = { trip: true };

const STEPS = [
  { n: 1, frames: '01', title: 'Open TripUp', body: 'Ari lands on Home: every trip is a pin on the map. Tap Lisbon.' },
  { n: 2, frames: '02 · 03', title: 'Add Ren to the trip', body: 'Tap + next to the avatars, then Add on Ren.' },
  { n: 3, frames: '04 · 05', title: 'Start a dinner poll', body: 'Switch to Chat and tap Poll. Three nearby places are pre-filled. Send it.' },
  { n: 4, frames: '06', title: 'Votes come in live', body: 'Tap your pick. The others vote in real time and the lead changes hands.' },
  { n: 5, frames: '07', title: 'Winner lands in the itinerary', body: 'When the last vote is in, Dinner fills itself. Tap the push or See itinerary.' },
  { n: 6, frames: '08', title: 'Log the bill', body: 'Tap Add the bill. Switch to By item and take Nic and Ren off the wine.' },
  { n: 7, frames: '09', title: 'Settle up in 5 payments', body: 'Balances update for everyone. Payments land live. Nudge Lea for the last two.' },
  { n: 8, frames: '10', title: 'All squared up', body: 'Everyone gets the same confirmation, plus a recap to share.' },
];

function Overlays() {
  const { state, dispatch } = useApp();
  const p = state.poll;
  const counts = p ? p.options.map((o) => [o, Object.values(p.votes).filter((v) => v === o).length]) : [];
  const total = p ? p.voters.length : 1;
  const waiting = p ? p.voters.filter((v) => !p.votes[v]) : [];
  return (
    <>
      {state.showIsland && p && (
        <button type="button" className="island" onClick={() => dispatch({ type: 'go', screen: 'chat' })} aria-label="Live poll activity">
          <div className="row-between">
            <span className="island__app"><Icon name="map-pin" size={18} /></span>
            <span className="island__live"><span className="dot" /> Closes 19:45</span>
          </div>
          <div className="island__q">{p.question}</div>
          <div className="island__sub">Ari’s poll · {Object.keys(p.votes).length} of {total} voted · waiting for {waiting.map((w) => (w === ME ? 'you' : w[0].toUpperCase() + w.slice(1))).join(', ')}</div>
          <div className="row gap12">
            <div className="flex1">
              <div className="island__bar">
                {[...counts].sort((a, b) => b[1] - a[1]).filter(([, c]) => c).map(([o, c]) => <span key={o} style={{ flex: c }} />)}
                {waiting.length > 0 && <span className="is-empty" style={{ flex: waiting.length }} />}
              </div>
              <div className="island__legend">{[...counts].sort((a, b) => b[1] - a[1]).map(([o, c], i) => <span key={o} className={i === 0 ? 'lead' : ''}>{i ? ' · ' : ''}{SHORT[o]} {c}</span>)}</div>
            </div>
            <span className="island__vote">Vote</span>
          </div>
        </button>
      )}
      {state.banner && (
        <div className="banner-slot">
          <NotificationBanner title={state.banner.title} onClick={() => { dispatch({ type: 'banner', banner: null }); dispatch({ type: 'go', screen: 'trip' }); dispatch({ type: 'toast', text: `Dinner's decided · added to 20:30` }); }}>
            {state.banner.body} · <strong>{state.banner.cta}</strong>
          </NotificationBanner>
        </div>
      )}
      {state.toast && <div className="toast-slot" key={state.toast.id}><Toast>{state.toast.text}</Toast></div>}
    </>
  );
}

function Phone() {
  const { state } = useApp();
  const Screen = SCREENS[state.screen];
  const SheetC = state.sheet && SHEETS[state.sheet];
  const onImage = ON_IMAGE[state.screen] || state.screen === 'done';

  // Push banner hides itself after a while if nobody taps it.
  const { dispatch } = useApp();
  useEffect(() => {
    if (!state.banner) return;
    const t = setTimeout(() => dispatch({ type: 'banner', banner: null }), 7000);
    return () => clearTimeout(t);
  }, [state.banner]);

  return (
    <div className="phone" data-theme={state.theme}>
      <div className="phone__screen">
        <div className="screen-host" key={state.screen}><Screen /></div>
        <div className="statusbar-slot"><StatusBar onImage={onImage && state.theme === 'light'} time={clockFor(state)} /></div>
        {SheetC && <SheetC />}
        <Overlays />
        <div className="homeind-slot"><HomeIndicator /></div>
      </div>
    </div>
  );
}

function Panel() {
  const { state, dispatch } = useApp();
  const step = stepFor(state);
  return (
    <aside className="panel">
      <div className="panel__brand"><span className="applogo">T</span><div><div className="panel__name">TripUp</div><div className="panel__sub">Coded prototype · iPhone 15 · 393 × 852</div></div></div>
      <p className="panel__intro">It's the last night of a group trip to Lisbon. Ari sorts out dinner, the bill and settling up. Follow the steps, or jump to one.</p>
      <ol className="steps">
        {STEPS.map((s) => (
          <li key={s.n} className={s.n === step ? 'is-now' : s.n < step ? 'is-done' : ''}>
            <button type="button" onClick={() => dispatch({ type: 'jump', step: s.n })}>
              <span className="steps__n">{s.n < step ? <Icon name="check" size={14} /> : s.n}</span>
              <span className="steps__text">
                <span className="steps__title">{s.title} <span className="steps__frame">Figma {s.frames}</span></span>
                {s.n === step && <span className="steps__body">{s.body}</span>}
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div className="panel__actions">
        <button type="button" className="pbtn" onClick={() => dispatch({ type: 'reset' })}>Restart</button>
        <button type="button" className="pbtn" onClick={() => dispatch({ type: 'theme' })}>{state.theme === 'dark' ? 'Light mode' : 'Dark mode'}</button>
      </div>
      <p className="panel__foot">Mock data, simulated real time. Other people's votes and payments arrive on a timer.</p>
    </aside>
  );
}

export default function App() {
  const [panel, setPanel] = useState(true);
  return (
    <AppProvider>
      <div className="stage">
        <Phone />
        <Panel />
      </div>
    </AppProvider>
  );
}
