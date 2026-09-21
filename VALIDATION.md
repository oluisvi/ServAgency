# Validation — layout stability repair

## Fixed in this revision

- Hero letters no longer stack vertically. The conflict came from a legacy `.hero-title span` rule that was also targeting every nested character span; the repair scopes block layout to the three kinetic lines and forces words/characters back to inline flow.
- Section headings no longer depend on IntersectionObserver/clip reveal to remain visible. Motion can enhance them but cannot hide the content.
- The preferred desktop project carousel was restored: pinned scene + vertical-scroll scrub + horizontal transform.
- The project scene was moved upward in the viewport by compacting the project header/controls and letting the project window consume the remaining pinned height.
- The project section scroll range was reduced from the previous 360vh to 300vh.
- New hover/pointer interactions, magnetic actions, card tilt, image response and the CSS 3D signal sculpture were preserved.
- Mobile keeps native horizontal swipe + scroll snap instead of desktop pinning.
- Stale Tailwind/PostCSS configuration remains absent.

## Static verification performed

- 20 TS/TSX files parsed with TypeScript `transpileModule`: 0 syntax diagnostics.
- CSS braces: 580 opening / 580 closing, balanced.
- `project-pin` is present and desktop scrub transform logic is present.
- Section title wrappers use the non-destructive `section-heading-motion` treatment.
- No `postcss.config.mjs` is included.

## Environment limitation

A full Next.js build was not available because dependency installation timed out in this environment. The local/global TypeScript compiler could only perform syntax parsing without the project packages. Run before deployment:

```bash
npm install
npm run typecheck
npm run build
```

## Carousel reliability pass — 2026-09-21

- Desktop carousel no longer depends on vertical scrub/section height for project changes.
- Automatic advance runs only while the project section is substantially visible.
- Manual navigation: previous/next arrows, numbered jumps and keyboard arrows.
- Pointer drag on desktop snaps to the nearest project.
- Native horizontal swipe remains enabled on mobile.
- Manual interaction temporarily pauses autoplay; an explicit PLAY/PAUSE control is available.
- `prefers-reduced-motion` disables autoplay and animated transitions while preserving manual navigation.
- Changed TS/TSX files were syntax-checked with TypeScript `transpileModule`: 0 syntax errors.
- `globals.css` brace count validated: balanced.
- Full `next build` was not run in this environment because project dependencies are not installed locally.
