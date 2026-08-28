/**
 * verify-deliverable.mjs — does deliverable.md still describe the real pipeline?
 *
 * WHY THIS EXISTS
 * `deliverable.md` is the one document in this repo that describes a DIFFERENT
 * repo — the client token pipeline. Nothing could check it, and it drifted twice
 * in one week:
 *
 *   1. It promised Storybook as part of a token-only Build. The baseline had
 *      dropped Storybook; the live client's Storybook turned out to contain only
 *      token stories anyway.
 *   2. It promised `design.md` three times — routing layer, its own section, and
 *      Related — and the baseline has no `design.md` at all. Worse, the Related
 *      link resolved to THIS repo's `design.md`, which is Orin's site layout
 *      principles and nothing to do with a client deliverable.
 *
 * Neither was findable by reading the document. Both needed someone to check its
 * claims against another repo's filesystem. That is this script.
 *
 * THE TRAP IT GUARDS: `CLAUDE.md`, `AGENTS.md`, `PROCESS.md` and `design.md`
 * exist in BOTH repos. A reference to any of them is ambiguous, and guessing is
 * how the design.md error survived. So every path this document names must be
 * classified explicitly below — there is no "probably fine" branch.
 *
 * Usage: node scripts/verify-deliverable.mjs
 * Baseline location: env BASELINE_DIR, default ../Orin Token Pipeline
 */

import { readFileSync, existsSync } from 'node:fs';
import { dirname, isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const raw = process.env.BASELINE_DIR || join(ROOT, '..', 'Orin Token Pipeline');
const BASELINE = isAbsolute(raw) ? raw : join(ROOT, raw);
const DOC = join(ROOT, 'deliverable.md');

/**
 * Paths in deliverable.md that refer to THIS repo. Listed so that a reference to
 * a name existing in both repos has to be a decision, not an accident.
 */
const ORIN_LOCAL = new Set([
  'Offer.md',
  'PIPELINE-LEDGER.md',
  'decisions.md',
  'design.md', // Orin's SITE layout principles — deliberately not the client's
]);

/**
 * What a token-only Build ships, and what it deliberately does not.
 *
 * `ships: false` is checked as hard as `ships: true`. If Storybook reappears in
 * the baseline, this document's boundary claim has gone stale and someone needs
 * to say so on purpose — that is the exact drift that went unnoticed before.
 */
const BASELINE_ARTEFACTS = [
  { path: 'tokens/tokens.light.json', ships: true, what: 'DTCG token source' },
  { path: 'sd.config.mjs', ships: true, what: 'Style Dictionary build' },
  { path: 'dist/light/variables.css', ships: true, what: 'built CSS output' },
  { path: 'dist/light/tokens.js', ships: true, what: 'built JS output' },
  { path: 'dist/light/tokens.flat.json', ships: true, what: 'built JSON output' },
  { path: 'tokens/changelog.json', ships: true, what: 'changelog / snapshot history' },
  { path: 'CLAUDE.md', ships: true, what: 'generated agent docs (the router)' },
  { path: 'AGENTS.md', ships: true, what: 'generated agent docs (the router)' },
  { path: 'PROCESS.md', ships: true, what: 'the working loop' },
  { path: '.github/workflows/ci.yml', ships: true, what: 'CI guardrail' },
  { path: 'scripts/generate-report.mjs', ships: true, what: 'the generated token report' },
  // Generated on every build and gitignored, so its presence depends on whether
  // anyone has built lately. Classified so it is not "unknown", but presence is
  // deliberately not asserted — the generator above is what must exist.
  { path: 'dist/report.html', generated: true, what: 'the report output' },

  // Scoped to the component-library line — see decisions.md 2026-07-30.
  { path: '.storybook', ships: false, what: 'Storybook config' },
  { path: 'src/stories', ships: false, what: 'Storybook stories' },
  { path: '.github/workflows/chromatic.yml', ships: false, what: 'Chromatic CI' },
  { path: 'tokens/guidelines.json', ships: false, what: 'the guidelines file' },
  { path: 'design.md', ships: false, what: 'the hand-written router' },
];

/**
 * Wordings that were wrong before. Narrow regression guards, not general prose
 * checking — a script cannot tell you the argument is bad, only that a specific
 * false claim has come back.
 */
const FORBIDDEN_CLAIMS = [
  { re: /Storybook\s+\n?\s*documenting the tokens/, why: 'Storybook is scoped to the component library, not a token-only Build' },
  { re: /`guidelines\.json`\s*\(per-token usage rules\)/, why: 'guidelines.json is not part of a Build; usage rules travel as $description' },
  { re: /`design\.md`\s*\(the lightweight router\)/, why: 'the router in a token-only Build is the generated CLAUDE.md / AGENTS.md' },
];

// ─── Run ─────────────────────────────────────────────────────────────────────

const doc = readFileSync(DOC, 'utf8');
const failures = [];

if (!existsSync(BASELINE)) {
  // Skipping is right for a public clone and wrong for this working tree.
  // `deliverable.md` is public, the baseline pipeline repo is not, so anyone
  // cloning the public remote can never satisfy this check and must not be
  // failed for it. Here, a missing baseline means the sibling repo was renamed
  // or moved, and the check would then go quiet for good behind one warning
  // line in a suite whose headline output is "9/9 passing". `.private.git` is
  // the marker that tells the two cases apart: it exists only in the two-repo
  // working tree (see CLAUDE.md), never in a public clone.
  const privateTree = existsSync(join(ROOT, '.private.git'));
  console.warn(`baseline not found at ${BASELINE} — deliverable.md unverified.`);
  if (privateTree && !process.env.DELIVERABLE_SKIP) {
    console.error('FAIL  this is the two-repo working tree, so the baseline should be there.');
    console.error('      Point BASELINE_DIR at it, or set DELIVERABLE_SKIP=1 to skip on purpose.');
    process.exit(1);
  }
  console.warn('      SKIP — set BASELINE_DIR to check it.');
  process.exit(0);
}

// 1 + 2. Presence and absence.
for (const a of BASELINE_ARTEFACTS) {
  if (a.generated) continue; // classified, but presence depends on a build having run
  const here = existsSync(join(BASELINE, a.path));
  if (a.ships && !here) {
    failures.push(`deliverable.md says a Build ships ${a.what} (\`${a.path}\`) — the baseline does not have it.`);
  }
  if (!a.ships && here) {
    failures.push(
      `\`${a.path}\` (${a.what}) is now IN the baseline, but deliverable.md scopes it to the component library. ` +
      `The boundary moved — update the doc, or this script, on purpose.`
    );
  }
}

// 3. Every path the document names must be classified.
const spans = [...doc.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]);
const looksLikePath = (s) => /\.(md|json|mjs|js|css|yml|html)$/.test(s) || s.endsWith('/');
const known = new Set([...ORIN_LOCAL, ...BASELINE_ARTEFACTS.map((a) => a.path)]);
// Basenames too: the doc says `design.md`, the inventory says `design.md`; but it
// also says `CLAUDE.md` where the inventory path is `CLAUDE.md`. Compare on both.
const knownBase = new Set([...known].map((p) => p.split('/').pop()));

for (const s of new Set(spans)) {
  if (!looksLikePath(s)) continue;
  if (known.has(s) || knownBase.has(s)) continue;
  failures.push(
    `deliverable.md names \`${s}\`, which is classified nowhere. ` +
    `Add it to ORIN_LOCAL or BASELINE_ARTEFACTS in this script — names like CLAUDE.md exist in both repos, so guessing is what broke this before.`
  );
}

// 4. Known-false claims.
for (const c of FORBIDDEN_CLAIMS) {
  if (c.re.test(doc)) failures.push(`deliverable.md has regressed: ${c.why}`);
}

// ─── Report ──────────────────────────────────────────────────────────────────

if (failures.length) {
  console.error('✗ deliverable.md no longer matches the pipeline it describes:\n');
  for (const f of failures) console.error(`  ${f}`);
  console.error(`\n${failures.length} problem(s). Fix the document, or the pipeline — not this script, unless the boundary genuinely moved.`);
  process.exit(1);
}

const ships = BASELINE_ARTEFACTS.filter((a) => a.ships).length;
const excluded = BASELINE_ARTEFACTS.length - ships;
console.log(`  ok  deliverable.md verified — ${ships} artefact(s) present, ${excluded} correctly absent, every path classified`);
