import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { mapkitConfigured, signMapkitToken } from './server/mapkit-token.js';

// Serves /api/mapkit-token while developing, signed with the keys in .env.local
function mapkitToken(env) {
  return {
    name: 'mapkit-token',
    configureServer(server) {
      server.middlewares.use('/api/mapkit-token', (req, res) => {
        res.setHeader('Cache-Control', 'no-store');
        if (!mapkitConfigured(env)) { res.statusCode = 404; res.end('MapKit is not configured'); return; }
        res.setHeader('Content-Type', 'text/plain');
        res.end(signMapkitToken(env));
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), mapkitToken(loadEnv(mode, process.cwd(), 'MAPKIT_'))],
}));
