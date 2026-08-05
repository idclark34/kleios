# kleios.app (landing page)

Standalone Next.js 16 + Tailwind 4 project for the kleios.app marketing site. Builds and deploys independently of the Expo app in this repo — no shared runtime code.

## Develop

```
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Test

```
npm test           # Phone + Closing/Footer
npm run test:watch
npm run lint
npm run build
```

## Deploy (Vercel)

- Build command: `next build`
- Output directory: `.next`
- No environment variables required
- Domain: `kleios.app` (apex) — Vercel handles `www` redirect

The Expo app continues to deploy via EAS. The web project lives in this repo for convenience; it does not share build tooling or runtime code.

## Architecture

- App Router (`app/`)
- Tailwind 4 — brand tokens registered via `@theme inline` in `app/globals.css`
- Font loading via `next/font/google` (Cormorant Garamond + Inter Tight)
- OG image generated at build time via `app/opengraph-image.tsx` using `ImageResponse`
- `/privacy` renders `content/privacy.md` (a copy of the project root `PRIVACY.md`) via `react-markdown`
- Primary CTA: `components/primitives/AppStoreBadge.tsx` links to the App Store listing (`id6765974356`). There is no waitlist and no API route.

See `docs/superpowers/specs/2026-05-12-landing-page-design.md` for the full design spec and `docs/superpowers/plans/2026-05-12-landing-page.md` for the implementation plan.
