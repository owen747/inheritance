import { defineConfig } from 'vite';

// Raw Three.js + vanilla TS. No framework plugins needed.
export default defineConfig({
  build: {
    target: 'es2022',
    sourcemap: true,
  },
});
