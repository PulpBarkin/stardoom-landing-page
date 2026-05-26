# stardoom-landing

Static Next.js site that hosts:

- `/` — landing page
- `/privacy` — rendered from `content/privacy-policy.md`
- `/terms` — rendered from `content/terms-of-service.md`
- `/support` — single-page contact (developer@stardoom.app)

Built with Next.js 14 (App Router) + Tailwind. Exports as a fully static
site to `out/` — no Node.js runtime required at deploy time.

## Run locally

```bash
cd landing
npm install
npm run dev
```

Then visit http://localhost:3000.

## Build for production

```bash
npm run build
```

This writes a static export to `landing/out/`. Every page becomes a real
`.html` file with prebuilt CSS — no server required.

## Deploy to Vercel (manual)

1. Run `npm run build` (creates `out/`).
2. Open the Vercel dashboard → **Add New… → Project**.
3. Choose **"Other"** (skip Git import).
4. Drag the entire `out/` folder onto the upload area, or click "Browse
   files" and select it.
5. Click **Deploy**.
6. Once deployed, attach your domain:
   - Vercel project → **Settings → Domains** → add `stardoom.app`.
   - Add the DNS records Vercel gives you to your registrar.

## Updating privacy / terms copy

The source of truth lives in `/legal/` at the repo root (one level up).
After editing `legal/privacy-policy.md` or `legal/terms-of-service.md`:

```bash
cp ../legal/privacy-policy.md content/privacy-policy.md
cp ../legal/terms-of-service.md content/terms-of-service.md
npm run build
```

Then re-upload the new `out/` to Vercel (or set up a Git import so it
happens automatically on push).

## Updating the landing copy

Edit `app/page.tsx`. The "coming soon" badge becomes the App Store /
Play Store badge once the app is live.

## Theming

Colors and fonts live in `tailwind.config.ts` and `app/globals.css`.
They mirror the mobile app's `src/theme.ts` so the brand feels
continuous between the marketing site and the product.
