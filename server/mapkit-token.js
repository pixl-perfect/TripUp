// Signs short-lived MapKit JS tokens (ES256 JWT) on the server.
// Needs MAPKIT_TEAM_ID, MAPKIT_KEY_ID and MAPKIT_PRIVATE_KEY (contents of the .p8 file).
// Optional MAPKIT_ORIGIN locks the token to one site, e.g. https://tripup.vercel.app
import { createSign } from 'node:crypto';

const b64url = (v) => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url');

export function mapkitConfigured(env) {
  return Boolean(env.MAPKIT_TEAM_ID && env.MAPKIT_KEY_ID && env.MAPKIT_PRIVATE_KEY);
}

export function signMapkitToken(env, ttlSeconds = 30 * 60) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'ES256', kid: env.MAPKIT_KEY_ID, typ: 'JWT' };
  const payload = { iss: env.MAPKIT_TEAM_ID, iat: now, exp: now + ttlSeconds };
  if (env.MAPKIT_ORIGIN) payload.origin = env.MAPKIT_ORIGIN;
  const body = b64url(header) + '.' + b64url(payload);
  const key = env.MAPKIT_PRIVATE_KEY.replace(/\\n/g, '\n');
  const sig = createSign('SHA256').update(body).sign({ key, dsaEncoding: 'ieee-p1363' });
  return body + '.' + sig.toString('base64url');
}
