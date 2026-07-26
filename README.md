# Sadeem

Marketing site for Sadeem CPaaS, built with Next.js (App Router).

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (Turbopack) + React 19 |
| Language | TypeScript 7 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui primitives (`components/ui`) on Radix |
| Animation | Motion |
| Icons | lucide-react |
| Toasts | sonner |
| Package manager | bun |

## Getting started

```bash
bun install
bun dev          # http://localhost:3000
```

Other scripts: `bun run build`, `bun run start`, `bun run typecheck`.

## Layout

```
app/
  layout.tsx      Document shell — fonts + globals.css only
  page.tsx        The live marketing site
  not-found.tsx   404
  globals.css     Tailwind entry point and design tokens
  dev_/           Original Jano theme demo pages (see below)
components/
  site/           Sections of the marketing site
  ui/             shadcn/ui primitives
lib/
  fonts.ts        Recoleta + Gordita via next/font/local
  utils.ts        cn()
```

## The `dev_` pages

`app/dev_/` holds the ~50 untouched demo pages from the original Jano theme,
kept as a reference library. Nothing on the live site links to them.

They still run on the old stack — Bootstrap 5, SCSS (`styles/index.scss`) and
AOS — which is loaded exclusively by `app/dev_/layout.tsx`, so none of it
reaches the marketing site.

The two CSS systems are kept apart by cascade layers rather than by overrides:
`app/globals.css` imports Tailwind layer-by-layer so every Tailwind rule sits
inside a `@layer`, while the Bootstrap bundle stays unlayered. Unlayered CSS
always outranks layered CSS, so on `dev_` routes Bootstrap's reset wins
automatically and no `!important` is needed anywhere.

If the reference pages are ever no longer needed, deleting `app/dev_/` plus the
components only they use lets you drop `bootstrap`, `sass`, `aos`, `react-slick`,
`slick-carousel`, `react-modal-video`, `react-photoswipe-gallery`, `photoswipe`,
`react-tabs`, `react-countup`, `react-circular-progressbar`, `react-masonry-css`,
`react-intersection-observer` and `react-hot-toast`.

## Notes

- Type checking runs through the `tsc` CLI (`experimental.useTypeScriptCli` in
  `next.config.ts`). TypeScript 7 is the Go-native compiler and no longer exposes
  the JavaScript compiler API that Next links against.
- Every decorative animation is disabled under `prefers-reduced-motion`.
- The newsletter form in `components/site/subscribe.tsx` has no backend; it only
  shows a confirmation toast, matching the previous behaviour.
