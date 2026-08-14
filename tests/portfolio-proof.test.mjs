import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const homeHtml = await readFile(
  path.join(process.cwd(), ".next", "server", "app", "index.html"),
  "utf8",
);

const projects = [
  {
    name: "Atlas Finance AI",
    liveUrl: "https://atlas-finance-web.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/atlas-finance-ai",
  },
  {
    name: "EcoEduca",
    liveUrl: "https://ecoeduca.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/EcoEduca",
  },
  {
    name: "UrbanFarm",
    liveUrl: "https://fazenda-urbana.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/fazenda_urbana",
  },
  {
    name: "Shop.co",
    liveUrl: "https://shop-co-ecommerce-three.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/shop-co-ecommerce",
  },
  {
    name: "Sanctuary Hotel",
    liveUrl: "https://sanctuaryhotel.my.canva.site/",
    sourceUrl: "https://github.com/oluisvi/Design-Sanctuary-Hotel",
  },
];

test("renders truthful portfolio proof in the production HTML", () => {
  assert.ok(
    homeHtml.includes(
      "Experi\u00eancia constru\u00edda pela equipe por tr\u00e1s da ServAgency",
    ),
    "the portfolio attribution should render",
  );

  for (const project of projects) {
    assert.ok(homeHtml.includes(project.name), `${project.name} should render`);
    assert.ok(
      homeHtml.includes(project.liveUrl),
      `${project.name} live URL should render`,
    );
    assert.ok(
      homeHtml.includes(project.sourceUrl),
      `${project.name} source URL should render`,
    );
  }

  for (const placeholder of [
    "Projeto conceitual",
    "Fundador 01",
    "Fundador 02",
    "[Foto, nome e especialidade]",
  ]) {
    assert.ok(
      !homeHtml.includes(placeholder),
      `${placeholder} should not render`,
    );
  }
});
