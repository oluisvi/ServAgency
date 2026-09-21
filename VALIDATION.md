# Validation — official logo + carousel actions

## Validated in this package

- 23 TypeScript / TSX source files passed TypeScript `transpileModule` syntax diagnostics with 0 errors.
- `src/app/globals.css` has balanced braces (766 / 766).
- Portfolio and case-study slugs match 10 / 10.
- `public/logo.svg` is bundled locally.
- Carousel action links are excluded from drag pointer capture.
- `Ver case` uses a native internal anchor so cloned infinite-carousel slides preserve navigation.
- `Ver ao vivo` remains a normal external anchor.
- Repository/code buttons were removed from the carousel and case-study UI.
- The new Alvora Lab and Casa Aurora repository URLs are recorded in project data.
- Alvora Lab and Casa Aurora case copy/stack were updated from their real repository documentation.

## Build gate

The environment timed out while installing npm dependencies, so a full Next.js build could not be executed here. Run after extracting:

```bash
npm install
npm run typecheck
npm run build
```

The previous stale Tailwind/PostCSS config is not part of this package.
