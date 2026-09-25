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
async function versionAssets(directory) {
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = `${directory}/${entry.name}`;
    if (entry.isDirectory()) {
      if (entry.name !== 'downloads') await versionAssets(relative);
    } else if (/\.(css|js|webp|png|svg|avif)$/i.test(entry.name) && !entry.name.includes('logo')) {
      const content = await readFile(path.join(root, relative));
      const hash = createHash('sha256').update(content).digest('hex').slice(0, 16);
      const extension = path.extname(entry.name);
      const name = `${path.basename(entry.name, extension)}.${hash}${extension}`;
      const destination = `assets/versioned/${name}`;
      await writeFile(path.join(output, destination), content);
      replacements.set(relative, destination);
    }
  }
}
await versionAssets('assets');
for (const name of await readdir(root)) {
  if (name.endsWith('.html')) {
    let html = await readFile(path.join(root, name), 'utf8');
    for (const [source, destination] of replacements) html = html.replaceAll(source, destination);
    await writeFile(path.join(output, name), html);
  } else if (['robots.txt', 'sitemap.xml', 'favicon.ico'].includes(name)) {
    await cp(path.join(root, name), path.join(output, name));
  }
}
console.log(`Built static site with ${replacements.size} versioned assets.`);
