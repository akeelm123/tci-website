import { mkdir, readdir, readFile, writeFile, cp, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'assets', 'versioned'), { recursive: true });
await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });

const replacements = new Map();
const assetPaths = [];
async function collectAssets(directory) {
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = `${directory}/${entry.name}`;
    if (entry.isDirectory()) {
      if (entry.name !== 'downloads') await collectAssets(relative);
    } else if (/\.(css|js|webp|png|svg|avif|woff2)$/i.test(entry.name) && !entry.name.includes('logo')) {
      assetPaths.push(relative);
    }
  }
}
await collectAssets('assets');
// Version dependencies before CSS, then hash the rewritten CSS content.
assetPaths.sort((a, b) => Number(a.endsWith('.css')) - Number(b.endsWith('.css')));
for (const relative of assetPaths) {
  let content = await readFile(path.join(root, relative));
  if (relative.endsWith('.css')) {
    let css = content.toString('utf8');
    for (const [source, destination] of replacements) css = css.replaceAll(source, destination);
    content = Buffer.from(css);
  }
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 16);
  const extension = path.extname(relative);
  const destination = `assets/versioned/${path.basename(relative, extension)}.${hash}${extension}`;
  await writeFile(path.join(output, destination), content);
  replacements.set(relative, destination);
}
for (const name of await readdir(root)) {
  if (name.endsWith('.html')) {
    let html = await readFile(path.join(root, name), 'utf8');
    for (const [source, destination] of replacements) html = html.replaceAll(source, destination);
    await writeFile(path.join(output, name), html);
  } else if (['robots.txt', 'sitemap.xml', 'favicon.ico', 'site.webmanifest'].includes(name)) {
    await cp(path.join(root, name), path.join(output, name));
  }
}
console.log(`Built static site with ${replacements.size} versioned assets.`);
