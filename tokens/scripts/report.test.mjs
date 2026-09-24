// report.test.mjs — proves each of the nine report checks can fail.
//
// A check that cannot fail looks exactly like a check that passes. On
// 2026-08-28 two guardrails turned out to be guarding less than their names
// said, and the fix was confirmed by breaking things by hand: a wrong family on
// one page, a missing link on one page, a weight dropped from one family, a
// family changed in the tokens with the pages untouched. None of that was kept.
// This keeps it, and gives every other check the same treatment.
//
// Each case copies the real build and site into a temp dir, breaks one thing,
// runs report.mjs against the copy, and asserts the named check went red. The
// pristine copy must pass 9/9 first, or every red below proves nothing.
//
// Needs a fresh build (dist/), so `npm test` runs it last.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TOKENS = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(TOKENS, '..', 'site');
const REPORT = join(TOKENS, 'scripts', 'report.mjs');

/** Copy the build and the site, apply `mutate`, run the report, return failed check names. */
function run(mutate = () => {}) {
  const dir = mkdtempSync(join(tmpdir(), 'orin-report-'));
  try {
    const tokens = join(dir, 'tokens');
    const site = join(dir, 'site');
    cpSync(join(TOKENS, 'dist'), join(tokens, 'dist'), { recursive: true });
    cpSync(join(TOKENS, 'src'), join(tokens, 'src'), { recursive: true });
    cpSync(SITE, site, { recursive: true });

    const edit = (rel, fn) => {
      const p = join(dir, rel);
      writeFileSync(p, fn(readFileSync(p, 'utf8')));
    };
    mutate({ dir, edit });

    let out;
    try {
      out = execFileSync('node', [REPORT], {
        env: { ...process.env, ORIN_TOKENS_DIR: tokens, ORIN_SITE_DIR: site },
        encoding: 'utf8',
      });
    } catch (e) {
      out = e.stdout;
    }
    return [...out.matchAll(/✗ {2}(.+)/g)].map((m) => m[1].trim());
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const FLAT = 'tokens/dist/light/tokens.flat.json';
const editFlat = (edit, fn) => edit(FLAT, (s) => JSON.stringify(fn(JSON.parse(s)), null, 2));
const appendCss = (edit, css) => {
  edit('tokens/dist/light/variables.css', (s) => s + css);
  edit('site/vendor/tokens.css', (s) => s + css);
};

test('pristine copy passes 9/9', () => {
  assert.deepEqual(run(), []);
});

test('1 fails when vendor drifts from dist', () => {
  assert.deepEqual(run(({ edit }) => edit('site/vendor/tokens.css', (s) => s + '\n/* drift */\n')), [
    'dist → vendor in sync',
  ]);
});

test('2 fails on a doubled path segment', () => {
  // Written to dist and vendor alike, so check 1 stays green and only 2 goes red.
  assert.deepEqual(run(({ edit }) => appendCss(edit, '\n:root { --orin-colour-colour-x: red; }\n')), [
    'no doubled path segments',
  ]);
});

test('3 fails on a unitless dimension', () => {
  assert.deepEqual(run(({ edit }) => editFlat(edit, (f) => ({ ...f, 'orin-space-4': '16' }))), [
    'dimensions carry units',
  ]);
});

test('4 fails on a token with both $value and children', () => {
  const failed = run(({ dir }) =>
    writeFileSync(join(dir, 'tokens/src/zz-bad.json'), JSON.stringify({ a: { $value: '1px', b: { $value: '2px' } } })),
  );
  assert.deepEqual(failed, ['no $value + children']);
});

test('5 fails on a literal hex colour in site source', () => {
  assert.deepEqual(run(({ edit }) => edit('site/styles.css', (s) => s + '\n.x { color: #fff; }\n')), [
    'no hardcoded hex in site',
  ]);
});

test('6 fails on a literal font-family in site source', () => {
  assert.deepEqual(run(({ edit }) => edit('site/styles.css', (s) => s + '\n.x { font-family: Arial; }\n')), [
    'no hardcoded font-family',
  ]);
});

test('7 fails on a raw primitive', () => {
  assert.deepEqual(run(({ edit }) => edit('site/styles.css', (s) => s + '\n.x { color: var(--orin-teal-500); }\n')), [
    'semantic-only consumption',
  ]);
});

test('7 fails on a layer nobody allowlisted (breakpoints)', () => {
  assert.deepEqual(
    run(({ edit }) => edit('site/styles.css', (s) => s + '\n.x { width: var(--orin-breakpoint-md); }\n')),
    ['semantic-only consumption'],
  );
});

// The four failure modes 2026-08-28 confirmed by hand. Each breaks ONE page
// that is not the homepage, because reading index.html alone was the bug.
const PAGE = 'site/contact/index.html';

test('8 fails on a wrong family on one page', () => {
  assert.deepEqual(run(({ edit }) => edit(PAGE, (s) => s.replace('family=Inter+Tight:', 'family=Roboto:'))), [
    'fonts link ↔ tokens match',
  ]);
});

test('8 fails on a missing fonts link on one page', () => {
  assert.deepEqual(
    run(({ edit }) => edit(PAGE, (s) => s.replace(/<link[^>]+fonts\.googleapis\.com\/css2[^>]*>/, ''))),
    ['fonts link ↔ tokens match'],
  );
});

test('8 fails on a weight dropped from one family while the other still loads it', () => {
  // Pooled weights masked exactly this: Inter still loads 500, so the pooled
  // set was complete while Inter Tight rendered a synthesised 500.
  assert.deepEqual(
    run(({ edit }) => edit(PAGE, (s) => s.replace('Inter+Tight:wght@400;500;600', 'Inter+Tight:wght@400;600'))),
    ['fonts link ↔ tokens match'],
  );
});

test('8 fails on a family changed in the tokens with the pages untouched', () => {
  const failed = run(({ edit }) =>
    editFlat(edit, (f) => ({ ...f, 'orin-font-family-display': "'Source Serif 4', Georgia, serif" })),
  );
  assert.deepEqual(failed, ['fonts link ↔ tokens match']);
});

test('9 fails on a custom property defined in site source', () => {
  assert.deepEqual(run(({ edit }) => edit('site/styles.css', (s) => s + '\n:root { --gutter: 1rem; }\n')), [
    'no local custom properties',
  ]);
});
