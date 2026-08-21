# Onkey — first meeting, 20 August 2026

Notes from the intro call. Written the same afternoon, from the transcript.
Who was there: **Mauritz** (product manager, enterprise asset management, and
he chaired the introductions), **Darren** (product manager, asset performance
management), **Amanda** (UX design, PMO), **Gerhard** (UI architect), and
**Stefan** (the senior one, closed the meeting), plus a team of BAs.

Gerhard and Mauritz were corrected after the fact; the line was poor enough
that both came through several different ways. The PMO director is still
unconfirmed, heard as Simone and as Sincla.

---

## 1. What happened

I demoed the token pipeline end to end against a live Figma file: sink,
sync, dry-run audit, `npm test`, Style Dictionary build, tag, consume.
Then I broke a semantic colour on purpose by typing a raw hex into both
modes, re-ran, and let mode parity fail in front of them. That landed.
Amanda said it was impressive and she has a development background, so
that is worth something.

Gerhard read it correctly and immediately: "what you're trying to solve is
that the variables don't go out of sync." Then he pushed back, twice, and
both pushes are the real content of the meeting.

**Push one: their variables barely change.** Onkey is a mature EAM/APM
product, not a marketing site. New colours are rare. So a machine that
protects colour values from drifting is guarding a door nobody walks
through.

**Push two: MUI owns the naming layer.** They have bought into Material UI
properly, premium licences and the paid Figma kit. They are on Material 2
deliberately, because Material 3 is too modern for their user base. His
words on going off-piste: too much maintenance every time they upgrade.
His concern with `sx` props and MUI's internal slot selectors is that
targeting them from outside would be, quoting, a nightmare to manage.

Both pushes are fair and neither one kills the work. They relocate it.

## 2. What they actually have

- **React on MUI**, migrating their old UI across. MUI is the component
  baseline and it is not being swapped. Anything I build sits on top.
- **Atomic architecture.** Tokens, atoms, components, and the tokens are
  derived from mui.com. Amanda put them at roughly 95% consistent with it.
- **Figma is the declared source of truth.** One master design system file.
  No version control on it, no branching yet, no sign-off, no ticketing for
  design changes, no design ops. Amanda's phrase: building the plane in the
  air.
- **A second Figma file for the Material Manager module** that has been
  pushing components and variables *upstream* into the master. That is the
  bleed. Gerhard's example: a status change component shared with profile
  manager, changed on one design, and it turns up in the other.
- **Storybook endpoint exists**, unused since last year. A Figma MCP is set
  up, the BAs work in Figma directly and are moving to prototyping in
  Claude. There is an external AI consultancy and an internal AI team
  building agents and skills.
- **Supernova and Zeroheights were evaluated and dropped.**
- **Requirements live in Aha!** PM directive, BA writes requirements, the
  feature syncs to TFS for development. No user stories. Nothing visual is
  signed off anywhere.

## 3. The problem underneath the problem they described

They talked about tokens for twenty minutes and then Gerhard said the thing
that matters, which is that he has nothing stable to build against and QA
has nothing stable to test against. He commits to deliver a query builder
by end of sprint. The Figma keeps moving. By the time test opens the file
it looks different, and nobody can tell whether the difference was
intended.

So the bleeding wound at Onkey is a **missing versioned artefact**. The token
build is how they get one that can be trusted, which makes it the second
thing to do rather than the first. Sell it in that order and build it in
that order.

Stefan asked the right question twice: where are the decisions, where are
the bottlenecks, where is the variability. Answer: the master file has no
version, so every downstream consumer is reading a moving target and
absorbing the cost of that individually.

## 4. What they asked for

A written proposal they can take to their team. Stefan wants to correct my
misreadings on it and turn it into a scope of work. Before that:

- **Tomorrow, 3pm, with Amanda.** She walks me through the master design
  system. Diary invite promised to my email.
- A follow-on with Gerhard if needed.
- Gerhard is sending the MUI link so I can read their theming surface.
- I offered to send some HTML sheets. **Check which of those are client-safe
  before sending.** `pragma-diagnostic-runbook.html` is marked internal and
  does not go out.

They can give me a full Figma seat immediately, probably a Claude seat, and
Amanda expects no access blockers.

---

## 5. Integrating with their stack

Sequenced. Each step is worth doing even if the next one never happens.

### Step 0 — Point the pipeline at the master, live, tomorrow

The scaffold already exists on `on-key` and matching is by name, so this
runs with no code change. Sink, sync, `npm run sync:figma -- --dry-run`,
read the audit out loud. See `pragma-diagnostic-runbook.html` for the run.

What it tells us in ten minutes: how many of their collections the
convention recognises, whether a mode maps to nothing, whether a layer is
missing outright, and how big the variable set really is. Everything below
gets scoped from that output rather than from this meeting.

One thing to establish before running it: **ask for the file that defines
the variables, not one that consumes the library.** The plugin reads local
variables only, and pointing it at a consuming file produces a finding that
looks damning and is just the wrong file.

### Step 1 — The stock take

Stefan asked for this in almost exactly these words: what have we got, what
is duplicated, what are the variables, before we start putting things back
on shelves. It is the Diagnostic, and it is where the money should go first.

Three inventories:

1. **Variables.** Every collection and mode in the master. Which resolve to
   an MUI token name, which are Onkey additions, which are duplicates, which
   are literals typed inline rather than aliased to a primitive.
2. **Components.** Where two masters exist for one thing. Gerhard and Stefan
   both suspect there are two buttons. Also: which components are MUI
   defaults, which are MUI with theming, which are genuinely domain-level.
3. **The Material Manager pushes.** What that file sent upstream and whether
   the master still agrees with itself afterwards.

Then the same three read against the code, because comparing two artefacts
is the only way to see drift. Never one in isolation.

### Step 2 — Let MUI define the contract

This is the shadcn adapter problem again and it takes the same shape. MUI
owns the naming layer, so its theme keys behave as a fixed export target we
fill in. We inherit that vocabulary and we work inside it.

So the pipeline's output for Onkey is an **MUI theme contract**: palette,
typography, shape, spacing, plus one colour scheme per mode, emitted as the
theme object their app already feeds to MUI. Free-form `--onkey-*` names
have nowhere to land here. Their theme file stops being hand-typed and
becomes generated.

MUI's CSS-variables mode is the seam that makes this work without fighting
the library. It emits `--mui-palette-*` itself and takes `colorSchemes` for
light and dark. We generate what goes in; MUI does what it already does.

The prefix boundary carries the rule, same as shadcn: **if the name is
MUI's, you may not rename it. If it is in the app namespace, you may.**
Everything MUI has no word for goes in an `app` layer above, via module
augmentation, and that is the only place Onkey gets to invent vocabulary.

Two rules I would write down and hold Gerhard to, because they are his
maintenance fear made concrete:

- Stay inside MUI's supported theming surface. Palette, typography, shape,
  spacing, `styleOverrides` on documented slots.
- No reaching into MUI's internal selectors from outside. If a component
  needs something the theme cannot express, that is a finding about the
  component, not a licence to write a deep selector.

### Step 3 — White labelling becomes a mode

Gerhard flagged white labelling as a coming requirement and said to keep it
in mind when structuring the variables. Do it now, because it changes the
collection structure and retrofitting it is expensive.

A white-label brand is another mode on the primitive collection, and
another entry in MUI's `colorSchemes`. Which means the parity check has to
generalise from two modes to N, and the semantic layer has to be genuinely
alias-only, since a literal cannot flip per mode. Their raw-hex habit is
already the thing that breaks this, so the gate earns its keep here more
than anywhere else.

### Step 4 — The guardrails, tuned for MUI

Six checks, the MUI analogue of the shadcn set. Four of these describe
failures that produce no error today.

| Check | Catches |
|---|---|
| Contract coverage | An MUI theme key the build never fills, so the component silently falls back to MUI's default. |
| Scheme parity | A token present in one scheme and missing in another, across N brands rather than two modes. |
| Alias-only semantics | A semantic bound to a literal instead of a primitive. Cannot flip per mode, and nothing else can see it. |
| `sx` and `styled` literals | Hex and px typed inline in `sx={{}}` or `styled()`, bypassing the theme entirely. |
| Slot override discipline | `styleOverrides` reaching for raw values, or any selector into MUI internals. |
| Drift gate | Figma against the repo, descriptions as well as values, naming exactly what moved. |

With the `token-allow: <reason>` escape hatch. A gate with no exit gets
disabled wholesale the first time it blocks a release.

Note for the pitch: **this is where the answer to "our variables never
change" lives.** The gate exists to stop a value entering the system that
cannot work, and to make a release solid enough to sign off against. Onkey's
variables may well be stable. Their *artefacts* plainly are not, and that is
what is costing them.

### Step 5 — The versioned artefact, which is the actual sale

This is what Gerhard asked for and did not get an answer to in the meeting.
He asked what he signs off against and what QA tests against.

- The master design system gets **branches per project**, so Material
  Manager stops writing into it.
- A release is a **semver tag**. Renamed is major, added is minor, revalued
  is patch. Nothing ships until the gate passes.
- Storybook builds **per tag**, published to a URL that does not move.
- The tag and its Storybook URL get **linked from the Aha! feature and the
  TFS work item.** That is the artefact. Development builds against it, QA
  tests against it, and the answer to "did this change or did I imagine it"
  is a diff between two tags.

Gerhard's objection to Storybook was that MUI already documents its own
components, and he is right about that. Here it does a different job: it is
the frozen, versioned, visual thing their process currently has nowhere to
point at. Chromatic on top gives the diff and the approval step. Worth
making that argument in those terms, because it is a different one from the
thing he was refusing.

### Step 6 — Governance, which nobody can build for them

Everything above collapses without one owner of the master and a queue for
changes to it. Amanda is the obvious owner. A change downstream goes back
up to her, gets prioritised, gets versioned, and comes back down. Gerhard
does not invent, and neither does a BA in a branch.

Their tooling for that queue does not matter. Aha! and TFS work. What
matters is that a design change is a ticket, and that no version leaves the
master without someone deciding it should.

---

## 6. Open questions, for tomorrow and for Gerhard

1. **Do they have Figma Enterprise?** If yes, the variables REST endpoint is
   available, the plugin and sink drop out, and the sync can run on a build
   agent instead of my laptop. That materially changes the shape of what I
   propose and it is a two-minute question.
2. **Which MUI version, and is CSS-variables mode on?** The theme contract
   depends on it.
3. **Is the paid MUI Figma kit Material 2 or Material 3?** They ship M2
   deliberately. If the kit is M3 the master has a mismatch baked in.
4. **How many collections and modes does the master actually have**, and
   does it have modes at all, or is dark unbuilt?
5. **What did Material Manager push upstream**, and has anyone reconciled it?
6. **What is the Storybook endpoint currently wired to**, and is it live?
7. **Where does the Figma MCP fit** in their BA workflow, and what are the
   internal AI team's agents already doing? Amanda asked me about MCP
   directly and I did not answer it in the room. The honest answer: an MCP
   read is good for implementing one component in an agent session, and it
   cannot prove a value came from the system. The pipeline is deterministic
   and provable. They coexist and they do different jobs.

## 7. Commercial shape

What I described in the room was month-to-month tactical work with a
prioritised problem list. That is the Retainer, and I pitched it before the
Diagnostic, which inverts the order in `Offer.md`.

Fix it on paper rather than in the next call. **The stock take in Step 1 is
the Diagnostic.** Two weeks, £3,000 fixed, and it produces exactly the
scope of work Stefan asked me to write. Then the Build is scoped from
evidence, and the Retainer is the continuation, which is also the shape
Amanda already described back to me correctly: a bespoke codebase plus my
time, no lock-in, skills transfer, and if they take it in-house nothing
breaks.

Amanda asked whether this is a product or a service. I said service, and I
would keep saying it. She then summarised the terms herself, accurately,
which is usually a good sign about who is going to defend this internally.

**The risk to watch:** capacity is their stated pain, and the temptation
will be to bill me as a pair of hands for the backlog. The backlog is real
and I should help with it. But the reason it exists is that nothing gates
the master, and if I clear it without fixing that, it refills.

---

## 8. Shape and priority

The meeting closed on two areas: **the variables**, and **the master Figma
file development consumes.** Gerhard put them in order himself, and he was
right, so take his order instead of inventing one. His words: start at the
variables, because that flows to the buttons, and the buttons flow to the
components. Stefan agreed on the call.

What matters for shaping the work is that the two areas differ in kind.

**The variables are finite.** There is a real end state: their Figma set
converges on MUI's token names, the semantics alias primitives, the modes
resolve, and the theme is generated. You can count what is left at any point.
It finishes, and it stays finished for as long as the gate holds.

**The master file is a standing condition.** Branching, versioning, a
sign-off artefact, one owner. None of that completes. It changes how they
work, permanently, and it decays the moment attention leaves.

That difference sets the commercial shape without any further argument.

| Area | Kind of work | Engagement |
|---|---|---|
| Stock take of both | Bounded, evidence-producing | **Diagnostic**, £3,000, 2 weeks |
| The variables | Bounded, has an end state | **Build**, scoped from the Diagnostic |
| The master file | Standing, decays without attention | **Retainer**, £2,000/month |

### The one thing that jumps the queue

**Close the write path into the master before changing what sits inside it.**

Amanda described this herself and heard the alarm as she said it. A separate
Figma file for the Material Manager module, in her words, "had to persist new
components upstream" into the master design system. They took the module on
piece by piece, and each piece left changes in the master behind it. She has
since merged that file back in and called the old way of working finished.

Two things follow from that, and the second is the one that sets the order of
work.

**The merge already happened.** So this is present contamination in their
master today. Whatever Material Manager pushed is sitting there now, and it
looks identical to a decision somebody made on purpose for the whole system.
That is the likeliest source of Stefan's two button masters, and of Gerhard's
status-change component that moves when profile manager moves. Separating
system-level decisions from module-level ones is a real part of the stock
take, and the file itself records nothing about which is which.

**The write path is still open.** Branch-per-project is Amanda's stated future
strategy and it is not in place. Her description of today is that the BAs "can
go in and they can work in Figma directly", and the rule that they cannot work
inside the master is future tense. So the master can still be written to by
anyone shipping anything. Material Manager was the example, and the open door
is the cause.

**Why that has to close before the variables work starts.** During convergence
a variable changes for one of two reasons: I changed it, moving it onto MUI's
token, or someone else changed it while shipping a module. Diff the file today
against the file in three weeks and you can see that a value moved. You cannot
see which of those two moved it. The whole engagement rests on that evidence
trail, and it stays unreadable while both paths are open.

There is a second cost, quieter. What convergence produces is the *decision*,
not the value: this is `palette.primary.main`, aliased to the teal primitive,
for this reason. Re-author that variable from inside a module next week and
the value may well survive while the decision vanishes, with nothing anywhere
recording that it was made.

**What day one actually means.** Four moves, and only the last one is urgent:

1. Establish who may publish the master library. Today it appears to be anyone
   with edit rights.
2. Turn on branching for the master, so a change becomes a branch and a review
   with a diff attached to it.
3. Give the modules a consuming file that instantiates the library and has no
   way to push back into it.
4. **Freeze new variable creation in the master for the length of the
   convergence.** Additions queue up and land at the end.

Number 4 is cheap, reversible, and does nearly all of the work. It costs them
no delivery speed, because a module can still ship against everything that
already exists. What it buys is a substrate that holds still while I rebuild
it.

**Worth saying that this is an easy conversation.** Amanda said governance,
stakeholding and ownership more often than anyone in the meeting, and
branch-per-project is already her plan. I am asking her to move a date
forward, so frame it as that.

### Order within the variables

1. **Colour, with modes.** This is where the pipeline's proof lives, where
   their raw-hex habit shows up, and where the white-label risk sits. It also
   produces the demo that keeps the room interested.
2. **Shape and typography.** MUI's `shape.borderRadius` and the typography
   variants map cleanly, so this is mostly transcription once colour is done.
3. **Spacing, last.** MUI's spacing is a single base number and theirs is
   probably fine. Low value, and it will look like busywork if it comes first.

### The test to apply when they push work at you

Capacity is their pain, so requests will arrive. Ask of each one: does this
change what a value *is*, or does it change where a value *comes from*? The
second sort earns its place in this engagement. The first sort is design work
they can do themselves once the substrate holds, and taking it on is how the
backlog refills.

---

## 9. What the pipeline would have to change, and whether it is the adapter

Short answer: **yes, an adapter. The shadcn adapter's shape, with a
different output format.** Worth being precise about why, because the difference is the
whole cost estimate.

### What transfers unchanged

The front half. Sink, plugin, `sync:figma`, the provenance guard that refuses
a dump from the wrong file, matching by name rather than id, descriptions
carried across, and the tag as the release decision point. `pipeline.config.mjs`
already carries `projectName`, `prefix`, `figmaFileName`, `sinkPort` and the
collection overrides, so pointing the baseline at Onkey's master costs no code
at all. That part is genuinely done.

### What does not transfer

The back half, and for one structural reason. Orin emits a **prefixed
stylesheet** that a consumer vendors into `vendor/tokens.css`. MUI consumes a
**theme object in JavaScript** and generates its own `--mui-*` custom
properties from it. So the export target moves from a CSS file to a theme
module, and everything downstream of the build changes with it.

That is what makes it an adapter instead of a config edit. Same doctrine as
shadcn, three parts:

1. **`contract.<scheme>.json`**, a fixed key set matching MUI's theme paths
   (`palette.primary.main`, `palette.text.primary`, `shape.borderRadius`,
   the typography variants). Hand-authored once, values are aliases into the
   primitives. MUI owns these names and Onkey may not rename them.
2. **The app layer**, the only place Onkey invents vocabulary, emitted as
   `--app-*` with TypeScript module augmentation. Prefix boundary carries the
   rule, same as shadcn: MUI's names are fixed, `app` names are theirs.
3. **Its own guardrail**, which is where the value is on this stack, exactly
   as it was on shadcn.

Plus a new Style Dictionary format, call it `js/mui-theme`, emitting the object
MUI's theme factory takes with one entry per colour scheme.

### The specific code that has to move

Four things, in rough order of cost.

**1. The light/dark pair is baked in.** `sd.config.mjs` ends with two literal
calls, `buildMode('light')` then `buildMode('dark')`. Fourteen files under
`on-key/` mention dark, including `figma-to-dtcg.mjs`, `mode-parity-label.mjs`,
`snapshot-tokens.mjs`, `verify-build.mjs`, `tag-release.mjs`, the plugin, and
the `exports` map in `package.json` (`./light.css`, `./dark.css`).

So Gerhard's white-labelling requirement is a real piece of engineering across
the pipeline, well beyond a line in a config file. **Price it as its own item
and say so on the call**, because it will sound like a checkbox otherwise.

**2. Mode parity has to generalise.** Today it compares a pair. With N brands
it becomes an N-way key-set and value comparison, and `expectedIdentical`
needs to become per-pair or it turns into a blanket exemption within a month.
That check is the one that caught the eight broken darks, so degrading it is
the expensive mistake here.

**3. The consumer contract splits in two.** `verify-build.mjs` currently
greps the consuming site for `var(--orin-…)` and proves each one resolves.
For MUI, half of that job goes to the compiler: emit the theme as `.ts`, typed
against MUI's `Theme` with augmentation for the app layer, and a misspelled
palette path becomes a build error for free. The remaining half is a scan for
`--app-*` referenced in `sx` and never defined.

**Say the TypeScript half to Gerhard directly.** It is his language, it costs
him nothing at upgrade time, and it answers his maintenance fear with
something he already trusts.

**4. The collection convention meets their file.** The baseline expects
Primitives, Semantic, Components, Fonts, Spacing, Radius. Their master almost
certainly does not use those names. Two ways to close that, and it is a real
decision rather than a detail: rename their collections to the convention, or
fill `figma: {}` with overrides. The config comments already say what overrides
mean, and they are right: **anything in there is a record that their file does
not follow the convention.** Overrides get you running in an afternoon and
leave the shape of their system unexamined. Renaming is the honest fix and it
needs Amanda's agreement, so it belongs in the Diagnostic conversation and not in a config file afterwards.

### Two smaller calls

**Keep `color/css`.** The shadcn adapter drops the colour transform because
oklch round-trips through sRGB and clips. MUI palettes are hex in practice, so
the transform is safe here. Check their notation before assuming it.

**The plugin may disappear entirely.** If Onkey has Figma Enterprise, the
variables REST endpoint is available, `figma-fetch.snippet.js` replaces the
plugin and the sink, and the sync can run on a build agent instead of a
laptop. That removes the most awkward part of the demo and changes what the
proposal looks like. Two-minute question, worth asking first.
