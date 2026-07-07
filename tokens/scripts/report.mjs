// report.mjs — the tripwire suite. Target: 8/8 from the first build.
//
// On a fresh client these are not archaeology; they are guards that make a
// violation fail loudly the day it is introduced. Each check maps to a
// specific KR retrofit that this sequence exists to prevent.
//
//   1. dist -> vendor sync       (site can't drift from the build)
//   2. no doubled segments       (the --kr-colour-colour-* bug)
//   3. dimensions carry units    (the line-height:80 = 80x bug)
//   4. no $value + children      (Style Dictionary silently drops children)
//   5. no hardcoded hex in site  (no literal colour ever reaches a page)
//   6. no hardcoded font-family  (families come from tokens only)
//   7. semantic-only consumption (site never reads a raw primitive var)
//   8. fonts link == token fonts (load exactly the families/weights used)
//
// Exit 0 only if all 8 pass.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SITE = process.env.ORIN_SITE_DIR || join(ROOT, '..', 'site');
const DIST = join(ROOT, 'dist', 'light', 'variables.css');
const VENDOR = join(SITE, 'vendor', 'tokens.css');
const FLAT = join(ROOT, 'dist', 'light', 'tokens.flat.json');
const SRC_DIR = join(ROOT, 'src');
const INDEX = join(SITE, 'index.html');

// Prefixes the site is ALLOWED to consume (the semantic + system layers)…
const CONSUMABLE = ['colour-', 'font-', 'space-', 'radius-'];
// …and the raw primitives it must NEVER reference directly.
const PRIMITIVE = ['neutral-', 'teal-', 'family-', 'weight-'];
// Canonical font facts, derived from the tokens (see primitives.json).
const TOKEN_FAMILIES = ['Inter', 'Inter Tight', 'Source Serif 4'];
const TOKEN_WEIGHTS = ['400', '500', '600'];

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : null);

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (name === 'vendor' || name === 'node_modules') return [];
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const siteSources = () => walk(SITE).filter((f) => /\.(css|html|js)$/.test(f));
const rel = (f) => f.replace(SITE, 'site');

const results = [];
const check = (name, fn) => {
  try {
    const detail = fn();
    results.push({ name, pass: !detail, detail });
  } catch (e) {
    results.push({ name, pass: false, detail: e.message });
  }
};

// 1 — dist -> vendor sync
check('dist → vendor in sync', () => {
  const a = read(DIST), b = read(VENDOR);
  if (a == null) return 'dist/light/variables.css missing (run build)';
  if (b == null) return 'site/vendor/tokens.css missing (run sync)';
  return a === b ? '' : 'vendor/tokens.css differs from dist — run sync';
});

// 2 — no doubled path segments in generated var names
check('no doubled path segments', () => {
  const css = read(VENDOR) || read(DIST) || '';
  const bad = [...css.matchAll(/--orin-([a-z0-9]+)-\1-/gi)].map((m) => m[0]);
  return bad.length ? `doubled segment(s): ${[...new Set(bad)].join(', ')}` : '';
});

// 3 — every dimension token carries a unit
check('dimensions carry units', () => {
  const flat = JSON.parse(read(FLAT) || '{}');
  const offenders = Object.entries(flat)
    .filter(([k]) => /^orin-(space|radius|font-size)-/.test(k))
    .filter(([, v]) => !/(rem|px|em|%|vh|vw)$/.test(String(v)))
    .map(([k]) => k);
  return offenders.length ? `unitless: ${offenders.join(', ')}` : '';
});

// 4 — no token has both $value and child tokens
check('no $value + children', () => {
  const offenders = [];
  const scan = (node, path) => {
    if (node && typeof node === 'object' && '$value' in node) {
      const kids = Object.keys(node).filter((k) => !k.startsWith('$'));
      if (kids.length) offenders.push(path.join('.'));
      return;
    }
    if (node && typeof node === 'object') {
      for (const [k, v] of Object.entries(node)) {
        if (!k.startsWith('$')) scan(v, [...path, k]);
      }
    }
  };
  for (const f of walk(SRC_DIR).filter((f) => f.endsWith('.json'))) {
    scan(JSON.parse(read(f)), []);
  }
  return offenders.length ? `offending tokens: ${offenders.join(', ')}` : '';
});

// 5 — no hardcoded hex colours anywhere in site source (vendor excluded)
check('no hardcoded hex in site', () => {
  const hits = [];
  for (const f of siteSources()) {
    // Match #rgb/#rgba/#rrggbb/#rrggbbaa, but not HTML numeric entities (&#8209;).
    const m = read(f).match(/(?<![&\w])#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g);
    if (m) hits.push(`${rel(f)} (${[...new Set(m)].join(', ')})`);
  }
  return hits.length ? hits.join('; ') : '';
});

// 6 — no hardcoded font-family in site source (must be var(--orin-font-family-…))
check('no hardcoded font-family', () => {
  const hits = [];
  for (const f of siteSources()) {
    for (const m of read(f).matchAll(/font-family\s*:\s*([^;}\n]+)/gi)) {
      // Value must resolve through a custom property (ultimately an Orin
      // font-family token) — never a literal family name or bare generic.
      if (!/var\(/.test(m[1])) hits.push(`${rel(f)}: ${m[1].trim()}`);
    }
  }
  return hits.length ? hits.join('; ') : '';
});

// 7 — semantic-only consumption: site references no raw primitive var
check('semantic-only consumption', () => {
  const hits = [];
  for (const f of siteSources()) {
    for (const m of read(f).matchAll(/var\(\s*--orin-([a-z0-9-]+)/gi)) {
      if (PRIMITIVE.some((p) => m[1].startsWith(p))) hits.push(`${rel(f)}: --orin-${m[1]}`);
    }
  }
  return hits.length ? hits.join('; ') : '';
});

// 8 — the one Google Fonts link matches the token families/weights exactly
check('fonts link ↔ tokens match', () => {
  const html = read(INDEX);
  if (html == null) return 'index.html missing';
  const link = (html.match(/https:\/\/fonts\.googleapis\.com\/css2\?[^"'\s]+/) || [])[0];
  if (!link) return 'no fonts.googleapis.com css2 link in index.html';
  const families = [...link.matchAll(/family=([^:&]+):wght@([0-9;]+)/g)];
  const linkFamilies = families.map((m) => decodeURIComponent(m[1]).replace(/\+/g, ' '));
  const linkWeights = new Set(families.flatMap((m) => m[2].split(';')));
  const famMismatch =
    [...TOKEN_FAMILIES].sort().join('|') !== [...linkFamilies].sort().join('|');
  if (famMismatch) return `families ${linkFamilies.join(', ')} ≠ tokens ${TOKEN_FAMILIES.join(', ')}`;
  const wMissing = TOKEN_WEIGHTS.filter((w) => !linkWeights.has(w));
  const wExtra = [...linkWeights].filter((w) => !TOKEN_WEIGHTS.includes(w));
  if (wMissing.length) return `link missing weights: ${wMissing.join(', ')}`;
  if (wExtra.length) return `link loads unused weights: ${wExtra.join(', ')}`;
  return '';
});

// ---- output ----
const passed = results.filter((r) => r.pass).length;
console.log(`\nOrin token report — ${passed}/${results.length} passing\n`);
for (const r of results) {
  console.log(`  ${r.pass ? '✓' : '✗'}  ${r.name}${r.pass ? '' : `\n        ↳ ${r.detail}`}`);
}
console.log('');
process.exit(passed === results.length ? 0 : 1);
