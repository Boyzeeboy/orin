# Component-layer practice on IDEM: the plan

*Filed 2026-09-19 for ORIN-49. A plan for practice, not a decision about
the pattern layer. The mechanism in `pattern-layer-governance.md` stays
parked and its five-condition trigger stays client-side. What this changes
is whether I have done the loop myself before a client's trigger fires.*

---

## The gap, stated honestly

The Build sells "Tokens. Component library. Page patterns. The pipeline
connecting Figma to the codebase." I can show the first and the last on
running systems: 4 pipelines, a guardrail, the shadcn adapter. The middle
two are prose.

Not thin prose. `pattern-layer-governance.md` is 543 lines, there is a
research evaluation, an infographic, a dataflow, and 12 recorded agent
runs under ORIN-39. But every one of those is about the layer. None of
them is me building it. The research evaluation says so in its own
words: Orin has no "component-bearing baseline of its own."

And it has already come up. A client asked, in writing, how a button
gets described when DTCG can only carry values. The answer I gave was
right (a component contract, one level up) and it was theory. If the
next question is "show me," I have nothing to open.

## Why IDEM

The shadcn adapter is the brownfield rehearsal: the vocabulary is
shadcn's, `contract.light.json` is a fixed export target, and the naming
layer is not mine. IDEM is the greenfield one. Its semantic names are
its own (`--idem-colour-background-default`), the pipeline has Storybook
in it already, `tokens/guidelines.json` carries per-token usage rules,
and `idem-landing` consumes `dist/` with zero literals. That is the
Foundation → Build path, and it is the one I cannot currently show.

No attribution owed. The material stays public; nothing here names a
client.

## What this is not

- **Not promoting the mechanism.** The trigger in
  `pattern-layer-governance.md` needs a real client with component sets,
  a code library, a manifest, churn, and agents. IDEM will never have
  the churn (condition 4) and I am not going to pretend it does. The
  point is to have run each step once, at small scale, on my own
  system, so the first client run is the second time.
- **Not building IDEM's component library.** 3 components and 1 composed
  pattern. The temptation is to finish the library; the practice needs
  the loop, not the library.
- **Not ORIN-39 again.** The result note says "not soon," and it means
  it. No arms, no blind reviewer, no n=3. One run per step, recorded the
  same way, reviewed by me.
- **Not site work.** `pattern-layer-governance.md` already says the
  pattern layer is explicitly not for Orin's site. The stopping rule on
  `site/` holds.

## The one rule, from ORIN-39

*Until a baseline fails, there is nothing to learn.* Opus 5 answered the
ORIN-39 task from the catalogue unaided, and the context had nothing
left to fix. So every step below picks a task the unaided agent will get
wrong, and records what it got wrong before any context is added.

The ORIN-39 harness is reusable as it stands: `claude -p`, sealed
prompt, `stream-json` transcript, `HOME` pointed at an empty directory.
About 10 minutes of setup and 4 minutes a run.

## The five steps

Each one is a session. Each ends with a dated section appended to this
note and an entry in `decisions.md`. Transcripts, diffs and screenshots
live in the IDEM repo, not here.

*Added 2026-09-20:* the fixed part is `runs/PROTOCOL.md` in the IDEM
pipeline repo (`Boyzeeboy/idem-design-tokens`): exact commands, the
contract schema, the checks and their scope, the frozen prompts, the lab
tags, the record. This note is the why; that file is the exactly-what,
and a run is repeated from it, not from here. Where the two disagree the
protocol wins and the disagreement is logged in its change log.

### 1. Decide what a component contract is

Before any component exists. Name, variants and their allowed values,
defaults, states, token bindings, accessibility requirements: as data, in
a JSON file beside the component, not as prose. This is the
component-token-layer question Orin has punted since invariant #7. IDEM
is where I answer it once, with a real file, and find out what the
schema needs by writing the second one.

Two references already reviewed and not adopted: Vallaure de la Paz's
"structured data for anything that must be exact and unchecked," and
Curtis's naming. Take the shape, credit the source.

Done when: `Button` has a contract file, the schema is written down, and
I know which fields the guardrail can check and which it cannot.

### 2. Button, three ways

Same contract, three starting states. No context at all; then
`CLAUDE.md` plus `dist/` plus the contract; then from a Figma component
through MCP. The contract demands every state, `focus-visible` included,
in both modes, axe-clean.

The thing to watch is the one ORIN-39 could not test because the
catalogue answered everything: when the focus ring needs a token that
does not exist, does the agent propose or invent? In 6 arm B runs the
agent never wrote `PROPOSALS.md` and invented `link.tsx` silently once.
That is the whole open question in the pattern-layer notes, and it gets
its second observation here.

Done when: 3 transcripts, 3 diffs, and a written comparison of what each
starting state got wrong.

### 3. Extend the guardrail up a layer

`verify-build` proves the token layer: names resolve, modes agree,
semantic-only consumption, no literals. Add the component checks: every
state the contract names has a story; Storybook's test-runner passes axe
in both modes; no literal in any component file; semantic tokens only.
The research evaluation already says executable tests are the
independent check the infographic lacked.

Make it fail first. A check that has never gone red has not been tested.

Done when: `npm test` in the IDEM pipeline fails on a deliberately broken
component and passes when it is fixed.

### 4. Figma round-trip

Push `Button` into Figma from code. Code Connect it, or leave the node ID
in a comment above the component (the weaker manifest recorded in the
governance note on 2026-09-14). Then change the Figma side and see
whether the drift gate's idea extends from variables to component
structure: variant names, allowed values, defaults.

This is the sentence in the Build offer becoming something I have done.
It also settles what seat and plan the Figma side needs, which the
governance note says to establish before promising it to anyone.

Done when: a Figma-side change to a variant name is caught by a check on
the code side, and I know what it cost in Figma seats to get there.

### 5. One composed pattern that needs a component the kit lacks

A card, or a form field with label, hint and error. Built from the 3
components, and needing a fourth that does not exist. This is the
propose-or-invent question again, this time where inventing is the easy
path and proposing is the one the router asks for.

Find what makes an agent write the proposal. A one-paragraph router did
not. Maybe the contract schema does, because a component without a
contract cannot pass step 3's check. That is a guess; it is the guess to
test.

Done when: the agent either proposed and I can say why, or invented and
I can say what was missing.

## Stack, decided so it does not get relitigated

React and TypeScript, because that is what a client's code library
looks like. Storybook, because it is already in the pipeline and its
test-runner is the independent check. Components live inside the IDEM
pipeline repo under `src/components/`, next to `src/stories/`, because
the Build's promise is one source of truth and a component library is
part of the system rather than a consumer of it. `idem-landing` stays a
consumer.

Not shadcn. IDEM has its own semantic vocabulary and shadcn would bring
the fixed-names problem the adapter exists to work around. The adapter
is the brownfield answer; this is the greenfield one.

Any of that can be overturned in step 1 if the contract file says so.
Log it if it happens.

## What to say to a client this week

The learning does not have to finish before the answer is good:

> Tokens are where I have running systems and a guardrail. For the
> component layer I have a governance mechanism I have deliberately kept
> parked until a client's library earns it. I ran one controlled
> experiment; it showed the model already does the easy part unaided,
> and the hard part is component identity across Figma and code, and
> getting an agent to propose rather than invent. That is what I am
> working through on my own system now.

True today, and it matches `OPERATING_MODEL.md`. Each step above moves
one clause of it into the past tense.

## Public form: decided after step 5, not before

*Added 2026-09-19, same day as the plan, after the question "should this
be a case study?"*

Yes, probably. But of what the work found, not of the process, and the
form is chosen from the five sections once they exist. Three reasons.

The Build's buyer wants judgement. "How I learned the component layer"
tells them I was learning last month. "The first component I built on my
own system showed two token files had never reached the CSS output, and
here is the check that stops it now" is the Orin register: blunt about
the system, a finding they can picture in their own repo. The process is
the method section, not the headline.

Writing it during the work bends the work. ORIN-39 holds up because the
protocol was fixed before run 1 and the result written from the record
afterwards. Build step 2 with an essay in mind and I start picking runs
that make a good paragraph. The dated sections are the record; the
public piece, if any, comes from them.

It stays inside what ORIN-39 ruled out. No claim about agent consistency,
review effort or speed; this is n=1 on my own system. What it can carry
is systems findings: the pipeline gap, what Code Connect costs in seats,
what was in place each time an agent proposed rather than invented.
Three observations, stated as three.

Candidates, ranked: the IDEM essay on `/work` (the card has said "Essay
coming" since v1; this would be a reason, and site work, so a logged
decision); a public note here (already happening, linkable from an
outreach email); an outreach piece for the "first UX Engineer hired to
build a design system" trigger row, where "the first component exposed
the pipeline gap" is written for exactly that reader.

---

## Decided, 27 September 2026: the IDEM essay, and it is not optional any more

All five steps are run. The decision the section above deferred:

**Write the IDEM essay on `/work`. Do not write the other two.**

### Why the essay

The slot already exists and says **"Essay coming"**. It has said so
since v1 on 2026-08-16. Writing it closes a declared promise rather than
adding scope, which is the only kind of site work the stopping rule
permits without argument.

It is also the only one of the three that is permanent and
discoverable. The public note is already effectively written, in this
file, and nobody finds a note. An outreach piece is one-to-one and
evaporates.

And the material finally earns the slot. The original IDEM story was a
token pipeline rebuild, which is a thing I did. **The story now is what
happened when I built the layer above it: ten defects in two days, in a
system I would have described as working.** That is evidence rather than
a claim, and it is the difference between a portfolio entry and a
demonstration.

### What the essay is about, and what it is not

**Subject: what the work found.** Not how I learned it, not a method
tour, not the protocol. The protocol is the method section at most, and
probably a link.

The spine is the ten defects, and the strongest three are the ones a
reader can picture happening to them:

1. Two token files authored and never compiled, so a whole layer of the
   system had no CSS output and nobody knew.
2. A contract written carefully from the token files was wrong about the
   design in four places, because I never opened the design.
3. A font weight bound to a variable in no collection's list. Right
   value, correct rendering, wrong wiring, invisible to everything.

Those three make the argument on their own: **building the layer above
the tokens is what makes the token layer testable.**

**Not in the essay, and this is a hard line.** Nothing about agents
working better with context. ORIN-39 ruled that out and this exercise
did not rescue it. The schema-versus-prose observation is interesting
and is n=1 per arm on one system; it belongs in a note, not in a page a
prospect reads as a claim.

Also not in it: any suggestion that a Build produces ten defects. IDEM
is greenfield, personal, and mine. The honest frame is the one the site
already takes, practice as proof: *this is what I did to my own system,
and here is what it found.* A reader draws their own conclusion about
their system, which is stronger than me drawing it for them.

### What this costs and what it needs

It is **site work**, so it needs Warren's explicit go-ahead before a
line is written, per `CLAUDE.md`. The stopping rule is not waived by a
good reason; it is satisfied by "the card promises an essay and now
there is one to write".

The v1 deferred list has two unwritten case-study essays. This decision
covers **one** of them, IDEM. KRM stays deferred and this is not a
reason to start it.

### The outreach piece, reconsidered and rejected as a separate thing

Not written separately. Once the essay exists, the outreach email for
the "first UX Engineer hired to build a design system" row is two
sentences and a link, which is a better email than a long one. Writing
the piece first and the essay later would produce the same words twice
and date the second one.

## Budget and stopping rule

4 to 6 sessions. Stop when each of the 5 steps has run once and written
its section, not when IDEM has a component library. A step that fails is
a finding, not a reason to add a session.

## Revisit if

- A client meets the five conditions before this is done. Then the
  client's Build is the practice, and this note becomes the checklist.
- Step 2 shows the unaided agent passing the contract on all states in
  both modes. Then the task is at ceiling again, and steps 2 and 5 need a
  harder component before they teach anything.

---

# Step 0, 26 September 2026: the harness

Ran in one sitting. TypeScript, the Storybook test-runner with axe in
both modes, the run harness adapted from ORIN-39, and a build that no
longer dirties the tree. `npm test` green on the five stories that
already existed. Three findings, all in `runs/NOTES.md`.

The one worth repeating here: **all five token docs stories fail AA**,
9, 9, 23, 53 and 94 nodes, because they are styled with hardcoded hex
rather than the tokens they document. Real, older than the harness, and
invisible until something looked. Exempted by title, debt recorded,
filed as ORIN-52. That is the same shape as the gap step 2 is built
around, found before step 1 started.

The protocol contradicted itself here and only running it showed that:
step 0 is "done when `npm test` is green" and also "a docs story failing
axe is not step 0's to fix". Resolved toward proving the harness.

# Step 1, 26 September 2026: the contract

## What the schema holds

`name`, `figmaNodeId`, `props`, `states`, `tokens`, `a11y`, `stories`,
and one field the protocol did not specify, `proposed`. The `tokens` map
is `variant → state → { cssProperty: token name }`, names never values.

**The tokens map is the allowlist.** A component file may reference an
`--idem-*` name only if its own contract names it. That one decision is
what makes the check read data instead of inferring intent from a folder
name, and it is why `Label`, `Input` and `FormField` will later pass or
fail on the same rule rather than three special cases.

## What the checks prove, and what they cannot

Checks 0, 1, 1b, 2, 3 and 4 went in as specified. 1c is new.

| | Proves |
|---|---|
| 0 | the contract is well formed |
| 1 | every name it uses is emitted in both modes, or declared proposed |
| 1b | no contract reaches past the semantic layer to a primitive |
| 1c | each state's ink on its own background meets the contract's bar |
| 2 | every state the contract names has a story, in both modes |
| 3 | no literal survives in a component file |
| 4 | no component reaches for a token its contract does not name |

What none of them prove is whether a binding is **right**: nothing can
tell `--idem-button-primary-bg` from `--idem-button-secondary-bg` on the
wrong element. That is review's job, and it is the boundary the whole
layer sits on.

## The asymmetry, decided

Primary has no `hover-border` or `pressed-border`; secondary has both.
Primary's border is `rgba(0,0,0,0)`, so there is no state for a border to
be in. Secondary's two are aliases pointing at `{button.secondary.border}`,
the same value in both modes. So: justified for primary, redundant but
harmless for secondary, and the contract binds what exists rather than
tidying it.

## The finding: 7 of 20 bindings fail AA

Writing the contract made the bindings legible for the first time, and
check 1c found that seven of the twenty variant/state/mode combinations
fail. Dark primary is unreadable at rest, 2.73:1, worsening to 1.65:1
pressed. Light secondary focus is 1.40:1, white ink on a light grey
button.

Seven failures, three causes. `colour/ink/onBrand` is white in dark mode
where the brand ramp is light teal, and `button/primary/text` aliases it,
so one wrong value produces three failures. Both `focus/text` entries are
raw hex rather than aliases, which is how secondary ended up with
primary's white. And in dark, secondary lightens on interaction under
near-white text, which no ramp step above neutral-200 survives.

**The value that works was already in the file.**
`button/primary/focus/text` in dark is hardcoded `#1f343a` and passes at
4.78. Somebody worked out the right ink for dark brand, wrote it into
focus, and never carried it back to the semantic token the other states
read. That is the whole argument for a contract in one token: the
knowledge existed and nothing propagated it.

Disabled states are exempt, under WCAG 1.4.3 on inactive controls,
declared in the contract as `a11y.contrastExempt` rather than skipped
quietly in the checker.

**The fix goes through Figma, not the JSON.** `tokens/*.json` is synced
from IDEM Revised, so editing values here would put code ahead of Figma:
the exact drift the practice sells against. The change list is
`runs/step-1-contrast.md`, and `npm test` stays red until it syncs,
which is the guardrail working rather than failing.

## Where check 1 ended up, against the protocol

The protocol expected check 1 red on the unemitted spacing and typography
names, all through step 2. That would have left `npm test` red for the
whole step and made `run.sh`'s `verify_contracts_exit` meaningless. The
`proposed` list replaces it: check 1 prints the seven names every run and
fails only on an undeclared one, or on a proposed name the build has
started emitting, so the list cannot rot. Logged as change-log entry 2.

## What step 1 cost

One sitting, and it produced a token-layer finding before a single line
of component code existed. Two of the five steps have now each surfaced
a real defect in a system I would have described as working.

# Step 2, 26 to 27 September 2026: Button, three ways

## The result, in one line

All three runs proposed. Only the one with **no** prose context also
built the component.

| | `r01` bare | `r02` paragraph | `r03` paragraph + Figma |
|---|---|---|---|
| Component | yes, 20 stories, axe clean | none | none |
| Proposed | via the schema's `proposed` field | to `PROPOSALS.md` | to `PROPOSALS.md` |
| Cost | $2.80 | $1.15 | $1.40 |

## Question 4, which is what the step existed for

**The schema was the context, not the paragraph.** `r01` had no
`CLAUDE.md`, no `AGENTS.md` and no contract. It read
`contract.schema.json`, which the fixture keeps as repository tooling,
wrote its own contract, and listed ten missing token names in the
`proposed` field the schema describes. Nothing instructed it. ORIN-39
got zero proposals out of a one-paragraph router in six runs; a field
with a description got one in a single run.

Prose asks for the answer. A field asks for it and holds the reply.

That also makes `a-bare` a misleading name: it measures "no prose,
structured data present". Keeping the schema was deliberate and
documented, and it turned out to be the strongest piece of context in
the experiment.

**My paragraph made things worse, not nothing.** Both arms that got it
built nothing at all. It ended "write the need to `PROPOSALS.md` and
stop at that point", which I meant as *stop before writing a literal*
and which reads as *stop working*. The agents took the natural reading.
For a client, `r01` is the outcome you want; `r02` is the one that
generates a meeting. Rewritten afterwards, and untested.

**Design access changed what was found, not what was done.** `r03` had
the same paragraph and made the same stop decision. What it changed is
that it read the design, and the design said my contract was wrong.

## The part that stings

`r03` found four contradictions between the step 1 contract and the
design. I verified all four against the file afterwards.

| Contract, step 1 | Design |
|---|---|
| `radius-scale-8`, 8px | `button/radius`, **9999px**, a pill |
| `spacing-scale-24`, 24px inline | **20px** |
| no letter-spacing | **0.1px**, bound |
| `minTargetPx: 44` | component is **40px** |

All four are mine. I wrote that contract carefully, from the token
files, and never opened the design. Built to it, the button is a rounded
rectangle where the design is a pill, which is not drift, it is the
wrong component. `r01` built exactly that, in good faith.

And `verify:contracts` was green throughout. Names resolved, no
primitives, contrast passed in both modes. **A contract checked only
against code is checked against half the system.** That is step 4's
argument, arriving two steps early and far harder than step 4 would have
put it.

## What step 2 fixed in the system

The protocol framed 2.5 as "add two files to the build's source". It was
three things:

1. `size.json` and `typography.json`, authored and never compiled. 85
   non-colour tokens now emit.
2. All 15 letter-spacing tokens were unitless numbers whose own
   descriptions said px. Compiled for the first time, they produced
   invalid CSS. A file that is never built is never wrong, because
   nothing ever asks it a question.
3. `button/radius` had been in Figma since the component set was built
   and in no token file, because the sync only ever took colour
   variables. That is the real reason the code side had no radius, and
   the reason I guessed.

Then the contract was corrected from the design rather than inferred,
and the Button rebuilt from it. Rendered values now match the design on
radius, padding, weight, letter-spacing and family.

## The height, resolved by measuring rather than reading

*Amended 27 September, after the section above was written.*

I first recorded this as the design contradicting itself: the button
rendered 46px against a 40px design, because the design's own padding
and line-height come to 46 while its frame is pinned to 40. Four options
were written up and it was left as a design decision.

Measuring what Figma actually renders gave a better answer. The frame is
`FIXED` at 40 with `CENTER` alignment, so 12 + 20 + 12 cannot fit and
**Figma was ignoring the vertical padding**, centring the label with an
effective 10px above and below. The 12 was never applied.

So it was not a contradiction, it was **dead metadata that reads as
real**. And it did: twice in one day, by my step 1 contract and by
`r03`, which flagged the inline padding as wrong and passed the block
padding as correct. Both read the number instead of the rendered result.

The fix expresses the height rather than deriving it. `button/height` =
40 now exists in Figma's Components collection beside `button/radius`,
bound on all ten variants; the dead padding is zeroed so the file stops
misleading the next reader; the token is synced; and the contract and
CSS moved from `paddingBlock` to `minBlockSize`. The button renders at
exactly 40px in both variants and both modes, and the a11y target is met
by a bound token rather than by coincidence.

**Two things worth keeping from this.** A second component-level token
arrived within a day of the first, which is the case for the component
layer wanting its own tier rather than reaching into the spacing scale.
And "the source contradicts itself" was the wrong diagnosis, reached by
reading values; the right one needed measuring what the tool renders.
That distinction is the whole difference between a contract written from
token files and a contract written from a design.

## One more defect, in the guardrail itself

Check 3 failed on `46px` and `40px` **inside a CSS comment** explaining
why the height is what it is. The file contained no literal at all. A
comment that explains a value will name values, so the check now blanks
comments before scanning, with newlines preserved so a reported line
number still points at the real line.

Small, and it makes seven things this layer has surfaced: 188 contrast
failures in the token docs, seven Button bindings failing AA, three
pipeline defects, four errors in my own contract, three Figma binding
defects, dead padding in the design, and a guardrail that flagged prose.

## What two steps have now cost and produced

Two of five steps, and the component layer has found: 188 contrast
failures in the token docs (ORIN-52), seven Button bindings failing AA
traced to one semantic token, three defects in the token pipeline, four
errors in my own contract, and three Figma-side binding defects. None of
them needed an agent behaving differently to find. Every one of them
needed something to ask the system a question it had never been asked.

That is the claim that is surviving: not that agents do better work with
context, but that **building the layer above the tokens is what makes
the token layer testable.**

# Step 3, 27 September 2026: the guardrail, one layer up

## The allowlist is empty

`1px` was the one permitted literal through steps 1 and 2, in three
places: the border, the focus ring width, and its offset. All three are
tokens now. The component has no literals at all beyond unitless zero.

Getting there found that **the system had no width token of any kind.**
All 26 variables matching border, stroke or outline are colours, and
`strokeWeight: 1` sat unbound on ten Figma frames. The border width is
now declared in Figma and bound, the third time in two days that an
implicit frame property has been turned into a diffable token
(`button/radius`, `button/height`, now `border/width/default`).

The focus ring width and offset could not be synced, for the reason
below. They are authored in code and say so in their descriptions, and
they are the only tokens in the system with no Figma counterpart.

## Every check goes red on its own break

`runs/bin/breaks.mjs` applies each break, runs the check, records which
ids fire, and restores. Six breaks, all red, nothing red when nothing is
wrong.

The thing I would have got wrong by reasoning: **a contract edit
produces two reds, a code edit produces one.** Changing what the
contract permits immediately orphans the CSS that named the old token,
so check 4 fires alongside check 1, 1b or 1c. That is the allowlist
working as designed, and it is now a readable signal: two reds means
someone changed the specification, one means they changed the code.

## The seam, which is the point of the whole step

The fifth break puts a low-contrast value **in a story**, which check 3
does not scan:

```
check 3:  ✓ no literals in 2 component file(s)
axe:      ● Components/Button › SecondaryRestDark › smoke-test
          color-contrast, serious, 1 node
```

Check 3 is silent and correct to be. Only running the thing catches it.
And because step 0 chose explicit dark story exports over a toolbar
loop, the failure **names the mode**. That decision cost a doubled story
count and has now paid for itself once, in the only place it could.

This is the boundary the layer sits on, stated as cleanly as it is going
to get: **static checks prove a component references the right names;
only executing it proves the result is usable.** Every check written in
steps 1 to 3 is on one side of that line, and knowing which side is what
stops a green build being mistaken for a working component.

## Finding: the design has no focus indicator on the primary button

Found while looking for a focus-ring width to sync, which is the kind of
thing you only look for when you are building the layer above.

`Button=Primary,State=Focus` is **pixel-identical** to
`Button=Primary,State=Default` in both modes: no effects, transparent
border, `focus/bg` aliasing `bg`, and `focus/text` resolving to the same
value as `text`. Secondary escapes only incidentally, because its stroke
binds a teal.

A WCAG 2.4.7 failure in the design, which the shipped code has been
covering with an outline the design never specified. That was my
judgement call writing the CSS, not a system decision, and nothing would
have caught it. Filed as ORIN-55.

**This is the first disagreement that went the other way.** The contract
already said `a11y.focusIndicator: true`, so the contract was right and
the design was wrong. Every previous one, the design was right and I had
guessed.

Worth holding onto both directions. A contract written from the token
files was wrong about the design four times. A contract written with
accessibility in mind caught something the design had never considered.
The contract is not a transcription of Figma and it is not a wish list;
it is the place the two meet, and it earns its keep in both directions.

# Step 4, 27 September 2026: the drift check

## Shape

`npm run verify:figma`, a snippet-plus-script pair like the token sync,
run on demand because it needs a live read. Three exit codes, and the
third is the one I would not have thought to add before ORIN-54:
**0 agree, 1 disagree, 2 cannot tell.** A check that cannot distinguish
"fine" from "I could not look" is the one that eventually lies.

The mapping between the two naming schemes is data on the contract, not
a lookup buried in the checker: `propMap`, `stateMap`, `valueMap`, and
`codeOnly` for properties with no Figma counterpart by design. Every
`codeOnly` entry prints on every run. A declared gap, never a silenced
one.

## The finding: an orphaned variable

The Button's font weight was bound to `VariableID:1:6841`, named
`Weight/Medium`. That id **is in no collection's variable list**. The
real `Fonts/weight/medium` is a different variable entirely.

Both resolve to 500. The design rendered correctly. Editing the real
token would have done nothing to the button, and no enumeration of local
variables would ever have seen the one it used, so the token sync could
not have caught it either.

**Right value, plausible name, correct rendering, wrong wiring.** That
is the class of defect this check exists for, and it is the first
finding in the whole exercise that only a Figma-to-code comparison could
produce. Everything before it, a sufficiently careful person could have
found by reading one side.

The text style bound the correct variable all along. The orphan was a
node-level override shadowing it, which is why it survived.

## Three more, and one that went the other way

Primary Disabled bound its stroke to `disabled/bg`, leaving
`disabled/border` emitted and used by nothing. Secondary Focus bound its
label to `secondary/text`, leaving `secondary/focus/text` dead, **which
is why step 1's 1.40:1 contrast failure was invisible**: the only place
it could have shown was the one place that did not use it. Inline
padding was an unbound raw 20.

13 disagreements went to 1. The last one was **a code defect**: the
design changes the secondary border colour on focus and my CSS did not.
First time the drift check corrected the code rather than the design,
and the second time overall that the code was the wrong side.

## What 4.4 proved

Renaming `Secondary` to `Outline` in Figma produced six failures naming
the property, both value sets and every orphaned variant. Renamed back,
green. The check goes red for the right reason and says enough to act
on without opening Figma.

## Owed

Code Connect was not published. The node id in the contract is the
weaker manifest the governance note recorded on 2026-09-14, and it is
sufficient for a check that matches by variant name. Establishing the
seat cost is the one part of step 4.2 not done, and it is the question a
client will ask, so it should not stay owed for long.

## What four steps have produced

Nine defects, in a system I would have described as working:

| | Found by |
|---|---|
| 188 contrast failures in the token docs | axe, once anything ran it |
| 7 Button bindings failing AA | the contract making bindings legible |
| 2 files authored and never compiled | building a component that needed them |
| 15 letter-spacing tokens emitting invalid CSS | compiling those files for the first time |
| `button/radius` in Figma and in no token file | a contract that had to name a radius |
| 4 wrong values in my own contract | an agent with design access |
| dead padding in the design, read as real twice | measuring rather than reading |
| no focus indicator on the primary button | looking for a token to sync |
| a font weight bound to an orphaned variable | the drift check |

Not one needed an agent to behave differently. Every one needed
something to ask the system a question it had never been asked, and the
component layer is what asks.

# Step 5, 27 September 2026: FormField, and what the question turned out to be

## The run

`r04` built the pattern, passed every check, and needed **zero
corrections**. 61 stories, axe clean in both modes. The first run to do
any of those.

It **followed**: used `colour/on-background-muted` for the hint and
`input/text/error` for the error, both existing semantic tokens, and
wrote a contract naming them. No new component, no new token, no
proposal.

**My premise was wrong.** I chose the task believing hint text had no
token. It has one, it passes AA in both modes, and not inventing one was
the right answer. The gap I built the run around did not exist.

## The three observations, and the wrong question

| | Missing | Did | In place |
|---|---|---|---|
| ORIN-39 | a `Link` | **invented**, silently | a one-paragraph router |
| `r01` | 10 tokens | **proposed**, and built anyway | the schema alone |
| `r02`, `r03` | 7 tokens | **proposed**, and stopped | my paragraph, which said "stop" |
| `r04` | nothing | **followed** | the rewritten paragraph, three contracts |

Zero inventions across four runs. Three correct proposals and one case
needing none.

**What determined the behaviour was not the instruction.** Three times
out of four the instruction was absent or actively harmful and the
outcome was still reasonable. `r01` proposed with no prose at all,
because `contract.schema.json` has a field called `proposed` and
describes what it is for. The paragraph that asked for the same thing
stopped two runs from building anything.

So the ordering, on this evidence: **the data model, then the examples,
then the prose.** Prose is the weakest of the three and the only one
that can backfire.

**And the question was wrong.** "Propose or invent" assumes a gap.
Across four runs, three gaps were real and one was my mistake. Nothing
here supports a claim that Orin's context makes agents propose rather
than invent: one observation of invention and three of proposal, under
four conditions that differed in every dimension at once, is an anecdote
in each direction.

What it does support is narrower and more useful: **if you want an agent
to record a gap rather than paper over it, give the repository a place
to record it.** That is a claim about the artefact, not about the agent,
and it is demonstrable on any repo in an afternoon.

## What it found in my code, an hour after I wrote it

`.idem-visually-hidden` was used in `Label.tsx` and defined nowhere, so
the "(required)" text meant for screen readers was rendering visibly to
everyone.

It also reasoned that a disabled `FormField` must not grey its hint and
error, because standalone paragraphs cannot claim WCAG's
inactive-control exemption. That is the distinction axe had forced on me
with the Label earlier the same day, generalised to a case I had not
hit. It could read that reasoning in a story comment, which makes it
propagation rather than insight, and is the argument for writing
reasoning down where the next reader will find it.

Its accessibility wiring is better than mine: `useId` for the
association, `aria-describedby` listing the error before the hint so the
blocker is announced first, and `aria-invalid` derived from the same
prop that renders the message so the two cannot disagree.

---

# ORIN-49, closed

## Ten defects, five steps

| | Found by |
|---|---|
| 188 contrast failures in the token docs | axe, once anything ran it |
| 7 Button bindings failing AA | the contract making bindings legible |
| 2 token files authored and never compiled | building a component that needed them |
| 15 letter-spacing tokens emitting invalid CSS | compiling those files for the first time |
| `button/radius` in Figma, in no token file | a contract that had to name a radius |
| 4 wrong values in my own contract | an agent with design access |
| dead padding, read as real twice | measuring rather than reading |
| no focus indicator on the primary button | looking for a token to sync |
| a font weight bound to an orphaned variable | the drift check |
| a visually-hidden class that hid nothing | an agent reading my code |

**Not one needed an agent to behave differently from baseline.** Every
one needed something to ask the system a question it had never been
asked.

## What I can now say on a call

Before this, the component layer was 543 lines of parked governance and
a research evaluation. Now:

- I have built it. Contract, guardrail, executable checks, Figma diff.
- It found ten defects in a system I would have described as working,
  including one that nothing else could see: a font weight bound to a
  variable in no collection, right value, correct rendering, wrong
  wiring.
- I can say what each layer of checking can and cannot prove. Static
  checks prove a component references the right names. Only executing
  it proves the result is usable. Only diffing against the design proves
  it is the right component. A contract checked against code alone is
  checked against half the system.
- I know what the Figma round-trip costs, except the Code Connect seat,
  which is still owed and is the question a client will ask.

## What I cannot say, and will not

Nothing about agents working better with context. ORIN-39 ruled that out
and this did not rescue it. The one behavioural finding, that a schema
field produced proposing where a paragraph did not, is n=1 per arm on
one system and is a design observation, not a performance claim.

## The sellable claim

**Building the layer above the tokens is what makes the token layer
testable.** Ten pieces of evidence, all from one system in two days,
none of them requiring anyone to believe anything about AI.

That is a systems claim. It is demonstrable, it survives a sceptical
client, and it is what the Build has actually been selling all along.

---

## Related

- `runs/PROTOCOL.md` in `idem-design-tokens`: the fixed part.
- The same protocol as a readable page, rendered in IDEM's own tokens:
  <https://claude.ai/artifact/RD5rXtMzKbq7xFEuxVozBK>. The file wins where
  the two disagree; the page is republished after each change-log entry.
- `pattern-layer-governance.md`: the parked mechanism and its trigger.
- `pattern-layer-research-evaluation.md`: the evidence and its limits.
- `agent-readiness-experiment.md`, `agent-readiness-result.md`: ORIN-39.
- `shadcn-adapter/README.md`: the brownfield profile.
- `../Offer.md` §3: what the Build promises.
