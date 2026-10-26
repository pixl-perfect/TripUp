// 04 Trip chat + 06 Live poll
import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../store.jsx';
import { Avatar, IconButton, Icon, ActionChip, PollOption, Chip, Button } from '../ds.jsx';
import { PEOPLE, PLACES, SHORT, ME, nameOf, joinNames } from '../logic.js';
import { TripTabs } from './Trip.jsx';

function Msg({ who, time, children }) {
  return (
    <div className="msg">
      <Avatar size="S" person={PEOPLE[who]} />
      <div className="msg__body">
        <div className="t-caption c-tertiary">{PEOPLE[who].name} · {time}</div>
        {children}
      </div>
    </div>
  );
}

export function PollCard() {
  const { state, dispatch } = useApp();
  const p = state.poll;
  const counts = Object.fromEntries(p.options.map((o) => [o, 0]));
  Object.values(p.votes).forEach((v) => { counts[v] = (counts[v] || 0) + 1; });
  const max = Math.max(...Object.values(counts));
  const leaders = p.options.filter((o) => counts[o] === max && max > 0);
  const voted = Object.keys(p.votes).length;
  const waiting = p.voters.filter((v) => !p.votes[v]);
  const live = p.status === 'live';
  const total = p.voters.length;

  let status;
  if (live) status = `${voted} of ${total} voted` + (waiting.length ? ` · waiting for ${joinNames(waiting)}` : '');
  else if (p.status === 'tie') status = `It's a tie · you started the poll, so you pick`;
  else if (p.tied) status = `Tie broken · you picked ${SHORT[p.winner]}`;
  else status = `Everyone voted · ${SHORT[p.winner]} wins ${p.options.map((o) => counts[o]).sort((a, b) => b - a).join('–')}`;

  return (
    <div className={'pollcard' + (live ? '' : ' is-closed')} aria-live="polite">
      <div className="row-between">
        <span className="row gap8 t-caption c-secondary"><Icon name="poll" size={16} /> Poll by Ari</span>
        {live ? (
          <span className="livepill"><span className="dot" /> Live · closes 19:45</span>
        ) : (
          <span className="livepill is-done"><Icon name="check" size={14} /> {p.status === 'tie' ? 'Tie' : 'Closed 19:04'}</span>
        )}
      </div>
      <h3 className="t-display-m">{p.question}</h3>
      <div className="row gap8">
        <span className="tu-avatars" style={{ gap: -4 }}>
          {Object.keys(p.votes).map((id) => <Avatar key={id} size="S" person={PEOPLE[id]} className="pop-in" />)}
        </span>
        <span className="t-body-s c-secondary">{status}</span>
      </div>
      <div className="pollcard__opts">
        {p.options.map((o) => {
          const who = p.voters.filter((v) => p.votes[v] === o).map(nameOf);
          const isLead = live ? leaders.length === 1 && leaders[0] === o : p.winner === o;
          return (
            <PollOption key={o} name={PLACES[o].name} votes={counts[o]} percent={(counts[o] / total) * 100}
              voters={who.join(', ')} leading={isLead} leadingLabel={live ? 'Leading' : 'Winner'}
              mine={p.votes[ME] === o} disabled={!live}
              onClick={() => dispatch({ type: 'vote', user: ME, option: o })} />
          );
        })}
      </div>
      {live && !p.votes[ME] && <p className="hint">Tap an option to vote. You can change it until it closes.</p>}
      {live && leaders.length > 1 && voted > 0 && <p className="t-caption c-secondary">Tied between {leaders.map((l) => SHORT[l]).join(' and ')}</p>}
      {p.status === 'tie' && (
        <div className="row gap8 wrap">
          {p.tied.map((o) => <Button key={o} size="M" variant="secondary" onClick={() => dispatch({ type: 'breakTie', option: o })}>Pick {SHORT[o]}</Button>)}
        </div>
      )}
      {p.status === 'closed' && (
        <Button size="M" variant="secondary" icon="calendar" onClick={() => dispatch({ type: 'go', screen: 'trip' })}>Added to 20:30 · See itinerary</Button>
      )}
    </div>
  );
}

export default function Chat() {
  const { state, dispatch, toast } = useApp();
  const [text, setText] = useState('');
  const end = useRef(null);
  const go = (screen) => dispatch({ type: 'go', screen });
  const p = state.poll;
  const leaVoted = p && p.votes.lea;

  useEffect(() => { end.current && end.current.scrollIntoView({ block: 'end', behavior: 'smooth' }); }, [!!p, state.myMessages.length, leaVoted, p && p.status]);

  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'say', text: text.trim(), t: '18:39' });
    setText('');
  };
  const openPoll = () => (p ? toast('One poll at a time · this one is still live') : dispatch({ type: 'sheet', sheet: 'createPoll' }));

  return (
    <div className="screen chat">
      <header className="chat-head">
        <div className="row gap12 px">
          <IconButton icon="chevron-left" label="Back to trips" onClick={() => go('home')} />
          <div className="flex1 minw0">
            <div className="t-body-m-strong ellipsis">Lisbon long weekend</div>
            <div className="t-caption c-secondary ellipsis">{state.renAdded ? 6 : 5} friends · Maya and Lea sharing location</div>
          </div>
          <IconButton icon="users" label="Add people" onClick={() => dispatch({ type: 'sheet', sheet: 'addPeople' })} />
        </div>
        <div className="px"><TripTabs active="chat" onChange={go} /></div>
      </header>

      <div className="messages scroll">
        <Msg who="jonas" time="18:20">
          <div className="photos2">
            <span style={{ backgroundImage: 'url(img/drinks.jpg)' }} role="img" aria-label="Photo from LX Factory" />
            <span style={{ backgroundImage: 'url(img/selfie.jpg)' }} role="img" aria-label="Selfie at Belém" />
          </div>
          <span className="savedpill"><Icon name="album" size={14} /> Saved to album · Day 4</span>
        </Msg>
        <Msg who="maya" time="18:31">
          <div className="loccard">
            <div className="loccard__map" style={{ backgroundImage: 'url(img/minimap.jpg)' }}><span className="loccard__dot" /></div>
            <div className="row gap12 loccard__row">
              <Icon name="location" size={16} className="c-accent" />
              <div className="tu-row__text">
                <div className="t-body-s-strong">Live location</div>
                <div className="t-caption c-secondary">8 min away · sharing for 1 h</div>
              </div>
            </div>
          </div>
        </Msg>
        <Msg who="lea" time="18:36"><div className="bubble">Anyone have a dinner idea? Starving</div></Msg>
        {state.renAdded && (
          <>
            <div className="sysline t-caption c-tertiary">Ari added Ren to the trip · 18:35</div>
            <Msg who="ren" time="18:37"><div className="bubble">Hi all! Thanks for having me</div></Msg>
          </>
        )}
        <div className="mine"><div className="bubble bubble--mine">On it, making a poll</div></div>
        {state.myMessages.map((m, i) => <div key={i} className="mine"><div className="bubble bubble--mine">{m.text}</div></div>)}
        {p && <PollCard />}
        {leaVoted && (
          <Msg who="lea" time="18:52"><div className="bubble">Taberna!! Been wanting to go</div></Msg>
        )}
        {p && p.status === 'closed' && (
          <div className="sysline t-caption c-tertiary">Dinner's decided · {PLACES[p.winner].name} added to 20:30</div>
        )}
        <div ref={end} style={{ height: 8 }} />
      </div>

      <div className="quick scroll-x" role="toolbar" aria-label="Quick actions">
        <ActionChip icon="poll" active={!p} onClick={openPoll}>Poll</ActionChip>
        <ActionChip icon="camera" onClick={() => toast('Camera opens here · photos go to the trip album')}>Photo</ActionChip>
        <ActionChip icon="location" onClick={() => toast('Sharing your location for 1 h')}>Location</ActionChip>
        <ActionChip icon="receipt" onClick={() => (state.dinner ? go('expense') : toast('Add an expense once dinner is decided'))}>Expense</ActionChip>
        <ActionChip icon="settle" onClick={() => (state.expenseSaved ? go('settle') : dispatch({ type: 'sheet', sheet: 'balances' }))}>Settle up</ActionChip>
      </div>
      <form className="composer" onSubmit={send}>
        <label className="flex1">
          <span className="sr-only">Message the group</span>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Message the group" />
        </label>
        <IconButton variant="accent" icon="send" label="Send" type="submit" />
      </form>
    </div>
  );
}
