import { defineConfig } from 'vite';

// Raw Three.js + vanilla TS. No framework plugins needed.
export default defineConfig({
  // Relative asset paths so the build works at any host subpath
  // (e.g. GitHub Pages project site: https://user.github.io/<repo>/).
  base: './',
  build: {
    target: 'es2022',
    sourcemap: true,
  },
});
