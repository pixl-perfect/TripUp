import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { loadDesignComponent } from './design/dc.jsx';
import source from './design/prototype.dc.html?raw';

const Prototype = loadDesignComponent(source);
const W = 393, H = 852;

// start: the design's own start presets (the "Start step" tweak in Claude Design)
const STEPS = [
  { n: 1, start: 'home', title: 'Open TripUp', body: 'Ari lands on Home: every trip is a pin on the map. Tap Lisbon.' },
  { n: 2, start: 'trip', title: 'Add Ren to the trip', body: 'Tap + next to the avatars, then Add on Ren.' },
  { n: 3, start: 'chat', title: 'Start a dinner poll', body: 'In Chat, tap Poll. Three nearby places are pre-filled. Send it.' },
  { n: 4, start: 'livePoll', title: 'Votes come in live', body: 'Tap your pick. The others vote in real time and the lead changes hands.' },
  { n: 5, start: 'itinerary', title: 'Winner lands in the itinerary', body: 'When the last vote is in, Dinner fills itself. Tap See itinerary.' },
  { n: 6, start: 'expense', title: 'Log the bill', body: 'Maya paid at the restaurant. Add the bill from the dinner card, split by item and take Nic and Ren off the wine.' },
  { n: 7, start: 'settle', title: 'Settle up payments', body: 'Everyone owes Maya now. The others pay live; then pay your share with Apple Pay and Face ID.' },
  { n: 8, start: 'squared', title: 'All squared up', body: 'Your payment is the last one in. Everyone gets the same confirmation, plus a recap to share.' },
];

// Which demo step the prototype's current state belongs to
function stepFor(s) {
  if (!s) return 1;
  if (s.screen === 'squared') return 8;
  if (['settle', 'pay', 'payMethod'].includes(s.sheet) || (s.saved && s.screen === 'expenses')) return 7;
  if (['expense', 'scan', 'manual', 'expenses'].includes(s.screen) || ['whoSharing', 'whoPaid', 'expenseChoice'].includes(s.sheet)) return 6;
  if (s.poll === 'closed') return 5;
  if (s.poll === 'live') return 4;
  if (s.screen === 'chat' || ['newPoll', 'addOption', 'pollCloses', 'customDeadline'].includes(s.sheet)) return 3;
  if (s.screen !== 'home' && s.screen !== 'search') return 2;
  return 1;
}

function Phone({ run, start, onState }) {
  const screen = useRef(null);
  const [scale, setScale] = useState(1);
  // On a real phone the frame fills the screen; scale the 393 × 852 design to fit.
  useLayoutEffect(() => {
    const el = screen.current;
    const fit = () => setScale(Math.min(el.clientWidth / W, el.clientHeight / H));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className="phone" data-theme="dark">
      <div className="phone__screen" ref={screen}>
        <div className="phone__fit" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          <Prototype key={run} start={start} theme="dark" onState={onState} />
        </div>
      </div>
    </div>
  );
}

function Panel({ step, onJump, onReset }) {
  const [mode, setMode] = useState('guided');
  const guided = mode === 'guided';
  return (
    <aside className="panel">
      <div className="panel__brand"><span className="applogo"><Pin /></span><div><div className="panel__name">TripUp</div><div className="panel__sub">Coded prototype · iPhone 15 · 393 × 852</div></div></div>
      <div className="modes" role="group" aria-label="Demo mode">
        <button type="button" aria-pressed={guided} onClick={() => setMode('guided')}>Guided demo</button>
        <button type="button" aria-pressed={!guided} onClick={() => setMode('free')}>Free mode</button>
      </div>
      {guided ? (
        <p className="panel__intro">It's the last night of a group trip to Lisbon. Ari sorts out dinner, the bill and settling up. Follow the steps, or jump to one.</p>
      ) : (
        <p className="panel__intro">It's the last night of a group trip to Lisbon. Tap around and explore the app however you like.</p>
      )}
      {guided && <ol className="steps">
        {STEPS.map((s) => (
          <li key={s.n} className={s.n === step ? 'is-now' : s.n < step ? 'is-done' : ''}>
            <button type="button" onClick={() => onJump(s)}>
              <span className="steps__n">{s.n < step ? <Check /> : s.n}</span>
              <span className="steps__text">
                <span className="steps__title">{s.title}</span>
                {s.n === step && <span className="steps__body">{s.body}</span>}
              </span>
            </button>
          </li>
        ))}
        {step > STEPS.length && (
          <li className="is-now">
            <div className="steps__item">
              <span className="steps__n"><Check /></span>
              <span className="steps__text">
                <span className="steps__title">Congrats, you're done!</span>
                <span className="steps__body">Feel free to explore the rest of the app.</span>
              </span>
            </div>
          </li>
        )}
      </ol>}
      <div className="panel__actions">
        <button type="button" className="pbtn" onClick={onReset}>Restart</button>
      </div>
      <p className="panel__foot">Mock data, simulated real time. Other people's votes and payments arrive on a timer.</p>
    </aside>
  );
}

function Pin() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>;
}

function Check() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>;
}

export default function App() {
  const [run, setRun] = useState(0);
  const [start, setStart] = useState('home');
  const [step, setStep] = useState(1);
  const [screen, setScreen] = useState('home');
  const last = STEPS.length;

  // The guide only moves forward within a run; jumping or restarting resets it.
  // After the last step, leaving "All squared up" finishes the demo.
  const onState = useCallback((s) => {
    setScreen(s.screen);
    setStep((prev) => (prev >= last && s.screen !== 'squared' ? last + 1 : Math.max(prev, stepFor(s))));
  }, [last]);
  const restartAt = (s) => { setStart(s.start); setStep(s.n); setRun((r) => r + 1); };

  // Or a few seconds on "All squared up" does.
  useEffect(() => {
    if (step !== last || screen !== 'squared') return;
    const t = setTimeout(() => setStep(last + 1), 4000);
    return () => clearTimeout(t);
  }, [step, screen, last]);


  return (
    <div className="stage">
      <Phone run={run} start={start} onState={onState} />
      <Panel step={step} onJump={restartAt} onReset={() => restartAt(STEPS[0])} />
    </div>
  );
}
