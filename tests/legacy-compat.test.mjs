import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (path) => fs.readFileSync(new URL(path, import.meta.url), "utf8");

const audit = read("../src/components/sections/audit.tsx");
const problems = read("../src/components/sections/problems.tsx");
const projectCard = read("../src/components/ui/project-card.tsx");
const projectScene = read("../src/components/ui/project-scene.tsx");

test("legacy compatibility shims do not depend on the pre-redesign content model", () => {
  assert.doesNotMatch(audit, /auditAreas/);
  assert.doesNotMatch(problems, /import\s*\{\s*problems\s*\}/);
  assert.doesNotMatch(projectCard, /featured:\s*true|\.screenshot/);
});

test("project scene does not import the removed Lucide Github brand icon", () => {
  assert.doesNotMatch(projectScene, /\bGithub\b/);
  assert.match(projectScene, /\bBraces\b/);
});
