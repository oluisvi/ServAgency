# ServAgency — Digital Systems in Motion

## Design & Experience Specification

**Date:** 2026-09-14  
**Status:** Creative direction approved  
**Scope:** Home-page visual revitalization, information architecture, motion system, project showcase, responsive behavior, accessibility and performance.

## 1. Experience thesis

ServAgency should stop reading as a conventional institutional agency website with a portfolio section and start behaving as a **creative technology studio whose own website demonstrates how strategy, design and engineering connect**.

The experience mode is a hybrid of:

- editorial / image-first portfolio;
- interactive application showcase;
- restrained cinematic scroll narrative.

The site must remain clear, fast and conversion-oriented. It must not become a WebGL demo or an effects showcase.

Core idea:

> **Digital Systems in Motion**

The existing ServAgency metaphor — strategy, technology and execution converging into a solution — becomes the visual and interaction language of the entire page.

## 2. Brand interpretation

### Personality

- precise;
- inventive;
- technical;
- confident;
- editorial.

### Emotional goal

The visitor should feel that ServAgency is capable of solving practical business problems while also producing unusually thoughtful digital experiences.

### Visual metaphor

A **route / signal / system path** that travels through the experience and changes role according to context:

1. Hero: problem → strategy → technology → execution → solution.
2. Capabilities: the route branches into solution domains.
3. Selected work: the route becomes a project navigation rail / progress system.
4. Process: the route becomes a delivery timeline.
5. Final CTA: the branches converge again into the next project.

The route is not decorative. It communicates continuity, progress and connection.

### Anti-references

The redesign must not become:

- generic purple/blue SaaS;
- glassmorphism-heavy;
- a component-library collage;
- neon cyberpunk;
- a 3D/WebGL showcase without purpose;
- a sequence of giant rounded cards;
- a portfolio where every project is presented identically;
- an animation-heavy experience that obscures conversion;
- a dark luxury site using black + gold as shorthand for quality.

## 3. Creative Direction Lock

### Aesthetic

Editorial technology studio. Mostly near-black, graphite and warm off-white surfaces with one controlled electric accent.

### Color system

Primary palette:

- `--color-canvas-dark: #090b0f`
- `--color-canvas: #f4f2ed`
- `--color-surface-dark: #11151b`
- `--color-surface-light: #ffffff`
- `--color-text-dark: #0d1015`
- `--color-text-light: #f3f4f6`
- `--color-muted-dark: #66707d`
- `--color-muted-light: #aab2bd`
- `--color-line-dark: rgba(255,255,255,.13)`
- `--color-line-light: rgba(13,16,21,.14)`
- `--color-accent: #5cff66`

The accent is a signal color, not a fill color for every component.

### Typography

Keep local `next/font` loading and avoid external runtime font requests.

- Display / headings: Geist with tighter tracking and intentional line breaks.
- Body / UI: Geist.
- System labels / coordinates / indices: Geist Mono.

Use typography as composition rather than adding extra decorative components.

### Geometry

- mostly square or subtle-radius surfaces;
- thin borders and strong alignment anchors;
- no default pill aesthetic except compact status/filter controls;
- project media can use small optical corner treatment but must remain image-led.

### Imagery

Project imagery should feel like evidence, not decoration.

- Ruvro: luxury editorial/product-led crop.
- Lamim's: spatial/3D environment crop.
- FlowDesk: operational product interface.
- Atlas Finance AI: financial dashboard/data interface.
- Shop.co: commerce/product interface.

Use real project imagery where available. If a project cannot provide a clean screenshot, use an art-directed browser-frame composition built from the project's own existing assets rather than unrelated stock media.

## 4. Signature interaction

The signature behavior is the **ServAgency Signal Route**.

On desktop, a thin accent route originates in the hero and responds to scroll progress through selected scenes. It can branch, reconnect and become progress/navigation in the project showcase.

The interaction must remain lightweight. Default implementation strategy:

- CSS custom properties;
- SVG paths where geometry benefits from SVG;
- `IntersectionObserver` for scene state;
- `requestAnimationFrame` only for continuous scroll progress when needed;
- no WebGL;
- no smooth-scroll library;
- no GSAP unless native/CSS implementation proves insufficient.

Reduced-motion behavior removes continuous path drawing and uses stable scene states with short opacity/color transitions.

Mobile uses a simplified vertical signal indicator rather than reproducing desktop geometry.

## 5. Information architecture

Home order:

1. **Intro / Hero** — brand thesis and primary conversion.
2. **What we solve** — common business problems reframed as outcomes.
3. **Capabilities** — web, presence/brand, automation, AI, systems and immersive experiences.
4. **Selected Work** — five flagship projects.
5. **How we work** — concise process timeline.
6. **Technology** — supporting evidence, visually secondary.
7. **About / principles** — positioning and operating principles.
8. **FAQ** — only high-friction sales questions.
9. **Start a project** — strong final conversion.

The current standalone audit section is absorbed into capabilities/process to reduce repetition and improve narrative pacing.

## 6. Scene / state architecture

### Scene 01 — Signal Origin

**Purpose:** Explain what ServAgency does immediately.  
**Question:** “What is this agency and why should I care?”  
**Dominant visual:** oversized editorial headline + route/signal system.  
**Initial state:** route nodes separated.  
**Trigger:** entry and first scroll.  
**Transformation:** nodes connect and resolve into “solution”.  
**Conversion:** primary CTA “Falar sobre meu projeto”; secondary CTA “Ver projetos”.  
**Mobile:** static editorial route with small progress cues.

Recommended headline:

> **Transformamos problemas reais em sistemas e experiências digitais.**

Supporting copy preserves the practical positioning: websites, automations, AI, digital presence and custom experiences.

### Scene 02 — Friction → Outcome

**Purpose:** connect business pain to value.  
**Composition:** typographic list instead of card grid.  
**Interaction:** rows subtly shift emphasis as they enter viewport.  
**Route state:** one signal line branches across the problem/outcome pairs.

### Scene 03 — Capabilities System

**Purpose:** show breadth without reading like a services template.  
**Composition:** six capability rows or panels with index, title, one-sentence explanation and small system label.  
**Interaction:** hover/focus reveals concise proof/detail; no large icon-card grid.  
**Route state:** branching topology.

Capability groups:

1. Websites & digital experiences
2. Digital presence & brand systems
3. SEO & discoverability
4. Automations & integrations
5. AI applied to operations
6. Interactive / immersive experiences

### Scene 04 — Selected Work

**Purpose:** prove range and craft.  
**Question:** “What can this studio actually build?”  
**Structure:** five flagship projects in a cinematic vertical rail/stack.

Projects, in order:

1. **Ruvro & Co** — Luxury digital showroom / editorial experience — `https://ruvro.vercel.app`
2. **Lamim's Barbershop** — Immersive 3D local-business experience — `https://lamim-s-barbershop.vercel.app/`
3. **FlowDesk** — SaaS operations + visual automation — `https://flowdeskwebapp.vercel.app`
4. **Atlas Finance AI** — Personal finance / data product — `https://atlas-finance-web.onrender.com/`
5. **Shop.co** — Full-stack commerce experience — `https://shop-co-store.vercel.app/`

Desktop behavior:

- each project occupies an authored scene around `80–100vh`, depending on viewport;
- media is large and persistent enough to feel like a showcase, not a card;
- project index `01—05` remains visible as a rail/progress marker;
- entering a new project updates accent treatment, metadata and media transformation;
- normal browser scrolling is preserved;
- no mandatory horizontal wheel hijacking;
- keyboard/tab access exposes all project links in DOM order.

Project-specific motion accents are subtle and all use the same ServAgency motion language:

- Ruvro: editorial mask / light reveal;
- Lamim's: slight perspective/depth shift suggesting spatial entry;
- FlowDesk: connected panels / system topology;
- Atlas: data-line / numeric emphasis;
- Shop.co: catalog/product-frame shift.

These accents must never become five unrelated component styles.

Secondary work should not compete with the flagship rail. EcoEduca and Sanctuary Hotel may appear in a compact archive list after the flagship sequence or be removed from the home if page length becomes excessive.

### Scene 05 — Process

Five steps:

1. Diagnóstico
2. Estratégia
3. Criação
4. Publicação
5. Evolução

The signal route becomes a delivery timeline. Copy remains practical and concise.

### Scene 06 — Technology as Evidence

Technology is supporting proof, not the product being sold.

Keep a compact rail/marquee or typographic strip for React, Next.js, TypeScript, Node.js, automation, AI and deployment tools. Reduce section height and visual priority versus the current implementation.

### Scene 07 — Studio Principles

Preserve three core principles:

- strategy before tools;
- explainable decisions;
- close partnership.

Present as editorial statements rather than bordered cards.

### Scene 08 — Conversion Resolution

Final dark scene where route branches converge.

Core message:

> **Tem um problema, uma ideia ou um processo travado? Vamos definir a rota.**

Primary action: current contact form / current contact mechanism.  
Secondary proof: remote service, practical diagnosis, no impossible-result claims.

## 7. Project data model

Replace the current binary `featured` model with a model that reflects portfolio roles.

Recommended project shape:

```ts
export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  capabilities: readonly string[];
  liveUrl: string;
  sourceUrl?: string;
  role: "flagship" | "archive";
  visual: {
    src: string;
    alt: string;
    width: number;
    height: number;
    treatment: "editorial" | "spatial" | "system" | "data" | "commerce";
  };
};
```

`sourceUrl` is optional because client/commercial work may not always expose source code publicly.

## 8. Motion language

### Motion principles

- confident rather than bouncy;
- longer scene transitions, fast control feedback;
- transforms preserve spatial continuity;
- opacity supports motion but is not the only transition;
- avoid repeated left/right reveal animation on every section.

### Timing

- UI feedback: 120–220ms
- local state transitions: 220–420ms
- project/scene transitions: 500–800ms
- no cinematic delay before content becomes usable.

### Easing

Primary: `cubic-bezier(0.22, 1, 0.36, 1)`  
Secondary emphasized: `cubic-bezier(0.16, 1, 0.3, 1)`

### Reduced motion

Respect `prefers-reduced-motion` globally:

- no scroll-linked transforms;
- no perspective drift;
- no path-drawing animation;
- no auto-moving marquee if motion is disabled;
- content appears in final layout with minimal fades.

## 9. Navigation

Evolve the existing sticky header toward a compact floating/contained studio navigation without obscuring content.

Desktop:

- brand left;
- compact nav / chapter links;
- primary CTA right;
- active section state may use the signal accent.

Mobile:

- reduced controls;
- clear menu button;
- persistent access to contact CTA without covering content.

## 10. Responsive strategy

Mobile is re-art-directed, not compressed desktop.

- hero typography uses deliberate mobile line breaks;
- route system becomes a vertical signal/progress motif;
- flagship project scenes become stacked image-led panels with normal scrolling;
- project descriptions remain fully visible without hover;
- project-specific effects reduce to a single meaningful transform or static treatment;
- avoid sticky compositions that consume most of a short mobile viewport;
- all CTAs target at least 44px touch size.

Intermediate widths — tablet and small laptop — are explicitly tested.

## 11. Accessibility requirements

Target WCAG 2.2 AA where applicable.

Required:

- semantic landmarks and headings;
- skip link preserved;
- keyboard-operable project links and navigation;
- visible focus states with sufficient contrast;
- no essential content hidden behind hover;
- motion-independent comprehension;
- meaningful image alt text;
- decorative SVG route marked `aria-hidden`;
- touch target minimum 44×44px;
- correct reduced-motion behavior;
- no color-only status communication.

## 12. Performance strategy

The redesign preserves the current lightweight engineering advantage.

### Default constraints

- no Three.js/WebGL in ServAgency home;
- no autoplay video required for identity;
- avoid adding animation libraries unless native/CSS implementation is insufficient;
- use `next/image` for project imagery;
- lazy-load below-the-fold media;
- no expensive effect required for comprehension;
- preserve `content-visibility` where it produces value without layout issues.

### Fidelity strategy

The page does not need explicit GPU tiers because it avoids WebGL. Progressive enhancement is handled through:

- desktop vs compact choreography;
- reduced-motion mode;
- viewport-activated animation;
- lower-cost mobile composition.

## 13. SEO and metadata

Update marketing metadata to reflect the broader positioning:

- websites;
- automations;
- AI;
- digital systems;
- interactive experiences;
- strategy.

Preserve Organization / ProfessionalService structured data and existing canonical/robots/sitemap architecture.

## 14. Implementation boundaries

Preserve:

- Next.js App Router;
- React;
- TypeScript;
- Tailwind/PostCSS setup;
- current contact mechanism and validation unless a bug is discovered;
- analytics and Speed Insights;
- privacy route;
- current accessibility foundations.

Refactor only the home composition, project data/presentation, motion controller and shared styling necessary for the approved direction.

Do not introduce a CMS, backend, new contact service, WebGL stack or unrelated page architecture.

## 15. Validation and acceptance criteria

The redesign is complete when:

1. the home visually communicates a distinctive ServAgency identity even with the logo removed;
2. the route/signal motif appears coherently in hero, capabilities/projects/process/final CTA without becoming decorative noise;
3. Ruvro, Lamim's, FlowDesk, Atlas Finance AI and Shop.co appear as flagship work;
4. project presentation is more expressive than the current card grid while preserving normal scrolling and keyboard access;
5. mobile is an intentional composition, not a shrunk desktop layout;
6. `prefers-reduced-motion` removes scroll-linked animation without removing content;
7. primary CTA remains obvious throughout the journey;
8. no WebGL or unnecessary heavy animation dependency is added;
9. lint, typecheck, tests and production build pass;
10. the final repository can be packaged as a ZIP containing all required source and static assets, excluding `.next` and `node_modules`.

## 16. Stage handoff

Creative Direction Lock:

- **Concept:** Digital Systems in Motion
- **Signature interaction:** ServAgency Signal Route
- **Experience mode:** editorial technology studio + restrained cinematic scroll
- **Accent:** controlled electric green on graphite/warm-neutral foundation
- **Portfolio:** five flagship projects, vertical cinematic rail/stack, normal scroll
- **No WebGL on ServAgency home**
- **No generic component-library aesthetic**
- **Mobile is re-art-directed**
- **Accessibility and reduced motion are first-class**
- **Performance remains part of art direction**
