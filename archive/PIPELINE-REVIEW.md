# Token Pipeline — System Review

*A review of the KR Token Pipeline (the client-facing template) for accuracy
against its own code, and for whether the system is optimal and ready to scale
across multiple clients. Written 2026-07-20.*

Scope: the two repos that make up the live client build — `KR Token Pipeline`
(the pipeline that publishes) and `Kirsten Rossiter` (the site that consumes) —
reviewed against the "Token Pipeline" FigJam diagram. Files read: `sd.config.mjs`,
`pipeline.config.mjs`, `scripts/scaffold-client.mjs`, `scripts/snapshot-tokens.mjs`,
`scripts/generate-docs.mjs`, `scripts/verify-build.mjs`, `scripts/generate-report.mjs`,
`TEMPLATE-ARCHITECTURE.md`, `PROCESS.md`, and the site's `scripts/sync-tokens.sh`.

---

## 1. Accuracy — the diagram matches the code

Every claim on the corrected board holds against the source:

- **Build.** `npm run build` is `node sd.config.mjs && node scripts/snapshot-tokens.mjs && node scripts/generate-report.mjs` — Style Dictionary v4, then snapshot, then report, exactly as Phase 2 states.
- **Aliases flatten to hex.** `sd.config.mjs` sets `outputReferences: false`, and `tokens.light.json` carries zero `{…}` references — so the Phase 1 caption ("aliases flatten to hex; the semantic→primitive link lives only in Figma") is correct.
- **The report is informational, not a gate.** `generate-report.mjs` has no `process.exit`; it writes `report.html` and logs `X/Y passing`. `npm test` is `build && verify` only. The board's grey, non-gating report box is right.
- **`verify-build` is the real gate.** `verify-build.mjs` checks the six `dist/` outputs exist and are non-empty, then runs the consumer contract (every `var(--kr-…)` the site uses must be defined in `dist/light`), and exits 1 on any failure. The contract half is skipped when the site repo is absent. All reflected on the board.
- **Six `dist/` outputs.** The Phase 4 sticky lists them exactly as `verify-build.mjs`'s `EXPECTED` array: light and dark × `variables.css`, `tokens.js`, `tokens.flat.json`.
- **Phase 5 is two independent deploys.** `chromatic.yml` runs on push to `main` of the pipeline repo; Cloudflare Pages deploys the site repo separately. Not a sequence.
- **Cross-repo sync is manual and light-only.** `sync-tokens.sh` copies `../KR Token Pipeline/dist/light/variables.css` into the site's committed `vendor/tokens.css`. Dark is built and verified but never shipped.

No remaining mismatches. Two details the board still omits (optional to add): the
Phase 1 sync is performed by running Figma's `use_figma` Plugin API — a
Claude-driven step, not a script — and only `tokens.{light,dark}.json` compile to
`dist/`, while `color/typography/size/guidelines.json` feed Storybook and the
changelog snapshot.

---

## 2. What the system does well

The architecture is sound and, in places, better than most token setups:

- A single per-client config file (`pipeline.config.mjs`) holds `projectName`, `prefix`, `figmaFileName`, `figmaFileKey` — the one file to edit per client.
- `scaffold-client.mjs` automates every per-client chore in one command (config, package identity, artifact reset, doc regeneration), and degrades gracefully on locked-down/synced folders by overwriting rather than deleting.
- `AGENTS.md` and `CLAUDE.md` are generated from one template (`templates/agent-rules.md`) via `generate-docs.mjs`, so they can never drift and carry no hardcoded client values.
- Zero production dependencies; everything is a devDependency of the build.
- Standard, portable substrate: DTCG source, Style Dictionary v4, committed `dist/` for reproducibility, plus a snapshot/changelog diff on every build.
- The consumer-contract check is a genuine strength — it catches the site referencing a token the build doesn't define, which most pipelines never verify.
- The three-layer model (shared core / template / per-client content) is documented, with a sensible "extract the core into a package after 2–3 clients" deferral.

---

## 3. What to fix before scaling — priority order

The *design* scales. The *seams between the two repos* — transport, sync, CI,
versioning — are where the system is still a single-client artefact.

### 3.1 Cross-repo transport is fragile (highest priority) — ✅ DONE (2026-07-21)

Tokens move between repos via `sync-tokens.sh`, a manual `cp` from a hardcoded
sibling path (`../KR Token Pipeline/dist/light/variables.css`). It breaks if
either folder is renamed or not checked out as a sibling, and nothing enforces
it. Meanwhile `package.json` is fully package-ready — `name`, `files: ["dist"]`,
an `exports` map for light/dark CSS/JS/JSON, `publishConfig` — but unused.

Recommendation: for multiple clients or teams, publish the package and have sites
consume it by pinned version — that is what the `exports` map is already built
for. The manual copy does not scale.

**Done:** replaced the sibling-path copy with a **pinned git-tag install**. The
site declares the tokens as a devDependency
(`github:Boyzeeboy/kr-token-pipeline#v0.2.0`) and `scripts/sync-tokens.sh` now
copies from `node_modules/kirsten-rossiter-tokens/dist/light/variables.css`,
printing the version it synced. No registry or npm org needed — pinning and
rollback come from the tag.

Two deliberate design points: the tokens are a **devDependency** and
`vendor/tokens.css` stays **committed**, so Cloudflare deploys never need access
to the tokens repo; and no `prepare` script is added, because npm runs it on git
installs and it would drag Storybook/Chromatic/Vite onto every consumer (`dist/`
is committed, so consumers need no build). Note the site is static, so a copy
step remains — what the pin removes is the cross-repo *filesystem dependency*,
replacing "whatever is on disk next door" with an exact, rollback-able version.

### 3.2 The Figma→JSON sync isn't reproducible — ✅ DONE (2026-07-26)

The sync relies on a human/Claude running the Figma Plugin API by hand each time.
It's well documented in `PROCESS.md`, but it is not a script, not in CI, and not
deterministic. Since Figma is declared the source of truth, the sync is the
load-bearing step and it is the least automated one.

Recommendation: commit the sync as a script (Plugin API export, or the REST
Variables API for any client on an Enterprise plan) with a `git diff` dry-run, so
it is repeatable and auditable per client.

**Done:** shipped as `v1.0.0` (`kr-token-pipeline` commit `14d1146`, PR #4). The
sync is now split fetch/transform, matching the recommendation: a committed
`figma-fetch.snippet.js` (run manually via `use_figma`, since the Plugin API only
runs inside Figma — REST is Enterprise-only) dumps raw variables to
`tokens/.figma-dump.json`, and a pure, unit-tested transform
(`npm run sync:figma -- --dry-run` to preview, `npm run sync:figma` to write)
turns that into `tokens.{light,dark}.json` — deterministic, reviewable, covered
by `npm run test:unit` (16/16 passing). Guardrails added: key parity across
modes, fail-loud on group-prefix name collisions, the `colour/colour/…`
doubled-group-name fix (a breaking rename, shipped in the same release), and
px units on spacing/radius/font-size. The live run also surfaced and resolved a
real palette drift (124 colour values re-tuned in Figma since the tokens were
last synced) — confirmed intentional before shipping, not silently applied.
Full detail in the pipeline repo's `SYNC-SCOPE.md`. This closes the fourth and
final seam named in this review's original verdict (§5).

### 3.3 No CI enforcement of build/verify — ✅ DONE (2026-07-20)

The only workflow is `chromatic.yml`; `npm test` (build + verify) runs locally
only — "protection is local." With clients and multiple hands, a broken build or
a broken contract can land on `main`.

Recommendation: add a CI job running `npm test` on pull requests, plus branch
protection. Related: the consumer contract *skips* when the site repo is absent —
which is exactly the case in the pipeline's own CI — so today the strongest check
never runs in automation. Consider running the contract from the *site* repo's CI
against the pinned tokens instead.

**Done:** added `.github/workflows/ci.yml` running `npm test` (build + verify) on
every pull request and push to `main`; enabled a `main` branch ruleset requiring
a PR (0 approvals) and the **build + verify** status check, with no bypass and
direct pushes blocked. The PR-gated workflow is documented in the pipeline repo's
`CONTRIBUTING.md`. Still open (noted for step 3): the consumer contract still
skips in the pipeline-only CI — run it from the site repo against pinned tokens.

### 3.4 No release/versioning discipline — ✅ DONE (2026-07-21)

The scaffold sets `version: 0.1.0` and nothing bumps it; `changelog.json` is a
token diff, not semver. If you adopt the published-package route (3.1), you need a
version bump on token change (e.g. a changeset step) or consumers can't pin —
which defeats the purpose of the package.

**Done:** adopted **manual semver + git tag** (deliberately no changesets —
unnecessary machinery for a solo practice, and `changelog.json` already records
what changed token-wise). Version bumped to `0.2.0`, and the pipeline's
`CONTRIBUTING.md` now documents the release process (land the change through the
gated PR flow → bump `version` → tag `vX.Y.Z` on `main` → push the tag → bump the
pin in the consuming site) plus a semver policy written for *tokens* rather than
code:

- **MAJOR** — a token is removed or renamed, or changes meaning: an existing
  `var(--kr-…)` in a consuming site stops resolving.
- **MINOR** — tokens added, or a new mode.
- **PATCH** — a token's value is retuned, or a build/doc fix.

### 3.5 Brand leakage in the "shared core" — ✅ DONE (2026-07-20)

`sd.config.mjs` still says "IDEM Design System", the transform groups are
`idem/css` / `idem/json`, and `PROCESS.md` / `design.md` are written as "IDEM".
`scaffold-client` rewrites the config, `package.json`, and the agent docs, but not
these — so every client repo reads "IDEM" internally. Harmless technically, but
not what a client should see.

**Done:** renamed the transform groups to `tokens/css` / `tokens/json`, degeneric-
ised the `sd.config.mjs` header and comments and the `package.json` keywords, and
retitled `PROCESS.md` (dropping IDEM's stale Figma key in favour of a pointer to
`pipeline.config.mjs`). The rename is output-neutral (`dist/` unchanged, verify
passes 6/6 + contract). Also fixed the doc/impl gap flagged in §4: `PROCESS.md`
and the `agent-rules.md` template now correctly state that `guidelines.json` is a
reference file nothing consumes and that the compiled CSS carries no guideline
comments; agent docs regenerated. Remaining IDEM references live only in
`TEMPLATE-ARCHITECTURE.md`, left intentionally as lineage.

Recommendation: genericise or templatise those core files so the scaffold
produces client-clean language.

---

## 4. Smaller notes

- **Dark mode is dead weight.** It is built and gated (all six outputs, both modes) but never shipped — `sync-tokens.sh` copies light only. Either wire `data-theme` consumption on the site or stop building/gating dark until a client needs it.
- **A doc/impl gap.** `PROCESS.md` states `guidelines.json` prose is "baked into `dist` CSS comments" and feeds the changelog, but `sd.config.mjs` never references `guidelines.json` and `snapshot-tokens.mjs` doesn't track it. That claim is currently aspirational; guideline prose only reaches `dist/` if it lives as `$description` on the compiled tokens.
- **Nested-token hazard.** The "a token with both a `$value` and children is dropped" gotcha is handled by convention (rename to `parent-child`) and the `name/kebab-default` transform, but it depends on manual vigilance during each Figma sync. A pre-build lint that flags any variable which is also a group prefix would harden it (the report lints doubled group names, but not this case).

---

## 5. Verdict

Accurate, well-structured, and thoughtfully documented — the foundation is a
system worth standardising on. To make it a true multi-client product, close the
four seams between the repos: publish-and-pin transport (3.1), a scripted sync
(3.2), CI enforcement (3.3), and release versioning (3.4). Those four changes
turn a strong single-client build into a scalable one.

**Status (2026-07-21).** Three of the four seams are closed and landed: CI
enforcement (3.3), pinned transport (3.1) and release versioning (3.4). `v0.2.0`
is tagged on the pipeline repo and the site now installs the tokens from that
tag; `vendor/tokens.css` came through byte-identical, confirming the change was
transport-only with no visual risk. Brand genericisation (3.5) is also done.
**The one remaining seam is 3.2, the scripted Figma→JSON sync**, still the least
automated and most load-bearing step in the system. Alongside it sit the smaller
open items: the dark-mode decision (§4), running the consumer contract from the
site repo's CI (§3.3), and the live-run findings in §6 — the `--help` ordering
bug and the three report lint items.

**Status update (2026-07-26).** The fourth and final seam, 3.2, is now closed
— see that section for detail. All four items named in the original verdict are
shipped, on `v1.0.0` (up from `v0.2.0`; the site's pin was bumped in the same
release, since 3.2 also carried a breaking rename). The system remaining open
items are now only the smaller ones: the dark-mode decision (§4, still
unshipped), running the consumer contract from the site repo's own CI (noted in
§3.3, still not done), and the report-lint items in §6, one of which (doubled
group names) was resolved as a side effect of the 3.2 work — see §6 for the
current count.

---

## 6. Findings from a live run (2026-07-21)

Surfaced while running the pipeline for a demo. Concrete defects/observations, not
strategic items — recorded here so they aren't lost.

- **`scaffold-client.mjs --help` errors on its own.** The required-flag check
  (`--name`, `--prefix`, `--figma-name`, `--figma-key`) runs *before* the
  `if (args.help)` branch, so `--help` alone exits 1 with "missing required
  flag(s)" and never prints usage. A genuine defect for a client-facing tool.
  **Fix:** move the `if (args.help)` block above the required-flag check so
  `--help` short-circuits first. Demo workaround until then: use the full
  `--dry-run` command, don't type `--help` live.
- **`verify` is green; the ✗ lint lines come from the report, not verify.**
  Verified: `npm run verify` (= `verify-build.mjs`) prints all-green, exit 0
  (6 dist outputs + the consumer contract). The red `✗` lines — doubled group
  names, unit-less font tokens, hardcoded hex — are emitted by
  `generate-report.mjs`, which runs inside `npm run build` / `npm test`, and are
  **non-fatal** (report exits 0 at 5/8). Easy to misattribute to `verify`. This
  reinforces the board/§3.3 point that the report is informational, not a gate.
  Demo implication: `npm run verify` is the all-green command; the *build* is
  what surfaces the ✗.
- **Three report lint items outstanding (report stuck at 5/8).** Real, not
  cosmetic: (1) doubled group names (e.g. `--kr-colour-colour-…`) and (2)
  unit-less font tokens both live in the token source; (3) **13 hardcoded hex**
  values in the Kirsten Rossiter site CSS/HTML — incomplete token migration.
  These are exactly what the report's checks exist to surface. Cleaning them gets
  the report to 8/8 and removes the red-✗-in-a-demo optics.

  **Update (2026-07-26): 6/8 now, two of three remain.** (1) is fixed — the
  `v1.0.0` sync (§3.2) renamed `colour/colour/…` → `colour/…` at source, so the
  doubled-group-names check passes. (3) is unchanged — still 13 hardcoded hex
  values in the site, re-verified live. (2) is narrower than it reads: `v1.0.0`
  added px units to spacing/radius/font-size, but a live check of
  `dist/light/tokens.flat.json` shows `kr-fonts-line-height-*` and
  `kr-fonts-letter-spacing-*` are still bare numbers (e.g.
  `line-height-display-large: 80`) — and the lint's own wording treats that as a
  bug ("line-height: 80 means 80× in CSS, not 80px"), not an accepted exception.
  Note `letter-spacing` failing this same check wasn't part of the "line-height/
  weight stay unit-less" call the `v1.0.0` commit message states, so it may be an
  oversight rather than a decision. Checked whether this is live-dangerous: the
  Kirsten Rossiter site does not currently consume any `--kr-fonts-line-height-*`
  or `--kr-fonts-letter-spacing-*` var anywhere, so it's a dormant risk, not an
  active rendering bug — but it should get an explicit decision (scope the lint
  to the accepted exception, or extend the px-unit fix) rather than staying
  ambiguous.
