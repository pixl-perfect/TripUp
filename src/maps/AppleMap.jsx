// Real Apple Maps (MapKit JS) behind the design's own pins.
// The map is locked to a view that lines up with the design's artwork, so the
// design's pins and labels stay where they were drawn. Until a token is
// available (see server/mapkit-token.js) the design's artwork shows instead.
import React, { useEffect, useRef, useState } from 'react';

const MAPKIT_SRC = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
const JWT = /^[\w-]+\.[\w-]+\.[\w-]+$/;

let loading = null;
let failed = false;
const failListeners = new Set();

async function fetchToken() {
  const r = await fetch('/api/mapkit-token', { cache: 'no-store' });
  const t = r.ok ? (await r.text()).trim() : '';
  return JWT.test(t) ? t : null;
}

function loadMapKit() {
  if (loading) return loading;
  loading = (async () => {
    if (!(await fetchToken())) return null;
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = MAPKIT_SRC; s.crossOrigin = 'anonymous';
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
    const { mapkit } = window;
    mapkit.init({ authorizationCallback: (done) => fetchToken().then((t) => t && done(t)) });
    mapkit.addEventListener('error', () => { failed = true; failListeners.forEach((f) => f()); });
    return mapkit;
  })().catch(() => null);
  return loading;
}

// Web Mercator in MapKit's map units (0–1 across the world)
const mx = (lng) => (lng + 180) / 360;
const my = (lat) => 0.5 - Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) / (2 * Math.PI);
const EARTH = 40075016.686;

// Each view: real places and where the design drew them (px), or one point plus metres per pixel.
const VIEWS = {
  // Home: the design's map image is an Apple Maps screenshot; these are city dots on it.
  europe: { anchors: [
    [51.5072, -0.1276, 155, 176], [40.4168, -3.7038, 91.5, 389], [52.52, 13.405, 316.5, 150],
    [41.9028, 12.4964, 331, 357.5], [48.8566, 2.3522, 184.5, 228], [59.9139, 10.7522, 268.5, 18.5],
  ] },
  // Live map: landmarks on the design's Apple Maps screenshot of central Lisbon.
  lisbon: { anchors: [
    [38.7139, -9.1335, 194, 316], [38.7142, -9.1411, 84, 311], [38.7209, -9.1356, 163, 204],
    [38.711, -9.1278, 274, 366], [38.7158, -9.1408, 101, 265],
  ] },
  // Chat location cards: Maya near Santa Luzia, Ari at the house in Graça.
  maya: { at: [38.7118, -9.1302, 125, 43], mpp: 2.5 },
  me: { at: [38.7163, -9.1316, 158, 44], mpp: 2.5 },
};

function visibleRect(view, w, h) {
  let s, ox, oy;
  if (view.at) {
    const [lat, lng, x, y] = view.at;
    s = (EARTH * Math.cos((lat * Math.PI) / 180)) / view.mpp; // px per map unit
    ox = mx(lng) - x / s; oy = my(lat) - y / s;
  } else {
    // Least-squares fit of one scale + offset (no rotation) from places to pixels
    const pts = view.anchors.map(([lat, lng, x, y]) => ({ u: mx(lng), v: my(lat), x, y }));
    const avg = (k) => pts.reduce((a, p) => a + p[k], 0) / pts.length;
    const [u0, v0, x0, y0] = ['u', 'v', 'x', 'y'].map(avg);
    let num = 0, den = 0;
    pts.forEach((p) => { num += (p.u - u0) * (p.x - x0) + (p.v - v0) * (p.y - y0); den += (p.u - u0) ** 2 + (p.v - v0) ** 2; });
    s = num / den;
    ox = u0 - x0 / s; oy = v0 - y0 / s;
  }
  return [ox, oy, w / s, h / s];
}

function AppleMap({ view, theme, width, height, children }) {
  const el = useRef(null);
  const map = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    const onFail = () => { setReady(false); };
    failListeners.add(onFail);
    loadMapKit().then((mapkit) => {
      if (!alive || !mapkit || failed || !el.current) return;
      const m = new mapkit.Map(el.current, {
        isScrollEnabled: false, isZoomEnabled: false, isRotationEnabled: false,
        showsCompass: mapkit.FeatureVisibility.Hidden, showsScale: mapkit.FeatureVisibility.Hidden,
        showsZoomControl: false, showsMapTypeControl: false, showsUserLocationControl: false,
      });
      const r = visibleRect(VIEWS[view], el.current.clientWidth, el.current.clientHeight);
      m.visibleMapRect = new mapkit.MapRect(...r);
      map.current = m;
      setReady(true);
    });
    return () => { alive = false; failListeners.delete(onFail); if (map.current) { map.current.destroy(); map.current = null; } };
  }, [view]);

  useEffect(() => {
    const m = map.current, mapkit = window.mapkit;
    if (m && mapkit) m.colorScheme = theme === 'light' ? mapkit.Map.ColorSchemes.Light : mapkit.Map.ColorSchemes.Dark;
  }, [theme, ready]);

  const box = { position: 'absolute', left: 0, top: 0, width: width || '100%', height: height || '100%' };
  return (
    <div style={box}>
      {children}
      <div ref={el} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', visibility: ready ? 'visible' : 'hidden' }} />
    </div>
  );
}

window.TripUpMaps = { AppleMap };
export default AppleMap;
