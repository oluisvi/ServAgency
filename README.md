# ServAgency — Interactive Systems in Motion

Visual and interaction-led redesign of ServAgency built with Next.js, React and TypeScript.

## Current direction

- interactive editorial hero with horizontal per-letter kinetic typography;
- pointer-responsive signal sculpture using lightweight CSS 3D;
- parallax, fade/lift, stagger, magnetic CTAs, surface tilt and state transitions;
- continuously moving infinite project rail with no timed stops between projects;
- project rail remains controllable by drag/swipe, previous/next buttons, numbered jumps and keyboard arrows;
- real project imagery, including Ferreira Imóveis and the updated Crivo 3D cover;
- project definition labels live in the lower status rail so they no longer obscure the project image;
- section headings remain visible even when motion/observers fail;
- reduced-motion and mobile re-art-direction;
- no added animation or WebGL dependency.

## Project carousel behavior

The selected-work rail moves at a constant low speed while it is visible. The sequence is duplicated at runtime only as a visual buffer, so the transition from the final project back to the first is seamless. Manual interaction temporarily takes control of the same rail rather than switching to a separate carousel mode.

- **Autoplay:** constant motion, no five-second dwell between slides.
- **Infinite loop:** the track rebases by exactly one sequence width, producing no visual jump.
- **Drag/swipe:** direct manipulation on desktop and touch devices.
- **Controls:** previous/next arrows, numbered jumps and keyboard arrows.
- **Pause:** explicit PLAY/PAUSE control remains available.
- **Reduced motion:** automatic movement is disabled while manual navigation remains available.

## Run

```bash
npm install
npm run dev
```

Validation before deployment:

```bash
npm run typecheck
npm run build
```

## Portfolio audit — 2026-09-21

The home portfolio order is intentionally **not chronological**. It starts with the projects that communicate the most visual authorship, detail and interaction in the first seconds, then transitions toward denser product/application work:

1. Crivo 3D
2. Ruvro & Co
3. Alvora Lab
4. Ferreira Imóveis
5. Casa Aurora
6. Lamim's Barbershop
7. Shop.co
8. FlowDesk
9. Atlas Finance AI
10. RemoveIT

The review considered the rendered experiences and available source material: hero impact, art direction, typography, imagery, spatial/motion behavior, interaction depth, compositional detail and overall finish. The order is a portfolio storytelling decision, not a chronology or a statement about engineering complexity.

## Case studies

Every flagship project now has a local presentation route at `/projetos/[slug]`. The pages are data-driven from `src/content/case-studies.ts` and include:

- challenge and experience thesis;
- visual palette;
- design / interaction principles;
- project construction narrative;
- real project imagery or faithful interface evidence;
- technology stack;
- result and source-basis note;
- live-site and repository links when available;
- next-case navigation.

For Alvora Lab and Casa Aurora, the case copy distinguishes public-product observation from undocumented internal creative rationale. It does not claim private design decisions that were not available in the supplied sources.

## Latest identity / interaction patch

- Uses the supplied official `logo.svg` in the fixed header.
- Replaces the previous hero signal/trident object with an interactive layered 3D treatment of the official logo.
- Removes repository/code buttons from portfolio and case pages.
- Fixes `Ver case` / `Ver ao vivo` conflicts with carousel dragging by separating interactive controls from drag surfaces.
- Updates Alvora Lab and Casa Aurora source metadata and case-study engineering details from `Kaiquemarques00/AlvoraLab` and `Kaiquemarques00/Home-3d`.
