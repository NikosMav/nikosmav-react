# Nikos Mavridis – Personal Website (React + Vite)

This repo contains the source code for my personal website, rebuilt with **React 18** and **Vite**. The site started life as a single‑page vanilla‑HTML project; migrating to Vite + React gives me reusable components, lightning‑fast HMR during development, and a one‑click GitHub Pages deploy.

## Local development

```bash
npm install
npm run dev           # Vite dev server with Hot‑Module Reload
```

## Production build & preview

```bash
npm run build         # outputs static files to /dist
npm run preview       # serves the production build locally
```

## Continuous deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and publishes `dist/` to **GitHub Pages** on every push to `main`.

▶ Live site: [https://nikosmav.github.io/nikosmav-react/](https://nikosmav.github.io/nikosmav-react/)

---

### Stack

- **React 18** – UI components
- **Vite** – dev server & bundler
- **ESLint** – default React/Vite rules

Feel free to open an issue or PR! 🚀
