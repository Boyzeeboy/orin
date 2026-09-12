# Agent-readiness experiment: the protocol

*Written 12 September 2026 for ORIN-39. This is the fixed part. Nothing here
changes once the first run starts; if it has to, the runs before the change
are discarded and the change is logged at the bottom.*

## The question

Does Orin's structured context and guardrail change what a coding agent
produces on a shadcn codebase: more reuse of the components that exist,
fewer invented ones, semantic tokens instead of arbitrary values, and less
correction before the result is review-ready? And does it do that without
treating a legitimate vendored catalogue as debt?

Two arms, two fixtures, three runs each. Twelve runs. Every one recorded.

## What is fixed

### The agent

| | |
|---|---|
| Tool | Claude Code, non-interactive: `claude -p` |
| Version | 2.1.218. Record `claude --version` in every run log; a version bump between runs invalidates the set. |
| Model | One model for all twelve runs, named in the run log by its full id. Pick before run 1 and do not change it. |
| Permissions | `--dangerously-skip-permissions` inside a throwaway checkout, so no run stalls on a prompt and no run differs by what was approved. |
| Turn cap | `--max-turns 60`. A run that hits the cap is recorded as incomplete, not rerun. |
| Output | `--output-format stream-json`, captured whole to `runs/<id>/transcript.jsonl`. This is where tool calls, tokens, turns, duration and cost come from. |
| Context | The agent gets the repository and the prompt. No MCP servers, no skills, no memory directory, no `~/.claude/CLAUDE.md`. Run with `HOME` pointed at an empty directory so nothing from this machine leaks in. |

### The task

One prompt, byte-identical across all twelve runs, saved as `runs/PROMPT.md`
and checked into the run set:

> Add a `/account` page to this app. It shows the signed-in user's name and
> email, a row of three summary statistics (storage used, members, monthly
> spend), a form to change display name and notification preference with a
> save button, and a table of the last five invoices with a download link
> on each row. Match the visual language the app already has. Both light
> and dark mode must work. When you are done, say so and list the files you
> created or changed.

The task is chosen because a competent agent can finish it in one sitting
and because every part of it has a canonical answer in the catalogue:
`card`, `input`, `label`, `switch`, `button`, `table`, `badge`. The
summary statistics are the dirty fixture's `StatCard` by another name,
which is the point.

### The two fixtures

Both live in the shadcn adapter repo under `fixtures/`, and the adapter's
README says what each is.

**Catalogue.** `fixtures/catalogue/`: a fresh `shadcn@4.21.0 add --all`,
61 components, nothing consuming them. The question this fixture asks is
whether the agent reaches for what is there, and whether the guardrail's
202 baseline findings against it cause the agent to edit stock.

**Dirty.** The catalogue plus `fixtures/dirty/stat-card.tsx` placed at
`src/components/stat-card.tsx` and imported once from `App.tsx`. Eleven
guardrail findings, all real. The question this fixture asks is whether the
agent copies the dirty patterns it can see, because that is what agents do
with a codebase: follow the example in front of them.

### The starting state

A runnable Vite app, not a bare fixture, because completion has to be
checkable. Build it once, exactly as `fixtures/catalogue/README.md` records,
then:

1. Copy the catalogue fixture over `src/`.
2. `git init`, commit, tag `catalogue`.
3. Add the dirty `StatCard`, import it from `App.tsx`, commit, tag `dirty`.
4. For arm B only, add the router and the adapter (below), commit, tag
   `catalogue-orin` and `dirty-orin` on the respective bases.

Four tags. Every run starts with `git checkout <tag> && git clean -fdx &&
npm ci`. Nothing carries over between runs, including `node_modules`.

### The two arms

**Arm A, baseline.** The starting state and the prompt. No `CLAUDE.md`, no
adapter, no guardrail. This is the codebase as a client would hand it over.

**Arm B, Orin.** The same starting state plus:

- The shadcn adapter vendored at `tokens/`, built, with `dist/tokens.css`
  imported by `src/index.css` in place of the CLI-written theme block. The
  guardrail runnable as `npm run tokens` from the app root, per the
  adapter's install section.
- A `CLAUDE.md` at the root, written for this experiment and frozen at the
  tag. Its content is in the appendix. It is short on purpose: it tells the
  agent where the components are, that roles not scales are the rule, that
  `npm run tokens` is the check, and what to do when the system has no
  answer.

The router is the only prose in arm B. If it grows past a page during
setup, it is doing the guardrail's job and the experiment stops measuring
what it claims to.

### Completion

A run is complete when the agent says it is done **and** all three hold:

1. `npx tsc --noEmit` passes.
2. `npx vite build` passes.
3. `/account` renders in both modes without console errors. Checked by hand
   in the browser; a screenshot of each mode goes in the run directory.

A run that fails any of the three is recorded as incomplete with the reason.
It still counts; its measures are still taken. Incomplete runs are the
first thing a buyer would ask about.

### Reset

Between every run: `git checkout <tag> && git clean -fdx && npm ci`, then
confirm `git status` is clean and `git log -1` is the tag commit. The reset
is written into the run script so it cannot be skipped.

## The measures

Taken after every run, by the same script, into `runs/<id>/measures.json`.
Where a measure needs a person, the person is named in the file.

| Measure | How it is taken | Who |
|---|---|---|
| **Canonical reuse** | Count of imports from `@/components/ui/*` in agent-authored files, as a fraction of the seven canonical parts the task has (card, input, label, switch, button, table, badge). | Script |
| **Invented components** | Files created under `src/components/` (not `ui/`) whose job an existing catalogue component already does. Each one named, with the catalogue component it duplicates. | Script lists; person adjudicates |
| **Semantic-token adherence** | Guardrail discipline and semantic-only findings **in agent-authored files only**. Vendored files are excluded from this count by path (`src/components/ui/`, `src/index.css`), because they are stock. | Script |
| **Vendored files touched** | Any diff under `src/components/ui/` or to `src/lib/utils.ts`. Zero is the expected value. Nonzero in arm B is the behavioural false positive: the guardrail reported stock as debt and the agent acted on it. | Script |
| **Guardrail false positives** | The static count: guardrail findings on vendored paths. Today 202 on the catalogue by construction. Recorded so the number is in the run set, not because it varies. | Script |
| **Dirty patterns copied** | In the dirty fixture only: agent-authored files containing any of the eleven patterns in `stat-card.tsx` (inline dimension style, `gap-[5px]`-style arbitrary values, colour literals, `text-app-*` on an undefined token, `var(--ref-*)`). | Script |
| **Build, type, a11y failures** | `tsc`, `vite build`, and an axe pass on `/account` in both modes. Counts, not booleans. | Script |
| **Corrections to review-ready** | A person reviews the diff and lists every edit they would require before merging, one line each. Count and list both recorded. Review-ready means: canonical components used where they exist, no invented duplicates, no discipline findings in authored files, both modes correct. The reviewer does not know which arm they are reading; run directories are named by id, not arm, and the diff is stripped of `CLAUDE.md` and `tokens/` before review. | Person |
| **Turns, tool calls, tokens, cost, duration** | From `transcript.jsonl`: count of tool-use blocks, and the final `usage` and `total_cost_usd` and `duration_ms`. | Script |
| **Third-option rates** | Arm B only, because only arm B's router offers the path. Per run: did the agent **follow** (used a catalogue component), **invent** (built one silently), or **propose** (wrote to `PROPOSALS.md` as the router asks, and built from primitives in the meantime). One classification per component-shaped decision, listed. | Person, from the diff and transcript |

## The record

```
runs/
  PROMPT.md               the prompt, byte-identical
  CLAUDE.md               arm B's router, as frozen
  MODEL                   the model id, one line
  runs.csv                one row per run: id, fixture, arm, complete, and every measure
  <id>/
    transcript.jsonl
    diff.patch            git diff from the tag
    measures.json
    light.png  dark.png
    review.md             the reviewer's corrections list
```

Run ids are `r01` to `r12`, assigned by a shuffled order fixed before run 1
so that arm and fixture are not confounded with time of day or with which
runs were done tired. The mapping from id to (fixture, arm) is in
`runs/ORDER.md`, sealed before the first run and not opened by the
reviewer until all twelve reviews are written.

Every run is recorded, including the one where the agent did something
strange. Especially that one.

## The gate

From ORIN-39, restated so it can be applied to the table above:

- **Integrate** if arm B beats arm A on canonical reuse and semantic-token
  adherence on both fixtures, with fewer corrections, **and** vendored files
  touched is zero in every arm B run on the catalogue.
- **Iterate once** if arm B improves adherence but touches vendored files, or
  if the third-option classification is too noisy to report. The iteration
  is the guardrail learning to classify `components.json`'s `aliases.ui`
  path as stock. Then run again.
- **Drop** the component-scoring claim otherwise. The token-adherence result
  is reported on its own, whatever it shows.

"Beats" means all three arm B runs score better than the best arm A run.
With n=3 that is the only comparison that means anything; a mean is
theatre.

## What is not measured, and why

- **Anything with a client.** Both fixtures are Orin's own. The catalogue is
  pristine and the dirty fixture is reconstructed. A real codebase is
  messier in ways that are not in either.
- **Generalisation across models.** One model, pinned. The result is a
  result for that model on that date. Claude Code's own behaviour changes
  between versions, which is why the version is in every log.
- **The Diagnostic's report.** This measures agent behaviour, not the
  Diagnostic's scoring. Whether agent-readiness becomes a Diagnostic
  dimension is a decision the result informs, not one it takes.
- **Time to write the router.** Arm B's setup cost is real and is not in
  the table. Note it in hours in `runs/NOTES.md`; a buyer will ask.

## Evidence limitations, to be written into the result

Three runs per cell. A single task. Fixtures authored by the person running
the experiment. A reviewer who is also that person unless someone else can
be found, which is worth trying for. The comparison external sources
publish (Coinbase, three runs) has the same shape, and Orin should not
claim more than they did.

## Appendix: arm B's router

`CLAUDE.md`, frozen at the tag. Under a page. Nothing in it a linter could
enforce; that is the guardrail's job.

```markdown
# Working in this codebase

The design system is the main thing. Your job is to use it, and to say so
when it cannot do what you need.

## Where things are

- `src/components/ui/` is the component library. Sixty-one components,
  vendored from shadcn. Use them. Do not edit them; they are stock.
- `src/lib/utils.ts` has `cn()`.
- `tokens/` is the token pipeline. `src/index.css` imports its output.
  Colour, radius and the theme come from there and nowhere else.

## The rules

- Read roles, not scales. `bg-card`, `text-muted-foreground`, `rounded-lg`.
  Never `var(--ref-*)`, never a hex, never `rgb()`, never an arbitrary
  value like `p-[9px]` or `text-[13px]` where a scale step exists.
- No inline `style` for dimensions or colour.
- Both modes must work. Dark mode is `.dark` on the root; if you only
  checked light, you are not done.

## The check

`npm run tokens` builds the tokens and runs the guardrail. Run it before
you say you are done. Fix what it reports in files you wrote. It also
reports findings inside `src/components/ui/`; those are stock, not yours,
leave them.

## When the system has no answer

If you need a component that does not exist in `src/components/ui/` and
cannot be composed from what is there, do not invent one silently. Add an
entry to `PROPOSALS.md` at the root: what you needed, what you built it
from, and which existing components you ruled out and why. Then build it
from the primitives and tokens that exist. The proposal is the record;
the build is provisional.
```

The last section is the pattern layer's third option in one paragraph. It
is in the router so the propose rate can be observed. It is not adopted
anywhere else, and the governance note still says so.

One sentence in "The check" is a decision, and it should be read as one:
telling the agent that findings inside `src/components/ui/` are stock and to
leave them. Without it, arm B on the catalogue would spend its turns
"fixing" 202 vendored files and never reach the task, and every other
measure would be confounded by a guardrail defect that is already known.
With it, the router is doing by prose what the guardrail should do by
classification, which is exactly the failure the pattern-layer notes warn
about. So: the sentence stays for this run set, "vendored files touched"
still measures whether the agent obeyed it, and the iterate step replaces
the sentence with a guardrail that knows what `aliases.ui` means. If arm B
touches stock even with the sentence present, that is a stronger finding
than if the sentence had been left out.

## Change log

*Empty. If this section gains an entry, every run before it is discarded.*
