# The pattern-layer sheet against what was actually built

*Written 27 September 2026, after ORIN-49 closed. Compares
`pattern-layer-infographic.html`, a mechanism sketched from two outside
sources and reviewed against published implementations, with the thing
that got built on IDEM in two days. Neither supersedes the other: the
sheet is for a client library at scale, the build is four components
with no churn.*

---

## What exists, and what of it travels

### The mechanism, 927 lines

| Artefact | Lines | Travels? |
|---|---|---|
| `src/components/contract.schema.json` | 201 | **Yes**, with their naming |
| `scripts/verify-contracts.mjs` | 342 | **Yes**, near-verbatim |
| `scripts/verify-figma.mjs` | 175 | Yes, with per-client mapping |
| `scripts/figma-fetch-components.snippet.js` | 116 | Yes, with per-client mapping |
| `.storybook/test-runner.js` | 34 | **Yes** |
| `.storybook/preview.jsx` (both modes, explicit dark exports) | 59 | **Yes** as a pattern |
| `runs/bin/breaks.mjs` | | **Yes**, as proof the checks work |
| `runs/PROTOCOL.md` | | Yes, as a runbook |

### The instances, which do not travel

Button, Input, Label, FormField: five files each. Token additions:
`button/radius`, `button/height`, `border/width/default`,
`focus/ring/width`, `focus/ring/offset`, units on 15 letter-spacing
tokens, and `size.json` and `typography.json` compiled for the first
time.

### The one thing that looks portable and is not

`verify-figma.mjs`'s `PREFIX` map. The resolver is generic. The map that
reconciles Figma's collection naming with the token file's nesting is
not, because **the divergence is the client's, not a constant**. On IDEM,
`scale/20` is `--idem-spacing-scale-20` in the Spacing collection and
would be `--idem-radius-scale-20` in Radius. Every client will have
their own version of that, and getting it wrong produces confident,
wrong drift reports.

Budget a re-derivation per client, not a copy.

---

## Row by row

| Sheet | Built | What practice said |
|---|---|---|
| **01 The contract**, "generated, never written" | Written by hand, no provenance | **The sheet was right and I ignored it.** Four errors against the design. See below |
| **02 The guidance**, "generated, not hand-maintained" | Hand-written paragraph | Consistent, and worse than warned: mine stopped two runs building anything |
| **03 The check** | Built, and it is three things | The sheet has one row. Split it |
| **04 The proposal**, a rich record at the source | A one-line `proposed` array | Cheaper than the sheet's design, and it is what worked |
| **05 The graduation**, two uses then review | Not built | Correct. Condition 4 (churn) cannot exist on IDEM |
| **06 The evaluation** | Nothing new | Still "tested at ceiling, not supported" |

### 01, refined 28 September: "never written" is too absolute

Working out what generation would actually mean showed the row needs a
correction rather than a footnote. The contract has two kinds of content
and only one is derivable:

**Generated:** the token bindings. Which token lands on which property,
for every variant and state. The part that was wrong, and the part the
design already knows.

**Authored, and it cannot be otherwise:** the accessibility policy, because
a contrast bar and a minimum target are decisions rather than
observations; the story list, a code-side naming convention; the
properties that exist only in code; and the design-to-code name mapping
itself, which is chicken-and-egg because generating needs it.

So the target is: **the bindings are generated, the policy and the
code-side conventions are authored, and the line between them is
explicit in the file.** The sheet's pill now reads "Bindings generated,
policy authored". ORIN-65 carries the work.

### 01 is still the sheet's strongest moment, and it validated against me

"Generated, never written" was a preference with an argument behind it.
It is now a finding with an instance. I wrote the Button contract
carefully, from the token files, and never opened the design. It was
wrong in four places, including specifying a rounded rectangle for a
button the design draws as a pill.

Every check passed the entire time, because every check compared the
contract with the code and the design was not in the conversation.

**A hand-written contract is a second opinion about the design, not a
record of it.** Generation is not a tidiness preference; it is the only
thing that makes the contract evidence.

### 03 should be three rows

One row is too few, because the three kinds fail differently:

- **Static.** Contract well formed, every token it names emitted in both
  modes, no primitives, no literals, no component reaching for a token
  its contract does not name.
- **Executable.** axe on every state in both modes.
- **Drift.** The contract against the design, on demand, because it
  needs a live read.

The seam is the useful part. A low-contrast value placed in a story
passes the static check, which correctly does not scan stories, and
fails axe. Stated plainly: static checks prove a component references
the right names; only running it proves the result is usable; only
diffing the design proves it is the right component.

### 04 worked, by a mechanism the sheet does not describe

The sheet's proposal carries gap, built-from, why-not-X, used-in and
decision, and lands at the source of truth. What IDEM has is a
`proposed` array of token names on the contract.

**That array is what produced proposing behaviour.** `r01` had no
`CLAUDE.md`, no `AGENTS.md` and no contract, read the schema, and
declared ten missing tokens in it. ORIN-39's one-paragraph router
produced zero proposals in six runs.

So the sheet's data-over-prose thesis is right and its proposal design
may be heavier than it needs to be. A field in the schema with a
description of what it is for did the job.

---

## The finding with no row on the sheet

A font weight bound to `VariableID:1:6841`, named `Weight/Medium`, an id
in **no collection's variable list**. The real `Fonts/weight/medium` is a
different variable. Both resolve to 500, so the design rendered
correctly, editing the real token would have done nothing, and no
enumeration of local variables would have seen the one in use.

None of the five rows catches this, because **all five assume the
contract is generated from a source that is internally coherent.** "The
design file is wired to something that does not exist" is not in the
model. The drift check found it only because it compared bindings by
name rather than values by equality.

Worth a sixth consideration, not yet a sixth row: a source-integrity
check, separate from the contract-versus-source diff.

---

## What a client would actually get, and what still has to be built

**Lifts in about a week of a Build:** the schema, `verify-contracts`, the
test-runner hook, the both-modes preview pattern, the break harness as
proof the checks work.

**Needs per-client derivation:** the Figma mapping and the collection
prefix map.

**Has to be built and IDEM never needed it:**

1. **Contract generation.** Row 01, and the exercise is the argument.
2. **A sync script.** ORIN-53. IDEM has none, and its absence is how
   `button/radius` sat in Figma and in no token file, and how two
   hardcoded hex values lived in the token source.
3. **The graduation counter**, if they have churn. Untested anywhere.
4. **Code Connect**, only if they are already on Organization or
   Enterprise. The drift check does not need it.

---

## What this does not change

The sheet stays **parked**, and the five-condition trigger in
`pattern-layer-governance.md` is untouched. Three parts having been built
once, on a four-component greenfield system owned by one person, is not
a client library at scale and does not meet condition 4.

What has changed is that three of the five parts now have an instance,
two rows have evidence behind them, and the parts still marked
*hypothesis* are the same ones as before.
