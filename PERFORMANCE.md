# Performance pass

This revision keeps the approved visual system while reducing runtime work:

- route-aware motion runtime re-initializes cleanly after App Router navigation;
- case → home uses a clean document navigation for deterministic state reset;
- project carousel RAF stops when it has no visible/active work;
- pointer effects are coalesced to one update per animation frame;
- project focus/state writes are skipped when values have not materially changed;
- offscreen hero-logo and technology marquee animations are paused;
- project covers use native `<img loading="lazy">` instead of eager CSS backgrounds;
- below-fold case sections use `content-visibility: auto`;
- heavy local screenshots were converted to WebP (Crivo ~747 KB → ~60 KB; Ferreira ~2.1 MB → ~178 KB);
- the hero depth effect uses a dedicated ~19 KB WebP while the official SVG remains in the header;
- unused form/analytics dependencies were removed from `package.json`;
- local visual assets receive conservative browser caching headers.

Run before deploy:

```bash
npm install
npm run typecheck
npm run build
```
