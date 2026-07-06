// verify-build.mjs — the CONSUMER CONTRACT.
//
// Fails if the site references any var(--orin-…) that the built vendor
// tokens do not define. This is the tripwire that catches a token being
// renamed or removed out from under a page. CI (Chromatic) does NOT run
// this — protection is local. Run it before every push.
//
// Exit 0 = clean. Exit 1 = the site depends on a token that doesn't exist.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SITE = process.env.ORIN_SITE_DIR || join(ROOT, '..', 'site');
const VENDOR = join(SITE, 'vendor', 'tokens.css');

const VAR_REF = /var\(\s*(--orin-[a-z0-9-]+)/gi;
const VAR_DEF = /^\s*(--orin-[a-z0-9-]+)\s*:/gim;

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (name === 'vendor' || name === 'node_modules') return [];
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function siteSources() {
  return walk(SITE).filter((f) => /\.(css|html|js)$/.test(f));
}

if (!existsSync(VENDOR)) {
  console.error(`verify: ${VENDOR} missing — run 'npm run sync' first`);
  process.exit(1);
}

const defined = new Set(
  [...readFileSync(VENDOR, 'utf8').matchAll(VAR_DEF)].map((m) => m[1])
);

const missing = [];
for (const file of siteSources()) {
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(VAR_REF)) {
    if (!defined.has(m[1])) missing.push({ file: file.replace(SITE, 'site'), token: m[1] });
  }
}

if (missing.length) {
  console.error('✗ verify-build FAILED — site references undefined tokens:');
  for (const { file, token } of missing) console.error(`    ${token}  (${file})`);
  process.exit(1);
}

console.log(`✓ verify-build clean — every var(--orin-…) resolves (${defined.size} tokens defined)`);
