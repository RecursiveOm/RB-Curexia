import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { localDevEmailPlugin } from './scripts/local-dev-mailer.js';

export default defineConfig({
  plugins: [react(), localDevEmailPlugin()],
  server: { host: '0.0.0.0' }
});
