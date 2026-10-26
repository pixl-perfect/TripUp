// Vercel function: GET /api/mapkit-token → a 30-minute MapKit JS token.
// Set MAPKIT_TEAM_ID, MAPKIT_KEY_ID and MAPKIT_PRIVATE_KEY in the Vercel project settings.
import { mapkitConfigured, signMapkitToken } from '../server/mapkit-token.js';

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!mapkitConfigured(process.env)) {
    res.statusCode = 404;
    res.end('MapKit is not configured');
    return;
  }
  res.setHeader('Content-Type', 'text/plain');
  res.end(signMapkitToken(process.env));
}
