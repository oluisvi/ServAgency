# Premium visual QA — 2026-09-14

This pass focuses on visual consistency rather than feature expansion.

## Changes

- Replaced the neon-green system accent with a restrained vermilion signal color on warm bone + graphite foundations.
- Fixed two-column section-intro auto-placement so headings and supporting copy remain in the intended content column.
- Increased hero heading line-height and reduced extreme tracking to prevent optical collisions at large display sizes.
- Increased mobile hero-system height and spacing so route labels do not compete with the output label and footer note.
- Moved project sticky scenes below the floating header and disabled sticky behavior on short desktop viewports.
- Replaced synthetic CSS project mockups with authentic project imagery:
  - Ruvro & Co: project hero asset;
  - Lamim's Barbershop: real venue image used by the project as source/reference;
  - FlowDesk: real product screenshot already in `public/projects`;
  - Atlas Finance AI: real product screenshot already in `public/projects`;
  - Shop.co: real product screenshot already in `public/projects`.
- Added dedicated media chrome so each screenshot is presented consistently without text being overlaid on unpredictable image areas.
- Improved dark-form field contrast and differentiated About / FAQ surfaces.
- Added min-width safeguards for grid children to reduce text overflow in intermediate widths.
- Added a reduced-cost fallback for short viewports where cinematic sticky composition would otherwise become cramped.

## Validation

- TypeScript syntax transpilation: 25 TS/TSX files, 0 diagnostics.
- Source/regression tests: 14/14 passing.
- CSS brace balance: valid.
- Production baseline before this pass: Vercel deployment for commit `1ddf179` was green.

The final production build for this pass should be verified by Vercel after upload because this environment cannot install the project's npm dependency tree from the public registry.
