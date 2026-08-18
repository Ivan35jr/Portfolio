# Chin Jin Ren — Software Developer Portfolio
Vercel link: https://portfolio-beta-mauve-30.vercel.app/

A single-page portfolio built with **React + Vite + TypeScript**, styled after your
reference design (blue `#263BAA` / light blue `#D0E6FD` / cream `#FFF4D6` palette).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  data/portfolio.ts     # <- all your content lives here (name, bio, education,
                            projects, skills, experience). Edit this file first.
  components/
    Navbar.tsx / .css    # sticky nav with "★ Malaysia ★" badge + </> icon
    Hero.tsx   / .css    # "Software Developer / Portfolio" welcome section
    About.tsx  / .css    # about me, photo placeholder, quick facts
    Education.tsx/.css   # arrow timeline (SMK -> Diploma -> University)
    Projects.tsx/.css    # project cards grid
    Skills.tsx / .css    # work experience + skills tags (dark section)
    Footer.tsx / .css
  App.tsx
  index.css              # design tokens (colors, fonts) + resets
```

## Customizing

- **Content**: everything text-based (name, bio, facts, education, projects,
  skills, experience, nav links, social links) is centralized in
  `src/data/portfolio.ts` — edit there, no need to touch components.
- **Photo**: replace the `About` section's placeholder box
  (`.about__image` in `About.tsx`) with an `<img src="..." />` once you have a
  headshot. Put the image file in `src/assets/` or `public/`.
- **Colors / fonts**: tokens are defined as CSS variables at the top of
  `src/index.css` (`--blue`, `--blue-tint`, `--cream`, `--font-display`,
  `--font-accent`, `--font-mono`).
- **Projects**: add/remove entries in the `projects` array in
  `portfolio.ts` — the grid adapts automatically. Set a real `link` per
  project (GitHub repo or live demo) once available.
- **Deploying**: `npm run build` produces a static `dist/` folder you can
  deploy to Vercel, Netlify, GitHub Pages, or any static host. Because this
  site now uses client-side routing (`/projects/:slug` pages), your host
  needs a SPA fallback rule so deep links resolve correctly:
  - **Netlify**: already handled — `public/_redirects` is included.
  - **Vercel**: add a `vercel.json` with a catch-all rewrite to `/index.html`
    (Vercel usually detects Vite + React Router automatically).
  - **GitHub Pages**: needs a small 404.html-redirect trick, or use
    `HashRouter` instead of `BrowserRouter` in `src/App.tsx`.

## Project detail pages

Each project card on the Projects section now links to its own detail page
at `/projects/<slug>` (e.g. `/projects/campus-marketplace`), showing the
problem, approach, highlights, and outcome, with prev/next navigation between
projects. Add or edit projects — including their detail content — in the
`projects` array in `src/data/portfolio.ts`. Fields like `approach` and
`outcome` are placeholders marked "Replace with your own..." — fill those in
with your real project write-ups.
