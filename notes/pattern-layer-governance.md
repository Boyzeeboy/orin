# Pattern-layer governance — for when the component layer is earned

*Filed 2026-08-10. Not a decision, not yet a proposal. A parked mechanism for
the moment `PIPELINE-LEDGER.md` already says to revisit: when a build grows a
real component library and the component-token layer stops being "Dropped."*

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

Sketch only. Do not build from this without a `decisions.md` entry first.

- Trigger: the ledger's revisit condition — a client build grows a real
  component library, so the component-token layer (`button/*`, `input/*`,
  `nav/*` in KR) comes into scope.
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

The trigger is unchanged: the ledger's revisit condition, a client build growing
a real component library. Building a contract layer before there are components
to contract means maintaining a diff with nothing on one side of it. Recorded
here so the shape and the risk are not re-derived from scratch when the trigger
does fire.

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
- `Orin Token Pipeline` (sibling repo) — the baseline the second review was run
  against: `scripts/verify-docs.mjs` (what the prose gate does and does not
  cover), `scripts/lib/figma-to-dtcg.mjs` (the six-collection convention), and
  `plugin/code.js` (variables only — no component structure is extracted).
