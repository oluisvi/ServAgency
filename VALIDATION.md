# Validation — continuous carousel + Ferreira Imóveis

## Changes in this revision

- Replaced interval-based project autoplay with a requestAnimationFrame-driven continuous rail.
- Removed timed dwell between projects: movement is constant while the carousel is visible.
- Added runtime before/after clones for a seamless infinite loop without changing the authored project list.
- Preserved previous/next controls, numbered jumps, keyboard arrows, desktop drag and mobile swipe.
- Manual controls animate to the requested project and continuous movement resumes immediately afterward.
- PLAY/PAUSE remains available; `prefers-reduced-motion` disables automatic motion.
- Moved the large project definition text from the center of the image into the lower status rail with smaller typography.
- Added Ferreira Imóveis using the supplied real project screenshot, verified deploy URL and repository.
- Replaced the Crivo 3D cover with the supplied real project screenshot.
- Portfolio count now derives automatically from the project array and is currently 08.

## Static verification performed

- 20 TS/TSX source files parsed with TypeScript `transpileModule`: 0 syntax diagnostics.
- CSS opening and closing braces checked for balance.
- Local project images exist at `public/projects/ferreira-imoveis.png` and `public/projects/crivo-3d.png`.
- Stale Tailwind/PostCSS configuration is not present.

## Environment limitation

A full `npm install` timed out in this environment, so a dependency-aware `next build` could not be completed here. Run before deployment:

```bash
npm install
npm run typecheck
npm run build
```
