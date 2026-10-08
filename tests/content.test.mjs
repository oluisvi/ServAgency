import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const content = fs.readFileSync(new URL("../src/content/site.ts", import.meta.url), "utf8");

const expectedProjects = [
  "Pão do Pedro",
  "Casa Miga",
  "Lume Music",
  "Lamim's Barbershop",
  "Ferreira Imóveis",
  "Shop.co",
  "Ruvro & Co",
  "Casa Aurora",
  "Alvora Lab",
];

for (const project of expectedProjects) {
  test(`flagship portfolio includes ${project}`, () => {
    assert.match(content, new RegExp(project.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")));
  });
}

test("Lamim's production URL is configured", () => {
  assert.match(content, /https:\/\/lamim-s-barbershop\.vercel\.app\//);
});

test("catalog contains exactly the approved nine projects", () => {
  assert.match(content, /const approvedPortfolioOrder = \[[^\]]*\] as const;/);
  const order = content.match(/const approvedPortfolioOrder = \[([^\]]*)\]/)?.[1] ?? "";
  assert.equal((order.match(/"[^"]+"/g) ?? []).length, 9);
  assert.doesNotMatch(content, /FlowDesk|Atlas Finance AI|Crivo 3D/);
  assert.match(content, /https:\/\/pao-do-pedro\.vercel\.app\//);
  assert.match(content, /https:\/\/casa-miga\.vercel\.app\//);
  assert.match(content, /https:\/\/lume-music-tan\.vercel\.app\//);
});
