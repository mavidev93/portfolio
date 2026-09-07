# Abdolreza Aqasi — Portfolio

Next.js (App Router) + Tailwind CSS port of the portfolio design.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/layout.tsx` — root layout, loads IBM Plex Sans/Mono via `next/font`
- `app/page.tsx` — the page itself (profile, experience, systems, projects sections), with scroll-progress and active-section-nav logic as React hooks
- `app/globals.css` — Tailwind directives + the site's design system (CSS variables, section styles)
- `tailwind.config.ts` — Tailwind theme extended with the site's color palette
