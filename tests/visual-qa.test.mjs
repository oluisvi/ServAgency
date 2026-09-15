import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (path) => fs.readFileSync(new URL(path, import.meta.url), "utf8");
const css = read("../src/app/globals.css");
const content = read("../src/content/site.ts");
const scene = read("../src/components/ui/project-scene.tsx");

test("premium palette no longer uses the old neon green accent", () => {
  assert.doesNotMatch(css, /#5cff66|#7dff85|92 255 102/);
  assert.match(css, /--accent:\s*#ff5c35/);
});

test("section intro grid keeps heading and paragraph in the content column", () => {
  assert.match(css, /section-intro > h2, \.section-intro > p, \.section-intro > div \{ grid-column: 2; \}/);
});

test("flagship work uses authentic imagery instead of generated CSS mockups", () => {
  for (const asset of ["hero-watch.png", "BarbeariaLamims", "flowdesk.png", "atlas-finance.webp", "shopco.png"]) {
    assert.ok(content.includes(asset), `missing real project asset ${asset}`);
  }
  assert.match(scene, /<Image/);
  assert.doesNotMatch(scene, /watch-form|kanban-lane|commerce-product|chart-line/);
});

test("short desktop viewports disable sticky project collisions", () => {
  assert.match(css, /max-height:\s*780px/);
  assert.match(css, /project-sticky \{ position: relative; top: auto; min-height: auto; \}/);
});
