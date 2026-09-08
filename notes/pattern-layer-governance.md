# Pattern-layer governance — for when the component layer is earned

*Filed 2026-08-10. Not a decision, not yet a proposal. A parked mechanism for
the moment a client's design system outgrows what one person's taste can
adjudicate. The trigger was stated loosely here until 2026-09-01 — read "The
trigger, stated properly" at the bottom before acting on anything above it.*

*Source: Carmen Rincon's "How to let Claude push your design system without
breaking it" setup sheet, reviewed against the KR pipeline's invariants and
guardrail report. Attribution matters here — this is an outside pattern, and
nothing below is adopted. A second source reaching the same gap by another
route was added 2026-08-15 — see "Second source, same gap" below.*

---

## The gap this addresses

KR's guardrails govern **token values**. Invariant #2 — "a value the surface
needs but the tokens don't have is a token proposal, never a literal" — plus the
report's `no hardcoded hex` / `no hardcoded font-family` /
`semantic-only consumption` checks make value invention machine-detectable and
build-failing.

Nothing in either pipeline governs **patterns**. "Should this new empty-state
composition become a canonical component?" is a question KR punts entirely:
invariant #7 says a component layer is "added only when a component library
earns it," and the ledger's Token-layers row keeps the whole component-token
layer as *Dropped, revisit when earned*. "Earned" is a human judgement with no
mechanism behind it. That is fine at Orin's scale (five pages, primitives-only
component budget) and fine for a token-only Build. It stops being fine the first
time a client's library grows faster than anyone's taste can adjudicate.

## What already exists, under different names

Worth stating plainly so this doesn't get adopted as though it were new
thinking. Carmen's premise — *follow or break are the only two options most
agents have; add a third: propose* — is KR invariant #2 in different words. The
correspondence is close:

| Carmen's sheet | KR / Orin equivalent |
|---|---|
| Propose instead of forcing or hacking | Invariant #2 — token proposal, never a literal |
| "Built only from locked primitives" | Invariant #3 — semantic-only consumption, never raw hex |
| `gate.js` — machine-checkable locks | `verify-build` + the generated report (8 checks Orin / 9 KR) |
| `DESIGN.md` as the router Claude reads first | Generated `CLAUDE.md` / `AGENTS.md` (KR); hand-written `CLAUDE.md` (Orin) |

So the *instrument* is not new. What is new is what it is pointed at.

## The three parts worth keeping

Only these. Everything else on the sheet duplicates something KR already does
better.

**1. The graduation rule.** `Used in: 0/2` — a proposal becomes a real pattern
after two genuine uses. Carmen's justification is the right one: *"without this
you collect forty one-off inventions and no system."* This mechanises exactly
the "earn it" call invariant #7 currently leaves to judgement. A counter is not
taste; it is auditable, and it is the kind of thing a report check could read.

**2. The `_TEMPLATE.md` fields — specifically "Why not X."** Four fields: *Gap*
(what the system can't express), *Built from* (which locked primitives),
*Why not X* (patterns ruled out), *Used in* (the counter). The third is the one
KR lacks an equivalent for: the reasoning for rejecting existing patterns
currently lives scattered through `decisions.md` in prose, written when someone
remembers. Requiring it *per proposal*, at the moment of proposing, is a
cheaper and more reliable capture than a retrospective log entry.

**3. Lock zones.** Naming which surfaces are closed and which are open —
tokens locked, type scale locked, composition open, empty states open-with-
proposal. KR doesn't spell this out because at the value layer it simply forbids
invention everywhere, which needs no zoning. A pattern layer does: the whole
point is that composition is where an agent is *allowed* to be generative.

## The two parts to reject

**The `proposals/` folder, as drawn, is a code-side authoring surface.** Claude
drafts a new pattern into a committed markdown file, stages it, graduates it.
In a Figma-first pipeline that is a direct contradiction of `PROCESS.md` — "all
token changes start in Figma, never in code." Carmen needs the folder precisely
because her flow has no single upstream source that new things naturally belong
to; KR has one, so a proposal has an obvious home.

**If this is ever adopted into a KR-style client, the proposal's destination
must be Figma.** A graduated pattern becomes a new variable or component *at the
source*, and flows down through the build like everything else. Staging it as a
committed code artefact reintroduces exactly the code-side authoring the
pipeline exists to prevent. The markdown proposal, if used at all, is a
*record of the reasoning* — never the thing the build consumes.

**The generative critic's scoring is softer than a gate.** Reuse HIGH / propose
HIGH / hack LOW is a model grading its own work. KR converts the identical
intent into a binary: hack it and the build fails. Same reasoning as the
authoring-rule comparison — an absolute, machine-checked invariant beats a
score the model assigns itself. If the critic is used, it belongs *alongside*
the gate as a review aid, never in place of it.

## Shape it would take, if earned

Sketch only. Do not build from this without a `decisions.md` entry first. This
stays the sketch: the *order* the pieces would have to arrive in, and where the
risk actually sits, was worked out later against the code and is at the bottom
of this note under "The build order, if the trigger fires."

- Trigger: **superseded 2026-09-01**, see "The trigger, stated properly" below.
  This bullet read "the ledger's revisit condition — a client build grows a real
  component library," which is too loose in two ways and cites a ledger bullet
  that is about Orin.
- Lock zones declared in the **generated** router, not a hand-written file, so
  they can't drift from the system they describe.
- Proposals authored in Figma; the markdown record carries Gap / Built from /
  Why not X / Used in, and links to the Figma node.
- Graduation at two real uses, with the counter machine-readable so the report
  can surface stalled proposals (`used in: 1/2` for three months = a pattern
  nobody actually needed).
- The existing report stays the gate. The critic, if any, advises.

---

# Second source, same gap

*Added 2026-08-15. Source: Christine Vallaure de la Paz (moonlearning.io), a
LinkedIn post on deterministic vs probabilistic thinking for designers working
with AI. She credits Nathan Curtis (Smashing Conferences Amsterdam) as the
origin of "component contract". Reviewed against the extracted baseline
(`Orin Token Pipeline`), not against KR or this site. Nothing below is adopted
either.*

Her argument: deterministic = same input, same output (a Figma variable set to
16 is 16, forever); probabilistic = same input, a *reasonable* output. Markdown
is prose — it gets understood, not checked — so write "spacing follows the 8px
scale" into a `design.md` and a model will mostly follow it with no mechanism at
the end telling you where it drifted. Her rule: markdown where "roughly right"
is fine and you'll review the output anyway; structured JSON/YAML for anything
that must be exact and unchecked. Her fix is the component contract — options,
tokens, allowed values as key/value data a script can diff against Figma and
code.

**This is Carmen's gap arriving by a different road**, which is the reason to
record it rather than act on it: two independent sources converging on the same
missing layer raises confidence that the mechanism parked above is pointed at a
real hole. She adds nothing to the value layer — the baseline is already past
her prescription there, since she stops at "structured data a script *can* diff"
and the baseline has the script and fails the build with it. What she adds is
the component layer, and one shape for it.

## What she does not account for: `verify-docs`

Her premise is that markdown carries no mechanism at all. In the baseline it
does. `npm test` runs `verify:docs`, which polices `PROCESS.md`, `CLAUDE.md`,
`AGENTS.md`, `templates/agent-rules.md`, `CONTRIBUTING.md` and `design.md`
against three things: every `npm run …` a doc names is a real script, every file
path it names exists, every report check id it names is one the report emits.
Its header states the provocation — the lineage reached 1,599 lines of markdown
against 332 tokens, seven of them stale, and *"not one of them announced it."*
Its `DOCS` list already carries `design.md` as optional, on the reasoning that a
client repo which grows a component library tends to add one.

So the baseline's answer to "prose rots" is not hers. It is: keep the prose thin,
make it route rather than define, and check the ways it actually rotted.

**The boundary is real, though, and the file concedes it in its own header:** it
*"cannot verify that prose is wise — only that the things it names are real."*
Referential integrity is not semantic integrity. A `design.md` claiming an 8px
scale over a 4px system passes `verify:docs` cleanly, because every path and
command it names exists. That residual is exactly what she is describing, and it
is worth having stated in one place rather than rediscovered. The exposure is
currently small because the prose is deliberately thin and per-token usage rules
travel as `$description` on the token — not because anything checks the claims.

## What the baseline would actually have to grow

Sharper than the sketch above, now that it has been checked against the code.

**"Components" in the baseline is a variables collection, not component
structure.** The convention matches six Figma collections — `Primitives`,
`Semantic`, `Components`, `Fonts`, `Spacing`, `Radius` — and `Components` maps
to `{ branch: 'components' }` in `scripts/lib/figma-to-dtcg.mjs`. That is
`components/button/primary/border` as a *value*. Variant sets, component
property definitions, enums and defaults are not in it.

**Nothing in the extraction path can see them.** `plugin/code.js` reads
`figma.variables.getLocalVariableCollectionsAsync()` and
`getLocalVariablesAsync()` and nothing else. No contract data enters the
pipeline at any point, in any format. This is not a layer living in prose that
ought to be JSON — it is a layer that does not exist in any form, and every
report check is value-layer without exception.

So the work is a **second extraction path**, not an extension of the first: a
component reader in the plugin, its twin in `scripts/figma-fetch.snippet.js`
(the `extraction parity` test holds the two identical — change one, change
both), a transform branch and emit target, and a further check in
`scripts/generate-report.mjs` diffing contract against code. `verify-docs`
follows for free.

**The non-obvious cost is the convention, not the code.** What makes the token
half portable is matching by NAME against six collection names a prospect can be
asked to adopt — which is why pointing the pipeline at an unfamiliar file is a
convention question and not a code change. Component sets have no equivalent:
their names, variant property names and value casing vary far more across client
files than six collection names do. A contract reader either matches loosely and
reports noise, or needs per-client overrides — and then the `figma: {}` block in
`pipeline.config.mjs` stops being the confession it is designed to be. **The
portability trick does not obviously transfer.** Establish that it can before
anyone builds this.

## The part to reject, for the same reason as Carmen's

Her contract is a hand-authored JSON file in the repo. That is Carmen's
`proposals/` folder in a different costume, and it fails on identical grounds:
the baseline's first-page principle is *"prefer generated output to written
prose,"* its rule is "all token changes start in Figma, never in code," and
`tokens/*.json` is explicitly labelled synced output rather than a place to
author. A hand-authored contract would be the only authored artefact in the
repo, reintroducing precisely what the provenance check, the sync refusal and
the generated router exist to prevent.

**The baseline-consistent form inverts her direction of truth:** the contract is
*emitted* from Figma's component property definitions, and the check diffs that
emission against Code Connect. Her three-way diff — contract, Figma, code — is
the right instrument. Her artefact is the wrong end of the pipeline. Same
correction Carmen needed, arrived at independently, which is some evidence the
correction is the right one.

## Not a next update

The conclusion is unchanged, and the reason is the one restated properly below:
building a contract layer before there are components to contract means
maintaining a diff with nothing on one side of it. Recorded here so the shape
and the risk are not re-derived from scratch when the trigger does fire. (The
*wording* of the trigger did change on 2026-09-01 — see the bottom of this
note.)

---

# The build order, if the trigger fires

*Added 2026-09-01. Still not adopted, still not a decision. The two sections
above say what the layer is and what the baseline would have to grow; neither
says in what order, or which task could stop the project. This does. Worked out
against the baseline code as it stands today (`Orin Token Pipeline` at the
Synthesis scaffold commit), so the file names below are real ones.*

## The trigger, stated properly

The wording used since this note was filed — "a client build grows a real
component library" — is too loose in two ways. Both were found by checking it
against a real client rather than by reasoning about it, which is the only
reason they were found at all.

**It is two-sided, and only one side was ever stated.** The mechanism is a
diff: the contract emitted from Figma on one side, the code's component API on
the other. A component library in Figma is necessary and nowhere near
sufficient. With no code side there is nothing to diff, the check can never go
red, and what remains is guidance wearing a gate's clothes — the "follow or
break" problem in better packaging.

**A `Components` collection is not a component library.** KR has one, and it is
values throughout: `components/alert/error/bg` is a colour with a description.
Component *structure* — variant property names, their allowed values, defaults —
is a different kind of thing that nothing in the pipeline extracts today. The
loose wording lets the first count as evidence of the second.

Checked against KR, the build the baseline was extracted from: its consuming
repo is static HTML and CSS — `index.html`, `styles.css`, `partials/`, a
`build-blog.js`. No components, no props, nothing for Code Connect to map to.
**KR satisfies the old wording and fails the mechanism outright**, which is the
sharpest available evidence that the old wording was wrong.

So the trigger is all four of these, not the first alone:

1. Real component **sets** in the client's Figma, carrying variant properties —
   not merely a `Components` variables collection.
2. A component library in the client's **code**, with a props API worth
   contracting.
3. **Code Connect published**, or an equivalent code-side manifest, so the two
   sides are comparable by name. Establish what seat and plan this needs on
   their Figma account before promising it to anyone.
4. Enough churn that adjudication is genuinely the bottleneck. Two components
   and an attentive owner do not need a mechanism, and giving them one is the
   same error as building it early.

**And the trigger is not the ledger's revisit condition.** That has been the
wording since 2026-08-10 and it does not survive reading the bullet:
`PIPELINE-LEDGER.md` says "*Orin* grows a real component library," about Orin's
own Token-layers row, while the last section of this note says the mechanism is
explicitly not for Orin's site. Two different conditions were wearing one
sentence. The ledger bullet stays useful as the pointer that leads a reader
here; it is not what fires this.

---

**The shape of the estimate matters more than the estimate.** Thirteen tasks,
of which the first three are the whole decision and days rather than weeks. The
remaining ten are ordinary work of a kind this pipeline has done before, perhaps
a week, with one task deserving disproportionate care. Front-load the three and
you find out cheaply whether the thing is buildable at all.

## Phase A — the three tasks that decide whether this is buildable

**1. The `decisions.md` entry, before any code.** Records which client met the
four conditions, and which of them was the marginal one. Note that this does
**not** move the ledger's Token-layers row: that row tracks Orin's deltas from
the baseline, and a client growing components changes nothing about Orin. An
earlier draft of this task said otherwise, which was the same conflation the
trigger section corrects. The "Shape it would take" section already demands the
entry; it is restated as task one because it is the cheapest thing here and the
easiest to skip.

**2. The portability spike.** Research, not code, and the real gate. Point a
throwaway extraction at two or three real client files and measure the variance
in component-set names, variant property names and value casing. The deliverable
is a yes/no on: *can a contract reader match by convention, the way the
six-collection convention lets the token half be pointed at an unfamiliar file?*
If the answer is no, the reader needs per-client overrides, `figma: {}` in
`pipeline.config.mjs` stops being the confession it is designed to be, and this
is a more expensive project than it looks. That risk is already named above
under "the non-obvious cost is the convention, not the code" — this is where it
gets settled, and it gets settled first.

**3. Confirm conditions 2 and 3 for this specific client**, against their repo
and their Figma account rather than against a general impression that they "have
components." The baseline itself carries no Code Connect anywhere — no
`codeConnect`, no `componentPropertyDefinitions`, nothing — so two of the
three-way diff's sides start absent in every case and someone has to build them.
Doing this before Phase B rather than after is the difference between a week and
a wasted week.

## Phase B — extraction, the risky half

**4. A component reader in `plugin/code.js`** — a second function beside
`extractVariables`, reading component sets and their property definitions,
returning a third key alongside `values` and `descriptions`.

**5. Its twin in `scripts/figma-fetch.snippet.js`, and the parity test in the
same commit.** This is the task to slow down on. The snippet is the one piece of
the pipeline that cannot be unit-tested, which is how the dark-mode bug survived
for months. `extraction parity` in `scripts/lib/figma-plugin.test.mjs` holds the
two routes in step, but it currently asserts `fromPlugin.values` against the
snippet's whole return — **so a contract half added to one side only would pass
it vacuously.** Extend the mock fixture with a real component set and variant
properties, and extend the assertion to cover the new half, in the same commit
as the reader. Doing otherwise reintroduces exactly the untested-divergence
condition that test exists to prevent.

**6. `sync-from-figma.mjs` and the sink.** Freshness and the wrong-file
provenance refusal apply unchanged. The one addition: `--check` must show
contract changes in the diff, or a changed variant set syncs in silently.

## Phase C — emit

**7. `dist/contract.json`, not a Style Dictionary output.** Style Dictionary
builds token trees; component structure is not a token and does not belong in
`sd.config.mjs`. Emit it as a sibling. `verify-build.mjs` asserts six expected
dist outputs exist and are non-empty, so it grows a seventh.

Name it apart from the `Components` *collection* from the very start. That
collection is values (`components/button/primary/border`); the contract is
structure. Two different things that will otherwise want the same word.

## Phase D — the gate, the only part that is enforcement

**8. A new check in `scripts/generate-report.mjs`** — id `contract-parity` or
similar — diffing the emitted contract against Code Connect. Follow the
discipline the existing checks already set: `status: 'skip'` where there is no
code side, since a skip states plainly that nothing was proven; an explicit
allowlist in `pipeline.config.mjs` with a reason per entry; and **never a
regex**, for the same reason `modeParity.expectedIdentical` forbids one — a
wildcard is how a genuinely broken case gets through behind a legitimate one.

**9. `verify-docs` follows for free.** It already fails when a doc names a
report check id the report does not emit, so the new id is policed the moment a
doc mentions it. The only manual step: if the contract emit is gitignored, it
needs an `ABSENT_BY_DESIGN` entry with its reason.

## Phase E — the prose, and the third option

**10. Lock zones into `templates/agent-rules.md`**, rendering into the generated
`CLAUDE.md` / `AGENTS.md`. Never a hand-written file.

**11. The proposal record lands in Figma**, per the correction both sources
needed. The markdown carries Gap / Built from / Why not X / Used in as reasoning
and is never what the build consumes.

The open design question this leaves is **where the counter physically lives**.
`used in: 1/2` has to sit somewhere machine-readable in Figma. The component
description field is the only durable free-text surface the plugin already
reads; plugin data is the other candidate. Choose deliberately, because task 12
depends on the choice.

**12. The graduation check.** The report reads the counter and surfaces both
outcomes: proposals at 2/2 that should now be real, and proposals stalled at 1/2
for three months, which are patterns nobody needed. Carmen is right that this is
the part that gets dropped, and it is the part that separates a system from
forty one-off inventions.

## Phase F — packaging, last

**13. The skill.** It bundles the guidance, the contract as data, and the
propose-and-graduate rules, so the third option exists at the moment of
generation. It ships from the repo with a release tag (`scripts/tag-release.mjs`
is already there). It carries no enforcement and no verdict.

## The one ordering constraint that is load-bearing

**8 before 13.** Ship the skill before the gate and the pattern layer is made
entirely of prose an agent can skip, misread, or run without — which is the
"follow or break" problem in better packaging. Everything else in this order is
dependency; that one is the point.

---

## Explicitly not for Orin's site

Orin is five pages with a primitives-only component budget
(`PHASE5-BUILD.md`), no component-token layer, and locked decisions it is
told not to relitigate. It has no pattern layer to govern and adding one would
violate the component budget to solve a problem it doesn't have. This note is
for the client baseline, not the practice site.

## Related

- `PIPELINE-LEDGER.md` — Token-layers row (**Dropped**, component layer);
  invariants #2, #3, #7; "When to revisit this ledger."
- `deliverable.md` — the component library line, and why Storybook and
  `design.md` are scoped to it.
- `notes/pipeline-comparison.md` — Carmen / KR / Orin, direction of truth.
- `notes/pattern-layer-infographic.html` — this note's mechanism drawn as a
  sheet. It points here for status; this points back so the pair stays findable
  from either end. Same parked status, same attribution.
- `notes/pattern-layer-dataflow.html` — the plumbing, added 2026-09-01: what
  object exists at each stage, what transforms it, what reads it. Bands 1–3 are
  the built value path; bands 4–6 are this note's proposed half, marked parked
  in every band title. It is where the "components are not exported to code"
  question gets answered in a picture, including the fact that Code Connect runs
  upward.
- `Orin Token Pipeline` (sibling repo) — the baseline the second review was run
  against: `scripts/verify-docs.mjs` (what the prose gate does and does not
  cover), `scripts/lib/figma-to-dtcg.mjs` (the six-collection convention), and
  `plugin/code.js` (variables only — no component structure is extracted).
