/**
 * leak-check.mjs — does this commit put a client's people on the public remote?
 *
 * WHY THIS EXISTS
 * On 2026-08-25 client material reached this public remote and getting it off
 * cost a history rewrite across 188 commits and a GitHub support ticket, because
 * a public remote serves deleted files by SHA long after they leave `main`. The
 * protection since then has been `.gitignore` plus care. `.gitignore` guards
 * paths; nothing guarded what gets typed into a tracked file. The 2026-09-08
 * decision took the last first name off the file going forward. Ten days later
 * one was back in `decisions.md`, and another had sat in `CLAUDE.md` the whole
 * time. Care is not a mechanism.
 *
 * WHAT IT CHECKS
 * Added lines only, plus the paths being added and the commit message. Existing
 * lines are the 2026-08-25 and 2026-09-08 decisions' business, not this script's:
 * it stops new exposure, it does not rewrite the log. Binary files are skipped.
 *
 * THE DENYLIST IS PRIVATE
 * The terms live in `notes/leak-denylist.txt`, tracked in orin-private and
 * ignored here. A public list of the names to keep off the public remote would
 * be the leak. Company names are not on it: `decisions.md` keeps them on purpose
 * as the navigational anchor (2026-09-08). People are, and anything that grants
 * access (a share-by-link URL).
 *
 * `.private.git` tells the two cases apart, as in verify-deliverable.mjs: in the
 * two-repo working tree a missing denylist fails loudly, because a check that
 * goes quiet behind one warning line is the failure it exists to prevent. In a
 * public clone there are no names to guard and it skips.
 *
 * Usage:
 *   node scripts/leak-check.mjs --staged            (pre-commit)
 *   node scripts/leak-check.mjs --message <file>    (commit-msg)
 *   node scripts/leak-check.mjs --commits <sha...>  (pre-push)
 * Denylist location: env LEAK_DENYLIST, default notes/leak-denylist.txt
 * Deliberate bypass: git's own --no-verify.
 */

import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const raw = process.env.LEAK_DENYLIST || join(ROOT, 'notes', 'leak-denylist.txt');
const DENYLIST = isAbsolute(raw) ? raw : join(ROOT, raw);
const TWO_REPO_TREE = existsSync(join(ROOT, '.private.git'));

if (!existsSync(DENYLIST)) {
  if (TWO_REPO_TREE) {
    console.error(`leak-check: ${DENYLIST} is missing in the two-repo working tree.`);
    console.error('  Restore it with `scripts/private checkout -- notes/leak-denylist.txt`.');
    process.exit(1);
  }
  process.exit(0); // public clone: nothing to guard
}

/** One term per line; `#` starts a comment. Matched case-insensitively as a whole token. */
const terms = readFileSync(DENYLIST, 'utf8')
  .split('\n')
  .map((l) => l.replace(/#.*/, '').trim())
  .filter(Boolean);

if (terms.length === 0) {
  console.error(`leak-check: ${DENYLIST} has no terms. An empty list passes everything.`);
  process.exit(1);
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Hyphens and underscores count as part of a token so a URL ID matches whole, and
// a possessive ("Name's") still matches "Name".
const matchers = terms.map((t) => ({
  term: t,
  re: new RegExp(`(?<![A-Za-z0-9_-])${escape(t)}(?![A-Za-z0-9_-])`, 'i'),
}));

const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const hits = [];

function scan(where, text) {
  for (const { term, re } of matchers) if (re.test(text)) hits.push({ where, term });
}

/** Walk a unified diff, scanning added paths and added lines. */
function scanDiff(label, diff) {
  let file = null;
  let line = 0;
  for (const l of diff.split('\n')) {
    if (l.startsWith('+++ ')) {
      file = l.slice(4).replace(/^b\//, '');
      if (file !== '/dev/null') scan(`${label}path ${file}`, file);
    } else if (l.startsWith('@@')) {
      line = Number(/\+(\d+)/.exec(l)?.[1] ?? 0) - 1;
    } else if (l.startsWith('+')) {
      line++;
      scan(`${label}${file}:${line}`, l.slice(1));
    } else if (!l.startsWith('-')) {
      line++;
    }
  }
}

const [mode, ...rest] = process.argv.slice(2);

if (mode === '--staged') {
  scanDiff('', git('diff', '--cached', '--no-color', '--no-ext-diff', '-U0', '--diff-filter=ACMR'));
} else if (mode === '--message') {
  const msg = readFileSync(rest[0], 'utf8').split('\n').filter((l) => !l.startsWith('#')).join('\n');
  scan('commit message', msg);
} else if (mode === '--commits') {
  for (const sha of rest) {
    const short = sha.slice(0, 7);
    scan(`${short} message`, git('log', '-1', '--format=%B', sha));
    scanDiff(`${short} `, git('show', '--format=', '--no-color', '--no-ext-diff', '-U0', '--diff-filter=ACMR', sha));
  }
} else {
  console.error('usage: leak-check.mjs --staged | --message <file> | --commits <sha...>');
  process.exit(2);
}

if (hits.length) {
  console.error('leak-check: a denylisted name is on its way to the public remote.\n');
  for (const { where, term } of hits) console.error(`  ${where}  →  "${term}"`);
  console.error('\nThis remote is public. Rewrite without the name, or move the material to');
  console.error('orin-private (CLAUDE.md, "Client material goes to orin-private").');
  console.error('A deliberate exception: git --no-verify, and log why in decisions.md.');
  process.exit(1);
}
