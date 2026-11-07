# Taco Y Hibachi

Mobile-first site for a Southwest Detroit taco + hibachi food truck. Built as a sales demo for Mexican restaurants.
Next.js 15 (App Router), React 19, Tailwind v4 (reset only; styles are hand-written in `src/app/globals.css`). No animation libraries.

```bash
npm install
npm run dev -- -p 3080
PAGES=1 npm run build   # static export for GitHub Pages -> .next-pages
```

Stop the dev server before running `build`. Even with `PAGES=1` writing to `.next-pages`, building while dev is running corrupts the dev cache (webpack "moduleId is not a function"). If that happens: stop dev, `rm -rf .next`, start again.

## Map

- `src/lib/content.ts`: every fact, menu item, review (see PLACEHOLDERS.md)
- `src/components/*`: one file per section; `art.tsx` holds the hand-built SVG awning, taco, lime
- `public/img`: logo, chef mark, OG image (provenance in PLACEHOLDERS.md)
- `src/app/globals.css`: tokens, type, all section styles; mobile-first with breakpoints at 720 and 1040

## Re-skinning for another restaurant

Swap `content.ts`, the palette tokens at the top of `globals.css`, and the SVG art in `art.tsx`. Layout and components carry over.
