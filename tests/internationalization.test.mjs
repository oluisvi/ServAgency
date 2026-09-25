import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const portugueseHtml = await readFile(
  path.join(root, ".next", "server", "app", "index.html"),
  "utf8",
);
const englishHtml = await readFile(
  path.join(root, ".next", "server", "app", "en.html"),
  "utf8",
);
const proxySource = await readFile(path.join(root, "src", "proxy.ts"), "utf8");

test("prerenders equivalent Portuguese and English experiences", () => {
  assert.ok(portugueseHtml.includes("Construímos sistemas"));
  assert.ok(englishHtml.includes("We build digital"));

  for (const html of [portugueseHtml, englishHtml]) {
    for (const sectionId of [
      "inicio",
      "solucoes",
      "processo",
      "projetos",
      "sobre",
      "contato",
    ]) {
      assert.match(html, new RegExp(`id=["']${sectionId}["']`));
    }
    assert.ok(
      html.includes("aria-pressed"),
      "the language switcher should render",
    );
  }
});

test("uses Vercel country detection and a persisted manual preference", () => {
  assert.ok(proxySource.includes("x-vercel-ip-country"));
  assert.ok(proxySource.includes("localeCookie"));
  assert.ok(proxySource.includes('matcher: "/"'));
});
