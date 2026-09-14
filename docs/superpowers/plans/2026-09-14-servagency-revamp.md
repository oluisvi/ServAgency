# ServAgency Digital Systems in Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the ServAgency home as a distinctive editorial creative-technology studio experience with a signal-route motif and five flagship projects, while preserving accessibility, WhatsApp conversion and a lightweight Next.js architecture.

**Architecture:** Keep the existing Next.js App Router + React + TypeScript model. Replace the old card-grid portfolio and repetitive reveal system with semantic scene components, a lightweight client-side motion controller, CSS/SVG choreography, and code-native project visualizations. Avoid WebGL and heavy motion dependencies.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind/PostCSS base, Lucide React, React Hook Form, Zod, Vercel Analytics/Speed Insights.

**Spec:** `docs/superpowers/specs/2026-09-14-digital-systems-in-motion-design.md`

## Global Constraints

- No WebGL/Three.js on the ServAgency home.
- Preserve normal browser scrolling.
- Respect `prefers-reduced-motion`.
- Mobile is re-art-directed, not shrunk desktop.
- Keep WhatsApp as the contact conversion destination.
- Five flagship projects: Ruvro, Lamim's, FlowDesk, Atlas Finance AI, Shop.co.
- No generic card-grid or component-library collage aesthetic.
- Use code-native project preview art so the package is self-contained.

---

### Task 1: Recreate project foundation
**Files:** package/config, App Router shell, metadata, favicon.
- [ ] Create package and TypeScript/PostCSS/ESLint configuration.
- [ ] Create root layout, metadata, robots, sitemap and manifest.
- [ ] Create semantic color/type/layout tokens in `globals.css`.
- [ ] Verify TypeScript/TSX syntax with `transpileModule`.

### Task 2: Define content and portfolio model
**Files:** `src/content/site.ts`, `src/lib/contact-schema.ts`.
- [ ] Model flagship/archive projects and treatment variants.
- [ ] Add truthful project summaries, URLs and capabilities.
- [ ] Preserve service, FAQ and process content with refreshed framing.
- [ ] Verify all five flagship URLs are represented exactly.

### Task 3: Build shell and signature route
**Files:** header, brand, hero, motion controller.
- [ ] Build floating/contained header and accessible mobile menu.
- [ ] Build editorial hero and SVG signal route.
- [ ] Implement lightweight scene activation/scroll progress controller.
- [ ] Add reduced-motion fallback.

### Task 4: Build narrative middle sections
**Files:** outcomes, capabilities, process, technology, about.
- [ ] Replace generic grids with indexed editorial rows.
- [ ] Reuse the signal motif as branch/timeline/progress language.
- [ ] Keep technology visually secondary.
- [ ] Check keyboard/focus and responsive behavior in markup/styles.

### Task 5: Build flagship project rail
**Files:** projects section, project-scene UI, CSS.
- [ ] Render five project scenes in DOM order.
- [ ] Create self-contained code-native visual previews per treatment.
- [ ] Add desktop sticky/media choreography without scroll hijacking.
- [ ] Provide mobile stacked fallback and archive list.
- [ ] Ensure project links are fully keyboard accessible.

### Task 6: Build conversion and supporting content
**Files:** contact, FAQ, footer, privacy page.
- [ ] Preserve validated contact form -> WhatsApp flow.
- [ ] Reframe final CTA around “definir a rota”.
- [ ] Build restrained FAQ and footer.
- [ ] Preserve privacy route and contact data handling explanation.

### Task 7: Validate and package
**Files:** all source plus ZIP.
- [ ] Run TS/TSX syntax transpilation for every source file.
- [ ] Run static checks for broken local imports and duplicate IDs.
- [ ] Verify responsive CSS media queries and reduced-motion rules exist.
- [ ] Exclude `.next`, `node_modules`, caches and temporary QA files.
- [ ] Create `ServAgency-Digital-Systems-in-Motion.zip`.
