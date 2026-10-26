# TripUp · coded prototype

Interactive prototype of the TripUp redesign (Lisbon scenario), built from the Figma hi-fi screens 01–10 and the TripUp design system tokens. iPhone 15, 393 × 852.

## Run it

```bash
npm install
npm run dev   # local
npm run build  # static site in dist/
```

## Deploy (public URL)

- **Vercel**: import the folder, framework preset "Vite". No settings needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- Or drag the built `dist/` folder onto app.netlify.com/drop.

## What's in here

The prototype is the Claude Design file "TripUp hi-fi" (its interactive prototype artboard), run inside this app:

- `src/design/prototype.dc.html` · the design's prototype (images point at `public/design/`), with local changes: Maya pays the dinner so Ari ends up owing and pays in the app, Apple Maps screenshots on the home and live maps with pins moved to their real places, no itinerary pins on the live map, centred pins, a story clock (status bar and receipts follow the evening), live map distances matching the pins, and a correct trip and country count
- `src/design/dc.jsx` · a small loader that renders the design file with React: its markup, `{{…}}` holes, `sc-if` / `sc-for`, and its logic class
- `src/design/bundle.js`, `bundle.css`, `tokens.css` · the TripUp design system components and tokens from the same design (status bar shows a Wi-Fi symbol)
- `src/App.jsx`, `src/app.css` · the presentation: phone frame, demo panel with the 8 scenario steps and a closing congrats step, and restart
- `public/design/` · photos and payment logos from the design
- `legacy/` · the previous hand-coded prototype, kept for reference and not built

## Apple Maps

The home map, live map and the location cards in chat use real Apple Maps (MapKit JS) when a token is available, and show the design's own map artwork otherwise. Each map is locked to a view that lines up with the design, so the design's pins stay where they were drawn. You can't pan or zoom it.

Tokens are signed on the server and last 30 minutes. The private key never reaches the browser.

1. In your Apple Developer account, create a Maps ID and a key with MapKit JS enabled. Download the .p8 file.
2. Locally: copy `.env.example` to `.env.local` and fill in the team ID, key ID and the .p8 contents. Restart `npm run dev`.
3. On Vercel: add the same `MAPKIT_*` values under Project Settings → Environment Variables. `api/mapkit-token.js` serves the tokens. Set `MAPKIT_ORIGIN` to the site's address.

Files: `src/maps/AppleMap.jsx` (map + fallback), `server/mapkit-token.js` (signing), `api/mapkit-token.js` (Vercel), `vite.config.js` (same route while developing).

To update the prototype after changing it in Claude Design, replace `src/design/prototype.dc.html` with the new `Prototype.dc.html` and redo the local changes listed above (and download any new images into `public/design/`).

On desktop the phone sits next to a demo panel with the 8 scenario steps . The current step follows what you do in the prototype; clicking a step jumps there using the design's start presets. On a phone the app fills the screen.
