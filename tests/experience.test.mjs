import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const css = fs.readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const page = fs.readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");

test("reduced motion has an explicit fallback", () => {
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("home keeps semantic project and contact scenes", () => {
  assert.match(page, /<Projects \/>/);
  assert.match(page, /<Contact \/>/);
});
