# The stale dump, and the guard the pipeline doesn't have

*Written 19 August 2026, the day before the first Diagnostic demo. Deliberately
not acted on before it: this touches `scripts/sync-from-figma.mjs`, which is the
script that gets run in front of the prospect. Everything below was verified
against the baseline repo, not remembered.*

*Status, 30 August 2026: the pipeline has the guard now. Everything below is left
as it was written, because the reasoning is what made the fix the right shape —
see "Recommended order" at the foot for what was built, and for the two things
this note did not anticipate. The title is wrong and stays wrong; it was true on
the day.*

## The trap

`sync-from-figma.mjs` reads a dump from a fixed path, `tokens/.figma-dump.json`,
and never asks how old it is. There is no `statSync` on it, no mtime comparison,
and nothing in the payload to compare against: I grepped the plugin for
`fetchedAt`, `Date.now` and `toISOString` and it sends none of them. The dump
carries `f` (the file name) and the variables, and no notion of when.

So the failure runs like this. The sink is a listener you start first. If it is
not listening when Sync is pressed, the plugin gets a connection refused and
nothing new lands. The next `npm run sync:figma -- --dry-run` then reads the
dump that was already there and reports on it, confidently, with a full green
audit. Whoever is watching has no way to tell that they are looking at the
previous file.

The guard that exists today is a human one: the sink prints `✓ wrote N bytes`,
and if you did not see that line, the dump is not the one you think it is. That
is a real mitigation and it costs nothing, but it lives in the operator's head
rather than in the script.

## Where it actually bites

Not in the demo, where I will be watching for that line. It bites in the repeated
local loop, and worst of all in `check:figma`.

`check:figma` is `sync-from-figma.mjs --check`, and `--check` reads the same
`DUMP_PATH` as everything else. So the drift gate compares `tokens/` against
whatever snapshot of Figma happens to be on disk. Against a stale dump it can
report agreement while Figma has moved on, which is the one answer a drift gate
must never give wrongly. This is the gate that went into `Offer.md` in both the
Build and the Retainer, so the soundness of it is now a commercial promise and
not only a local convenience.

Worth being precise about the blast radius: CI does not run `check:figma`. The
workflow runs `npm test`, which is build, verify, verify:docs, test:unit and
report:strict. The gate is a thing a person runs, which is exactly the situation
where a silent stale read survives longest.

## What a fix would reach, and what it would not

Client pipelines are clones of the baseline taken at a moment in time.
`scaffold-client.mjs` says so in its header: run this once on a fresh clone. The
package is `private: true` with `files: ["dist"]`, so the scripts never travel by
npm. Propagation happens by cloning and by nothing else.

A guard added to the baseline therefore reaches every future client pipeline and
none of the existing ones. The existing ones are already well apart from it:

| Repo | State of `sync-from-figma.mjs` |
|---|---|
| Baseline | 250 lines, has `--check` and `lib/token-diff.mjs` |
| KR Token Pipeline | 256 lines, 86 lines different, predates `--check` |
| Synthesis Token Pipeline | same divergence |
| IDEM Token Pipeline | no such script, earlier generation entirely |

The baseline is ahead rather than behind. KR's `scripts/lib/` has no
`token-diff.mjs`, `token-name.mjs` or `mode-parity-label.mjs`, so copying the
baseline file across would import three modules that are not there. Porting into
a live client pipeline is deliberate work, and it is where the trap does the most
damage, because those are the repos being synced repeatedly against real files.

## The design question to settle first

Two checks are hiding inside one phrase, and they are not the same:

1. **Is this dump old?** An mtime threshold. Cheap, needs nothing from the
   plugin, and is a heuristic rather than an answer: a dump written four hours
   ago may be perfectly current if nobody has touched Figma.
2. **Did the sink run I just did produce this dump?** The precise question, and
   the one the failure is actually about. It needs either a token handed from the
   sink to the sync, or a timestamp inside the payload.

Option 2 by timestamp means changing the plugin, and the plugin is installed per
client, so every existing client would need to reinstall it before the check
could rely on the field. That argues for the sink writing a sidecar the sync
reads, keeping the change inside the repo.

Whatever the mechanism, the verdict should follow the shape `provenance.mjs`
already set: a pure function returning `{ ok, level, kind, lines }`, with the CLI
deciding what to do with it, so it is unit-testable without standing up a
scaffolded clone. Do not invent a second reporting shape next to that one.

And the level matters. `warn` for a dry-run, where a person is reading the output
anyway, and `error` for `--check`, where the whole point is a machine answer and
a stale comparison is worse than no comparison. That mirrors how `--check` is
already derived as the stricter `--dry-run`.

## What was rehearsed, and what was not

Rehearsed on 19 August, without a Figma file, by posting a plugin-shaped
`{values, descriptions}` payload straight at the sink:

- The sink binds both loopback families, writes both files, exits, and prints the
  next command.
- `sync:figma -- --dry-run` reads it and prints the audit.
- Against a deliberately skewed dump (`Semantic` renamed to `Core/Semantic`, a
  stray `Marketing` collection added) the audit names the missing collection, names
  both strays, and shows the six semantic tokens vanishing from each mode.
- With descriptions present the run prints `ok 1 variable descriptions loaded`,
  so the missing-descriptions warning I saw earlier was an artefact of running
  against the bare fixture and will not appear after a real Sync.

Not rehearsed: pressing Sync in Figma. The Token Sync plugin needs importing from
`plugin/manifest.json` on the demo machine, and that link in the chain is still
untested.

Incidental, filed so it is not rediscovered: the figma-console MCP runs a
WebSocket server on port 9225, inside the 9224 to 9232 range the plugin manifest
allows. The sink is on 9231, so there is no clash today. Avoid 9225 if the sink
port ever moves.

## Recommended order

*Updated 28 August 2026. Step 2 stopped being housekeeping and became a
prerequisite. The Diagnostic briefly promised a client they could run
`check:figma` themselves in three months. That promise was withdrawn the same
day and cannot be made again until this guard exists. Until then the drift
comparison is something I run, never something handed over. Logged in
`decisions.md`, 28 August.*

1. ~~Do the demo.~~
2. ~~Add the guard to the baseline, verdict shaped like `provenance.mjs`, with unit
   tests alongside `provenance.test.mjs`.~~ **Done 30 August 2026**, on branch
   `feat/dump-freshness-guard` in the baseline repo. It went the sidecar route:
   the sink writes `tokens/.figma-dump.meta.json` beside the values dump, holding
   the time it landed and a sha256 of the bytes written, and
   `sync-from-figma.mjs` reads it before the transform. Verdict shape is the one
   `provenance.mjs` set, `scripts/lib/freshness.mjs`, with
   `scripts/lib/freshness.test.mjs` alongside. Warn under `--dry-run`, error
   under `--check`, exactly as the level note above argued. Window is
   `dumpMaxAgeMinutes`, default 15.

   Two things the note did not anticipate. The record needs a **hash as well as a
   time**, because a timestamp alone still lies once the dump is hand-edited: it
   would be describing a file no longer at that path. And the first version
   exempted an explicitly named `--dump`, which made
   `--check --dump <old-snapshot>` a green gate on a file of any age, reachable
   by one flag. The exemption came out. `npm run seed` warns instead, which is
   honest — a fixture is not a reading of anyone's Figma file.

   Rehearsed end to end through the real sink, not only in unit tests: fresh
   passes, back-dated nineteen hours exits 1, record deleted exits 1, dump edited
   afterwards exits 1, and every one of those warns and carries on under
   `--dry-run`.
3. Decide separately, and as its own piece of work, whether KR and Synthesis get
   it, knowing that a straight file copy will not work. **Still open**, and the
   table above is still the reason: the divergence is what makes this deliberate
   work rather than a copy.
