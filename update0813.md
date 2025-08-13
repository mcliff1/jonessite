# Upgrade plan: CRA ➜ Vite (session 2025-08-13)

This document captures what has been changed so far and all remaining steps to finish the migration from Create React App (react-scripts) to Vite.

## Current status (already done)
- Replaced CRA scripts with Vite scripts in `package.json`.
- Added Vite config `vite.config.js` using `@vitejs/plugin-react-swc`.
- Added Vite entry file `src/main.jsx` (renders `<App />`).
- Created root `index.html` (Vite serves from project root).
- Kept `App.js` as-is (no need to rename to `.jsx`).
- CRA service worker is no longer used by the entry file.

## Prerequisites
- Node.js 18+ (Vite 5 requirement).

## Install and run (after your break)
1) Install deps
   - npm install
2) Start Vite dev server
   - npm run dev
3) Build production bundle
   - npm run build (output: `dist/`)
4) Preview prod build locally
   - npm run preview

## File cleanup and structure
- Delete obsolete files:
  - src/index.js (replaced by `src/main.jsx`)
  - public/index.html (replaced by root `index.html`)
  - src/serviceWorker.js (unused with this setup)
- Keep `public/` for static assets (favicon, manifest, robots.txt, images). Vite copies these into `dist/` at the root path.
- Ensure `dist/` is git-ignored. If missing, add `dist/` to `.gitignore`.

## HTML updates (optional)
- If you use a web app manifest, add this to root `index.html` head:
  - <link rel="manifest" href="/manifest.json">
- Favicon is referenced as `/favicon.ico` (works with files under `public/`).

## Routing notes (BrowserRouter)
- `BrowserRouter` requires your host to rewrite all routes to `index.html`.
  - If hosting on Netlify, add a `_redirects` file with: `/*    /index.html   200`
  - If hosting on Vercel, configure a catch-all rewrite to `index.html`.
  - If hosting on GitHub Pages, consider switching to `HashRouter`, or use a 404.html copy strategy.

## Environment variables
- Vite exposes variables via `import.meta.env` and requires a `VITE_` prefix.
  - Example: define `VITE_API_URL` in `.env` / `.env.local`, use `import.meta.env.VITE_API_URL`.
- Remove any `process.env.*` usage coming from CRA patterns. The only CRA-specific usage seen was in `serviceWorker.js` which we are removing.

## ESLint (optional)
- Current `eslintConfig` extends `react-app` (CRA preset). Consider switching to a standard ESLint setup for Vite:
  - Install: `eslint @eslint/js eslint-plugin-react eslint-plugin-react-hooks`
  - Create `eslint.config.js` (flat config) or `.eslintrc.*` and configure React/JSX rules.

## Testing (optional)
- CRA’s `react-scripts test` was removed. To keep tests, migrate to Vitest:
  - Install: `vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event`
  - Add script: `"test": "vitest"`
  - Vitest config (vite.config.js or vitest.config.ts):
    - test.environment: `jsdom`
    - setupFiles to include `@testing-library/jest-dom` if desired.
  - Adapt tests (if any) to use Vitest APIs (`describe/it/expect`).
  - Optionally remove `src/App.test.js` if tests are not needed.

## Deployment
- Build output folder is now `dist/` (not `build/`). Update any CI/CD or hosting configs accordingly.
- If your site is served from a sub-path (e.g., `/myapp/`), set `base` in `vite.config.js`:
  - export default defineConfig({ base: "/myapp/", plugins: [react()] })
- If using a custom domain at the root (e.g., jonessite.mattcliff.net), `base` can remain default (`/`).

## Compatibility checks
- Run the app and verify:
  - Navigation and routes work on refresh and deep links (rewrite rules in place).
  - Images and static assets (from `public/` and `src/`) resolve correctly.
  - Bootstrap styles load (`import 'bootstrap/dist/css/bootstrap.min.css'` is in `src/main.jsx`).
  - Console is free of asset 404s and module resolution warnings.

## TODO checklist
- [ ] npm install
- [ ] npm run dev and verify site loads on http://localhost:5173
- [ ] Delete `src/index.js`
- [ ] Delete `public/index.html`
- [ ] Delete `src/serviceWorker.js`
- [ ] Ensure `.gitignore` includes `dist/`
- [ ] (Optional) Add `<link rel="manifest" href="/manifest.json">` to root `index.html`
- [ ] (Optional) Set up ESLint for Vite (replace CRA preset)
- [ ] (Optional) Migrate tests to Vitest or remove CRA tests
- [ ] Update deployment to publish `dist/` and configure route rewrites

## Notes on file extensions
- No need to convert `*.js` to `*.jsx`. Vite + `@vitejs/plugin-react-swc` supports JSX in `.js` by default. Keep imports like `import App from './App'` unchanged.
