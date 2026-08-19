# The stale dump, and the guard the pipeline doesn't have

*Written 19 August 2026, the day before the first Diagnostic demo. Deliberately
not acted on before it: this touches `scripts/sync-from-figma.mjs`, which is the
script that gets run in front of the prospect. Everything below was verified
against the baseline repo, not remembered.*

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

1. Do the demo.
2. Add the guard to the baseline, verdict shaped like `provenance.mjs`, with unit
   tests alongside `provenance.test.mjs`.
3. Decide separately, and as its own piece of work, whether KR and Synthesis get
   it, knowing that a straight file copy will not work.
