# Technology Marquee — Design Specification

## Context

The ServAgency homepage already has a strong editorial system based on true white, black, cobalt blue, Geist typography, modular grids, and restrained motion. The current technology section is a static text row between Projects and About. It communicates the stack, but it has less visual presence and technical character than the sections around it.

This change refines that section without redesigning the page. The existing copy, section order, palette, typography, and centralized content model remain intact.

## Goals

- Turn the technology list into quiet ambient motion that reinforces technical capability.
- Keep every technology readable and recognizable.
- Preserve Server Components and avoid runtime JavaScript for the marquee.
- Provide a complete static experience when reduced motion is requested.
- Avoid duplicated announcements in assistive technology.
- Prevent layout shift, page-level horizontal overflow, and perceptible loop seams.

## Selected Visual Direction

Each item combines a recognizable monochrome SVG icon with its visible technology name. Items use the current ink color by default and gain the existing ServAgency blue on hover-capable desktop devices. The section keeps its existing explanatory sentence and restrained border treatment.

The marquee viewport receives a subtle lateral mask so items enter and leave naturally. The mask is enhancement-only: browsers without support still show a clean clipped rail. Official brand colors are not used permanently because eight unrelated colors would weaken the site's focused identity.

## Content and Icons

The technology list remains centralized in `src/content/site.ts` and contains only the existing technologies:

- React
- Next.js
- TypeScript
- Node.js
- n8n
- OpenAI
- Vercel
- Google

Each content entry gains a stable icon identifier. SVG artwork is stored locally or implemented as a small local icon component using authoritative paths from official brand assets or Simple Icons. No broad icon dependency is added for eight marks.

Decorative SVGs use `aria-hidden="true"`; the visible names provide the accessible labels. Items remain plain list content rather than links or buttons.

## Structure and Architecture

`Technologies` remains a Server Component. It renders:

1. The existing explanatory paragraph.
2. A semantic list inside a clipped marquee viewport.
3. Two visually identical list groups required for the continuous loop.

The first group is the accessible source of truth. The duplicate group is marked `aria-hidden="true"` and does not add redundant content to the accessibility tree.

The implementation stays within the current section component unless the icon markup makes a small `technology-icon.tsx` UI component clearly easier to maintain. No client component, carousel library, timer, or `requestAnimationFrame` loop is introduced.

## Motion

The track contains two equal-width groups and animates from `translate3d(0, 0, 0)` to `translate3d(-50%, 0, 0)`. Equal group geometry makes the ending frame visually identical to the starting frame, producing a seamless right-to-left loop.

The duration is deliberately slow and uses a linear timing function. Mobile may use a slightly longer duration or tighter item gaps to preserve reading time. The marquee is treated as ambient motion and is removed from the generic section reveal selector so the two systems do not blur or transform the same track simultaneously.

Hover does not pause the rail because the items are informational rather than interactive. Hover only increases contrast and changes the item color to the existing blue.

## Reduced Motion

Under `prefers-reduced-motion: reduce`:

- The marquee animation is disabled completely.
- The duplicated visual group is hidden.
- The primary list wraps into a readable static horizontal list or responsive grid.
- No technology is hidden from the user or accessibility tree.

The existing global reduced-motion policy remains in place.

## Responsiveness

Desktop keeps the current two-column composition: explanatory copy on the left and the rail on the right. At 1024 px and below, the content stacks as it does today, with the rail occupying the available width.

Items retain a readable icon and text size across 320, 375, 390, 430, 768, 1024, 1280, and 1440 px widths. Only the marquee viewport clips overflow; the page itself must not gain horizontal scrolling.

## Accessibility

- The section keeps an accessible name.
- Technologies are rendered as semantic list items.
- Only one group is exposed to assistive technology.
- SVGs are decorative because adjacent visible text names each technology.
- No fake click behavior is added.
- Reduced motion exposes a stable, complete list.
- Existing focus behavior elsewhere on the page is preserved.

## Performance

- CSS-only animation using compositor-friendly transforms.
- No new client-side JavaScript or hydration boundary.
- No carousel dependency.
- Small local SVG assets/components only.
- Stable item dimensions minimize layout shifts.
- `will-change` is limited to the moving track and removed in reduced-motion mode.

## Scope of Additional Refinements

Only small issues directly demonstrated by the audit may be corrected. The technology rail will be excluded from the generic reveal system because the existing blur/reveal can compete with the marquee during entry. No broader changes to identity, copy, page structure, typography, colors, hero, service layout, projects, FAQ, contact, or footer are included.

## Verification

Technical verification will run:

- `npm install`
- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

Browser verification will cover the published baseline and local implementation at 1440 px and 390 px, plus responsive checks at all requested widths. It will confirm continuous right-to-left movement, loop continuity, reduced-motion behavior, semantic duplication handling, absence of page overflow, absence of console errors, and correct rendering of the major page sections.

## Out of Scope

- General redesign or copy rewrite.
- New technologies or claims.
- Interactive carousel controls.
- Links on technology items.
- Permanent official brand colors.
- A new animation library or client-side carousel runtime.

