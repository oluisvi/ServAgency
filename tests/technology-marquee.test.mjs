import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const projectRoot = process.cwd();
const homeHtml = await readFile(
  path.join(projectRoot, ".next", "server", "app", "index.html"),
  "utf8",
);
const cssDirectory = path.join(projectRoot, ".next", "static");
const cssFiles = (await readdir(cssDirectory, { recursive: true })).filter(
  (file) => file.endsWith(".css"),
);
const emittedCss = (
  await Promise.all(
    cssFiles.map((file) => readFile(path.join(cssDirectory, file), "utf8")),
  )
).join("\n");

const technologySection = homeHtml.match(
  /<section class="technology-rail"[\s\S]*?<\/section>/,
)?.[0];

test("renders one accessible technology list and one hidden visual duplicate", () => {
  assert.ok(technologySection, "technology rail should be prerendered");
  assert.equal(
    technologySection.match(/class="technology-marquee-group"/g)?.length,
    2,
    "the production HTML should contain two equal marquee groups",
  );
  assert.equal(
    technologySection.match(/aria-hidden="true"/g)?.length,
    17,
    "sixteen decorative SVGs and only the duplicate list should be hidden",
  );

  for (const name of [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "n8n",
    "OpenAI",
    "Vercel",
    "Google",
  ]) {
    assert.equal(
      technologySection.match(new RegExp(`>${name}<`, "g"))?.length,
      2,
      `${name} should appear once in each equal-width group`,
    );
  }
});

test("emits a transform-only infinite marquee with a static reduced-motion mode", () => {
  assert.match(emittedCss, /@keyframes technology-marquee-scroll/);
  assert.match(
    emittedCss,
    /animation:[^;}]*linear[^;}]*infinite[^;}]*technology-marquee-scroll/,
  );
  assert.match(
    emittedCss,
    /@keyframes technology-marquee-scroll\{to\{transform:translate\(-50%\)\}\}/,
  );
  assert.match(
    emittedCss,
    /@media\s*\(prefers-reduced-motion:reduce\)[\s\S]*?\.technology-marquee-group\[aria-hidden=true\][^{]*\{[^}]*display:none/,
  );
});
