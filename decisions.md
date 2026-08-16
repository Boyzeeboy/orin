# Orin — Decisions Log

A dated record of significant decisions and the reasoning behind them.
Written in past tense at the moment of the decision, not retroactively.
Future me should be able to read this and understand why present me chose
what I chose, even if the answer would be different now.

Format: date, decision, reasoning, revisit-if.

---

## 2026-08-04 — Findings get read aloud before they get written up

**Decision:** Added one paragraph to the Diagnostic's *What happens* in
`Offer.md`, plus a second defence line. Generated audit output is read through
with the client before it becomes the written diagnosis. Not a new stage, not a
deliverable, no change to price, duration, or what the client gets — those stay
locked.

**Reasoning:** Rehearsing the audit against a duplicate of the IDEM design
system produced four cases in one afternoon where the tooling was articulately,
confidently wrong. Not broken — every check did exactly what it was built to do
— but wrong in what it *said*:

1. The collision error prescribed a rename that would have changed the client's
   emitted CSS custom properties. A breaking change, offered as a naming
   tidy-up.
2. Collisions were reported one per round-trip. There were eight, which in a
   live session is debugging your own tooling on the client's clock.
3. A red `mode-parity` check led with "141/150 differ" — the passing count. The
   failure was nine tokens the headline never mentioned.
4. The config comment for `expectedIdentical` offered `colour-text-inverse` as
   its worked example of a legitimate exception. That token was one of the eight
   defects. The guidance named the most tempting wrong answer as correct, in the
   one place someone goes looking for permission to silence a check.

Then the judgement the tool cannot make: nine tokens identical across modes,
eight defects and one genuine exception, all wearing the same language.
Declaring all nine would have buried eight WCAG failures behind a green build,
each with a written reason sitting next to it.

A check that fails silently is caught by another check. A check that fails
articulately but wrongly is caught only by someone reading it aloud. That is not
a gap more automation closes.

It also sharpens what the £3,000 buys. Not the audit — that runs in ten minutes
and I'd run it free in a first meeting. The judgement that separates a finding
from a fact.

**What was deliberately not changed:** no fourth engagement stage, no new
deliverable, no price or duration change, and no methodology section. `Offer.md`
says what the client buys and what it costs; a sales document that starts
describing its own ceremonies has become the thing the manifesto refuses.

**Counter-argument considered:** this is arguably just doing the job properly,
already implied by *"I'd rather tell a client the hard truth about their system
than sell them polish they don't need."* Rejected on the grounds that
undocumented judgement decays under time pressure — which is the argument the
entire practice rests on.

**Revisit if:** after three complete Diagnostics the walkthrough has turned into
a presentation rather than a check, or clients treat it as a status meeting.
Either would mean it has stopped doing its job and should be cut rather than
kept for appearances. Also revisit if a client disagrees with a finding during
the walkthrough and turns out to be right — that would be the strongest possible
evidence for the step, and it should be logged here when it happens.

---

## 2026-08-03 — The `DEFAULT` sentinel, and collisions reported all at once

**Decision:** Restored the uppercase `DEFAULT` name-strip into the client
baseline, and made the Figma sync report **every** name-vs-group collision in one
run rather than throwing on the first. Both found by rehearsing the ten-minute
audit against a duplicate of the IDEM design system before pointing it at anyone
else's file.

**Reasoning:** Two separate problems, one rehearsal.

1. **The baseline could only give a client breaking advice.** DTCG forbids a node
   holding both a `$value` and children, so `input/border` alongside
   `input/border/focus` is refused — correctly, since Style Dictionary would drop
   one silently. But the only remediation the baseline could offer was "rename it
   to `input/border/default`", which changes the emitted custom property from
   `--prefix-input-border` to `--prefix-input-border-default`. That is a breaking
   change across every file consuming it, presented to a client as a naming
   tidy-up. IDEM had solved this in 2026 with a name transform stripping an exact
   uppercase `DEFAULT` segment — structure becomes legal, emitted name doesn't
   move — and the extraction into the baseline lost it. Ported it back, wrapping
   Style Dictionary's own `name/kebab` rather than reimplementing kebab-casing, so
   non-DEFAULT tokens are byte-identical (verified: `dist/` diffs clean against a
   pre-change snapshot). Kept uppercase rather than choosing a clearer sentinel
   like `_default`, because IDEM's committed tokens already use `DEFAULT` and
   changing it would make them unsyncable through the baseline.

   The rule lives in `scripts/lib/token-name.mjs` because two consumers need it —
   `sd.config.mjs` for the build and `generate-report.mjs` for the checks. They
   had independent name derivations; had only the build learned about the
   sentinel, the report would have hunted for tokens under names the build no
   longer emitted.

2. **One collision per round-trip.** The transform threw on the first collision,
   so an operator found them one at a time: fix in Figma, restart the sink, press
   Sync, re-audit, hit the next. The rehearsal file held **eight**. In a paid
   Diagnostic that is a finding — "your Components layer has six places a token
   would be silently dropped" — but delivered one at a time it is debugging your
   own tooling on the client's clock. Now collected, deduplicated across
   light/dark, grouped by collection, and reported once.

   The collision list names tokens by their **Figma** name, not the DTCG path.
   The first version printed `components/input/border`; that `components/` branch
   exists only downstream, so the message sent the reader hunting in Figma for a
   variable that does not exist. The message tells someone to go and rename
   something — it has to use the name they will search for.

**What this cost to find:** nothing, because it was a rehearsal. Had the first
run been in front of Synthesis, the demo would have stopped on collision one of
eight, and the fix offered would have broken their build. That is the argument
for rehearsing the audit against a file whose answers are already known, and it
is now the standing rule before any client run.

**Deferred:** not propagated to `KR Token Pipeline`. IDEM already has its own
DEFAULT transform; KR needs the port only if it ever hits the shape.

**Revisit if:** a client's Figma cannot use uppercase `DEFAULT` for some reason
of their own tooling — then the sentinel becomes configurable in
`pipeline.config.mjs`, with the entry recording that their file departs from the
convention, exactly as the `figma` override block already does.

---

## 2026-08-01 — Orin's own pipeline is the baseline's specification

**Decision:** When Orin's own token pipeline has a check the client baseline
lacks, treat that as a **gap in the baseline**, not as Orin being unusually
strict. Adopted after the third instance in a week. Also added the
`semantic-only` consumption check to the baseline as the immediate consequence.

**Reasoning:** Three times now the practice site has held a standard the thing a
client would be handed did not:

1. **Report gating** (2026-07-30). Orin's `report.mjs` has ended
   `process.exit(passed === results.length ? 0 : 1)` since day one. The client
   pipeline printed its failures and exited 0 — so `mode-parity`, the check that
   exists *because* everything else was green, could go red while `npm test`
   passed, writing into a gitignored file CI generated and discarded.
2. **The manifesto pointer** (2026-07-30). The generated client `CLAUDE.md` told
   its reader to consult a document in *my* repo — legible only because I had
   written it for myself and forgotten who would end up owning the file.
3. **Semantic-only consumption** (2026-08-01). Orin's report has checked this
   from the start. The client pipeline never did — and the live client site
   turned out to route 195 uses through local aliases pointing at primitives,
   roughly 96% of its colour sitting one layer too low, for months.

Three is a pattern, not three coincidences. The cause is ordinary: I build Orin's
pipeline by hand while thinking about the problem, and the baseline by extraction
while thinking about portability. The care goes into the first and the
generalisation into the second, so the first is quietly ahead.

The manifesto's *"the measure of the work is what happens after handoff"* makes
that the wrong way round. The client build is the one whose defect rate matters;
mine is a five-page site. If a check is worth having on my own substrate it is
worth more on theirs — and a check that cannot fail anything does not move a
defect rate, it is an observation wearing the costume of a control.

Concretely: **diff the two report scripts whenever either changes.** They are not
meant to be identical — Orin's has no Figma sync, the baseline has no site of its
own — but every asymmetry should be a decision someone made, not a leftover.

**Revisit if:** the baseline ever gets ahead of Orin's own pipeline, which would
be the healthy direction and would mean the flow has reversed. Or if Orin grows
past a five-page site, at which point its pipeline stops being the simpler case
and this stops being a safe heuristic.

---

## 2026-07-30 — The client's repo stops referring to Orin

**Decision:** The client-facing pipeline repo makes **no reference to the Orin
manifesto**, and no reference to anything a client cannot open. The audit's sales
framing moves here, into `Offer.md` under the Diagnostic. `EXTRACTION-BRIEF.md`
is untracked and gitignored.

**Reasoning:** Asked whether the doc split between the two repos was right, the
answer was: the *repos* are split correctly — practice identity, site build and
lineage in Orin; the working docs that ship with a client's pipeline in the
baseline — but the *audience* inside the baseline was not clean. Two leaks:

1. The generated `CLAUDE.md` opened with *"Read `MANIFESTO.md` in the Orin
   repo"*. The extraction brief specified that pointer, and it made sense when
   the baseline was framed purely as internal tooling operated with me in the
   room. But it also lands in a client's repository, where it is an instruction
   they cannot follow, referring to a document about my practice rather than
   their system. Removed entirely rather than reworded: a client's repo has no
   business citing my manifesto. The four principles it carried were worth
   keeping, so they are restated there in their own right, each tied to the
   machinery it explains.

2. `PROCESS.md` described the client in the third person **inside the client's
   own repo** — *"read it out loud to them"*, *"their file lacks"*. That section
   was written for running an audit in front of a prospect, and then shipped to
   the prospect. The instructions are useful to whoever operates the pipeline, so
   they stayed, rewritten in second person; the framing came here.

The test I'd apply from now on: **would this sentence be strange if the client
read it in their own repository?** Both leaks fail it obviously in hindsight, and
neither was visible while writing them, because I was writing for the person in
front of me rather than the person who ends up owning the file.

`EXTRACTION-BRIEF.md` was tracked by accident — swept into a commit by
`git add -A` after I'd been told to leave it untracked. Now in `.gitignore` so it
cannot happen again. It remains in history from those two commits; not worth a
rewrite.

**Revisit if:** the baseline stops shipping to clients and becomes purely
internal — then the manifesto pointer would be legitimate again. Or if a client
asks what the pipeline was built to believe, which is a conversation, not a file
in their repo.

---

## 2026-07-30 — Storybook returns with a component library; the report gates

**Decision:** Two related calls on the client baseline.

1. **Storybook is not part of a token-only Build.** It returns when a Build
   includes a component library, and is documented that way in
   `deliverable.md`. `guidelines.json` is dropped outright. The generated
   `dist/report.html` is the token documentation a client receives.
2. **The generated report is now a gate.** `npm test` runs it with `--strict`
   and fails on any red check. `npm run build` stays advisory.

**Reasoning:**

*On Storybook.* The question had been open since 2026-07-28, framed as "does a
Build include Storybook and the usage layer?" — a commercial call I did not want
decided by what happened to get copied into a template. Standing the live client
up on the baseline answered it with evidence rather than preference. Its
Storybook contains five stories: Colors, Typography, Spacing, BorderRadius,
Changelog. Every one is a **token** story; there is not a single component story,
and `src/` contains nothing but `stories/`. Meanwhile the generated report
already renders colours (semantic, component, primitive), the type scale,
spacing and radius — four of those five — from the real build.

So Storybook, in a token-only pipeline, is a server you have to run and a
Chromatic subscription you have to hold, in order to see what a generated file
already shows. Its genuine value is documenting components and
visually regression-testing them, which needs components to exist. Scoping it to
the component-library line is not a subtraction; it puts it where it earns its
place. `guidelines.json` goes because nothing reads it — verified, not assumed —
and per-token usage rules already travel as `$description`, synced from Figma.

*On the gate.* `generate-report.mjs` printed its failures and exited 0. That is
how `mode-parity` — the check that exists precisely **because** everything else
was green — could go red while `npm test` passed, writing its red line into a
gitignored file that CI generated, logged and discarded. Found by standing the
client up: the scaffolded clone reported mode-parity failing and `npm test`
still exited 0. The July dark-mode bug would have shipped a second time past a
wall of passing gates.

The deciding argument was an inconsistency: **Orin's own pipeline has gated its
report since day one** (`tokens/scripts/report.mjs` ends
`process.exit(passed === results.length ? 0 : 1)`), while the thing a client
would be handed did not. The practice site held a stricter standard than the
deliverable. Per the manifesto — *the measure is what happens after handoff* — a
check that cannot fail anything does not move a defect rate; it is an
observation wearing the costume of a control.

Deliberately no severity config, no per-check overrides, no opt-out flag. A
skipped check is not a failure, so a client with no site checked out is never
blocked by a site they do not have. If a check proves too noisy in practice,
that is the second case that would justify configuration — not before.

Also proven the same day, and the reason both decisions could be made on
evidence: a clone of the baseline, scaffolded as Kirsten Rossiter and synced from
the live Figma file, produced **byte-identical** output to the live client build
— both source token files and all six `dist/` outputs, same SHA-256. The two
pipelines reach that result by different routes (the live one matches
collections by hardcoded id, the baseline by name), which makes the agreement
worth something.

*Same day, found by checking rather than assuming.* Asked whether
`deliverable.md` was actually aligned with the baseline, I checked all thirteen
artefacts it names. Ten matched. `design.md` did not: the file promised it three
times — as the routing layer, as its own section, and in Related — and the
baseline has no `design.md` and no template for one, so a scaffolded client
would never have received it. The Related link was worse than absent: it
resolved to *this repo's* `design.md`, which is Orin's own site layout
principles and nothing to do with a client deliverable.

Same class of error as Storybook — a live-client assumption carried into a
client-facing doc — and it took the same resolution. `design.md` in the live
client routes to component metadata and Storybook, so it belongs with the
component library for exactly the reason Storybook does: it routes to things
that only exist once components do. In a token-only Build the router is the
**generated** `CLAUDE.md` / `AGENTS.md`, which is strictly better than the doc
it replaces, because it is rendered from one template plus the client's config
and therefore cannot drift from the system it describes.

Worth naming the pattern: both errors were in the one client-facing document,
and neither would have been found by reading it. `verify-docs` polices the
baseline's own docs, but nothing checks a doc in *this* repo against a
*different* repo — so `deliverable.md` will need re-checking by hand whenever the
baseline changes shape.

**Revisit if:** a Build genuinely includes a component library — then Storybook,
Chromatic and `design.md` come back, and `deliverable.md`'s component-library
line is where they already live. Or if a report check proves too noisy to gate
on, which is the second case that would justify per-check configuration.

---

## 2026-07-28 — Extracted the client token-pipeline baseline into its own repo

**Decision:** Extracted the generic machinery out of `KR Token Pipeline` into a
new repo, `Orin Token Pipeline` (sibling folder, own git history, two commits,
nothing pushed). It is the baseline a client engagement starts from — internal
tooling for a partner business, explicitly **not** a product: no `LICENSE`, no
README-as-shopfront, no onboarding for strangers, no error handling for
unattended use. Nobody operates it without me in the room. Per
`EXTRACTION-BRIEF.md`, extracted rather than rebuilt: the code was already ~99%
portable and carries five bugs' worth of reasoning a rewrite would rediscover.

The headline change is **collections matched by name, not id**. The transform's
config was keyed by `VariableCollectionId:68:2831`, so pointing the pipeline at
a new Figma file needed a code edit. It is now keyed by collection *name*, with
modes matched by mode *name*, and the Fonts handling generalised into
per-collection `stripPrefix` / `lowercase` / `exclude` so nothing keys off the
literal string "Fonts". A new client needs matching collection names in Figma —
a convention — rather than a code change.

`resolveCollections()` returns an issue list instead of failing quietly, and
`npm run sync:figma` prints it before transforming anything: which collections
matched, which the convention expects and the file lacks, which modes it could
not map. The mode-parity check came across with `EXPECTED_IDENTICAL` moved into
`pipeline.config.mjs` — still explicit entries with reasons, never a regex.

Also: site coupling parameterised (`KR_SITE_DIR` / `../Kirsten Rossiter` →
`SITE_DIR` / `config.siteDir`), with site-facing checks reporting **skipped**
rather than failed when no site is checked out; Storybook and Chromatic dropped,
leaving `style-dictionary` as the only dependency; `templates/agent-rules.md`
rewritten; and a neutral seed fixture (`npm run seed`) so a fresh clone is green
and the whole sync chain is provable without opening Figma.

**Reasoning:** The manifesto refuses the alternative: *"Orin is not for clients
who want a vendor. Orin is a partner or nothing."* A self-serve tool for
non-developers is a different business. What this template commoditises is
**setup**, never design judgement — the moment it starts shipping opinions about
what tokens should exist, it has drifted into the thing the manifesto refuses.
That is why the seed fixture is characterless greys and says so in its own
header.

Name-matching is the top priority rather than a tidy-up because it is what makes
the strongest version of the sales conversation possible: point it at the
prospect's own Figma file, live, and show them the variables that never reach
their code, the hardcoded values that bypass the system, and whether their dark
mode actually resolves. That is *"I'd rather tell a client the hard truth about
their system than sell them polish they don't need"* executed in ten minutes
rather than asserted in a deck — and it cannot happen if pointing at a new file
requires opening an editor. It is also the same lesson that fixed dark mode in
July: **names are portable, ids are not.**

Skipped-not-failed for the site checks is the same discipline as the generated
report: a permanently-red check teaches people to ignore red, which is how the
dark-mode bug survived months of green gates in the first place.

Verified: 37 unit tests pass (28 carried over, 9 new for name matching), build +
verify green, report 5/5 with 4 correctly skipped, `git diff --exit-code dist/`
clean so the CI reproducibility gate holds. Forcing dark to carry light values
drops the report to 4/5, so the parity check demonstrably bites. Spin-up proven
end to end in a scratch copy: clone → `scaffold-client` → green build under the
client's own prefix.

**Consequence for this repo's docs:** `TEMPLATE-ARCHITECTURE.md` — which
`SETUP.md`, `deliverable.md` and `PIPELINE-LEDGER.md` all cited as the "New
Client Playbook" — was archived out of KR the same day, so every one of those
pointers was dangling. Repointed them at the new repo. Historical entries in
this log were left alone: it is written at the moment of the decision, and the
2026-07-05 and 2026-07-12 entries were true when written.

**Revisit if:** the Figma plugin (brief item 3) or `PROCESS.md` (item 4) lands —
both are still outstanding. Or if a second client is scaffolded and the shared
core is worth extracting into a published package, which would finally make the
top layer of the three-layer model real rather than projected.

---

## 2026-07-21 — Added deliverable.md to define what a client receives

**Decision:** Created `deliverable.md` as a standalone doc answering "when a
client buys a Build, what do they actually get?". It sits alongside `Offer.md`
and defines the deliverable at the level of what and why — the token pipeline
running in the client's own repo, their product wired to consume it, the
component library as it arrives, and the routing/usage layer (`design.md`,
`guidelines.json`, `PROCESS.md`) — while explicitly pointing at
`TEMPLATE-ARCHITECTURE.md` for the file-by-file manifest rather than copying it.

**Reasoning:** There was a gap between `Offer.md` (the Build framed
commercially, at outcome level) and `TEMPLATE-ARCHITECTURE.md` (the technical
manifest, written for me as template author). A question — "is it a folder and a
design.md, a design system, variables?" — fell straight into that gap. A
client-facing definition of the deliverable belongs in Orin, where positioning
and offer already live. Kept it a separate file rather than folding it into
`Offer.md` so the commercial doc stays outcome-focused and this one stays
artefact-focused. Held to the practice's core discipline: it does not duplicate
the artefact list — it references `TEMPLATE-ARCHITECTURE.md` so there is one
source of truth for what a client repo contains, not two that drift.

**Revisit if:** the deliverable changes shape, or the three-layer model in
`TEMPLATE-ARCHITECTURE.md` is restructured — keep `deliverable.md`'s what/why in
step with it, but never let it grow its own copy of the manifest.

*Update (2026-07-26):* the transport example above ("once step 3 lands") is
stale — that seam closed on 2026-07-21. KR now installs the tokens as a pinned
git-tag `devDependency` rather than copying from a sibling folder. The
`vendor/tokens.css` copy itself remains (deliberately: it stays committed so
deploys need no access to the tokens repo), so the deliverable's shape is
unchanged and `deliverable.md` needed no edit. See `PIPELINE-REVIEW.md` §3.1 and
the `[‡]` footnote in `PIPELINE-LEDGER.md`.

*Update (2026-07-28):* the target of the deferral above no longer exists.
`TEMPLATE-ARCHITECTURE.md` was archived when the machinery was extracted into
the `Orin Token Pipeline` repo (see the 2026-07-28 entry at the top of this
log). `deliverable.md` now defers to that repo — a fresh clone *is* the
manifest — which holds the original reasoning better than the doc did: the
manifest is now generated rather than written, so it cannot drift from what a
client actually receives. The "never let it grow its own copy" rule is
unchanged. One open question was left in `deliverable.md` rather than decided
here: the baseline dropped Storybook, Chromatic and `guidelines.json`, and
whether a Build still includes them is a commercial call, not a consequence of
what got copied into a template.

---

## 2026-07-14 — Built the Work page + shipped the Vivo Energy essay early

**Decision:** Built `/work` as a three-card index (Vivo Energy, IDEM, KRM)
and published the full Vivo Energy case study at `/work/vivo-energy`. IDEM
and KRM stay as cards marked "Essay coming". This brings the Vivo essay
forward from Phase 6 — PHASE5-BUILD.md scoped Work as a shell with
"essays coming soon" and said not to draft them — but Warren directed it,
and the Vivo copy was already written and locked in
`case-studies/vivo-energy.md`, so it was assembly, not drafting.

**Reasoning:** The Vivo essay is the proof the whole site leans on (Home
Section 5, the manifesto's 60% line). Shipping it live makes "Read the
case studies →" land somewhere real instead of a placeholder. No new
components or tokens: the index reuses `.cards`/`.card`; the essay reuses
the manifesto's `.wrap` long-form article. "Essay coming" reuses
`.eyebrow` as a status marker, keeping card-rule alignment and adding no
CSS. Attribution held to the rules — Vivo "contracted via Rethink", IDEM
a personal rebuild (no client attribution), KRM fully owned. Both pages
end in the single Contact CTA. `npm test` 8/8, verify clean.

**Revisit if:** IDEM and KRM essays land — swap the "Essay coming"
markers for real links, same card shape.

---

## 2026-07-01 — Founded Orin

**Decision:** Started building Orin as my own agency, from scratch, built
inside-out around who I am rather than outside-in around a service category.

**Reasoning:** A decade of fitting into other people's job titles and
consultancy slots has consistently filed off the parts of me that create
the most value. The generic version of me competes poorly; the specific
version has a combination the market doesn't often see. Building around the
person rather than the offering means the offering is allowed to evolve
as I do, without disrupting the foundation.

**Revisit if:** After two years of operation, if Orin has become
indistinguishable from a generic design consultancy, the founding premise
has been abandoned and needs to be reset.

---

## 2026-07-01 — Manifesto as foundation before any structural work

**Decision:** Wrote the manifesto before deciding on legal structure,
pricing, offer shape, or website. The manifesto is the load-bearing
document; everything else is downstream.

**Reasoning:** Structural decisions made before the manifesto is clear tend
to shape the manifesto rather than being shaped by it. Doing manifesto
first means every subsequent decision has a source of truth to check
against.

**Revisit if:** A structural decision cannot be resolved by reference to
the manifesto — this means either the manifesto is incomplete or the
decision doesn't matter enough to make.

---

## 2026-07-01 — Notion as workshop, GitHub as canonical

**Decision:** Notion holds the thinking, drafts, targets, and log.
GitHub holds the canonical versions of the manifesto, SOUL file, case
studies, and site. When they diverge, GitHub wins.

**Reasoning:** Trying to keep two systems in constant sync fails. Giving
each system a distinct role removes the ambiguity.

**Revisit if:** Notion starts holding things that need to be permanent
and version-controlled, or GitHub starts being edited as scratch space.

---

## 2026-07-02 — Locked one-liner (v1)

**Decision:** Orin's one-liner is: "For teams shipping product without a
full design department: Orin builds the design system your developers
ship from."

**Reasoning:** Names the buyer directly (teams shipping without a full
design department), names the deliverable in the buyer's language
(design system), and names the outcome (developers shipping from it).
Rides the market shift toward developer-led product delivery rather than
resisting it. Filters out teams with full design capacity, which
aren't Orin's clients anyway.

**Revisit if:** Real client conversations consistently reveal that the
buyer doesn't recognise themselves in "teams shipping product without a
full design department" — meaning the buyer framing is wrong, not the
words.

---

## 2026-07-02 — Locked 60-second positioning (v1)

**Decision:** The 60-second version of Orin's positioning is locked as
above (see Notion Positioning page for full text).

**Reasoning:** Opens with the substrate framing from the manifesto,
names the buyer problem in their language (developers carrying the
design load), describes the work in concrete terms (design system,
tokens, component library, Figma-to-code pipeline), and grounds it in
the Vivo Energy story with the sixty per cent defect reduction as
evidence. Ends personally rather than performatively — "that's the kind
of problem I like to solve" — which keeps the version honest to spoken
delivery.

**Revisit if:** Real conversations reveal that a specific paragraph is
consistently unclear, or that the Vivo story doesn't land for a
particular buyer segment.

---

## 2026-07-02 — Locked offer shapes and pricing (v1)

**Decision:** Orin's offer is three engagement shapes, priced fixed
against outcomes, never in days:

1. **The Diagnostic** — £3,000 fixed, 1–2 weeks. Written diagnosis of
   where the substrate is broken and what it's costing. Entry point for
   every new client.
2. **The Build** — £14,000 base, scoped £12k–18k from the Diagnostic,
   4–6 weeks. Design system, tokens, component library, and pipeline,
   built in the client's workflow.
3. **The Retainer** — £2,000/month, cancellable with 30 days' notice.
   Roughly 3–4 days of attention a month keeping the system alive and
   iterating as the product grows.

Hard rule: no Build without a Diagnostic first. First client pays full
rate. No discounting under pressure.

**Reasoning:** The three-shape structure lets a nervous buyer start
small while giving Orin a values-fit filter before long commitments.
Fixed pricing avoids day-rate commoditisation and the freelancer
comparison. The Diagnostic-before-Build rule is the structural answer
to the Momentum pattern — Orin never prices unscoped work again. The
Retainer is the consistency engine: three retainers alone clear the
monthly floor (~£5,500–6,000 revenue for £4k after tax), which is what
ends the bridging work permanently rather than temporarily. Pricing
sits inside the UK market corridor for senior design-systems work
(£450–650/day equivalent) while agencies quote £30k–60k for comparable
scope with junior staffing.

**Revisit if:** Three complete engagements are done (expect prices to
go up, not down); or real conversations consistently stall at a
specific price point, which would mean the defence logic needs work
before the number does; or the Diagnostic repeatedly fails to convert
to Builds, which would mean the diagnosis output isn't demonstrating
enough value.

---

## 2026-07-02 — Domain: orinsystems.co

**Decision:** Purchased orinsystems.co as Orin's primary domain.
orindesign.co retained as a redirect.

**Reasoning:** The positioning arc deliberately moved Orin away from
"design" as its category and toward systems. The domain is the one
piece of positioning that appears before any copy is read — in email
signatures, invoices, and outreach. "Orin systems" files Orin in the
right category with the technical buyer on sight. The old domain
redirects so nothing half-remembered is lost.

**Revisit if:** Never, realistically. Domains only get renamed under
duress.

---

## 2026-07-02 — Manifesto as top-level page

**Decision:** The Manifesto is a top-level page with its own URL, not a
section on Home. Sitemap locked at five pages: Home, Manifesto, How it
works, Work, Contact.

**Reasoning:** The manifesto needs its own URL so it can be linked
directly in outreach — it does values-fit filtering before a call ever
happens. It also serves as the About page, so no separate About exists.

**Revisit if:** Analytics or real conversations show nobody reads it as
a standalone page — then compress a "why Orin exists" section onto Home
and demote the full text.

---

## 2026-07-05 — Token pipeline stood up day-one from the New Client Playbook

**Decision:** Built the Orin site substrate token-first before any page CSS
exists: a Style Dictionary v4 / DTCG pipeline in `tokens/`, a semantic-only
token seed, `sync` + `verify-build` + an 8-check `report` wired and passing 8/8,
and a `site/` scaffold that consumes only the semantic vendor layer. First
commit = scaffold + vendor tokens + a passing report, exactly as the playbook
prescribes. (The "New Client Playbook" is KR's `TEMPLATE-ARCHITECTURE.md` — the
live client template Orin was abstracted from; see `PIPELINE-LEDGER.md`.)

**Reasoning:** Every retrofit on KR came from one inversion — CSS existed before
tokens, making tokens an extraction job. Orin's `site/` was empty, so starting
token-first costs nothing and removes the entire class of backlog. The pipeline
is also the product demonstration: a CTO evaluating Orin can open the repo and
see a no-hardcoded-values build, which is the Vivo argument made visible.

**Two deliberate deviations from the playbook:**
1. *One repo, not two.* The playbook assumes a client with a separate product
   (`{client}-token-pipeline` + `{client}-site`). Orin is the practice itself, so
   `tokens/` and `site/` live in this one repo. Revisit only if Orin's site and a
   reusable client-template pipeline need to diverge.
2. *No Storybook/Chromatic for the site.* Visual-regression tooling is right for a
   client's component library (the Build deliverable), not for a five-page
   marketing site. Kept the cheap, high-value guards (verify-build + report),
   dropped the component-library apparatus the problem doesn't earn.

**Seed choices (placeholders, not locks):** fonts Inter Tight / Source Serif 4 /
Inter; warm-neutral + slate-blue palette (deliberately not KR's teal); dark mode
out for v1 but semantics-only so it stays cheap to add. Each is a JSON edit away.

**Revisit if:** brand fonts or palette are chosen and differ from the seed (edit
`tokens/src/primitives.json`, rebuild); or dark mode comes into scope (author
`tokens.dark.json`); or a real component library appears and earns Storybook.

---

## 2026-07-06 — Adopted the IDEM teal/neutral palette (light only)

**Decision:** Replaced the placeholder seed palette with the IDEM Revised
primitives — the full 12-step `neutral` (cool blue-grey) and `teal` ramps,
light-mode values only. Semantic layer unchanged in shape; it now resolves
onto teal for links and neutral for text/surfaces. Orin stays single-theme
(no dark) by choice.

**Reasoning:** IDEM is Warren's own design system, so teal is a deliberate
brand choice, not the accidental "teal-leftover" the client template
(`TEMPLATE-ARCHITECTURE.md`) warns about.
Reusing the IDEM ramps verbatim (same step names) gives 1:1 parity with the
Figma variables, which makes a future JSON→Figma mirror a clean sync. Because
the site consumes only semantic tokens, this was a primitives-only edit — the
rebrand touched no page. One evidence-based change: `text/muted` moved from
neutral/500 to neutral/700, because 500 on the paper background measured
3.04:1 (fails WCAG AA for normal text) and 700 measures 5.97:1. AA is the
manifesto's baseline, so the guardrail-adjacent choice follows the contrast
maths, not taste.

**Revisit if:** dark mode comes into scope (author the dark column from the
same IDEM ramps into tokens.dark.json); or fonts are chosen (still the
placeholder Inter Tight / Source Serif 4 / Inter seed as of this date).

---

## 2026-07-06 — Two-family type system: Inter Tight + Inter (dropped serif)

**Decision:** Orin uses two families — `family/display` = Inter Tight
(headlines), `family/base` = Inter (body prose AND all UI). Removed the
`family/serif-body` role (Source Serif 4) entirely; body text now resolves to
base. The named size scale (display/headline/title/body/label/meta) is
unchanged.

**Reasoning:** An all-Inter-family system reads engineered rather than
editorial, which suits the technical buyer and the "systems, not a studio"
positioning. Both families are Google Fonts variable faces with the full
400/500/600 weights the tokens use, verified against the fonts link by report
check 8. Collapsing three roles to two removes a whole family from the load
and keeps the type system honest to how it's actually used.

**Revisit if:** long-form pages (the Manifesto) read poorly in sans at body
length and want a serif back — that would reintroduce a `serif-body` role and
its own Google Fonts weight; or Orin adopts IDEM's numeric size scale
(100–1100) for strict Figma parity, which is still an open choice as of this
date.

---

## 2026-07-06 — Adopted IDEM's numeric type scale (100–1100)

**Decision:** Replaced the named M3-style size scale with IDEM's numeric scale:
`font/size/100`–`1100` = 11/12/14/16/18/24/28/32/36/44/56px, authored in rem
(px ÷ 16) so the sizes respect user zoom. Site references remapped — body 400,
h3 600, h2 800, hero 1000; eyebrow/meta 200; nav/footer label 300. Line-height
and letter-spacing scales were left as-is (not in scope of this change).

**Reasoning:** Chosen over the named scale for strict 1:1 parity with the IDEM
Figma variables, so a future JSON→Figma mirror syncs by identical paths. rem
rather than IDEM's raw px keeps the web build accessible; the numeric values
correspond 1:1 at base 16, so visual parity holds. Supersedes the open question
flagged in the two-family entry above.

**Revisit if:** the numeric names prove harder to read in code than
self-documenting role names would (unlikely now the site is small); or IDEM's
line-height/letter-spacing scales are also wanted for full parity.

---

## 2026-07-08 — Adopted IDEM's line-height + letter-spacing scales (role-based, DTCG-clean)

**Decision:** Closed the parity gap the size-scale entry flagged. Renamed
`font/leading` (tight/snug/regular) to `font/line-height` and replaced its
three unitless ratios with IDEM's Material-3 role scale: `line-height` and
`letter-spacing` each now carry the five role groups (display/headline/title/
body/label) × large/medium/small. Line-heights are unitless `number`s;
letter-spacing is a 7-step named `scale` (xx-loose…xx-tight) in `em`, with the
role tokens aliasing the scale. Rebuilt, remapped the site's three
`--orin-font-leading-*` references, and mirrored all 37 new variables into the
Orin-Token-Pipeline Figma file (deleting the old `leading` trio). `report`
stays 8/8.

**Reasoning:** Same logic as the palette and size-scale entries — reuse IDEM's
structure verbatim so the JSON→Figma mirror syncs by identical paths. Two
value choices were forced by keeping DTCG in place, which the docs already
commit to. First, DTCG types `lineHeight` as a unitless `number`, so IDEM's
absolute px line-height *scale* (14–64) couldn't be mirrored directly; I
derived unitless ratios instead (IDEM's `line-height ÷ size` per role), which
is also better for the web than absolute px. That's the one place the
structure diverges from IDEM — there is no `line-height/scale` group, by
necessity. Second, reading the IDEM Figma node revealed the letter-spacing
numbers are M3 px tracking, not the percentages I first assumed; I converted
px→em by ÷16, mirroring the exact reasoning used for the size scale (px÷16→rem
for zoom accessibility). Chose em over verbatim px for that same
zoom-scaling reason, accepting the loss of byte-identical parity with IDEM's
raw numbers — path parity, not byte parity, has been the standard since the
size-scale entry. In Figma both are stored as percent (ratio×100, em×100) to
match the file's existing convention (the old `leading` was stored `115`). The
letter-spacing role→scale mappings were read from IDEM's live Figma variables —
a clean symmetric ramp (body 0.5/0.25/0.1, label 0.1/0.25/0.5) — confirmed
canonical over a later M3-idealized IDEM type-scale doc that had drifted on two
cells (`body/small` shown as 0.4, `label/medium` as 0.5). The live Figma file
wins; the doc is the thing that drifted. `label/small`'s line-height was later
confirmed against the same live file at 11/16 = 1.455 (not an inference).

**Revisit if:** the roles are wanted as fully-composed styles (they carry only
line-height + letter-spacing today, not size/weight — a DTCG `typography`
composite layer could sit on top, though it can't mirror to per-property Figma
variables); or the site outgrows the minimal `leading`→role remap and wants
real per-role type styles instead of borrowing `display-large`'s line-height
for all headings.

---

## 2026-07-08 — Chose source-driven composed type styles (Option A), deferred

**Decision:** When composed type styles are eventually built — one named thing
per role/size bundling family + size + weight + line-height + letter-spacing
(what IDEM expresses as its `NEW Text/Title/lg` composites) — they will be
authored **source-first** as DTCG `typography` composite tokens in
`tokens/src/`, built out to CSS via a custom Style Dictionary format, and
mirrored into Figma as **text styles**. Explicitly rejected the lighter
alternative of hand-composing the styles directly in CSS classes and Figma text
styles that reference the existing atomic role tokens. **Not building this now
— deferred until real components need named styles.**

**Reasoning:** The lighter path (Option B) is cheaper — no JSON, no build
change, just token-pure CSS classes plus Figma text styles composing variables
that already exist — but it puts the *recipe* for each style (which
size + line-height + tracking + weight equals title/large) in two consumers,
CSS and Figma, where they can drift apart. Option A keeps that recipe in one
place, which is the entire reason this pipeline exists ("no CSS value is ever
hand-written"; JSON is the single source). The cost is real and is why it
waits: Style Dictionary has no built-in emit for a `typography` composite, so A
needs a custom format/transform (shorthand vs longhand vs utility classes is
itself an open choice), likely a new `report` lint, and Figma text-style
creation rather than the variable mirror used so far. Composites also can't
round-trip as per-property Figma *variables* — text styles are the only Figma
representation. None of that earns its keep until there are components that
consume named styles; today the atomic role tokens (line-height +
letter-spacing) plus per-role CSS on the handful of elements cover the site.

**Revisit if:** a real component library or Storybook appears and wants named
text styles; or the site grows enough page patterns that repeating the atomic
role tokens per element becomes the friction. When triggered, first decide the
CSS emit form (shorthand / longhand / utility classes) before writing the
Style Dictionary format.

---

## 2026-07-09 — Step 0: closed the Phase-5 foundation gaps

**Decision:** Closed all items in BUILD-SEQUENCE.md's Step 0 before starting
Home. Two judgement calls were confirmed with Warren first, both taking the
recommended option:

1. **Accent tokens, semantic naming.** Added `colour/background/accent` →
   `{teal.500}`, `colour/background/accent-hover` → `{teal.600}`,
   `colour/text/on-accent` → `{neutral.0}` to `semantic.json`. No
   component-token layer introduced — these sit in the same
   colour/background and colour/text groups as everything else.
2. **Inverse sections stay link-free for MVP.** No `link-on-inverse` token
   added. Any dark band (e.g. a future Close section) is heading + white
   button only; revisit only if a section design genuinely needs an inline
   link on a dark ground.

Rebuilt and synced the pipeline, then landed the remaining Step-0 items
directly in `site/`:

- `.button` primitive (accent bg, on-accent text, radius-md, space-3/6
  padding, hover + focus-visible states) — demonstrated live on the token
  demo page.
- Split `.wrap` into a `.section` band (carries background, e.g.
  `.section--inverse`) + inner `.wrap` (68ch measure, inline padding only).
  `index.html` now uses `<main id="main" class="section"><div
  class="wrap">…</div></main>` — same rendered layout as before, but ready
  for full-bleed bands on Home.
- `.card` primitive for the future case-study cards (border + raised
  background + radius-md + padding).
- `.site-nav` now `flex-wrap: wrap` — confirmed clean at 360px (wraps to a
  second line, no overflow).
- Skip-link + `<main id="main">` — visually hidden, jumps to `left:
  var(--orin-space-4)` on `:focus`. Verified programmatically (window focus
  is required for `:focus` to apply — a preview-tooling quirk, not a site
  bug).
- `prefers-reduced-motion: reduce` guard on the `a`/`.button` colour
  transitions.
- `data-include` paths made absolute (`/partials/nav.html`,
  `/partials/footer.html`) so chrome doesn't 404 on a pretty URL served
  with a trailing slash.
- Specimen-page comment corrected: it now says *move to `/tokens`, don't
  delete* (was previously telling a future session to delete it), matching
  PHASE5-BUILD.md's standing rule.
- SETUP.md's stale fonts note corrected — it named Source Serif 4 for prose;
  the tokens and fonts link have been Inter throughout since the two-family
  decision on 2026-07-06.

`cd tokens && npm test` — 8/8, verify-build clean (109 tokens resolve).

**Reasoning:** BUILD-SEQUENCE.md's own logic: each gap is cheap to close
once, expensive to discover mid-assembly (the button built three times, a
missing token on page four). The two judgement calls were genuine open
questions — a component-token layer is a bigger architectural commitment
than semantic naming, and adding a rarely-needed inverse-link token before
any design demands it would be exactly the kind of undesigned-for-need
token the pipeline's guardrail exists to prevent.

**Revisit if:** a Home or later section design genuinely needs an inline
link on a dark ground (add `colour/text/link-on-inverse` → `{teal.300}`
then, not before); or the button/card primitives need real per-role
component tokens once a second product/client reuses this kit.

---

## 2026-07-09 — Built Home, moved the token demo to /tokens

**Decision:** Assembled Home's six sections directly from PHASE5-BUILD.md's
approved copy (hero, problem, what Orin does, how it works, proof, close) —
no rewriting, only the structural additions the copy required:

- **Section 4 ("How it works") got an `<h2>` the copy didn't specify**,
  matching the nav label/link text rather than inventing new wording. Its
  three priced blocks reuse the existing `.card` primitive (no new component)
  with one addition: `.card + .card { margin-top }` for vertical rhythm
  between stacked cards, since nothing needed that before.
- **Section 6 (Close) is the first `.section--inverse` band on the site**,
  applying the Step-0 decision literally: heading + body copy + white
  `.button`, no inline link on the dark ground.
- Moved the token-pipeline demo from `/` to `/tokens/index.html` per the
  standing rule in PHASE5-BUILD.md — content unchanged, paths fixed to be
  root-absolute, title/description changed to describe it as the proof
  artefact rather than the homepage. Footer now links to it quietly
  ("This site runs on its own pipeline.").

Verified: `cd tokens && npm test` — 8/8, verify-build clean. Checked live in
the browser at desktop and 360px — nav wraps without overflow, inverse band
renders with correct contrast, `/tokens` resolves (200), no console errors.

**Reasoning:** BUILD-SEQUENCE.md's build order — lock the kit, then Home
forces every primitive into real use. Reusing `.card` for pricing blocks
stayed inside the component budget rather than inventing a "pricing block"
component; the inverse Close band was already decided in Step 0, just not
yet built against.

**Revisit if:** the How-it-works section wants its own page-specific layout
once /how-it-works exists (today Home's version is compressed/linked, per
spec); or a later section genuinely needs an inline link on a dark ground
(add `colour/text/link-on-inverse` then, not before).

**Deferred (per BUILD-SEQUENCE's "after Home" order):** Manifesto,
How it works, Work, and Contact pages — all currently 404 since Home links
to them. QA pass (meta/OG/favicon/404/Lighthouse) also deferred to the
batched step at the end, per BUILD-SEQUENCE.md.

---

## 2026-07-09 — Mirrored the Step-0 accent tokens into the Figma variable file

**Decision:** The Step-0 token additions (`colour/background/accent`,
`colour/background/accent-hover`, `colour/text/on-accent`) had been added to
`tokens/src/semantic.json` and built/synced into the site, but never mirrored
into the Orin-Token-Pipeline Figma file (figma.com/design/b0iEr8pYmfepSj4YkzFsoY).
Added all three to the file's `Semantic` variable collection (Light mode),
each as a `VARIABLE_ALIAS` to the matching `Primitives` variable — `accent` →
`teal/500`, `accent-hover` → `teal/600`, `on-accent` → `neutral/0` — exactly
mirroring how `semantic.json` resolves them. Scopes set to match the existing
convention: `FRAME_FILL, SHAPE_FILL` for the two background variables,
`TEXT_FILL` for the text variable (read off `colour/background/raised` and
`colour/text/link` before creating anything). Verified the collection now
lists 13 variables, 1:1 with `semantic.json`.

**Reasoning:** The mirror is only useful if it's kept current — the pipeline
built and shipped Step 0 as CSS but the Figma side lagged, which is exactly
the drift the JSON→Figma mirror is supposed to prevent. Aliasing to
Primitives rather than hardcoding hex in Figma keeps the same one-source-of-
truth shape the CSS pipeline enforces (primitives resolve to raw colour,
semantics alias primitives, nothing downstream hardcodes a value).

**Revisit if:** future token additions are made in JSON without a matching
Figma mirror step being done in the same session — worth checking `decisions.md`'s
last-mirrored state against `tokens/src/*.json` periodically rather than
assuming they're in sync.

---

## 2026-07-09 — Home layout: adopt the reference grid (Stripe/Resend structure, Orin restraint)

**Decision:** Refine Home from the single-column v1 to a full-width
12-column grid with a persistent left rail of numbered section labels,
per a reference comp Warren supplied. Three choices locked:

1. **Visible grid + left rail** — numbered section labels (01 HERO…) and
   a faint 12-col overlay in the hero, using the existing `.eyebrow`
   treatment (no new font — a mono face would be an out-of-budget family
   token).
2. **Proof stays approved prose** — no stat table, no invented metrics;
   the Vivo paragraph placed in the new two-column layout.
3. **No invented content** — no ✕ problem-list, no three sub-services
   under "What Orin does." Only Section 4 (Diagnostic/Build/Retainer) is
   a three-item row, because that's what the approved copy contains.

Full spec: BUILD-SEQUENCE.md, Step 0.5. Token additions: `container.max`
(75rem) and `breakpoint.sm/md/lg` in `layout.json`. No new colour/font
tokens — the reference is already drawn in Orin's palette (its swatches
are the existing tokens).

**The @media/breakpoint exception:** CSS `@media` cannot read custom
properties, so breakpoint values cannot resolve through `var()` like
every other value on the site. Breakpoints are single-sourced in
`layout.json` and referenced by comment in each media query. This is a
deliberate, documented exception to "every value resolves through the
token layer" — the honest limit of CSS, not a gap in the guardrail.

**Reasoning:** The reference is Stripe/Resend *structure* rendered in
Orin's own restraint — no gradients, illustration, or photography; grid
and type are the visual. It doesn't fight the manifesto; the visible grid
and numbered sections reinforce the systems-practice positioning (the
site shows its grid the way it shows its tokens). Because Orin is
token-first, "make it modern" resolves into new layout tokens and
primitives rather than bespoke per-section CSS, so every later page
inherits the same grid. Kept the approved copy and voice to honour
PHASE5's "assemble, don't rewrite" — the reference informs layout only,
not content. Process note: a client supplying reference sites is a strong
input when the layout structure is extracted explicitly and separated
from content and brand before building; this entry is that separation.

**Revisit if:** Warren later wants the Proof metrics broken out as a stat
table (needs real numbers beyond the 60% figure), or the visible-grid
motif reads as too busy once live and should fall back to rail-only or
structural-only.

**Implemented (same day):** Built as spec'd. `container.max` and
`breakpoint.sm/md/lg` added to `layout.json`, built and synced — 113
tokens now resolve (up from 109). New primitives in `styles.css`:
`.container`, `.section-grid` (12-col), `.rail`, `.col-main`,
`.col-heading`, `.col-body`, the hero's `.grid-overlay` + `.hero-heading`
(fluid `clamp()` between `size-1000`/`size-1100`), and `.cards` (auto-fit
row) with `.card__index` + `.card-rule` for the numbered pricing cards.
All six Home sections rebuilt on the grid per the per-section map — rail
labels, two-column heading/body split for Problem/What-Orin-does/Proof,
the three-card row with "What's included →" links for How-it-works, and
the inverse Close band with heading+body left / button right (no inline
link, per the earlier inverse-section decision). The `@media (max-width:
63.9375rem)` breakpoint collapse is the one documented literal-value
exception described above. Verified: `cd tokens && npm test` — 8/8,
verify-build clean. Checked live in the browser — desktop reflows to the
12-col grid with the hero overlay correctly clipped to the hero section
only; 360px stacks cleanly (rail above heading, cards single-column, nav
still wraps, no horizontal overflow); no console errors.

---

## 2026-07-12 — Corrected SETUP.md's stale palette note

**Decision:** Fixed a one-line internal drift in `SETUP.md`. Its "Phase-0
decisions still open" section still described the palette as a "warm-neutral
ramp + muted slate-blue accent … Deliberately not KR's teal" — the original
placeholder seed. Rewrote it to "locked to the IDEM `neutral` + `teal` ramps
(see decisions.md, 2026-07-06)."

**Reasoning:** The palette seed was superseded on 2026-07-06 when Orin adopted
the IDEM `neutral`/`teal` ramps, and the accent tokens now resolve onto
`teal.500/600`. SETUP.md's description contradicted that. This is the sibling
of the fonts-note correction logged in the Step-0 entry (2026-07-08) — the
same section had a stale fonts line fixed then, and the palette line was
missed in that pass. Purely an internal-doc consistency fix: no token, CSS, or
pipeline change, so it doesn't surface in `npm test`. Left the bullet in place
(now "locked to…") rather than moving it out of the "still open" heading —
flagged to Warren that the section could later be narrowed to the genuinely
open items (fonts, dark mode), deferred as a separate call.

**Revisit if:** the "Phase-0 decisions still open" heading is reworked — at
that point the now-locked palette bullet should move out of it entirely.

## 2026-07-12 — Added PIPELINE-LEDGER.md (Orin ↔ client divergence ledger)

**Decision:** Wrote `PIPELINE-LEDGER.md` at the repo root: a divergence ledger
that records what Orin's scaffold kept, dropped, flipped, and deferred relative
to the client token-pipeline template it was abstracted from. Chose a ledger
that *references* the KR baseline over a standalone playbook that restates it.

**Reasoning:** `SETUP.md` and the 2026-07-05 entry both name a "New Client
Playbook" that Orin deviates from, but it was never a document here. Reviewing
the KR Token Pipeline showed the playbook already exists as KR's
`TEMPLATE-ARCHITECTURE.md` + `PROCESS.md` — a live, running client template, so
the pattern is proven, not projected. Re-documenting it inside Orin would create
a second source of truth that drifts from KR — the precise anti-pattern both
pipelines exist to prevent. So the ledger references KR as baseline and this log
for reasoning, and adds only what neither repo had: the side-by-side, the shared
invariants, and the root difference — the **direction-of-truth flip** (client:
Figma → JSON → dist; Orin: JSON → dist → vendor, Figma as a view). It also
records that Orin's stricter 8-check `report` is a *swap* for the Chromatic
visual gate it can't earn, not a subtraction. Considered `LINEAGE.md` and
`scaffold-ledger.md` as names; chose `PIPELINE-LEDGER.md` for plainness.

**Revisit if:** Orin grows a component library (component-token layer + possibly
Storybook stop being "Dropped"); dark mode enters scope (Theming row → Kept); a
second client is scaffolded and the shared core is extracted to a package
(update the "genuinely projected" section). Documentation-only change: no token,
CSS, or pipeline edit, so it does not surface in `npm test`.

---

## 2026-07-12 — Added design.md (layout principles doc)

**Decision:** Wrote `design.md` at the repo root: a thin layout-principles doc
that bridges the token layer (the vocabulary) and the page (the composition).
It captures the intent that wasn't written down anywhere — the "type scale is
the visual" principle made concrete, vertical-rhythm guidance for the `space`
scale, mobile-first / design-at-both-ends, colour discipline (greyscale
hierarchy, teal earns each appearance), the design-in-browser → token loop, the
screenshot handoff, and the squint/read-aloud ship tests. Added it to CLAUDE.md's
read-first list (as item 6, after PHASE5-BUILD.md).

**Reasoning:** The question that prompted it — "how do I bridge the JSON file
and the page layout?" — had no home in the existing docs. PHASE5-BUILD.md holds
copy and section order, HANDOVER.md holds voice and exclusions, `layout.json`
holds the values, but nothing captured *how composition happens within those
constraints*. Chose a principles doc that defers to the canonical files for
anything concrete over a spec that restates them — a re-spec would become a
second source of truth and drift, the same anti-pattern the pipeline exists to
prevent. Kept it deliberately thin and self-describing on that point ("if it
grows into a second source of truth, it has failed"). Rejected two alternatives
raised in the same conversation: a Mobbin-style reference library as the bridge
(risks importing generic-SaaS art direction Orin defines itself against — kept
only as a just-in-time tool for specific mechanics), and a custom skill (premature
— skills earn their place after a pattern repeats 3+ times; CLAUDE.md plus the
handovers already serve as the instruction set for now). Documentation-only
change: no token, CSS, or pipeline edit, so it doesn't surface in `npm test`.

**Revisit if:** the layout method stabilises across the first few pages and the
repeated moves are worth extracting into a skill (revisit the skill call then);
or `design.md` starts duplicating concrete values from the canonical files, at
which point trim it back to principles.

---

## 2026-07-13 — Hero heading set as one paragraph (dropped the forced line break)

**Decision:** Removed the `<br>` in Home's hero `<h1>` so the heading reads as a
single flowing paragraph — "For teams shipping product without a full design
department. Orin builds the design system your developers ship from." — wrapping
naturally instead of breaking at a fixed point between the two sentences. Copy is
unchanged; this is presentation only.

**Reasoning:** PHASE5-BUILD.md specifies the hero heading "split over two lines,"
so this is a deliberate, Warren-directed deviation from the approved spec, logged
per the working method (small presentational edits are fine; record the ones that
depart from spec). Designed in the browser: a hard `<br>` fixes the break at one
viewport width and reflows awkwardly at others, whereas natural wrapping holds at
every width and lets the fluid `clamp()` hero type set its own rhythm. No token
or CSS change — a one-element markup edit — so it doesn't surface in `npm test`.

**Revisit if:** the single-paragraph hero reads as a run-on at any width and wants
a deliberate break reinstated (prefer a responsive treatment over a hard `<br>`),
or PHASE5's "split over two lines" note is reconciled to match.

**Alongside (same browser session, token reassignments, not spec deviations):**
hero band padding `.section--hero` → `space-24` (was `space-12` via `.section`),
and the shared `h1, h2, h3` bottom margin → `space-6` (was `space-4`). Both are
existing-step reassignments within the `space` scale, not new tokens.

---

## 2026-07-13 — Added a root package.json for a local dev-server script

**Decision:** Added a minimal, `private` `package.json` at the repo root with a
single `dev` script — `python3 -m http.server 8000 --directory site` — so the
site can be previewed locally with `npm run dev`. A real HTTP server is needed
(not `file://`) because the pages pull in the nav/footer partials via `fetch()`
on absolute `/partials/…` paths.

**Reasoning:** The repo deliberately kept npm inside `tokens/` (single-repo,
static-first — see 2026-07-05), so a root `package.json` is a small structural
addition and is called out here rather than slipped in. Kept it inert to
protect the guardrails: `private: true`, no dependencies, no build step. The
Cloudflare Pages config is unaffected — build command stays `(none)`, output dir
`site/` — so deploys stay boring; the file's `description` records that. Chose
Python's built-in server (preinstalled on macOS, zero install) over an `npx serve`
dependency. It touches no token or CSS, so it doesn't surface in `npm test`.

**Revisit if:** the site ever earns a real build step (then the root
`package.json` grows genuine scripts/deps and the Cloudflare build command
changes with it), or a second contributor lacks `python3` (swap the `dev` script
to `npx serve site`).

---

## 2026-07-14 — Built the Manifesto page

**Decision:** Built `site/manifesto.html` as the second page (build-order
step 3). Long-form single-column reading: `MANIFESTO.md` near-verbatim in
`.wrap` (68ch measure), body leading already generous, no rail/grid/eyebrow
decoration. Two editorial calls: (1) omitted the closing italic note
("This manifesto is the source of truth… does this fit?") as internal
editorial instruction, not public prose; (2) kept the signature line
("Warren G Rossiter — 1 July 2026", set in the eyebrow treatment) and
ended with the single sitewide CTA, "Get in touch." CSS/token links use
absolute `/vendor/tokens.css` + `/styles.css` (pretty-URL safety, per the
Step-0 absolute-path rule). No new tokens, no new components.

**Reasoning:** Build order names Manifesto next; spec calls for
near-verbatim copy in reading typography with no decoration, so the page
is pure composition on existing primitives. The internal note addresses
the practitioner, not a visitor, so it doesn't belong on the public page;
the signature does the authorship work instead. `npm test` 8/8, verify
clean — the site-wide scans cover the new file.

**Revisit if:** Warren wants the closing note restored, the CTA removed
from long-form pages, or the signature styled distinctly from `.eyebrow`.

---

## 2026-07-14 — Pages are folders, not `.html` files

**Decision:** Every non-home page ships as `site/<page>/index.html`, not
`site/<page>.html`. Nav links stay extension-less (`/manifesto`, `/work`,
etc.). Confirmed against the existing `/tokens` page, which is
`site/tokens/index.html`. Manifesto was first built as `manifesto.html`
and 404'd locally at `/manifesto`; relocated to `manifesto/index.html`
and it resolved.

**Reasoning:** The local dev server (Python `http.server`) does not append
`.html` to extension-less URLs, so `manifesto.html` is unreachable at
`/manifesto`. A folder with `index.html` works everywhere: `http.server`
301-redirects `/manifesto` → `/manifesto/` and serves the index, and
Cloudflare Pages resolves it the same way. Asset paths must be absolute
(`/vendor/tokens.css`, `/styles.css`, `/includes.js`, `/partials/…`) so
they resolve from the nested URL depth — same rule as the Step-0
absolute-include-paths fix.

**Revisit if:** the local dev server is swapped for one that rewrites
extension-less URLs to `.html` (then flat files would also work, but
keep the folder convention for parity with Cloudflare and `/tokens`).

---

## 2026-07-14 — Built the How it works page

**Decision:** Built `site/how-it-works/index.html` (build-order step 3,
page 3). Same numbered-rail `section-grid` primitives as Home: an intro,
then the three engagements as sections 01/02/03 with prices in the
eyebrow (`£3,000 fixed · 1–2 weeks`, etc.) and `id="diagnostic"`,
`id="build"`, `id="retainer"` matching Home's deep links, then a softened
refusals section ("When it's a no", rail "—"), then the inverse close with
the single "Get in touch" CTA. Copy assembled from `Offer.md`. Refusals
written as prose (matching the Manifesto's "Who Orin is for"), not a
bulleted list. Internal "defence on a call" notes folded into
buyer-facing prose, not labelled. No new tokens or components.

**Reasoning:** Spec calls for one scrolling page, three sections from the
offer, prices visible, single CTA, optional softened refusals — all of
which the existing Home primitives already express. One composed line:
the h1 "Three ways in. Each one de-risks the next." — `Offer.md` has no
title, a page needs an h1, and this is drawn from the offer's own framing
("each one de-risks the next"). Flagged to Warren as the one non-verbatim
line. `npm test` 8/8, verify clean.

**Revisit if:** Warren wants a different/verbatim h1, the refusals as an
explicit list, or the "defence on a call" value framing stated more
directly for the technical buyer.

---

## 2026-07-14 — Built the Contact page + chose the contact address

**Decision:** Built `site/contact/index.html` (build-order step 3, page 4).
Heading, two honest sentences, mailto — no form. The sitewide "Get in
touch" button and an inline text link both point to
`mailto:hello@orinsystems.co`. Warren chose `hello@orinsystems.co` (over
`warren@orinsystems.co` and the personal Gmail) as the public address.
No new tokens or components.

**Reasoning:** Spec is explicit (heading, two sentences, mailto, no form).
The docs named no contact address, so I asked rather than guess. Kept the
button label "Get in touch" to honour the one-CTA-sitewide rule, with the
address shown in prose so it's visible and copyable.

**Revisit if:** the mailbox `hello@orinsystems.co` isn't provisioned before
launch (swap the mailto), or Warren wants a subject line pre-filled.

---

## 2026-07-14 — Provisioned hello@orinsystems.co (Cloudflare Email Routing)

**Decision:** Enabled Cloudflare Email Routing on orinsystems.co and created
a custom-address rule `hello@orinsystems.co` → forwards to the verified
destination `wgrossiter@gmail.com`. Confirmed end-to-end: Email Routing
summary showed 2 received / 2 forwarded / 0 dropped/failed. This backs the
Contact page CTA (mailto:hello@orinsystems.co).

**Reasoning / gotcha for next time:** The new Email Routing UI never wrote
the required `MX` records into the zone and exposed no working enable button
(both the "Status: Disabled" and "DNS records: Not configured" links only
anchored to an informational table). Root cause: the zone had zero `MX`
records (only the apex CNAME → orin-4ua.pages.dev, proxied) and no
conflicting records. Fix that worked: (1) manually add the three MX
(`route1/2/3.mx.cloudflare.net`, priorities 9/22/8) + SPF TXT
(`v=spf1 include:_spf.mx.cloudflare.net ~all`) in DNS → Records; (2) switch
to the OLD Email Routing UI via the "Use the old UI" banner; (3) click
"Add records and enable" (Cloudflare auto-added the DKIM `cf2024-1._domainkey`
TXT too). Status went Syncing → Active; first sends failed only due to
negative DNS caching before the MX existed.

**Revisit if:** the `hello@` forward stops delivering (check Email Routing
Activity Log first), the destination Gmail changes, or Warren wants to also
*send as* hello@ (needs Gmail "Send mail as" or a paid mailbox — Email
Routing forwards only).

---

## 2026-07-14 — Corrected the Vivo Energy claim (defects vs dev time)

**Decision:** The Vivo Energy outcome is stated everywhere as: the
design system reduced UI defects per feature, and the resulting drop in
rework produced a 60% saving in development time. Defects are the
mechanism; the 60% attaches to development time, not defect count.
Updated on the live Home page, in positioning.md (v1.1), and in all
future case study material. Client is named as Vivo Energy (not Engen),
attribution "contracted via Rethink" unchanged.

**Reasoning:** Earlier positioning copy had compressed the claim to
"60% fewer defects," which is not what was measured. Orin's posture is
measurable honesty aimed at technical buyers — the audience most likely
to ask how a number was derived. The corrected causal chain
(system → fewer defects → less rework → 60% time saving) is also the
more credible and more useful story.

**Revisit if:** Never. Claims on the record stay precise. If better
post-launch data from any engagement emerges, add new claims rather
than inflating existing ones.

---

## 2026-08-05 — "Substrate" is the belief word, not the buying word

**Decision:** "Substrate" stays in Orin's vocabulary, but it is no longer
used undefined in a line a client meets cold. The rule: **substrate is
the belief word (manifesto, positioning, the What Orin does header);
"the design system your developers ship from" is the buying word.** Where
substrate survives in client-facing copy, the sentence it appears in must
define it. Changes made:

- `Offer.md` §1 — first use now carries the definition inline ("the design
  system, tokens and pipeline underneath the product").
- `Offer.md` §1 "defence on a call" — → "where your **design system** is
  costing you." A spoken line has no room for a metaphor the listener has
  to decode mid-sentence.
- `Offer.md` §3 Retainer — "consistent with the **system**." The
  surrounding paragraph already says "system" twice; substrate there was
  variation for its own sake.
- `PHASE5-BUILD.md` Section 4 + `site/index.html` Diagnostic card — →
  "where your design system is broken."
- `site/how-it-works/` — Diagnostic gets the same inline definition;
  Retainer gets "the system."
- `deliverable.md` — "the variables (tokens) are the **foundation**."

**Reasoning:** The word was carrying three different sizes at once. In
`MANIFESTO.md` it means the whole underlying system and is earned by the
sentence around it. In `deliverable.md` it meant the token layer — a
*part*, in a passage whose whole point is that the part is not the whole.
In `CLAUDE.md` / `BUILD-SEQUENCE.md` it means a build order. The internal
working sense is harmless; the first two directly contradicted each other,
so `deliverable.md` moved to "foundation."

The precedent was already in the repo: the locked one-liner in
`positioning.md` deliberately avoids substrate while the 60-second version
uses it. That split had just never been applied to `Offer.md` — a document
someone reads while deciding whether to spend £3,000. A technical buyer
isn't baffled by "substrate," but it shouldn't be the word that has to
survive being said out loud to someone who has never read the manifesto.

**Deliberately not changed:** `MANIFESTO.md`, the `positioning.md`
60-second version, the Home "Orin builds the substrate." header and page
title, and the Vivo Energy case study. The Home header is defined by the
body copy directly beneath it — the manifesto pattern working as intended.
Purging the word everywhere would cost real voice for no gain.

**Contact page — decided in the same pass.** Both uses ("tell me what
you're shipping and where your substrate is hurting", in the body copy
and the meta description) became "and where **it's** hurting." The
antecedent is "what you're shipping," so nothing is lost and the line
gets shorter. Deciding factor: the meta description is the one place on
the site where the word appeared with no surrounding page to define it —
it lands in a search result cold, which is exactly the case the rule
above exists to prevent. Reaching for "your design system is hurting"
would have been the fourth "design system" on a short page; dropping the
noun entirely was the better sentence.

**Corollary — no substrate in a `<meta name="description">`.** A meta
description is the one piece of Orin's copy guaranteed to be read with no
page around it to define its terms, so it is always the cold case. The
Work page followed the Contact page for the same reason: "Case studies
from the substrate: …" → "Case studies: …". The Work page `<h1>` ("The
substrate, in practice.") stays — it is defined by the sentence directly
beneath it, the same pattern as the Home header. No other page's meta
description used the word.

**Revisit if:** a client or prospect asks what substrate means, or asks
it back in a way that shows they read it as something narrower than the
whole system. That's the signal the definition isn't landing and the
remaining uses should go too.

---

## 2026-08-12 — Greenfield gets its own way in: The Foundation

**Decision:** Greenfield is in scope, and it gets its own entry engagement.
**The Foundation**, £4,000 fixed, 2 weeks. It sits where the Diagnostic sits for
an existing system: paid, bounded, and the only other door to a Build. The hard
rule doesn't move, it gains a second door. This closes the open question logged
earlier the same day.

**The two gaps that forced it.** `Offer.md` says no Build without a Diagnostic,
and the Diagnostic is defined as pointing the pipeline at an existing Figma file
and codebase. Its three opening findings all describe a system that already
exists. A founder with a new product has none of that, so the gate can't be
walked through. Worse, and less obvious: the Build's defence on a call is
velocity maths (twelve developers, roughly £70k a month, ten per cent recovered
pays for the engagement inside two months). A solo founder can't run that
calculation, because nobody is burning money on rework yet. Two failures, one
scoping and one pricing.

**The prior question, settled: a founder is a target buyer.** The test isn't
"is it an app rather than a site." It's how many people will change this after I
leave, multiplied by how often. That's the manifesto's *"the measure of the work
is what happens after handoff"* used as a scoping question rather than as a
value. A founder scores high on it. The product grows, the team grows, and the
brand gets revisited before they raise. A CTO's mature system often stabilises.
So the founder isn't a worse buyer, just a different one with a different fear.

**What shadcn actually changes.** shadcn ships `--background`, `--foreground`,
`--primary`, `--border` and `--ring` in `globals.css` with a `.dark` block over
the top, wired into Tailwind's theme. That is a semantic layer, with modes. What
it hasn't got is a primitive layer underneath, an authored source, a build step,
a sync, or a single guardrail. The values are raw oklch typed inline. So shadcn
hands a founder the semantic layer's *names* with none of its provenance.

That reframes the greenfield problem. The failure mode was never "no system."
It's a system nobody owns, which drifts the moment a rebrand lands or a second
developer joins, because there's no upstream to change, only forty files to
hand-edit. Same drift test as above, arrived at from the other side.

**So build on shadcn, and don't apologise for it.** "Every value resolves
through the token layer" survives intact: author DTCG in `tokens/src`, build,
and emit shadcn's variables as an output target. Same one loop, different sink.
Orin's own site is static-first with no framework, and that stays a fact about
this site rather than a rule for clients. The practice's asceticism isn't the
client's constraint.

**The shape chosen, and the two rejected.** Option 1 (keep the arc, swap the
gate) went because it left one Build price justifying itself to two buyers who
fear different things. Option 3 (refuse greenfield) went because the drift test
makes the founder the better retainer candidate, not the worse one, and
refusing turns away work I'd be good at.

What's built is option 2, a separate offer with its own name, price and
defence, carrying option 1's function. The three jobs the Diagnostic does are
structural and protect me regardless of buyer: never price unscoped work, filter
for values fit before committing weeks, scope the Build from evidence rather
than from a sales call. The Foundation does all three. It just can't do them by
auditing, because there's nothing to audit, so it earns its scope by building
instead: token source, wired to shadcn, sync, guardrails, one real screen
shipped.

**Price: £4,000 fixed.** Above the Diagnostic's £3,000 because it leaves a
working thing behind rather than a written diagnosis, and still under the ~£5k
discretionary threshold, so no procurement process. Matching £3,000 exactly was
tempting for symmetry and rejected: it prices a build the same as an audit and
invites exactly that comparison on a call.

**The price defence, which is deliberately not velocity maths.** "You'll restyle
at least once and add a second developer before you raise. Doing this now is
£4,000. Doing it after sixty components exist costs several times that, plus a
freeze while it lands." The founder's real fear is time to launch and the cost
of the second build. Aim at that fear, not at a spreadsheet they can't fill in.

**The risk, logged on purpose.** This offer commoditises faster than the
Diagnostic does. Anyone with an AI assistant can install shadcn in an afternoon,
and they know it. The defensible part is the ownership layer and never the
screens: the DTCG source, the sync, `npm test`, the thing that survives
handoff. If a call drifts towards "how many screens do I get," the offer is
being sold wrong.

**Naming caution, carried over intact:** don't say "custom design system" to a
founder. What I'd actually build is a token layer and about eight primitives,
which is Orin's own component budget. They'll hear a 40-component library and
price it accordingly, or flinch and leave.

**Deferred:** whether the Build's £12,000–18,000 range needs a lower floor for a
product that's smaller at launch. Left alone until a real greenfield Build gets
scoped. Inventing a second Build number now is how the cheaper one leaks upward.

**Revisit if:** the first Foundation runs past 2 weeks (the £4,000 assumes two
weeks and one shipped screen), or a founder reaches the Build and the velocity
maths still can't defend the number for them.

---

## 2026-08-16 — What goes in a public repo: the notes/ split

**Decision:** Eleven files had accumulated in `notes/` with no decision either
way. Split them. Tracked: the seven HTML sheets and `pipeline-comparison.md`.
Excluded via `.gitignore`, each with its reason: `notes/shadcn-adapter/`,
`notes/launch-and-outreach-pack.md`, `notes/client-situations.md`.

**Reasoning:** The premise nobody had written down is that
`github.com/Boyzeeboy/orin` is **public**, so tracking a file is publishing it.
Untracked is not the same as excluded — it is a decision nobody has made yet,
and eleven of them had piled up. Two files already sat in `.gitignore` with
written reasons (`EXTRACTION-BRIEF.md`, the Diagnostic walkthrough script), so
the convention existed; it just hadn't been applied to anything since.

**The adapter is the shared core, and the shared core is not handed over.**
`notes/shadcn-adapter/` is not a note about an adapter — it is a working one,
with its own build, guardrail and fixtures, and a passing test.
`deliverable.md` ("Whose is what") says the build machinery is Orin's own IP,
reused across clients, and explicitly not sold or handed over. A public repo
hands it over to anyone who clones. That the files were mode `600` was a hint
in the same direction.

**The outreach material follows the walkthrough-script precedent** (logged
2026-08-04). `launch-and-outreach-pack.md` carries copy-ready outreach naming
real clients, and `client-situations.md` is the objection material behind it.
Both are drafts of *how I sell*, not decisions about *how the practice works* —
and the decisions they rest on are in `Offer.md` and this file, which are
tracked. Publishing the sales script alongside the offer it supports also
means a prospect can read the objection handling before the call.

**The line that actually does the work** is not sensitive/not-sensitive. It is:
**decisions about how the practice works get tracked; drafts of how I sell, and
machinery I don't hand over, stay local.** That rule decides all eleven without
a judgement call per file, and it will decide the next one.

**What tipped `pipeline-comparison.md` into the tracked set** beyond fitting the
rule: `notes/pattern-layer-governance.md` is tracked and cites it in Related, so
until now that pointer resolved only on my machine. A tracked file naming an
untracked one is the same rot `verify-docs` exists to catch in the baseline.

All seven sheets were checked for named clients and adapter source before
tracking — clean on both.

**Revisit if:** the remote goes private (the outreach files could then come in;
the adapter probably still shouldn't, since "not handed over" is about the IP
rather than the visibility, and it likely wants its own private repo once it is
more than a profile), or a sheet starts naming a real client, or the adapter
grows past what a `notes/` folder should hold.

---

## 2026-08-16 — Home's priced row states its column count instead of deriving it

**Decision:** `.cards` drops `repeat(auto-fit, minmax(16rem, 1fr))` for one
column by default and `repeat(2, 1fr)` at and above `breakpoint.md` (48rem).
Home's Section 4 now carries four cards — The Foundation went in as 02, with
the Build and the Retainer renumbered — and the row is 2×2 at desktop and
tablet, stacked below.

**Reasoning:** The Step-0.5 row was specified as `auto-fit` with a ~16rem track
minimum, which fitted three engagements neatly. Four made it lay out 3 + 1,
with the fourth card orphaned on its own line at 1280px.

`auto-fit` cannot express "two per row" robustly at these widths. Excluding a
third column at desktop needs a track minimum above ~335px; allowing a second
at tablet needs one at or below ~348px. That is a 13px window, and 21rem
threads it with about 2px of headroom at desktop — which the appearance of a
scrollbar would break. Raising the minimum to 22rem instead, which I tried
first, gave a clean 2×2 at 1280 and regressed 768 to a single 720px-wide card.

So the column count is stated rather than derived. It is less clever and it
cannot silently reflow into an orphan when the content count changes again.

**2×2 is also the better reading**, not just the safer layout: four across at
this container width would leave each card about 240px of text, and the card
titles carry a name, a price and a duration.

**The cost:** a second `@media` literal, under the exception already logged for
breakpoints — CSS conditions cannot read custom properties, so the value is
duplicated with a comment naming `--orin-breakpoint-md`. That exception now has
two instances rather than one, which is the point at which it is worth watching
rather than worrying about.

**Verified** at 1280 (2×2, 515px cards), 768 (2×2, 348px) and 360 (stacked,
312px): no horizontal overflow at any width, card rules still aligned within
each row, `npm test` 8/8 with verify-build clean.

**Revisit if:** a fifth engagement appears — 2×2 becomes 2 + 2 + 1 and the
orphan returns one row further down — or `container.max` changes enough to
alter what fits.

---

## YYYY-MM-DD — [Short decision title]

**Decision:** [What was decided.]

**Reasoning:** [Why. Include the context, the alternatives considered,
and the specific factor that tipped the choice.]

**Revisit if:** [The condition under which this decision should be
re-examined. If none, say so explicitly.]
