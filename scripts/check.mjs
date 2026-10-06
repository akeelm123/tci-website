import { readFile, readdir, access } from 'node:fs/promises';
import { strict as assert } from 'node:assert';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const pages = (await readdir(root)).filter(name => name.endsWith('.html'));
let references = 0;
for (const file of pages) {
  const html = await readFile(path.join(root, file), 'utf8');
  assert(!/Akeel Advisory|AKEEL ADVISORY|akeel-advisory-(?:logo|social)/.test(html), `${file}: obsolete brand`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${file}: one main heading`);
  assert(html.includes('ANLAQ home') && html.includes('ANLAQ Advisory Pte. Ltd.'), `${file}: shared identity`);
  assert(html.includes('site.webmanifest'), `${file}: browser identity`);
  assert(/rel="canonical" href="https:\/\/(?:anlaq|akeel-advisory)\.vercel\.app\//.test(html), `${file}: canonical preserved`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${file}: duplicate IDs`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|data:)/.test(href)) continue;
    const parsed = new URL(href, `https://local/${file}`);
    const target = parsed.pathname === '/' ? 'index.html' : parsed.pathname.slice(1);
    await access(path.join(root, target)); references++;
    if (parsed.hash && target.endsWith('.html')) {
      const dest = await readFile(path.join(root, target), 'utf8');
      assert(dest.includes(`id="${decodeURIComponent(parsed.hash.slice(1))}"`), `${file}: missing anchor ${href}`);
    }
  }
  for (const schema of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(schema[1]);
}
const tci = await readFile(path.join(root, 'tci.html'), 'utf8');
for (const dimension of ['Strategic Alignment', 'Leadership Commitment', 'Technology Readiness', 'People &amp; Culture', 'Data &amp; AI Confidence', 'Delivery Excellence', 'Business Value Realisation']) assert(tci.includes(`<h3>${dimension}</h3>`), dimension);
const services = await readFile(path.join(root, 'services.html'), 'utf8');
for (const id of ['tci-self-assessment','executive-diagnostic','ai-review','transformation-assessment']) assert(new RegExp(`<details[^>]*class="[^"]*service-tab[^>]*id="${id}"`).test(services), id);
for (const script of ['assets/js/site.js', 'scripts/build.mjs', 'scripts/check.mjs']) execFileSync(process.execPath, ['--check', path.join(root, script)]);
JSON.parse(await readFile(path.join(root, 'site.webmanifest'), 'utf8'));
console.log(`Passed: ${pages.length} pages, ${references} local references, canonical metadata, schema, seven dimensions, four packages and JavaScript syntax.`);
