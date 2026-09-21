# Validation — navigation repair + performance pass

## Fixed

- Home-only motion runtime now mounts with the home route and unmounts when leaving it.
- Returning from a case no longer reuses stale observers/listeners from a different DOM tree.
- The case `Projetos` action uses a clean `/#projetos` document navigation as an additional fail-safe.
- Thematic entry only exists in the home route bundle.

## Performance changes

- Carousel animation frame loop stops when the carousel has no visible/active work.
- Pointer-driven effects are coalesced to one update per browser animation frame.
- Carousel slide focus/state DOM writes are skipped when values did not materially change.
- Decorative logo and technology-marquee loops pause while offscreen.
- Project cover media uses native lazy-loaded images instead of CSS background images.
- Below-the-fold case sections use `content-visibility: auto`.
- Case hero images decode asynchronously and are prioritized only where needed.
- Case routes use `dynamicParams = false` and are statically generated from the known case list.
- Unused React Hook Form / Zod / Vercel analytics packages were removed.
- Local visual assets get conservative cache headers.
- Public assets dropped from roughly 3.3 MB to roughly 0.6 MB by replacing the two largest PNG screenshots with high-quality WebP and using a dedicated small hero-logo WebP.

## Static checks performed

- TypeScript parser reported no syntax/control-flow errors in the changed files. Full typecheck cannot run without installed project dependencies.
- CSS opening/closing braces are balanced.
- 10 portfolio projects and 10 case-study slugs remain present.
- Local image references used by the revised carousel/cases exist in `public/`.
- No repository/code link is rendered in project cards or case pages.

## Required pre-deploy commands

```bash
npm install
npm run typecheck
npm run build
```

The dependency install could not be completed in this environment because the network install timed out, so a full Next.js production build is not claimed here.
