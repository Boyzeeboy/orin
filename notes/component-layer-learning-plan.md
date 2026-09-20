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
