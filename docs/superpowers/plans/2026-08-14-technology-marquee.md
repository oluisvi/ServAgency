# Technology Marquee Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static technology row with an accessible, CSS-only, infinite right-to-left marquee using local recognizable SVG marks.

**Architecture:** Keep `Technologies` as a Server Component and keep data in `src/content/site.ts`. Render two equal semantic groups in one transform-animated track, expose only the first group to assistive technology, and convert the primary group to a static wrapping list under reduced motion.

**Tech Stack:** Next.js 16.3 App Router, React 19 Server Components, TypeScript 6, Tailwind CSS 4 plus global CSS, Node.js built-in test runner.

## Global Constraints

- Preserve the existing copy, section order, true-white/black/cobalt palette, Geist typography, and centralized content model.
- Keep React, Next.js, TypeScript, Node.js, n8n, OpenAI, Vercel, and Google; add no technologies.
- Add no carousel or icon dependency.
- Use CSS transforms only for continuous motion; add no timer, `requestAnimationFrame`, or client component.
- Disable automatic movement under `prefers-reduced-motion: reduce` without hiding the primary content.
- Only the marquee viewport may clip horizontal overflow; the page must not overflow horizontally.

---

### Task 1: Add executable production-output contract tests

**Files:**

- Create: `tests/technology-marquee.test.mjs`
- Modify: `package.json`

**Interfaces:**

- Consumes: repository source files and Node.js `node:test`/`node:assert`.
- Produces: `npm test`, an integration suite that validates semantic duplication, SVG output, CSS-only motion, and reduced motion in the production build artifacts.

- [ ] **Step 1: Add a failing production-output test**

Create tests that read the prerendered homepage HTML and emitted CSS under `.next`. Assert that the real production output contains a semantic list, exactly two marquee groups, one duplicate with `aria-hidden="true"`, eight accessible technology names, decorative SVGs, a transform-only infinite linear animation, and a reduced-motion rule that stops the track and hides the duplicate group.

- [ ] **Step 2: Add the test command**

Add `"test": "next build && node --test tests/*.test.mjs"` to `package.json` so tests always inspect fresh production output.

- [ ] **Step 3: Run the test and verify RED**

Run: `npm test`

Expected: FAIL because the current string array, static spans, and existing reveal selector do not satisfy the marquee contract.

- [ ] **Step 4: Commit the failing test**

```bash
git add package.json tests/technology-marquee.test.mjs
git commit -m "test: define technology marquee contract"
```

### Task 2: Implement typed technology data and local SVG marks

**Files:**

- Modify: `src/content/site.ts`
- Create: `src/components/ui/technology-icon.tsx`
- Modify: `src/components/sections/technologies.tsx`

**Interfaces:**

- Consumes: `TechnologyIconName` union from `technology-icon.tsx`.
- Produces: `technologies: readonly { name: string; icon: TechnologyIconName }[]` and `TechnologyIcon({ name }: { name: TechnologyIconName })`.

- [ ] **Step 1: Define the icon contract**

Create a server-safe SVG component with a `TechnologyIconName` union containing `react`, `nextdotjs`, `typescript`, `nodedotjs`, `n8n`, `openai`, `vercel`, and `google`. Map each identifier to a trustworthy local path and use `viewBox="0 0 24 24"`, `fill="currentColor"`, `focusable="false"`, and `aria-hidden="true"`.

- [ ] **Step 2: Evolve centralized content**

Replace the string array with objects whose names remain unchanged and whose icon keys use the exact union values.

- [ ] **Step 3: Render two equal groups**

Render a `.technology-marquee` viewport, a `.technology-marquee-track`, and two `.technology-marquee-group` lists. Map the same eight items into each group; mark only the duplicate list `aria-hidden="true"`. Each `li` contains `TechnologyIcon` and a visible name.

- [ ] **Step 4: Run tests and inspect TypeScript**

Run: `npm test && npm run typecheck`

Expected: tests still fail only on missing CSS/reveal changes; TypeScript passes.

- [ ] **Step 5: Commit the semantic implementation**

```bash
git add src/content/site.ts src/components/ui/technology-icon.tsx src/components/sections/technologies.tsx
git commit -m "feat: add semantic technology marquee markup"
```

### Task 3: Add seamless CSS motion and reduced-motion fallback

**Files:**

- Modify: `src/app/globals.css`
- Modify: `src/components/ui/motion-controller.tsx`

**Interfaces:**

- Consumes: marquee class names produced by Task 2.
- Produces: a continuous `technology-marquee-scroll` animation and a static reduced-motion layout.

- [ ] **Step 1: Remove reveal competition**

Delete `.technology-rail .page-shell > *` from the JavaScript reveal selector, desktop scroll-timeline selector, and reduced-motion reveal reset selector where it is no longer needed.

- [ ] **Step 2: Implement the rail geometry**

Keep the desktop copy/rail columns, set the viewport to `overflow: hidden`, apply a subtle `mask-image` and `-webkit-mask-image`, size the track with `width: max-content`, and give both groups identical flex geometry and trailing padding equal to the inter-group gap.

- [ ] **Step 3: Implement continuous motion**

Animate the track with a slow linear infinite keyframe from `translate3d(0, 0, 0)` to `translate3d(-50%, 0, 0)`. Use only `transform`; apply `will-change: transform` only while motion is enabled.

- [ ] **Step 4: Add restrained item styling**

Use current ink/muted colors, stable 1.25–1.5rem icons, readable labels, and a hover-capable desktop rule that changes color to `var(--blue)` without scaling or pausing the track.

- [ ] **Step 5: Add responsive and reduced-motion modes**

At compact widths, keep readable sizing and tighten gaps without shrinking icons excessively. Under `prefers-reduced-motion: reduce`, remove animation and masking, hide the duplicate list, wrap the primary list, and clear `will-change`.

- [ ] **Step 6: Run GREEN verification**

Run: `npm test && npm run format:check && npm run lint && npm run typecheck`

Expected: all commands exit 0 with no warnings.

- [ ] **Step 7: Commit styling and motion**

```bash
git add src/app/globals.css src/components/ui/motion-controller.tsx
git commit -m "feat: animate technology marquee"
```

### Task 4: Build and browser-verify the complete page

**Files:**

- Modify only if verification exposes an in-scope defect.
- Keep temporary screenshots under `docs/audit/` during the audit; decide whether to retain them in the final report.

**Interfaces:**

- Consumes: completed markup and styles.
- Produces: fresh build, responsive screenshots, motion measurements, console/error evidence, and final audit findings.

- [ ] **Step 1: Run the production checks**

Run: `npm install`, `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.

Expected: every command exits 0 and the build completes without relevant warnings.

- [ ] **Step 2: Start and verify the local server**

Run `npm run dev`, open `http://localhost:3000` in the in-app Browser, confirm meaningful content, no framework overlay, no console errors, and functioning navigation/FAQ/form controls without submitting external data.

- [ ] **Step 3: Verify marquee behavior**

At 1440 px and 390 px, capture the technology rail at two timestamps and compare track transforms. Confirm negative X progression, identical group widths, duplicate `aria-hidden`, SVG rendering, no perceptible loop seam, and zero positive page overflow.

- [ ] **Step 4: Verify all requested breakpoints**

Check 320, 375, 390, 430, 768, 1024, 1280, and 1440 px. Confirm readable item sizes, correct clipping, stable section height, and no page-level horizontal scrolling.

- [ ] **Step 5: Verify reduced motion**

Emulate `prefers-reduced-motion: reduce`. Confirm the track transform remains static, the duplicate list is hidden, the primary list wraps and remains complete, and other page content stays visible.

- [ ] **Step 6: Inspect page landmarks**

Scroll through hero, services, technology rail, FAQ, contact, and footer at desktop and mobile. Record strengths, weaknesses, generic elements, future recommendations, and intentionally unchanged elements for the final report.

- [ ] **Step 7: Review the final diff and commit any QA fixes**

Run `git diff --check`, inspect `git diff`, and commit only scoped fixes with `git commit -m "fix: polish technology marquee responsiveness"` when needed.
