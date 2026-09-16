# Agent-readiness experiment: the result

*Written 16 September 2026 for ORIN-39, against the protocol in
`agent-readiness-experiment.md`. The record is `runs/` in the shadcn
adapter repo, branch `runs/orin-39`: twelve transcripts, diffs,
screenshots, checks, measures, blind reviews, and `runs.csv`. Nothing in
the protocol changed; its change log is still empty.*

## The decision: drop

The gate does not open. On both fixtures, every arm B run ties or loses
to the best arm A run on canonical reuse, semantic-token adherence and
corrections to review-ready. Arm B touched no vendored file in any run,
which is the one condition it met, but that condition only matters
alongside an improvement that did not happen.

So the component-scoring claim is dropped, as the protocol says. The
token-adherence result is reported on its own below, and it is the same
shape: no difference, because there was no room for one.

## What happened

Twelve runs of Claude Code 2.1.218 with `claude-opus-5`, one prompt, four
starting states, sealed order, one blind reviewer.

| | Arm A (codebase as handed over) | Arm B (adapter + router) |
|---|---|---|
| Complete | 5 of 6 | 5 of 6 |
| Canonical reuse | 7/7, 7/7, 6/7, 6/7, 6/7, 6/7 | 7/7 ×5, 6/7 |
| Guardrail findings in authored files | 0 in all six | 0 in all six |
| Arbitrary values, inline styles, colour literals, raw-scale reads | none in any run | none in any run |
| Dirty patterns copied (dirty fixture) | 0, 0, 0 | 0, 0, 0 |
| Vendored files touched | 0 in all six | 0 in all six |
| Invented duplicates | 0 | 0 |
| Corrections to review-ready (blind) | 0, 0, 0, 0, 0, 1 | 0, 0, 0, 0, 0, 2 |
| Turns | 12 to 21 | 15 to 22 |
| Wall time | 2:00 to 3:12 | 2:13 to 4:25 |

The two incomplete runs, one per arm, failed the same way: a catalogue
`Button` rendered as an `<a>` for the invoice download link without
`nativeButton={false}`, which Base UI logs as a console error and which
strips native button semantics. It is a real defect and the reviewer
flagged it in both. It has nothing to do with the arm.

The six 6/7 reuse scores are all the same miss: `native-select` for the
notification preference where the task's canonical list says `switch`.
`native-select` is a catalogue component and "preference" is a fair thing
to read as a choice among options. Reuse is at ceiling in every run.

**The baseline is already at the top of every scale the experiment
measures.** With no `CLAUDE.md`, no adapter, no guardrail, and a dirty
example sitting in `App.tsx` for it to copy, this model on this task
reached for the catalogue every time, used role tokens every time, wrote
no arbitrary value, and copied none of the eleven patterns it could see.
There was nothing left for Orin's context to improve, and so nothing it
could be shown to improve.

## What the protocol could not have found, and did

Three things are in the record that the gate does not score.

**The adapter fixed an accessibility failure in stock shadcn.** All six
arm A runs fail axe's AA contrast check on one element in light mode:
`AvatarFallback`, stock and untouched, `text-muted-foreground` on
`bg-muted`. shadcn's default theme puts `oklch(0.556)` on `oklch(0.97)`,
which is under 4.5:1 for small text. All six arm B runs pass, because the
adapter's `--muted-foreground` is `neutral-600`, `oklch(0.439)`. The agent
did nothing different; the token values did. This is a token-layer
result, exactly the kind the pipeline is for, and it is the one thing in
this experiment Orin can point to. It is not an agent-readiness claim.

**The router's stock sentence held.** Arm B agents ran `npm run tokens`,
saw 140 (catalogue) or 151 (dirty) findings, and left every vendored file
alone in all six runs. The behavioural false-positive count is zero. The
static count is unchanged at 140, and the guardrail's classification
defect (it cannot tell `components.json`'s `aliases.ui` path from
hand-written code) is still there; the protocol's iterate step would have
fixed it, and the gate did not call for iterate. It should still be fixed,
as adapter work, not as this experiment's business.

**The third option was never taken.** In six arm B runs, `PROPOSALS.md`
was never written. Five runs needed nothing outside the catalogue. One
(r03) built a `link.tsx` for the nav, which the catalogue lacks, silently:
one invention, zero proposals. That is one observation of the pattern
layer's unvalidated part, and it went the wrong way. It is not enough to
conclude anything about the mechanism except that a one-paragraph router
does not produce proposals on its own.

## The measures the gate did not need

- **Turns, time, cost.** Arm B is not cheaper. Its runs use one to four
  more turns, mostly on `npm run tokens` and reading its output, and take
  longer. Notional API cost is $0.86 to $1.44 for arm A and $1.05 to $1.69
  for arm B. The Atlassian claim (fewer tool calls, lower token use) is
  not reproduced here; the router adds work and, at this ceiling, buys
  nothing measurable.
- **Routing.** No router existed. Eleven runs used `window.location.
  pathname` with a nav; one added a `use-theme` hook that rewrote the
  root `.dark` class and a toggle the task did not ask for (r08, arm A,
  the reviewer's one arm A correction). No run added a dependency.
- **Model, from the transcripts.** `claude-opus-5` in all twelve `init`
  events, no MCP servers, 27 built-in tools.

## Evidence limitations

- **Ceiling effect.** The task was chosen so a competent agent could
  finish it in one sitting with every part answerable from the catalogue.
  Opus 5 answered it from the catalogue without help. The experiment
  therefore cannot discriminate between the arms, and a null result at
  ceiling is not evidence that the context does nothing on a harder task,
  a weaker model, or a messier codebase. It is evidence that on *this*
  task the baseline needs no help.
- **One model, the most capable.** Chosen deliberately, and the choice
  probably caused the ceiling. Sonnet 5 is the Pro default and was not
  run.
- **n = 3 per cell.** Same as Coinbase's published set. Enough to see a
  large effect; there was none to see.
- **Fixtures by the experimenter, runs driven and measured by Claude
  Code, reviewed blind by a separate Claude session.** No human wrote a
  review. The reviewer's zero-correction verdicts agree with a mechanical
  scan (no diff contains an arbitrary value, inline style or colour
  literal), which is some reassurance and not independence.
- **Two false starts, both before any agent ran** (r02 reset guard, r03
  ten-minute cap), both in `runs/NOTES.md`. One measurement correction
  after the first aggregation: the "dirty patterns copied" regex had
  counted arm B's use of the adapter's own `--app-*` extension tokens as
  the fixture's undefined-token pattern. Corrected, re-measured from the
  record, logged.
- **Cost figures are notional.** Pro plan; `total_cost_usd` is what the
  API would have charged.

## What this decides, from ORIN-39's list

| Question | Answer |
|---|---|
| Agent-readiness as a scored Diagnostic dimension | Not supported by this evidence. Nothing here shows an agent behaving differently with Orin's context present. |
| A before-and-after agent test in Build engagements | Not as a selling point. As a check it costs about an hour with the harness and could be offered as one, with this result as the honest expectation. |
| Defensible claims about consistency, review effort or implementation speed | None. Consistency was already perfect in the baseline; review effort was already near zero; the router made runs slower, not faster. |
| Case study, proposal, sales conversation, website claim | No. The one claim that survives is about the token layer, not agents: the adapter's values pass AA contrast where shadcn's stock theme does not. |
| Whether the agent evaluation earns a place in the pattern-layer mechanism | No. The infographic's evaluation row moves from "hypothesis under test" to "tested at ceiling, not supported". |
| The ORIN-40 signal ("ORIN-39 showing component identity is the largest remaining failure source") | Not shown. Component identity was not a failure source at all in twelve runs. |

## What I would do differently, if this is ever run again

Not soon, and not as this issue. If it is: a task that the baseline
demonstrably fails (a component the catalogue genuinely lacks, a design
with no canonical answer, a codebase with three competing button
implementations), a weaker model as well as the strongest, and a human
reviewer. Until a baseline fails, there is nothing for the context to fix
and no experiment to run.

The harness is reusable as it stands: four tags, three scripts, a sealed
order, about ten minutes of setup from a written protocol and three to
four minutes per run.
