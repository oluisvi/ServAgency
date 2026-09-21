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
