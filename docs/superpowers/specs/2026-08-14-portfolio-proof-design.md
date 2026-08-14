# Portfolio Proof Design

## Objective

Replace the unfinished founder and conceptual-project placeholders with honest, verifiable proof of the team's experience while preserving ServAgency's editorial black, white, and cobalt visual identity.

## Project narrative

The work is presented as selected experience built by the people behind ServAgency, not as agency client engagements. Copy must never imply a commercial client relationship or claim unverified business results.

## Featured work

The home page features three projects in this order:

1. **Atlas Finance AI** — the lead case and strongest full-stack product proof. Emphasize explainable personal-finance management, planning, multi-currency support, reports, and product depth.
2. **EcoEduca** — an environmental education platform. Emphasize accessible learning, educational content, quizzes, responsiveness, and support for modest devices.
3. **UrbanFarm** — an urban-farm management system. Emphasize operational dashboards and management of production, customers, and suppliers.

Each card contains a real product screenshot, project type, title, factual summary, compact capability/technology labels, and two explicit links: live product and public source code. Links open in a new tab and include safe `rel` attributes. Screenshots are local optimized assets with descriptive alternative text.

Shop.co and Sanctuary Hotel appear in a smaller complementary row below the featured cases. Each receives a short category and links to the live experience and repository, without competing visually with the three primary cases.

## Visual direction

- Preserve existing typography, color tokens, square geometry, border language, and editorial section numbering.
- Replace CSS mock illustrations with real screenshots captured from the supplied live products.
- Atlas spans more visual weight than the other cases on wide screens; EcoEduca and UrbanFarm form the supporting pair.
- Use restrained image treatment: natural product color inside a dark browser-like frame, with the existing cobalt used for focus and hover states.
- Do not add a second carousel. All projects remain directly discoverable and keyboard accessible.
- Mobile uses one column, readable metadata, and full-width explicit action links.

## About section

Remove all founder cards, placeholder labels, and the placeholder accessibility label. Keep the existing honest origin story and pair it with three institutional principles:

1. **Estratégia antes da ferramenta** — understand the business problem before selecting technology.
2. **Decisões explicáveis** — make scope, trade-offs, and progress understandable.
3. **Parceria próxima** — work with direct communication and shared responsibility.

The principles are static semantic list items, not interactive cards.

## Content and data boundaries

- Store project metadata in `src/content/site.ts` as typed data.
- Keep rendering in Server Components; no new client-side state or dependency.
- Do not invent metrics, testimonials, client names, awards, dates, or outcomes.
- Treat GitHub READMEs and the supplied live URLs as the factual sources.
- If a live screenshot cannot be captured reliably, use a repository-owned screenshot asset rather than a fabricated placeholder.

## Accessibility and performance

- Preserve heading order and landmark semantics.
- Every screenshot has concise contextual alt text; decorative framing stays hidden from assistive technology.
- External-link purpose must be present in visible text, not icon-only.
- Keyboard focus uses the existing global focus-visible treatment.
- Optimize local images and define intrinsic dimensions to prevent layout shift.
- Reduced-motion users receive no new animation beyond existing nonessential hover transitions.

## Responsive acceptance criteria

- No horizontal page overflow at 320, 375, 390, 430, 768, 1024, 1280, and 1440 px.
- Primary cases remain legible and visually ordered at every width.
- Links have usable touch targets and no overlap.
- Screenshots retain their intended aspect ratio without stretching.

## Verification

- Add production-output integration tests for the three featured projects, the two complementary projects, truthful portfolio attribution, links, and absence of founder/conceptual placeholders.
- Run Prettier, ESLint with zero warnings, TypeScript, tests, production build, and npm audit.
- Inspect desktop and mobile renders in the in-app browser, including keyboard navigation, links, console output, and page overflow.
