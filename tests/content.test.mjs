import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const content = fs.readFileSync(new URL("../src/content/site.ts", import.meta.url), "utf8");

const expectedProjects = [
  "Ruvro & Co",
  "Lamim's Barbershop",
  "FlowDesk",
  "Atlas Finance AI",
  "Shop.co",
];

for (const project of expectedProjects) {
  test(`flagship portfolio includes ${project}`, () => {
    assert.match(content, new RegExp(project.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")));
  });
}

test("Lamim's production URL is configured", () => {
  assert.match(content, /https:\/\/lamim-s-barbershop\.vercel\.app\//);
});
