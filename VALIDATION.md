# Validation — portfolio audit + case studies

## Completed checks

- Portfolio expanded from 8 to 10 projects.
- Added Alvora Lab and Casa Aurora / Home 3D.
- Carousel order changed from chronology to visual-storytelling priority.
- Continuous infinite carousel behavior preserved.
- Manual controls, drag/swipe, arrows, numbers and pause/play preserved.
- Added `/projetos/[slug]` static case-study route for every project.
- Added real/faithful galleries, palettes, process narrative and source notes.
- Alvora Lab and Casa Aurora use public-deploy observations and explicitly avoid claiming undocumented internal rationale.
- 23 TS/TSX source files transpiled with TypeScript: 0 syntax errors.
- `globals.css` braces balanced: 729 opening / 729 closing.
- No legacy `postcss.config.mjs` is present.

## Production gate still required

This environment does not contain the project's npm dependencies, so a full Next.js typecheck/build was not executed here. Before deploying:

```bash
npm install
npm run typecheck
npm run build
```

If all three pass, deploy the same source package to Vercel.
