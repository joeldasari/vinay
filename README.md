# Happy Birthday, Maggieee

A single-page birthday card website for Maggie / Dua, built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Suggested folder structure

```text
public/
  images/
    photo1.jpg
    photo2.jpg
    photo3.jpg
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    HeroSection.tsx
    CakeSection.tsx
    PhotoGallery.tsx
    MessageLetter.tsx
    FloatingDecorations.tsx
    Footer.tsx
    BirthdayCake.tsx
    PolaroidCard.tsx
    SectionHeading.tsx
    SparkleBackground.tsx
    ConfettiEffect.tsx
    ornaments.tsx
  lib/
    content.ts      # all text + photo paths
    sound.ts        # optional celebration sound
```

## Installation

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Required packages

Already listed in `package.json`:

- `next`
- `react`
- `react-dom`
- `framer-motion`
- `tailwindcss`
- `typescript`

## How to personalize later

1. Replace the photos in `public/images/` with the same names:
   - `/images/photo1.jpg`
   - `/images/photo2.jpg`
   - `/images/photo3.jpg`
2. Or change the paths and captions in `src/lib/content.ts`.
3. Edit the letter, titles, and footer in that same file.
4. To disable the candle sound, set `ENABLE_BLOW_SOUND` to `false` in `src/lib/content.ts`.

## Production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

This is a Next.js App Router app at the repository root. On Vercel, import `venkatbs500/Vinay`, keep **Next.js** as the framework, use **main** as the production branch, and leave the Root Directory empty.
