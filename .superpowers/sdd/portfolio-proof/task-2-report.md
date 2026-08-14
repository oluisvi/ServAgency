# Task 2 report: verified portfolio screenshots

## Source provenance

- **Atlas Finance AI** — repository-owned `docs/screenshots/dashboard-desktop.png` from `https://github.com/oluisvi/atlas-finance-ai`. The real dashboard screenshot was top-cropped to 16:9, resized to 1600×900, and encoded as WebP. Natural colors and product content were preserved.
- **EcoEduca** — live public product at `https://ecoeduca.onrender.com/trilhas`, reached through the visible **Trilhas** navigation from the home page on 2026-08-14. Captured the complete “Trilhas educativas” experience without browser chrome, then resized by less than 1% to 1600×900 and encoded as WebP.
- **UrbanFarm** — live public demo at `https://fazenda-urbana.onrender.com/dashboard.html`, accessed on 2026-08-14 with the demo credentials documented in the repository README. Captured the authenticated dashboard only; no credentials or private/user data are present or retained in the asset. The viewport capture was resized to 1600×900 and encoded as WebP.

## Final asset verification

| Asset | Dimensions | File size | Visual inspection |
| --- | ---: | ---: | --- |
| `public/projects/atlas-finance.webp` | 1600×900 | 42,520 bytes | Pass — meaningful finance dashboard, readable navigation/KPIs/chart, no browser chrome |
| `public/projects/ecoeduca.webp` | 1600×900 | 54,844 bytes | Pass — “Trilhas educativas” heading and three learning-path cards are readable, no browser chrome |
| `public/projects/urbanfarm.webp` | 1600×900 | 29,564 bytes | Pass — authenticated operational dashboard with KPIs and production chart, no browser chrome or private data |

All three files are valid, non-empty WebP images at exactly 1600×900 and are well below the 300 KB target. Each final asset was opened at original detail and visually inspected after encoding.

## Metadata and tests

- `src/content/site.ts` already declares all three screenshots at 1600×900, so no metadata change was required.
- `npm run typecheck`: pass.
- `npm test`: production build passes; 2 of 3 tests pass. `tests/portfolio-proof.test.mjs` currently fails on the unrelated missing attribution assertion (`the portfolio attribution should render`), which belongs to the separate portfolio content/attribution work rather than these image assets.

## Commit

- `1d1b171bbaff25311d473aab0b076a9d4b4b322e` — `feat: add real portfolio imagery`

## Self-review

- Used only repository-owned or live public project UI; no generated placeholders, CSS art, or invented screens.
- Preserved each product’s natural palette and visible content.
- Chose meaningful dashboard/learning states instead of loading, splash, or login screens.
- Kept all assets below 55 KB without visible loss of UI readability.
- Scoped the implementation commit to the three requested image files.

## Concerns

- Atlas required a top-aligned 16:9 crop because the repository screenshot is 1425×891; the crop retains the complete navigation, KPI row, and primary chart while omitting only lower-page content.
- The full test suite’s sole failure is the pre-existing/separate missing portfolio attribution assertion noted above; the production build and typecheck themselves pass.
