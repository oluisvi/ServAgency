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

## Review fix — round 1

Reviewer finding P1 was confirmed: the repository/live source captures included a narrow user-agent scrollbar on the right edge. All three assets were regenerated from their original PNG sources, not from the previously encoded WebPs. The rightmost 18 source pixels containing the scrollbar were removed before a fresh top-aligned 1600×900 resize and quality-84 WebP encode. No product UI was painted over, generated, recolored, or composited.

### Corrected asset verification

| Asset | Dimensions | File size | SHA-256 | Original-detail inspection |
| --- | ---: | ---: | --- | --- |
| `public/projects/atlas-finance.webp` | 1600×900 | 46,574 bytes | `710eb37f0be71ca255c9d0fc8045273f380de43dfafabb3b23ae3af4d8c4ae89` | Pass — right edge is clean product canvas; no scrollbar/browser chrome; navigation, KPI row, and chart remain readable |
| `public/projects/ecoeduca.webp` | 1600×900 | 58,604 bytes | `2bf4b359b0b34264157173494f18185cf4096310a116a959a9bf2af4909d3fc0` | Pass — right edge is clean page background; no scrollbar/browser chrome; heading and all three trail cards remain readable |
| `public/projects/urbanfarm.webp` | 1600×900 | 31,818 bytes | `219a6ad235dacca5da3db4ae7f875c81aa1bde9e9892389fa577336f63b9583b` | Pass — right edge is clean dashboard canvas; no scrollbar/browser chrome; KPIs and production chart remain readable |

All corrected files are non-empty, exactly 1600×900, valid WebP, and below 300 KB. Each was opened with original-detail inspection after the final encode.

### Verification commands and output

Command:

```powershell
node -e "const sharp=require('sharp'),fs=require('fs'),crypto=require('crypto'),path=require('path'); (async()=>{for(const n of ['atlas-finance.webp','ecoeduca.webp','urbanfarm.webp']){const p=path.join('public','projects',n),b=fs.readFileSync(p),m=await sharp(b).metadata(); console.log(n+': '+m.width+'x'+m.height+', '+b.length+' bytes, '+m.format+', sha256='+crypto.createHash('sha256').update(b).digest('hex'))}})()"
```

Output:

```text
atlas-finance.webp: 1600x900, 46574 bytes, webp, sha256=710eb37f0be71ca255c9d0fc8045273f380de43dfafabb3b23ae3af4d8c4ae89
ecoeduca.webp: 1600x900, 58604 bytes, webp, sha256=2bf4b359b0b34264157173494f18185cf4096310a116a959a9bf2af4909d3fc0
urbanfarm.webp: 1600x900, 31818 bytes, webp, sha256=219a6ad235dacca5da3db4ae7f875c81aa1bde9e9892389fa577336f63b9583b
```

Commands and results:

- `npm run typecheck` — pass.
- `npm test` — production build and TypeScript pass; static generation completes. Test runner: 2 pass, 1 fail. The unchanged failure is `renders truthful portfolio proof in the production HTML` at the separate attribution assertion (`the portfolio attribution should render`); no image assertion fails.

### Fix self-review

- The scrollbar columns are absent from all three final images.
- Product provenance and visible UI remain unchanged.
- No browser chrome, loading/login state, credentials, or private data are visible.
- The correction remains scoped to the three image binaries plus this appended verification record.
