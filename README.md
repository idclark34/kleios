# kleios.app (landing page)

Standalone Next.js 16 + Tailwind 4 project for the kleios.app marketing site. Builds and deploys independently of the Expo app in this repo — no shared runtime code.

## Develop

```
cd web
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY + RESEND_AUDIENCE_ID
npm run dev
```

Visit `http://localhost:3000`.

## Test

```
npm test           # 24 tests (Phone + Closing/Footer + validate-email + waitlist API)
npm run test:watch
npm run lint
npm run build
```

## Deploy (Vercel)

- Vercel project root: `web/`
- Build command: `next build`
- Output directory: `.next`
- Environment variables (required for the Android waitlist form):
  - `RESEND_API_KEY` — Resend API key
  - `RESEND_AUDIENCE_ID` — the Resend audience the form adds emails to
- Domain: `kleios.app` (apex) — Vercel handles `www` redirect

The Expo app continues to deploy via EAS. The web project lives in this repo for convenience; it does not share build tooling or runtime code.

## Architecture

- App Router (`web/app/`)
- Tailwind 4 — brand tokens registered via `@theme inline` in `web/app/globals.css`
- Font loading via `next/font/google` (Cormorant Garamond + Inter Tight)
- OG image generated at build time via `app/opengraph-image.tsx` using `ImageResponse`
- `/privacy` renders `web/content/privacy.md` (a copy of the project root `PRIVACY.md`) via `react-markdown`
- Email waitlist: `POST /api/waitlist` validates, then calls `resend.contacts.create` against the configured audience

See `docs/superpowers/specs/2026-05-12-landing-page-design.md` for the full design spec and `docs/superpowers/plans/2026-05-12-landing-page.md` for the implementation plan.
