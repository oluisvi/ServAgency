# Task 1 report — portfolio content contract

## Files changed

- tests/portfolio-proof.test.mjs — production-output integration contract for truthful attribution, all five projects, supplied live/source URLs, and removal of placeholders.
- src/content/site.ts — typed, discriminated project data for featured and complementary work plus institutional principles.

package.json was not changed: its existing node --test tests/*.test.mjs command already discovers the new test.

## Red-test evidence

npm run build && node --test tests/portfolio-proof.test.mjs completed the production build and then failed as expected (0 passing, 1 failing). The failure is the portfolio attribution should render, because the current implementation still has the conceptual project and founder placeholder markup.

## Verification

- npm run typecheck — passed.
- Focused production-output test — intentionally red until Tasks 3 and 4 render the portfolio data and replace the founder placeholders.

## Commit

2f97889 — test: define portfolio proof contract

## Self-review

- All five supplied live and source URLs are represented in the contract and asserted in the production-output test.
- Featured ordering is Atlas Finance AI, EcoEduca, then UrbanFarm; complementary ordering is Shop.co, then Sanctuary Hotel.
- Atlas is described with deterministic, explainable insights only; the remaining project categories preserve their academic or study context.
- The contract introduces no dependency or client state.

## Concerns

- The focused test must remain red until the rendering tasks consume these exports and remove legacy placeholders.
- Featured screenshot metadata specifies 1600×900; Task 2 must produce local assets with those intrinsic dimensions.
