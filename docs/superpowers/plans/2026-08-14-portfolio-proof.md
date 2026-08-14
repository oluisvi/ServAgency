# Portfolio Proof Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace unfinished founder and conceptual-project placeholders with an honest, visually strong portfolio proof section built from five real projects.

**Architecture:** Typed project metadata in `src/content/site.ts` feeds focused Server Components. Three featured projects use local optimized screenshots; two complementary projects use compact text links. CSS extends the existing editorial system without a new runtime or dependency.

**Tech Stack:** Next.js 16 App Router, React Server Components, TypeScript, CSS, `next/image`, Node test runner.

## Global Constraints

- Work only in `C:\Users\luis.barros\CodexWorkspaces\ServAgency\technology-marquee`; never create build or asset artifacts in OneDrive.
- Present projects as experience developed by the people behind ServAgency, not as agency client work.
- Do not invent metrics, testimonials, client relationships, awards, dates, or results.
- Preserve the existing black, white, cobalt, typography, borders, square geometry, and section numbering.
- Use real project screenshots or repository-owned image assets; never use CSS illustrations or placeholders.
- Keep the implementation server-rendered and add no dependency or client state.
- Maintain accessibility, intrinsic image sizing, reduced-motion behavior, and responsive support from 320 through 1440 px.

---

### Task 1: Define the portfolio content contract

**Files:**
- Modify: `tests/portfolio-proof.test.mjs`
- Modify: `package.json`
- Modify: `src/content/site.ts`

**Interfaces:**
- Produces: `PortfolioProject`, `featuredProjects`, `complementaryProjects`, and `aboutPrinciples` exports.
- Consumes: the exact URLs supplied by the user and factual claims from public repository documentation.

- [ ] **Step 1: Write a failing production-output integration test**

Create `tests/portfolio-proof.test.mjs` that reads `.next/server/app/index.html` and asserts: the attribution “Experiência construída pela equipe por trás da ServAgency”; Atlas, EcoEduca, UrbanFarm, Shop.co, and Sanctuary Hotel each appear; supplied live and GitHub URLs are present; “Projeto conceitual”, “Fundador 01”, “Fundador 02”, and bracketed profile placeholders are absent.

- [ ] **Step 2: Run the test to verify failure**

Run: `npm run build && node --test tests/portfolio-proof.test.mjs`

Expected: FAIL because the current production HTML still contains conceptual projects and founder placeholders.

- [ ] **Step 3: Add typed content data**

Define a discriminated data shape with stable slugs, `name`, `category`, `summary`, `capabilities`, `liveUrl`, `sourceUrl`, and featured screenshot metadata (`src`, `alt`, `width`, `height`). Export three featured items and two complementary items in the approved order. Export the three approved about principles.

- [ ] **Step 4: Keep the full test suite discoverable**

Confirm the existing `node --test tests/*.test.mjs` script includes the new test file without changing its glob.

- [ ] **Step 5: Commit**

Run: `git add tests/portfolio-proof.test.mjs src/content/site.ts package.json && git commit -m "test: define portfolio proof contract"`

### Task 2: Add verified local project screenshots

**Files:**
- Create: `public/projects/atlas-finance.webp`
- Create: `public/projects/ecoeduca.webp`
- Create: `public/projects/urbanfarm.webp`

**Interfaces:**
- Produces: three local WebP assets with the intrinsic dimensions referenced by `featuredProjects`.
- Consumes: public live pages supplied by the user or repository-owned screenshots if a deployment cannot be captured reliably.

- [ ] **Step 1: Capture representative source screens**

Capture a product-level screen for each project at a consistent desktop viewport. Prefer a meaningful dashboard or primary experience over a splash/loading state. Do not include browser chrome, private data, or authentication credentials.

- [ ] **Step 2: Crop and optimize assets**

Use a consistent landscape ratio suited to the measured card slots and encode WebP files at a visually lossless web quality. Preserve the interface without recoloring it.

- [ ] **Step 3: Verify assets**

Open all three local files, confirm readable subject matter and correct crop, and verify each file has nonzero intrinsic dimensions and reasonable file size.

- [ ] **Step 4: Commit**

Run: `git add public/projects src/content/site.ts && git commit -m "feat: add real portfolio imagery"`

### Task 3: Build the portfolio proof section

**Files:**
- Create: `src/components/ui/project-card.tsx`
- Modify: `src/components/sections/projects.tsx`
- Modify: `src/app/globals.css`
- Test: `tests/portfolio-proof.test.mjs`

**Interfaces:**
- Consumes: `PortfolioProject`, `featuredProjects`, and `complementaryProjects` from `src/content/site.ts`.
- Produces: semantic featured project articles and a complementary project list.

- [ ] **Step 1: Implement the focused Server Component**

Create `ProjectCard` using `next/image`, semantic headings, visible project category, summary, capability list, and explicit “Ver produto” / “Ver código” links. External links use `target="_blank"` and `rel="noreferrer"`; `ArrowUpRight` remains decorative.

- [ ] **Step 2: Replace conceptual markup**

Render the truthful attribution, three typed featured cards, and two compact complementary entries. Remove all CSS-art markup and icon-only affordances.

- [ ] **Step 3: Implement responsive visual hierarchy**

Give Atlas more weight on wide screens, place EcoEduca and UrbanFarm as a supporting pair, and collapse to a single column on smaller screens. Define intrinsic image containers, visible focus states through existing tokens, usable touch targets, and restrained hover treatment with no essential motion.

- [ ] **Step 4: Run focused tests**

Run: `npm run build && node --test tests/portfolio-proof.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit**

Run: `git add src/components/ui/project-card.tsx src/components/sections/projects.tsx src/app/globals.css tests/portfolio-proof.test.mjs && git commit -m "feat: showcase verified portfolio work"`

### Task 4: Replace founder placeholders with institutional principles

**Files:**
- Modify: `src/components/sections/about.tsx`
- Modify: `src/app/globals.css`
- Test: `tests/portfolio-proof.test.mjs`

**Interfaces:**
- Consumes: `aboutPrinciples` from `src/content/site.ts`.
- Produces: one semantic, static principles list beside the existing about copy.

- [ ] **Step 1: Replace placeholder cards**

Remove `founder-placeholders`, its placeholder accessibility label, founder numbering, and bracketed copy. Render the three principles as an ordered semantic list with visible number, title, and explanation.

- [ ] **Step 2: Style the principles within the existing system**

Use existing borders, spacing, type scale, and cobalt accent. Keep the items visually static and readable rather than card-like controls.

- [ ] **Step 3: Run focused and full tests**

Run: `npm test`

Expected: all technology marquee and portfolio proof tests PASS.

- [ ] **Step 4: Commit**

Run: `git add src/components/sections/about.tsx src/app/globals.css tests/portfolio-proof.test.mjs && git commit -m "feat: replace founder placeholders with principles"`

### Task 5: Visual, accessibility, and release verification

**Files:**
- Modify only if verification reveals a defect in files already listed above.

**Interfaces:**
- Consumes: completed local build.
- Produces: evidence that the redesigned sections meet the spec.

- [ ] **Step 1: Run static quality gates**

Run sequentially: `npm install`, `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm audit`.

Expected: all commands exit 0, all tests pass, and npm reports zero vulnerabilities.

- [ ] **Step 2: Verify responsive layouts**

Inspect 320, 375, 390, 430, 768, 1024, 1280, and 1440 px. Assert zero horizontal page overflow, correct Atlas hierarchy, undistorted screenshots, readable metadata, and non-overlapping actions.

- [ ] **Step 3: Verify interaction and accessibility**

Keyboard through all portfolio links, confirm visible focus, verify accessible names and external destinations, inspect heading order, and confirm no console warnings or errors. Check the reduced-motion state introduces no project animation.

- [ ] **Step 4: Compare desktop and mobile screenshots**

Capture local desktop and mobile views outside OneDrive and inspect them for crop, padding, border, typography, contrast, and rhythm defects. Fix and repeat until clean.

- [ ] **Step 5: Request independent code review**

Provide the reviewer the base and head SHAs, this plan, and the design spec. Resolve all Critical and Important findings and document Minor findings.

- [ ] **Step 6: Commit verification fixes if needed**

Run: `git add <verified changed files> && git commit -m "fix: polish portfolio proof experience"`

