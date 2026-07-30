# Extraction brief — the Orin token pipeline baseline

*Written 2026-07-28, closing out the KR Token Pipeline audit. Start a fresh
session with this file and `MANIFESTO.md`.*

---

## Read first

1. `MANIFESTO.md` — source of truth for every judgement call
2. This file
3. `_archive/kr-token-pipeline-2026-07/SYNC-DATA-MODEL.md` — records *why* the
   collection mapping is what it is. You need it for the name-matching change.

## What this is, and what it is not

**It is** a baseline you take clients through for selling purposes, and the
starting point for their engagement. Internal tooling for a partner business.

**It is not a product.** Decided explicitly on 2026-07-28 against the manifesto:
*"Orin is not for clients who want a vendor. Orin is a partner or nothing."* A
self-serve tool for non-developers is the other business. Nobody operates this
without Warren in the room.

Consequences — do **not** build: `LICENSE`, README-as-shopfront, onboarding for
strangers, error handling for unattended use, polished `scaffold-client`.

The template commoditises **setup**, never design judgement. If it starts
shipping opinions about what tokens should exist, it has drifted into the thing
the manifesto refuses.

## The demo is the point

The strongest version of the sales conversation is **pointing it at the
prospect's own Figma file, live**, and showing them:

- variables in Figma that never reach their code
- hardcoded values in their code that bypass the system
- whether their dark mode actually resolves

That is *"I'd rather tell a client the hard truth about their system than sell
them polish they don't need"*, executed in ten minutes rather than asserted in a
deck. It is also the manifesto's *"understanding the whole system end-to-end"* —
done before they've paid.

**This is why collection-name matching is the top priority, not a tidy-up.**
Pointing at a new Figma file currently needs a code edit. That cannot happen in
a room.

## Extract, don't rebuild

Measured in the KR repo on 2026-07-28:

- **2,069 lines** of generic code
- **13 lines** of KR-specific content inside it
- **28 tests** passing

The code is already ~99% portable. A rebuild throws away tested code and
rediscovers five bugs that took a day to find:

- mode ids are **per-collection** — alias resolution must match on *name*
- variable names are **not unique across collections** (`scale/4` exists in both
  Spacing and Radius, with different meanings)
- Figma's px line-height is **wrong for fluid type** (`clamp()` consumers need a
  unitless ratio and em tracking)
- Style Dictionary emits `$description` as CSS comments by default — 12.5KB → 82KB
- a name that is also a group prefix silently drops a token

## What to copy

From `KR Token Pipeline`:

```
sd.config.mjs
pipeline.config.mjs
scripts/lib/           (transform + both test files)
scripts/*.mjs          (sync, snapshot, verify, report, docs, sink, scaffold)
scripts/*.snippet.js
templates/agent-rules.md
.github/workflows/ci.yml
package.json           (scripts + devDeps; reset name/version/author)
```

**Do not copy:** `tokens/`, `dist/`, `src/stories/`, `COLOUR-GAPS.md`,
`design.md`, `PROCESS.md`, `CONTRIBUTING.md`. Write the docs fresh.

Keep the KR repo as the reference implementation and link to it — its commit
messages carry most of the reasoning.

## Work, in order

**1. Collections matched by name, not ID** — *the one that unblocks the demo.*

`scripts/lib/figma-to-dtcg.mjs` `CONFIG.collections` is keyed by
`VariableCollectionId:68:2831`. Key by collection *name* (`Primitives`,
`Semantic`, `Components`, `Fonts`, `Spacing`, `Radius`) instead. A new client
then needs *matching collection names in Figma* — a convention — rather than a
code edit.

This is the same lesson that fixed dark mode: **names are portable, IDs are
not.** Mode resolution already works this way after the July fix.

Also parameterise: `fontsExclude`, the `col.name === 'Fonts'` special-case in
`pathFor()`, and `fontPath()`'s `Fonts/` prefix strip.

**2. Carry the mode-parity check over** — already written and proven in KR
(`generate-report.mjs`, check `mode-parity`). Verified to bite: simulating the
July bug drops the report from 9/9 to 8/9. Keep the explicit
`EXPECTED_IDENTICAL` map with reasons; do not loosen it to a regex.

**3. The Figma plugin.** Replaces pasting a snippet into the Desktop Bridge
console. `scripts/figma-sink.mjs` already proves a plugin can POST straight to a
local endpoint — it moved 70KB of descriptions that way. Build it for Warren,
per client. One **Sync** button.

Figma plugins make network requests on any plan, so this is the answer to the
Enterprise REST blocker. Do not wait for an Enterprise licence.

**4. Two documents.** `CLAUDE.md` (generated from `templates/agent-rules.md`,
opening with the manifesto pointer) and `PROCESS.md`. The client-facing artefact
is the **generated report**, not written prose.

**5. `npm run docs:check` — put the docs through the same gate as the code.**

Every documentation failure in KR (eight of them, found 2026-07-27/28) had one
cause: **the doc asserted something the system already knew.**

| what drifted | asserted | who owns the truth |
|---|---|---|
| "build re-emits prose into CSS comments" | a behaviour | `sd.config.mjs` |
| "`git push origin main`" | external state | GitHub's ruleset |
| the sink command | a command | `package.json` + scripts |
| "223 of 302 tokens" | a count | the token files |
| "6/8 checks passing", "v1.0.0" | an output | the report, `package.json` |
| listed deleted token files | filesystem state | the filesystem |

None was judgement going out of date. Every one was a fact a machine could have
answered. So: **if the system can answer it, the doc must not assert it.**

Three layers, cheapest first:

*a. A checker, wired into `npm test`* — roughly 60 lines. Would have caught five
of the eight:

- every file path mentioned in a doc exists
- every `npm run X` mentioned exists in `package.json`
- every `--<prefix>-token-name` mentioned is actually emitted
- no doc references an archived or deleted file
- the first command of every fenced `bash` block resolves

*b. Interpolate facts instead of typing them.* `generate-docs.mjs` +
`templates/agent-rules.md` already do this, with four placeholders
(`projectName`, `prefix`, `figmaFileName`, `figmaFileKey`). Extend to
`tokenCount`, `describedCount`, `version`, `checksPassing`, `modeCount`.
**A hardcoded number in a doc is a bug** — interpolate it or drop it.

*c. Mark provenance in the file.* Every doc carries one of:

    <!-- GENERATED from templates/agent-rules.md — do not edit -->
    <!-- JUDGEMENT — hand-written. Last reviewed YYYY-MM-DD -->

Generated files were hand-edited twice in KR and silently overwritten. The
header also forces the useful question at write time: *is this judgement, or a
fact I should be generating?*

**The keystone rule:** a doc earns its place only if it contains judgement that
cannot be generated. `COLOUR-GAPS.md` earns it (a decision awaiting a human);
`SYNC-DATA-MODEL.md` did not (the code and its tests say it better).

**Review on an event, not a calendar.** Add one line to the release steps —
*"does any doc contradict this change?"* — since a version bump is exactly when
behaviour changed.

## Guardrails learned the hard way

- **Docs that describe behaviour rot silently.** KR reached 1,599 lines of
  markdown against 332 tokens; seven documents were stale or wrong. Prefer
  generated output. If a doc must exist, add a check that fails when it lies.
- **`KR_SITE_DIR=/nonexistent npm test` rewrites `dist/report.html`.** It got
  swept into a release commit once. `report.html` is now untracked for this
  reason — keep it that way.
- **The FigJam flowchart was archived (2026-07-28), not updated.** It had drifted
  on ~7 points — `use_figma` instead of the Desktop Bridge, one fetch step
  instead of two, the deleted token files, push-to-main. A hand-drawn diagram is
  the same liability as a hand-written doc. If the flow needs to be *visible* for
  a client conversation, **generate it** — a mermaid diagram emitted from the
  pipeline's own config, rendered in the report, cannot drift.
- **CI only runs on PRs targeting `main`.** A stacked PR gets no checks, and
  retargeting doesn't summon them. `ci.yml` now includes `edited` in its trigger
  types — carry that across.

## Open, not blocking

`COLOUR-GAPS.md` in the KR repo lists six colours used in the site with no
token — most notably a navy `#1a2235` spanning contact, thank-you *and* the
email templates. A palette decision for Warren, not engineering.
