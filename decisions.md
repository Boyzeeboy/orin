# Orin — Decisions Log

A dated record of significant decisions and the reasoning behind them.
Written in past tense at the moment of the decision, not retroactively.
Future me should be able to read this and understand why present me chose
what I chose, even if the answer would be different now.

Format: date, decision, reasoning, revisit-if.

**How to read this file** (added 2026-08-16, after auditing it):

- **Oldest first, newest last.** Entries run forwards to the present.
  CLAUDE.md says to read backwards from the most recent, so **start at the
  bottom** and work up. Append new entries at the end. (Until 2026-08-16 the
  first eight entries ran backwards while the rest ran forwards; they were
  sorted into one order that day. Sorting moved entries, it did not edit
  them — same 64 entries, same bytes.)
- **Nothing here gets rewritten.** Entries are written in past tense at the
  moment of the decision. An entry that is wrong about the world *today* is
  usually right about the world *then*, and that is the point. When a decision
  is reversed, the reversal is a new entry — it does not edit the old one.
  Five other documents were audited against the shipped site on 2026-08-16 and
  corrected; this one deliberately was not.
- **Don't cite line numbers in other files.** They rot faster than anything
  else here. The 2026-08-16 entry on the Vivo number cited `HANDOVER.md` line
  87 and was wrong within hours, because the same day's edits moved it. Name
  the section or quote the text instead.

**Older entries.** 1 July to 30 September 2026 are in
`archive/decisions-2026-07-to-09.md`, unedited apart from two redacted
names. A citation elsewhere to a
`decisions.md` entry dated before October means that file.

---

## 2026-10-06 — Page contracts are not the pattern layer

**Decision:** IDEM's page contracts (ORIN-102, ORIN-103) are recorded as
the component contract extended to a Figma screen, not as the parked
pattern-layer mechanism and not as a reopening of it. The mechanism stays
parked.

**What a page contract is.** A Figma screen is a component, so the same
reader, the same `--init` and the same checks apply. The screen's regions
become the contract's parts, its gaps, padding and type become tokens, and
`composes` lists the components it places. The page is built only from the
package and held to a screen that exists in Figma first. The Images screen
is one set in two views, `View=Grid|List`, and one page.

**Why it isn't the mechanism.** `notes/pattern-layer-governance.md` has two
halves. The verification half is the contract diffed against design and
code (its Phases B to D). The governance half is its reason to exist: an
agent's third option to propose a pattern, with lock zones, a proposal
record (Gap, Built from, Why not X, Used in), a counter, an owner's review
and a skill. ORIN-49 has had the verification half in IDEM, as practice,
since 19 September. Pages extend it. None of the governance half exists.

**Against the trigger.** IDEM meets condition 1 (component sets), 2 (a code
library), 3 (a manifest: a `figmaNodeId` in every contract, with the shape
a node-ID comment lacks) and 5 (agent-assisted component work). It cannot
meet 4, one owner with no adjudication bottleneck, which the 19 September
entry already said. And the trigger is client-side by definition. It has
not fired.

**Recorded so a proposal doesn't overclaim:**

- **The contract's form departs from the governance note.** The note
  rejects a hand-authored contract and wants it emitted from Figma. IDEM's
  is a hybrid: tokens, parts and composes derived by `--init`; a11y, stories
  and `codeOnly` authored. That dates from ORIN-49 and ORIN-65 ("bindings
  generated, policy authored"), not from pages.
- **The page runs did something proposal-shaped, informally.** The Images
  screen produced decisions the system couldn't express: `data-card/width`,
  the `table/*` column tokens, an Outlined Icon Button, the screens as one
  set. Each was proposed by the agent with alternatives, chosen by me, and
  landed in Figma first, as the note demands. None went through a proposal
  record or a counter. The loop happened; the machinery didn't.
- **"Pattern" is the word to watch.** The Build promises "page patterns" and
  the IDEM canvas has a `Patterns/` group. A proposal says "page contracts
  verify designed screens", never "IDEM has a pattern layer".

**Revisit if:** a page is built from a contract with no Figma screen behind
it; page compositions are counted or promoted into components; lock zones
or a proposal record appear in IDEM; or any of this is offered to a client
as governance.

## 2026-10-06 — The Build says what its component library is

**Decision:** `Offer.md` (version 1.2) and `deliverable.md` describe the
component layer as it now exists, instead of as a promise. No price
changes, no new engagement shape, and the Foundation is untouched.

**Reasoning:** the Build has always promised "Tokens. Component library.
Page patterns. The pipeline". On 19 September the middle was prose. It
isn't now. IDEM has 40 components held to its Figma file by contracts, one
screen rebuilt as a page in two views, a canvas showing every story beside
its source, and a package an app installs, at 1.20.0. So the Build can say
what its library is and how it's checked, and the deliverable can stop
describing a metadata file nobody built.

**What changed:**

- `deliverable.md`: the component library line is now contracts, the
  checks that hold code to them, and the drift check I run. Two new lines:
  the canvas, and one key screen rebuilt from the package as the library's
  acceptance test. A new section, "Where the component layer stands", says
  it was built on IDEM and is not in the baseline yet, so for that line
  the file is the manifest rather than a fresh clone.
- `Offer.md`, Diagnostic: a second opening move for a team with a component
  library, the component ready check, using IDEM's own 43 components and 3
  ready as the example. **Marked not standard yet.**
- `Offer.md`, Build: the library held to their design; done means one of
  their screens rebuilt from the package matches Figma; an explicit line
  that pattern governance is not part of it. Component-heavy scope comes
  from the ready-check ratings, not screens, and the £12k to £18k range is
  a starting point for the first one, to be checked against the work.
- `Offer.md`, Retainer: new components through the same loop, the drift
  check and a canvas walk monthly.
- `notes/idem-system-infographic.html`, refreshed from 1.0.2 to 1.20.0 the
  same day, with sections for pages, the canvas and icons.

**What it doesn't claim.** Two things stay unproven and both documents
say so. The component machinery has only read one Figma file, mine, and
component naming varies far more between files than six collection names
do: the portability risk the governance note named in September. And it
assumes React, TypeScript and Storybook. The ready check gets promoted in
the Diagnostic only after it has worked on a file I didn't design.

**Not done:** the component layer isn't extracted into `Orin Token
Pipeline`, so the shared core still doesn't contain it. That's the next
decision, and it waits for the first client file. The Foundation's "about
eight primitives" could carry contracts too; untested, so not offered.
Site copy unchanged.

**Revisit if:** the ready check runs on a client file (promote it, or
record why not); the first component Build lands (check the price against
the work); or the component layer is extracted into the baseline (this
file's manifest line goes back to the clone).

**Added later the same day:** the Build gains a paragraph, "Some of the work
happens in their Figma file". The version above implied the Figma work
("built from the brand foundations up", and "what needs fixing in Figma
first" in the pricing logic) without saying Orin does it. On IDEM every
component and both screens needed Figma changes before they could be built,
and making them was the job. The paragraph says what that work is (binding,
naming, states, variants, tokens), where it stops (not product design: no
screens, no flows), and whose file it is: a branch of theirs, or changes
their designer approves, never straight over their work. That last line is a
commitment to the client, not a description of the pipeline.

## 2026-10-13 — Orin repositions around the Figma-to-React package

**Decision (approved by Warren the same day):** `positioning.md` goes to 2.0 and
`Offer.md` to 1.3. The one-liner becomes "I turn your Figma library into the
React package your developers ship from." The Build is named as the product;
the Diagnostic and the Foundation stay as the ways in, and the Retainer keeps
the package alive. Prices are unchanged.

**Why:** the 14 July positioning was written before IDEM's component layer
existed. Since 6 October there is a working thing to sell: 40 components held
to Figma by contracts, checked on every pull request, released as a package an
app installs. It's easier to say out loud than "token pipeline", and it ends in
something the client owns rather than a diagnosis. The manifesto allows for
this in so many words ("The service list will change as I change"). The
worldview underneath doesn't move.

**What changed in `Offer.md`:** a paragraph saying the Build is the product; the
Diagnostic framed as "how far is their library from a package", with the ready
check becoming the first move only after ORIN-140; the Build's "What it is" and
"What the client gets" lead with the package; a placeholder for clients already
on MUI or shadcn; releases as package versions in the Retainer; and a new
refusal, **Builds sold on component count**, for the same reason screen-count
Foundations are refused.

**What 2.0 drops:** "for teams shipping without a full design department". The
component pipeline reads a Figma library, so its buyer has a designer. Teams
with no Figma come in through the Foundation and are no longer who the
one-liner speaks to. Watch whether that loses the developer-carrying-the-load
story in conversations; it was the part people recognised.

**Tickets opened:** ORIN-140 (portability: ready check and contract fetch on
two Figma files I didn't design), ORIN-141 (component layer into the baseline
as an opt-in `react-package` profile, blocked by ORIN-62, ORIN-47 and
ORIN-140), ORIN-142 (price check of the £12–18k Build against what IDEM took).
**ORIN-62 decided the same day: option A, as an opt-in profile.** The
component layer goes into the baseline; the default stays token-only, and
`scaffold-client --profile react-package` adds it. The repositioning weakens
both of ORIN-62's objections to A: React is now the declared market, and the
product is a design-system repo that publishes a package, which is IDEM's
shape, so the machinery and the components share a repo. The profile keeps
option C's protection (a token-only clone is unchanged) without C's
half-present layer. Two of ORIN-62's cautions still hold: ORIN-47 first, so no
check goes green by reading nothing; and no porting until ORIN-140 has run the
machinery on files I didn't design. The build is ORIN-141, now blocked only by
ORIN-47 and ORIN-140. Open: a client with a design-system repo of their own,
and MUI or shadcn underneath (below).

**Recommended, not adopted: when the client already runs MUI or shadcn.** The
rule underneath both: Figma decides what exists and how it looks; their React
library decides how it behaves. The package sits on top of what they have.
Replacing the library is only on the table when the Diagnostic shows the
library is itself the source of drift, and then it's separately scoped.

- **shadcn.** The components are already source in their repo, so they own
  them. The package is their `components/ui`, given contracts from Figma and
  moved into a package once there's a second app (with one app, the checks can
  live in the app repo). Radix stays underneath for behaviour and
  accessibility. The token side is the shadcn adapter already worked
  (`notes/shadcn-adapter/`): semantic tokens filled into shadcn's fixed
  variable names, anything shadcn has no word for emitted as `--app-*`.
  What changes in `verify-contracts`: check 4 can't assume a `--idem-*` prefix,
  and check 3 has to read Tailwind arbitrary values (`p-[13px]`,
  `bg-[#fff]`), which is where literals hide on this stack. That's ORIN-47.
- **MUI.** The components are MUI's, so the package is a generated theme
  (`cssVariables` and `colorSchemes` on v6/v7; confirm the version first),
  thin wrappers where their Figma departs from MUI, and new components where
  MUI has nothing. A Style Dictionary format emits the theme; the shape was
  worked once in August. Contracts for MUI-owned components point at theme
  paths, so checks 3 and 4 have to read `styleOverrides` and the `sx` prop
  as well as component files. If their Figma is built on the MUI for Figma
  kit, variant names map to MUI props, and the ready check's "nameable
  variant properties" becomes a mapping check. Risk: MUI's default look
  showing through wherever Figma is silent, so the contract says what it
  covers.

Both become adapter tickets now that ORIN-62 is decided. Neither gets written into
`Offer.md` until the first client on that stack, or Warren decides earlier.

**Not done:** site copy (the homepage hero and `/how-it-works` order would
follow; the stopping rule allows it for a repositioning, but the site isn't the
current task, so ask first). Outreach templates A, C and E. The LinkedIn About.
The 3-minute version.

**Revisit if:** ORIN-140 shows the ready check doesn't travel (then 2.0's
evidence paragraph goes back to "on my own system" only); ORIN-142 moves the
Build price; or the first two conversations show buyers without a Figma
library recognising themselves in 1.1 and not in 2.0.

## 2026-10-13 — ORIN-140: the ready check travels; the token side needs a second mode axis

**Decision (approved by Warren the same day):** the component ready check is
promoted to standard in the Diagnostic and goes first. `Offer.md` qualifies the
"runs on a file it has never seen" claim, and `positioning.md`'s "What it does
not claim yet" says what the check found. Full results are private
(`notes/orin-140-portability-results.md`, orin-private), because one file is a
paid kit whose licence terms aren't public.

**What ran.** Two Figma files I didn't design: a commercial kit, and the
Scottish Government Design System Kit (Figma Community, OGL v3). A third, an
older system built on styles before Figma had variables, ran privately; its
results are in the private note and it isn't named here.

**The ready check.** 45 per cent of one kit's 207 components and 14 per cent of
the other's 180 could be built as drawn, against 7 per cent on my own file at
the start. It needed three fixes, all about reaching a file rather than rating
it: IDEM's page ids were hardcoded, a broken component set stopped the run, and
style use wasn't counted separately. The commonest gaps were spacing and
border widths typed as numbers (corrected later the same day: border widths
led on one file only, see "Outreach leads with the ready check"). One finding changed how results get read: 40 of the
Scottish kit's failures were one cause, bindings to the publisher's library
with local twins of the same name. That's one rebinding pass (ORIN-145).

**The token side.** The plugin, sink and freshness record worked unchanged.
Both files matched 0 of 6 collection names on the first pass, and the
`figma.collections` override mapped every single-mode and light/dark collection
without a code change. **Neither file's responsive modes could be mapped**: UI
Prep's Typography (Desktop/Mobile) and five of the Scottish kit's collections
(Default/Desktop). The pipeline has one mode axis and refuses a second loudly,
which is right, and config can't route around it. Two independent files, same
gap, so it's the norm (ORIN-143). The Scottish kit has no dark theme, and mode
parity failed all 70 of its semantic colours for it (ORIN-144). The report also
caught one genuine judgement call on the kit, a hover colour identical in both
modes that's plausibly deliberate.

**The contract side wasn't reached.** The cleanest Button in the kit binds its
type to the Desktop/Mobile collection, and `lib/token-names.mjs` is IDEM's
(the prefix and the collection map are hardcoded). Both are now evidence for
ORIN-141 rather than predictions.

**Styles, decided the same day:** the styles-only file answered it.
Counting every colour style as bound moved it from 1 ready component in 121 to
6, because its radius, spacing and borders were never tokens at all. So a
colour style is neither a binding nor a defect: it's a migration, reported as
its own category, and a file built that way is "a migration before it's a
package". Text styles stay counted as bound.

**Revisit if:** ORIN-143 lands (the responsive line in `positioning.md` goes);
the first client file contradicts either rating; or a styles-based file turns
up.

## 2026-10-13 — Outreach leads with the ready check

**What changed:** the LinkedIn headline and About, the company page, the
buyer-1 profile and templates A to C in `notes/launch-and-outreach-pack.md`
(orin-private) now follow `positioning.md` 2.0. The buyer-1 hook moves from
the token audit to the component ready check: how many of your components
could be built without guessing. Template E keeps the cost-of-building-twice
lever and says React.

**Why:** the ready check went standard the same day (ORIN-140), and it asks
the Figma-to-React question in one sentence. The token audit still runs on
the call; it just isn't the headline.

**Two rules written into the pack:** the public evidence is "between 1 and 45
per cent on design systems I didn't build", never the systems' names, because
one is a paid kit and one a client's. And the free ten minutes is the score
and the top causes only; the fixes, their order and the sample report are the
paid Diagnostic.

**Buyer 1 narrowed:** a Figma library and a React front end. No Figma is buyer
2; Vue, Angular or native is not now.

**Two corrections made before anything was sent.** The first draft quoted 14
to 45 per cent, the two systems that can be named, while the third, a
pre-variables file, scored 1 per cent. Quoting the flattering pair would have
been cherry-picking, so the range is 1 to 45. And `Offer.md` and the ORIN-140
entry said border widths were the commonest gap in both public files; that was
true of one. Padding led on the other and on the private file. Corrected to
spacing and border widths, which are near the top in all three.

**Not done:** nothing sent, and the LinkedIn About isn't posted. Whatever goes
out gets pasted back into the pack word for word, per the 1 September rule.

## 2026-10-15 — The Build's price, checked against what IDEM took (ORIN-142)

**Decision:** kept the Build at £12,000 to £18,000, and tied the band to the
component count from the ready check: up to 20 components £12,000, 21 to 35
£14,000, 36 to 50 £18,000, and anything bigger (or a file still on colour
styles, or a library underneath) scoped above that or split. A Build moves up a
band when the Diagnostic shows a slow team. The client still sees one fixed
price, never a price per component. The Retainer stays at £2,000.

**What I measured.** The component runs on IDEM took 3 to 5 October: 8, 8 and
4 hours, so 20. About 35 components went through the loop in that time. Roughly
6 and a half of the hours went on other things: the Figma binding pass
(ORIN-77), swapping out the last library components (ORIN-87), the canvas
shell and frames, and a screenshot fix. That leaves about 13 and a half hours,
or 25 minutes a component. Linear's start and finish times agree on the shape:
Checkbox and the notification pair took about 20 minutes each, the composed
table cells 40 minutes to an hour, the navigation set and the Images view a
few hours. The first runs took 2 to 3 hours, while the loop itself was still
being fixed.

**What I didn't measure.** The framework week (package, loop, inventory,
contracts, 26 September to 2 October) and the pages and hosting after it.
Commit times give an upper bound of about 51 and 58 hours, but I didn't
record how much of those days was work. A client doesn't pay for that again,
so it's left out, apart from the setup estimate below.

**The model.** Per Build, at my own pace: setup 3 days (scaffold, sync,
package, CI, hosting, and porting the component tooling by hand until ORIN-141
lands), the one-screen test 1 day, handover 1 day, Figma fixes at 0.15 hours a
component (my binding pass was about 0.1), a page of guidance at 0.4 hours a
component (ORIN-114), and the components themselves at 0.5 hours on average
(a mix of 40 per cent simple at 15 minutes, 40 per cent with states at 30, 20
per cent composed at an hour, set above the measured 25 minutes on purpose).
Then doubled, because my last client engagement ran at about twice the time
once meetings, approvals and waiting were in.

| Components | Days at my pace | Days, doubled | At £562 a day | Band | Per day at the band |
| -- | -- | -- | -- | -- | -- |
| 15 | 7 | 14 | £7,868 | £12,000 | £857 |
| 30 | 9 | 18 | £10,116 | £14,000 | £778 |
| 45 | 11 | 22 | £12,364 | £18,000 | £818 |

So the range holds, about 40 to 50 per cent above the Diagnostic's £562. I
expected it to need raising, and at double overhead it doesn't. At triple it
does: 30 components at £14,000 is 27 days, £519 a day. That's why the band
moves with the Diagnostic's read of the team rather than staying fixed.

**The Retainer.** 3 to 4 days a month is £500 to £667 a day. A new component
through the loop, with its fixes and guidance, is about 2 hours at double
overhead, so a month holds about 10 alongside the upkeep. More than that is a
small scoped Build.

**Caveats.** One file, mine, with my own approvals. The pace is AI-assisted
and won't carry one to one into an unfamiliar codebase. The overhead figure
comes from one engagement. The setup, screen and handover days are estimates.
And the model prices neither a library underneath nor screen-size modes
(ORIN-143); both push a Build up a band until they're built.

**Revisit if:** the first client Build lands more than a band away from this;
a Diagnostic measures overhead above about two and a half times; or ORIN-141
lands and setup shrinks.


## 2026-10-16 — A social strategy for X and LinkedIn, written and kept private

**What changed:** `notes/social-strategy.md`, tracked in orin-private and
ignored here from creation. It records what the posts are for (credibility for
the one person who has just looked me up after a cold email, not reach), the
audience (buyer 1's engineering lead, with the team's designer as the veto;
the founder is not served by this series), the theme ("what happens between
the Figma file and the code") and three subjects: drift and handoff, reviewing
AI-built UI, and what checks miss. It holds seven drafted posts per channel,
19 October to 5 November.

**The boundary is the pack's:** evidence is free, method is paid. Every finding
in the drafts is already public in the IDEM essay or the 60-second positioning.
The series explains no mechanism, so it is compatible with any answer to the
pack's open question about the public mechanism allowance, and doesn't settle it.

**Rejected from an earlier draft strategy:** "what needs clear instructions" as
an AI subject (ORIN-39 and ORIN-49 found prose context didn't help agents, and
the 27 September entry rules out the claim), and "knowing whether information is
current" (the central idea of the private ORIN-147 dashboard mock-up).

**Not done:** nothing posted. The LinkedIn hold in the outreach pack (since 6
September) still stands; posting this series ends it, and that gets logged when
it happens, along with what to do with the pack's three held drafts. A velocity
maths post for 10 November is proposed and not drafted.


## 2026-10-17 — Composed colours: refused, then resolved to what Figma paints (ORIN-131)

**What changed:** since September a Figma colour variable can be another
colour at a separate opacity. The baseline's extractor turned that value into
`#NaNNaNNaN` without throwing, and it would have reached a client's `dist/` as
invalid CSS with every check green. Pipeline PR #9 made the sync refuse any
colour it cannot represent, naming each variable and mode. PR #10 then resolved
composed colours to the 8-digit hex Figma paints. The extractor is now
version 3.

**Measured, not assumed.** The typings call opacity a "percentage" and say
nothing more, so I built a throwaway Figma file and read what Figma renders in
both modes. Opacity is 0 to 100. An opacity variable resolves by mode name
across collections, so the dark-mode defect doesn't come back this way. And the
composed opacity replaces the colour's own alpha rather than multiplying it: a
half-transparent colour composed at 50 paints at 0.5, not 0.25. That last one
is easy to get wrong, because multiplying looks like the natural reading. The
forum also had the shape wrong (it's `{ color, opacity }`), and the Plugin API
does accept writes of it.

**Not done:** none of the clones has a version number on its extractor yet, so
each would turn a composed colour into `#NaNNaNNaN` on its next sync until it's
ported. No clone's `dist/` holds one today. ORIN-150 reads the client files
before each port.


## 2026-10-17 — The drift gate refuses a dump it cannot place (ORIN-61)

**What changed:** under `check:figma`, a pipeline with no Figma file name
configured, or a dump that carries none, is now a refusal rather than a
warning (pipeline PR #11). A dry run still warns and carries on, so a new
client's first sync works before anyone knows the file name. I rehearsed it
through the real sink: the gate exited at provenance, naming the file it got.

`Offer.md` is updated to match, in both places that describe the gate.

**Still not fail-closed.** A dump from before the extractor was versioned
still only warns under `--check`, so `Offer.md` keeps saying the gate is for
someone who reads warnings. Decide that one once no live client has an
unversioned dump.


## 2026-10-17 — The report reads a React site's real sources (ORIN-47)

**Decided: option (a), generalise the baseline's scanner.** The report's
consumer checks read `.css`, `.html` and `.js` only, and skipped any folder
called `vendor` or `admin`. On a React site they read almost nothing and the
report went green anyway. Since 13 October React is the market and the package
profile is in the baseline (ORIN-62), so leaving this to per-client adapters
would have shipped that false green to exactly the clients I'm selling to.

**What changed** (pipeline PR #12): the scan is configuration, with wider
defaults that exclude by role (dependencies, build output) rather than by a
name that was one client's real code. A new `scan-coverage` check says what
was read, and fails when nothing was, when a configured folder is missing, or
when `package.json` declares React, Vue or Svelte and none of its files were
read. An end-to-end test proves the original bug is caught: an undefined token
in a `.tsx` file now fails the contract, naming the file.

**Not dropped:** the `@shadcn/lint` trial answers a different question,
Tailwind-class hygiene, and can sit alongside this later.

**For ports:** a clone's first build after this reads more files and may go red
on real findings. KR needs `admin` added back to its exclusions, with a reason,
if that folder really shouldn't be scanned.


## 2026-10-17 — Two substrate checks: uncompiled token files, and numbers described in units (ORIN-58, ORIN-59)

Both found real defects on IDEM, and they went in one pass (pipeline PR #13)
because fixing the first exposes the second: a file that is never built is
never wrong.

**`build-sources` (ORIN-58)** fails on any authored file under `tokens/` the
build never compiles. On IDEM, `size.json` and `typography.json` sat like that
for months while `dist/` was colour only. The source list now lives in one
module shared by the build and the report, so the two can't drift. Files that
genuinely aren't token sources go in config with a reason; the baseline
declares its changelog and snapshot.

**`lint-unitless` (ORIN-59)** now also fails on a number token whose
description gives it a unit, which is how IDEM's 15 letter-spacing tokens
emitted `letter-spacing: 0.1`. It matches a unit written against a number
("0.1px"), not the word anywhere, so weights and the pipeline's own ratio
tokens stay clean and the check isn't switched off on its first run.

Each was broken on purpose through the real report and went red.

**Next in the set:** ORIN-60, literals in the semantic token files. Its care
is the same: the primitives file is meant to be literals.

## 2026-10-18 — The social series rewritten for the engineering lead, and a buyer persona written

**What changed:** `notes/social-strategy.md` (orin-private) reworked against
Daniel Priestley's argument that recommendation engines now read what a post is
about and who it's for. A new `notes/buyer-persona.md`, tracked in orin-private
and ignored here from creation, writes buyer 1 out in full: the engineering lead
who signs, the designer who can veto, their objections, and the words they use.

**Why:** the 16 October series named the engineering lead as its reader and was
written for the designer. Half its posts were about what checks miss, in token
and variable vocabulary, and a recommendation engine reading them would match
the series to designers and design-systems people. None of them named the
reader, only two said what I do, and none said what drift costs, which is the
argument that moves the buyer to spend.

**What the series does now:**

- Two jobs instead of one: credibility for the person who looks me up after a
  cold email, and being found by engineering leads who haven't. Who sees the
  posts is the measure, not how many.
- Four subjects named for what the buyer's team goes through: where your
  developers guess, looks finished but never used, green build with a broken
  product, and what the team gets back. "What checks miss" is retired as a
  subject; its findings moved into the second and third.
- Every post names its reader in the first line or two and gives one sentence
  of cost. LinkedIn posts close on a line saying what I do. That line describes
  rather than asks, so the one-ask rule (first and last post) stands.
- New posts: the velocity maths (no price named), Vivo, the "between 1 and 45
  per cent" result on systems I didn't build, ten faults in two days, and an
  "after" post about developers installing the package. The docs-pages post
  goes to reserve, and the uncompiled token files go to X only.
- Three posts a week instead of two, drafted three weeks ahead. Fourteen pieces
  from 19 October to 12 November.
- Measurement adds viewer job titles and the share of non-follower viewers for
  each LinkedIn post. Two posts in a row reaching mostly designers triggers a
  rewrite.

**Not done:** nothing posted, so the LinkedIn hold still stands. The 11 November
post uses the July dark-theme fault, which isn't in the IDEM essay. It waits on
confirming the fault was IDEM's, checking the figure, and deciding to make it
public; a reserve post takes the slot otherwise. The persona is a hypothesis.
It gets checked against the first five buyer-1 calls and updated after the
fifth.

**Rejected:** more faults from IDEM's internals (deeper practitioner territory,
and closer to method), and any line saying AI builds better from a package (the
27 September entry).

## 2026-10-18 — The LinkedIn hold ends, and the dark-theme fault stays private

**What changed:** the hold on LinkedIn posting, in place since 6 September in
section 5 of `notes/launch-and-outreach-pack.md` (orin-private), is ended. Posts
now go out from `notes/social-strategy.md`, starting Monday 19 October. The
pack's status line says so.

**Why it can end now:** the hold was there because the public mechanism
allowance is unresolved. The social series explains no mechanism, so it can go
out under any answer to that question, including zero. Ending the hold doesn't
settle the allowance.

**What stays held:** the pack's three 6 September drafts. The series doesn't use
them, and post 2 would spend the allowance, so they wait on that decision.

**The dark-theme fault is not public.** The 11 November post was to use the July
2026 fault in which a dark theme carried its light values past every gate. It
isn't in the IDEM essay and now won't be in the series; the strategy lists it
under "held back, always". The reserve post on the docs pages' 188 contrast
failures takes the slot, rewritten for the engineering lead. The reserve is
empty until the next drafts.

**Staying three weeks ahead is ORIN-151:** the three weeks from 17 November are
due by 26 October, then a week at a time, with the section 11 measurement table
filled in as posts go out.

## 2026-10-18 — The social posts revised after an editorial review

**What changed:** all fourteen drafts in `notes/social-strategy.md`
(orin-private) were revised after an outside editorial read, and section 5 gains
three rules: name the reader by the second sentence rather than the first, claim
only what the evidence carries, and give each post one job.

**The correction that mattered.** The 5 November draft said the pull request
flags any drift from the design. That's false for what a client gets: the check
left in a repository compares code with each component's contract, and the
Figma comparison needs someone running it (the pack's section 1, corrected 14
October). The post now says the pull request fails when code breaks the
contract, which is what `positioning.md` already says publicly.

**Narrowed:** AI "reproduces the mistake faithfully" became a risk ("can turn a
missing design state into a missing component state very quickly"); "no test of
yours will catch" became "the checks in my own system missed"; the essay's "a
system a team has built over three years hides more" became "probably hides
more"; the £70,000 team cost and the 10 per cent are framed as assumptions; and
the spec post drops "wrong in four places", since only the shape is on record.

**Also:** twelve of thirteen LinkedIn posts opened "If your…"; now one does, and
about half lead with the finding. The three posts on developers guessing each
have one job: the everyday problem, my own library, and three systems I didn't
build. The closing post asks on X as well as LinkedIn, and asks for a message
about where the team gets stuck.

**Not done:** the Vivo post keeps the 60 per cent exactly as the case study
words it. Nothing here records how it was measured or what work it covered, and
a clause gets added only if that can be said accurately.

## 2026-10-19 — The 16 October research brief: one patch, one check, one question

**What changed:** a research brief dated 16 October was reviewed against the
repos rather than taken on trust. Three things came out of it.

**Storybook patched in four places.** Two advisories published 12 October
(GHSA-f2ph-cmg5-wxc8, critical; GHSA-px85-f4q5-jh77, high) cover the dev server
in `storybook` 8.0.0 to 8.6.18 and 10.x before 10.6.2. All four local installs
were in range: the IDEM pipeline (10.6.1), the KR pipeline, acme-tokens and
the agent lab clone (8.6.18). The brief found three and missed the agent lab.
IDEM and KR are merged (idem-design-tokens #166 and #167, kr-token-pipeline #25)
after full test runs. acme-tokens is fast-forwarded locally, since it has no
remote. The agent lab clone, a 27 September experiment copy that was never
written up, is archived and deleted (see below). Only `storybook dev` was exposed; built
Storybooks, which CI tests, never were. None of them had `@storybook/addon-mcp`,
so the brief's point about agents getting write access didn't apply here.

Dependabot had opened the same bump 7 hours earlier, split badly: `storybook`
in one PR, its addons in another, though `dependabot.yml` groups `@storybook/*`
together. #164 was closed as superseded. If next Monday splits them again, the
grouping needs a look.

**The consumer check now tabs through the installed app** (idem-design-tokens
#168). Every tab stop, in both themes, has to look different focused and
unfocused, compared over the element and its component root. It's shown to
fail: a global outline and box-shadow reset made 70 of 116 stops fail. The
consumer app had no inherited reset to begin with, so the brief's worry about
one was checked and wasn't true here.

**The Diagnostic asks which source wins** (`Offer.md`, section 1): every source
claiming to be the system, with version and owner, and what happens when two
disagree. Asking is free; settling it is the Build's drift checks.

**The three-edge drift question went to its own session,** and is now ORIN-152
and ORIN-153 under ORIN-66. The canvas's "In sync" reflects only contract
against Figma; two of four planted mismatches still read "In sync".

**Not done, deliberately:** the brief's sales lines (one is the negative
parallelism `voice.md` §4F rules out, and leading with AI would move the locked
positioning), a multi-source reconciliation module (no prospect has asked), its
metrics list (too much for one person before the first Build), and any reliance
on Figma's beta code-source features. Heading semantics in the consumer app
weren't checked: the app's headings are the app's, not the package's.

**Later the same day: the agent lab is archived and deleted.** It held four
experiment starting states, tagged `a-bare`, `b-context`, `c-figma` and
`d-pattern` (ORIN-49's protocol arms), three commits that existed nowhere else,
and staged FormField work on `d-pattern` from 27 September. The FormField that
IDEM `main` has since shipped supersedes that work. Its Claude config never
recorded a session, so there were no transcripts to keep. The evidence is in
`~/Developer/Claude/Archive/idem-agent-lab-2026-09-27/`: a git bundle of every
ref, the staged work as a patch, and a README with restore steps, tested by
restoring before deleting. A frozen copy left on disk is what this morning's
advisory nearly missed, so it doesn't stay.

---

## 2026-10-19 — A reserve post on AI output that comes back "close"

**What changed:** `notes/social-strategy.md` (orin-private) holds one reserve
post in section 9, empty since 18 October. It's LinkedIn only, under "Green
build, broken product": teams point AI tools at their Figma library, the output
comes back close, and close means review eats the time the AI saved. The
evidence is the two uncompiled token files from the IDEM essay, told as values
that looked finished and never reached the app.

**Why this shape:** the question was whether a prospect's problem, and how the
IDEM pipeline would solve it, belonged in the series. The problem does, as the
engineering lead sees it. The prospect doesn't: no name, no meeting detail, and
nothing that lets them recognise themselves. And "the pipeline solves it" can't
be said, since that prospect never used it, and explaining how would spend the
mechanism allowance the series is cleared for by not touching.

**Narrowed:** "close" came from one conversation, so the post says "the last
time I asked a team" and claims no pattern. "An AI tool can only be as right as
the design system it reads from" is kept as a ceiling. It goes no further,
because the 27 September entry rules out saying AI does better with a package.
The closing question is the 21 September doctrine's discovery question, asked
in public. That's the question, given away; the answer stays paid.

**Not done:** not scheduled. It's LinkedIn only and should go after 6 November,
because X runs the same finding that day. Nothing posted, so it stays a draft
under the 1 September rule.

---

## 2026-10-19 — The social posts checked against today's findings

**What changed:** all fifteen drafts in `notes/social-strategy.md` (orin-private)
were checked against today's work. Three lines changed, all in the same
direction: a check described as more complete than it is.

- **5 November, LinkedIn:** "When someone's code breaks that contract, the pull
  request fails before it merges" became "every pull request checks the code
  against it". ORIN-153 planted a break that passes: a token the contract names,
  used on the wrong variant. The new line is what `positioning.md` already says,
  and it claims no catch rate. This line was last corrected on 18 October.
- **5 November, opening:** "each one checked against its Figma source" became
  "each one built from its Figma file". The Figma comparison runs when someone
  runs it, and its last reading was 8 October (ORIN-152).
- **19 October introduction:** "checks say whether the two still match" became
  "I check the two against each other", for the same reason. If the
  introduction has already gone out, the sent text replaces the draft anyway
  under the 1 September rule.

**Checked and holding:** 40 components (40 in `src/components`); "for months"
on the uncompiled files (typography and size files added 20 May, found in
late September); the 28 October keyboard post, which the new consumer focus
check supports. Its 70 of 116 is a planted test and stays out of the posts.
Nothing in the series relied on the agent lab or the Storybook dev server.

**Not done:** `positioning.md`'s "checked against that contract on every pull
request" is still true, so it stays. Offer.md's and deliverable.md's canvas
wording waits on ORIN-152, as that issue says.

---

## 2026-10-19 — Every social post traced to its evidence, and five lines narrowed

**What changed:** a new `notes/social-evidence.md`, tracked in orin-private and
ignored here from creation, gives each post in the series its claims, a source
for each, a strength (measured, recorded, reasoned or assumed), and an answer
for the challenges most likely to come. Outside sources were checked at source:
Figma's Dev Mode and Code Connect docs, zeroheight's 2026 report, Figma's
design-system study, and UK pay figures.

**Why:** a review of the introduction said "looking at a screen and making a
reasonable guess" understated Dev Mode. It was right, and the series is
written for an engineering lead whose team probably uses Dev Mode. Warren asked
for every post to rest on data he can produce when challenged, including his
own findings.

**What the research changed in the posts** (`notes/social-strategy.md`):

- **Introduction and 20 October.** Dev Mode shows a value's variable when one
  is bound, so "whether that 16px is the system's spacing" was only true of
  typed-in values. Both now claim the gap only there: a padding typed in rather
  than taken from the system's spacing, and a disabled state nobody drew.
  Typed-in numbers were the ready check's commonest gap (13 October).
  The X post is at 280 characters.
- **20 October:** "which of the four greys" invented a number. It's now
  "which grey is this, by name".
- **28 October:** "and everything else was built from it" is cut, because
  nothing on record says so.
- **Reserve post:** "the last time I asked a team" became "the last time a
  team told me", which is what happened.
- **22 October note:** it said nothing recorded how Vivo's 60 per cent was
  measured. The 20 September entry does: the client's Technical Officer, from
  over 100 UI defects to around 13, December 2023 to April 2024. The post is
  unchanged, and the note now points there.

**Checked and holding:** 3 of 43, 7 per cent, 1 to 45 per cent, 40 components,
ten faults in two days, the font weight, the focus state, the pill, 188
contrast failures, the uncompiled files, and the versioned package (1.21.1).

**Not done:** the £70,000 sum rests on third-party reports of ONS pay
(about £55,000 to £57,000 median) and a 15 to 25 per cent on-cost. Both are to be checked at
ONS and HMRC before 27 October. No study puts a figure on developer time lost
to drift, so the 10 per cent stays an assumption the post asks the reader to
replace. Figma's 34 per cent measured designers and isn't used. The zeroheight
figures aren't in any post yet. Code Connect goes in the persona's objections
only if calls raise it.

---

## 2026-10-19 — The introduction's example, checked in the Figma file

**What changed:** the introduction's Dev Mode paragraph (`notes/social-strategy.md`,
orin-private) now uses an example read from IDEM Revised rather than reasoned
about. Its evidence entry in `notes/social-evidence.md` is updated to match.

**What was checked.** Figma's help says Dev Mode suggests a variable for a
typed value only when it has the same value and a suitable scope. Read through
the plugin API today, IDEM Revised has four variables worth 16 that qualify
for padding: Spacing `scale/16` and `m`, and Radius `scale/16` and `l`. Each
pair is a scale value and an alias of it, and all four are scoped to all
properties. The Fonts variables worth 16 are scoped to font size and line
height, so they don't qualify.

**So the post says:** a padding typed in as 16px gets a suggestion by value
only, and in my own file that's four names, two of them corner sizes. Pick the
wrong one and the screen doesn't follow the next change.

**Rejected along the way, by the same research:** "library twins" as an
example of a wrong variable, because Dev Mode shows a variable's host file and
the record doesn't say which binding was wrong. And "the button's corners were
set by hand", which was false: `button/radius` was a Figma variable, and the
gap was on the code side. The font-weight finding holds, but only as "looks
right", and stays with the 4 November post.

**Corrected in the evidence file:** "an undrawn disabled state" was marked as
measured by the ready check, and nothing records that. It's now reasoned, with
the practitioner sources named and no study claimed.

**Not done:** the Dev Mode panel itself wasn't observed, only the rule it
follows. IDEM's variable scopes are left as they are. Scoping radius to corner
radius is a real fix, but it would change the file the post describes, and it
belongs in the IDEM project rather than here.

---

## 2026-10-19 — The introduction's final wording, recorded before posting

**What changed:** the LinkedIn introduction in `notes/social-strategy.md`
(orin-private) is replaced with Warren's final wording, marked not yet posted.
Its evidence entry in `notes/social-evidence.md` is rewritten to match. The X
post is unchanged.

**What the final wording settled.** It came from two outside reviews.
- "The question I'm working on" replaces a claim of frequency.
- The alias sentence now says only that the named token can move to a
  different value, which is the case where the two diverge.
- The cost is "can become a bug report" rather than "nobody notices".
- "Where those gaps create extra work" replaces a promise to estimate cost.
- The zeroheight figure is cut, because token automation doesn't bear on
  choosing the wrong one of two valid names.
- The ask is back, since the introduction is one of the two posts allowed one.

**Found while checking:** in IDEM Revised `spacing/m` is an alias of
`spacing/scale/16`, but in `tokens/size.json` it's a literal 16px. The post's
claim holds either way. The alias not surviving into code is a small drift of
its own, left for the IDEM project.

**Closing line:** Warren's draft said "build with", and `positioning.md`'s
locked one-liner says "ship from". Changed to "ship from" before posting, at
Warren's call. Whatever goes out replaces the draft under the 1 September rule.

---

## 2026-10-19 — The introduction's second paragraph restructured

**What changed:** Warren restructured the introduction's second paragraph
(`notes/social-strategy.md`, orin-private) so it answers the opening question:
a component can look finished with padding typed in as 16px rather than bound
to a variable, and if several variables fit, someone still has to establish
which token belongs there. The rest of the post is unchanged, and so are the
evidence entry's sources. One row was added for "look finished", resting on the ready check and
the IDEM essay.

**The closing line stays "ship from".** The pasted version said "build with",
which the previous entry changed at Warren's call to match `positioning.md`.
Kept, and flagged to Warren in case the paste was deliberate.

---

## 2026-10-20 — The social series turns to founders, and starts gentler

**What changed:** `notes/social-strategy.md` (orin-private) is rewritten around
founders building digital products. The engineering-lead series of 16 to 19
October is paused before any of it went out, and kept whole as Part 2.
`notes/social-evidence.md` gains a founder section at the top.

**Why:** Warren hasn't posted much before, and the engineering-lead series was
built from findings and numbers, each one something he might have to defend in
public. Two outside reviews and this session agreed on a softer start: vision
told through ambition and his own experience, to the reader who buys that way.
Founders buy into a person and a direction more than evidence, and the offer
for them already exists: The Foundation.

**The new shape:**
- **Reader:** founders building digital products, through The Foundation
  (`Offer.md` section 2).
- **Three themes:** what I want to make possible, what I'm building towards,
  what I'm learning. The manifesto's beliefs feed them.
- **The writing rule:** an ambition as an ambition, an observation as my
  observation, a measured result as a measured result. Four checks before
  posting. No claim of a saving, nothing about anyone else's system, and no AI
  claims.
- **Cadence:** LinkedIn only, one post a week on Wednesdays for four weeks,
  then two a week from 17 November. X is paused.
- **Each post closes** on a question or a thought, then one descriptive line
  from the Foundation's wording. There's no sales ask.
- **Four drafts:** 21 October (the introduction), 28 October (the spec without
  the design), 4 November (one place to change a colour), and 11 November (the
  Vivo checkout). Ten faults in two days is a spare. Every factual line is traced
  in the evidence file.

**This reverses, for social posts only,** the 18 October choice of the
engineering lead as the reader. Buyer 1 is unchanged everywhere else: outreach,
`Offer.md` and `positioning.md`. The locked one-liner is untouched; the founder
closing lines borrow the Foundation's own wording rather than adding a second
positioning.

**Not done:** `MANIFESTO.md` still says "the 60% defect reduction at Vivo
Energy", the wording corrected on 14 July. It's flagged and not fixed here,
because the manifesto is the source of truth for judgement calls and changing
it is Warren's call.
ORIN-151's deadline in Linear still reads 26 October. The strategy now says
4 November.

---

## 2026-10-20 — The founder series revised after an outside review

**What changed:** Part 1 of `notes/social-strategy.md` and the founder section of
`notes/social-evidence.md` (both orin-private) were revised the same day they
were written, after a review said the strategy still put more pressure on
Warren than it needed to.

**The strategy:**
- **The accuracy rule** replaces the defensive checks. Write from experience I
  can explain, describe ambitions as ambitions, and give factual claims enough
  context to be understood fairly. "I think" doesn't turn a factual claim into
  an opinion.
- **One post a week, with no increase planned.** The month is reviewed after 11
  November.
- **Only the introduction says what I do for founders.** Other posts end when
  their idea is complete. The LinkedIn headline still carries the
  engineering-lead line, so the profile needs a founder-facing line before the
  second post. That's Warren's change to make.
- **The design system can be the subject.** It's the first-hand material.
- **Founders are an audience to explore.** Team size, tooling and the Foundation
  route are kept as internal hypotheses rather than written into the posts.
- **The first month is measured by comfort** (comfortable publishing, sounded
  like me, conversations started), with viewer titles as context only.

**The posts:**
- **21 October.** "Decisions already made, and made once" became "a few shared
  design decisions connected to the code, and room to change them". The time
  benefit is now an intention. "Before the first screen is built" became "as its
  first screens are built", because the Foundation ends with a working screen.
- **28 October.** The general claim about handoffs became a personal one: "It
  reminded me why I want to stay close to both the design and what gets built."
- **4 November.** The colour change is now carried through "in a package
  update". The earlier wording could be read as the live app changing by itself.
- **11 November** is the ten-faults post, rewritten as learning. Its absolute
  "a system only gets tested when something is built from it" is now "building
  from it found what those checks had missed".
- **Vivo** moves to reserve. It describes a client's product, which contradicted
  the new rule and the evidence note that said no post did.
- **Closing lines are removed from every post but the introduction.**

**Not done:** the LinkedIn headline and About section, and the `MANIFESTO.md`
Vivo wording. Both are flagged and both are Warren's to change.

---

## 2026-10-20 — Last edits to the founder series before the first post

**What changed:** small edits from a second review of Part 1 of
`notes/social-strategy.md` and its evidence (orin-private). There was no rewrite.

- **21 October.** "It's the work I do for founders" became "That's the work I
  want to bring to founders". No founder has bought The Foundation yet, so the
  old line implied delivery that hasn't happened. The opening now says
  "reusable components for a working app", and the long second paragraph is
  split.
- **28 October.** "While it's still a conversation" became "as both develop",
  because it was unclear what changes later.
- **4 November.** "A second developer" was a team change, not a product
  change, and "each shared decision in one place" was broader than the colour
  example shows. It now reads "I'd expect the product and the team to change",
  with a clear place to change a shared colour. The repeated "building towards"
  paragraph is cut.
- **11 November.** "The checks" became "the token checks I'd been relying on",
  which matches the essay. The post is now provisional: decide after the first
  two or three posts whether to publish the number.
- **Strategy.** Paragraph counts are guidance. Comments get open answers, with
  client detail and long technical answers taken private and the post
  corrected if needed. The profile line should ideally be in place before the
  introduction goes out.

**Not done:** the LinkedIn headline and About section, which are Warren's to
change.

---

## 2026-10-20 — The LinkedIn profile turns founder-first

**What changed:** section 1 of `notes/launch-and-outreach-pack.md` (orin-private)
records a new headline and About, both final and not yet live, and redrafts the
Experience role to match.

- **Headline:** "Design foundations for founders and product teams, from Figma
  to the code you ship | Orin Systems". It has to work for both readers:
  founders arriving from the social series, and engineering leads arriving from
  outreach, which still targets buyer 1.
- **About:** founder-first, built around "foundations". It covers the
  Foundation (two weeks, one working screen), then the Diagnostic (one week),
  then the Build as the follow-on, and the 40 components in IDEM's package.
- **Experience role:** the same order and claims, plus the Diagnostic's
  component rating and the repo-side checks it leaves running.

**Rejected:** "Product designer helping founders turn ideas into working
digital products" (an outside suggestion). `Offer.md` says the Figma work stops
short of product design (no screens, no flows), and the line overpromises what
the Foundation delivers. "Product designer" would also file the work on one side
of the handoff the manifesto says doesn't exist.

**Corrected on the way:** the live About was never recorded. The pack held a
draft with a Vivo paragraph that the live text didn't have. The live About and
the Experience role also carried the two claims narrowed on 19 October
("checks… that fail when the code drifts" and "each checked against its Figma
source"). Neither new text makes either claim. "3 of 43" and "between 1 and 45
per cent" are out of the profile, because they need their criteria explained,
but stay available for outreach.

**Not done:** nothing is live until Warren changes the profile and pastes back
what went out (the 1 September rule). The locked positioning one-liner in
`positioning.md` is unchanged. The profile no longer quotes it, which is a
choice about the profile, not about the positioning.

---

## 2026-10-20 — The founder-first headline is live

**What changed:** Warren's LinkedIn headline is now "Design foundations from
Figma to code, for founders and product teams.", the shorter of the two drafts.
It's recorded as live in section 1 of `notes/launch-and-outreach-pack.md`
(orin-private), word for word.

**Not done:** the About and Experience role are still marked final but not yet
live, until the text that went out is pasted back.

---

## 2026-10-20 — The founder-first About is live

**What changed:** Warren's LinkedIn About is live as the final version he
pasted on 20 October. Section 1 of `notes/launch-and-outreach-pack.md`
(orin-private) marks it live. The headline went live earlier the same day, so
the profile now matches the founder series before its first post on
21 October.

**Not done:** the Experience role (Founder, Orin) is still marked final but not
yet live, and it still carries the two claims narrowed on 19 October until it's
changed. The introduction goes out on 21 October, and its sent text gets pasted
back into `notes/social-strategy.md`.

---

## 2026-10-23 — The offer goes to one page, and the commercial doctrine is archived

**Why:** Orin had about 112,000 words of documentation and no paid
engagement. The commercial layer alone ran to the 4,900-word four-shape
offer, a commercial operating model with a ten-measure scorecard, a buyer
persona, client situations, and a social strategy. Two arcs show what the
rules cost. Praelexis, a referral for four hours a week of paid design
support, was read as "not the offer" because Orin priced fixed and
never in days. Pragma took about eight pre-sale days and was lost at the
entry gate, and the response was more machinery (counting mechanisms
explained, gating demo audiences) built from one loss. Warren asked for one
simple offer that one person can sell. An outside review (pasted in this
session) reached the same place.

**What changed:**

- `Offer.md` is now v2.0, one page. One promise: approved designs built in
  React, existing interfaces improved, components made reusable, at a fixed
  price after seeing the files. A day rate (£560, the figure already used to
  cost pre-sale time) for capacity work, and a component library quoted
  when a team clearly needs one. Five rules: deliver well, agree it in
  writing, deposit first, price extras first, one main project at a time.
  About two hours of free effort before a proposal.
- Removed: the compulsory Diagnostic or Foundation before a Build, the bans
  on day rates and on scoping by screens or components, "partner or
  nothing", the marketing-surfaces refusal, and the retainer as a default
  continuation. No retainer is offered until a finished job shows what
  continuing help is worth.
- The old offer and positioning 2.0 moved to `archive/` (`Offer-v1.4.md`,
  `positioning-v2.0.md`). Seven private notes moved to `notes/archive/` in
  orin-private: the commercial operating model, the outreach pack, client
  situations, the buyer persona, the social strategy, the social evidence,
  and the Diagnostic walkthrough script. `.gitignore` covers them with one
  `notes/archive/` entry in place of seven.
- `CLAUDE.md`'s read-first list went from eleven documents to four, and
  "do not relitigate locked decisions" became: values in
  `OPERATING_MODEL.md` are blockers, the prices and rules in `Offer.md` are
  working assumptions reviewed monthly.
- `deliverable.md` and `README.md` no longer point at the refusal list,
  the Retainer, or `positioning.md`.

**Kept:** `OPERATING_MODEL.md`, the public/private split and leak check
(2026-08-25 is why), deposits and written scope, the prospect ledger and
outreach tracker (live state), and the site's guardrails.

**Not done:**

- The site still describes the four-shape offer and its prices on six
  pages. Updating it is site work and needs asking first.
- `OPERATING_MODEL.md` still says Orin says no "even if it pays" and its
  commercial scorecard counts Diagnostics, Foundations and Builds. Both want
  aligning with the new offer.
- The contract templates in orin-private (letter, MSA, DPA) are built
  around the Diagnostic engagement letter and need a check against the
  one-page offer before first use.
- The prospect ledger keeps its long row format; cutting it to who, need,
  source, next action and date, value and outcome is still to do.
- The £560 day rate and the £1,500 to £3,000 first-job range are starting
  points to confirm, not tested prices.

---

## 2026-10-23 — The site, the operating model, the contracts and the ledger follow the one-page offer

**Why:** the four things left open by the entry above. Warren asked for all
four the same day. Under the stopping rule a site change needs a reason
beyond "it could be better"; the site publishing an offer that no longer
exists, with its prices, is that reason.

**What changed:**

- **Site, six pages.** `/how-it-works` is rewritten around the one-page
  offer: a defined job at a fixed price, capacity at £560 a day, a component
  library at usually £12,000 to £18,000, and the terms. The "When it's a no"
  section is gone. The home page's four cards became the same four, linking
  to the new anchors (`#fixed-price`, `#day-rate`, `#component-library`,
  `#terms`); old `#diagnostic`-style links still land on the page, at the
  top. The closing lines on `/work`, `/work/idem`, `/work/vivo-energy` and
  the principles page no longer send people to a Diagnostic. Checked in the
  browser: no overflow at 360px, no console errors, every card anchor
  resolves. No new components, tokens or styles.
- **`OPERATING_MODEL.md`.** "Says no, even if it pays" now applies to
  integrity and fear, and commercial fit is left to `Offer.md`. The pipeline
  scorecard counts conversations, proposals, deposits, jobs, capacity days
  and selling hours in place of Diagnostics, Foundations, Builds and
  Retainers. "The Retainer is care" became "ongoing work is care".
- **Contracts (orin-private).** `diagnostic-engagement-letter.md` became
  `engagement-letter.md`: one letter for a defined job or a block of
  capacity, with a "finished means" line, one review round, free corrections
  for 30 days, and either a 50/50 fixed fee or the day rate. The services
  agreement now covers fixed-price and capacity SOWs (40/30/30 and monthly in
  advance), gains a corrections clause at 2.6, and drops the Foundation,
  Build and Retainer names. Clause 6, the liability cap and the deposit floor
  are unchanged in substance. The data processing addendum lost one stale
  example.
- **Prospect ledger (orin-private).** One line per person: who, need,
  source, next action and date, value, outcome. A short referrers table
  stays. The long rows, the sent text and the research move to
  `notes/archive/prospect-ledger-to-2026-10-23.md`, and the old measures
  table goes with them.

**Not done:**

- The 30-day correction period, half days at half rate, and capacity billed
  monthly in advance are new terms with no buyer behind them yet. Each is
  marked as a starting figure in the template notes.
- The solicitor's pass, PI cover and the Claude Code commercial plan still
  stand before first use, as they did on 2026-09-12. The solicitor's brief
  now also covers the corrections promise.
- The site's hero and "What Orin does" sections still lead on the design
  system and the substrate. They don't contradict the offer, so they stay
  until a real conversation shows they confuse someone. Older copy on the
  home, work and Vivo pages still has em dashes from before `voice.md`.
- `HANDOVER.md` still describes the four-shape offer. It's a record of the
  site build and stays as written.

---

## 2026-10-23 — Finished work moves to the archive, and the log splits at October

**Why:** after the offer went to one page, a review of every document in both
repos found about fifty that record finished, parked or retired work but sat
beside the live ones, plus a decisions log of 85,000 words that every session
reads backwards. Warren asked for the clear cases and the site-build briefs to
go, and the judgement calls to stay.

**What changed:**

- **Public, to `archive/notes/`:** both agent-readiness notes (ORIN-39,
  dropped), the component-layer learning plan (ORIN-49, closed), the
  stale-dump guard note (built 2026-08-30), the pipeline comparison, the
  motion-collection proposal, the five pattern-layer files (parked), the
  Diagnostic substrate checks, the Foundation sales sheet, and the Foundation
  mode-parity note.
- **Public, to `archive/`:** `PIPELINE-REVIEW.md`, `BUILD-SEQUENCE.md`,
  `HANDOVER.md` and `PHASE5-BUILD.md`. The component budget, the one live
  part of `PHASE5-BUILD.md`, now lives in `design.md`, and `CLAUDE.md`'s
  guardrail points there. Site work now reads `design.md` and `SETUP.md`.
- **Private, to `notes/archive/`:** the Pragma material and its proposal
  script (`notes/archive/pragma/`, closed for good 2026-09-01), the ORIN-140
  results, sample report and dashboard mock-up, the GitHub clean-up ticket
  and PR copy (finished 2026-09-02), and the extraction brief. Their seven
  ignore entries are gone; `notes/archive/` covers them.
- **The log.** Entries from 1 July to 30 September (177 of 206) moved to
  `archive/decisions-2026-07-to-09.md`, unedited apart from two redacted
  names. This file keeps the reading notes, a pointer to the archive, and
  October onwards. A citation to a `decisions.md` entry dated before October
  means the archive file. The reading notes no longer mention a blank
  template at the end, which hadn't been there for some time. Two lines in the archive named people and were already public here. The
  leak check refused them as new lines, so the names were replaced with
  roles in the archive copy (Warren's choice over a `--no-verify` bypass).
  They remain in git history.

**Kept, as judgement calls:** `SOUL.md`, the HTML explainer and pipeline
sheets, `foundation-shadcn-runbook.html`, `notes/shadcn-adapter/`, and
`case-studies/vivo-energy.md`.

**Not done:** archived files still refer to each other and to `decisions.md`
by their old paths. They are records and stay as written. Two live HTML
sheets (`client-site-setup-sheet.html`, `idem-system-infographic.html`) name
archived files in their source notes, which is harmless.

---

## 2026-10-23 — The LinkedIn About is live for the one-page offer

**What changed:** Warren's LinkedIn About now matches the one-page offer.
It's live as the final version he pasted on 23 October, replacing the
founder-first About from 20 October. The text that went up, verbatim:

> I help founders and small product teams turn interface designs into working
> React screens and reusable components.
>
> I connect the colours, typography and components defined in Figma with their
> implementation, so the product has a consistent feel and a clear foundation
> for future changes.
>
> You can bring me an approved design that needs building, an existing
> interface that needs improving, or a component library that needs connecting
> to your application.
>
> I start with one prioritised piece of work, at a fixed price, and build from
> there.

**Left out on purpose:** IDEM, at Warren's choice. It stays as the proof for
direct conversations with designers and agencies rather than the profile.
Agency work is left out as well, for the same reason.

**Not done:** the profile no longer names Bath or gives a contact line, so
the email relies on the profile's contact info and website link. The record
of earlier live profile text is in `notes/archive/launch-and-outreach-pack.md`
(orin-private), which is archived; this entry is the record from here on.

---

## 2026-10-23 — The LinkedIn headline and services page are live

**What changed:** two more parts of Warren's LinkedIn profile now match the
one-page offer, both live on 23 October.

The headline, verbatim, replacing "Design foundations from Figma to code, for
founders and product teams." from 20 October:

> UI design and React implementation for founders and small product teams | Orin

The services page, published from a page that had previously been unpublished.
Its overview, verbatim:

> I build approved Figma designs into working React screens and reusable
> components, for founders and small product teams. Bring me a design that
> needs building, an interface that needs improving, or a component library
> that needs connecting to your app. I look at the files first, then agree one
> prioritised piece of work at a fixed price and build from there.

- **Services provided:** Application Development, Web Development, User
  Experience Design (UED), Visual Design. Visual Design stands in for user
  interface design, which LinkedIn's list didn't offer.
- **Availability:** remote or in person (Bath).
- **Pricing:** contact for pricing. An hourly figure was rejected because it
  contradicts the fixed price in the overview and the day rate in `Offer.md`.

**Rejected:** Engineering Design and Web Design, added at first and then
removed. The first brings mechanical and CAD enquiries; the second brings
brochure-site work the overview doesn't promise.

**Not done:** the services page has no media yet. The Vivo Energy case study
(orinsystems.co/work/vivo-energy) is the suggested first item. Whether Open
Profile messaging was switched on wasn't confirmed from the published page.
The profile's location line shows Bath and Contact info sits beside it, which
covers the missing contact line noted in the About entry above.

---

## 2026-10-23 — The site's copy matches the LinkedIn headline, and the redesign waits

**Why:** an outside review of the repo and the site found the live positioning
behind the offer. The home hero, title, footer, social card and the Work and
Principles openings still sold "the design system your developers ship from"
to "teams without a full design department", while `Offer.md`, the LinkedIn
headline, About and services page sell finished UI and React work to founders
and small product teams. Someone clicking through from LinkedIn read two
different services. That's a reason under the stopping rule. The review's
visual redesign is not, yet.

**What changed (copy and metadata only):**

- **Home:** the hero is the LinkedIn headline, "UI design and React
  implementation for founders and small product teams.", with one supporting
  sentence. Section 02 now names three recognisable stalled situations in
  place of "Developers are carrying the design load". Section 03 explains the
  system behind each screen without "substrate". The terms card left the
  offer: three cards now sit three across at 64rem and above, one column
  below (`.cards--three`, using the existing literal-breakpoint exception),
  with the terms as a line beneath.
- **Titles and metadata:** every page title and `og:title` uses "| Orin" in
  place of an em dash; the home description and every `og:image:alt` carry
  the new line. `og.png` was regenerated from `/og/`, which now carries the
  headline.
- **Footer, Work, Principles, Contact:** the footer carries the headline. Work
  opens "Work that shipped, and what changed after." and closes "Let's finish
  the next one."; the KRM card with "Essay coming" is gone. Principles opens
  with finished product work and systems thinking as the way it's done.
  Contact asks what's unfinished and for a useful link.
- **Em dashes:** none visible on any public page. The Vivo heading takes a
  colon; four on `/tokens` became colons or full stops.
- **README and `CLAUDE.md`:** README opens with the new positioning and its
  status says the IDEM case study is published and a redesign is deferred.
  `CLAUDE.md` no longer claims `styles.css` holds local variables; check 9
  forbids them.

Checked in the browser: no overflow at 360px on the changed pages, three
cards across at 1440px, no console errors.

**Deferred:** the visual redesign the review proposed (real artefacts, Vivo
metrics as large figures, a founder section, varied section rhythm). It waits
until after the first paid job, which is also the likeliest source of real
before-and-after material. Starting it means rewriting `design.md` ("the type
scale is the visual") and the stopping rule first, as the review said.

**Left for Warren:** whether `SOUL.md` stays public, and one sentence on how
Vivo's 60 per cent saving was measured. "Substrate" and "source of truth"
remain inside the Vivo story and on `/tokens`, where they describe the work
itself. `notes/pipeline-setup-sheet.html` still carries the old strapline; it
isn't a public page.

---

## 2026-10-23 — Follow-up copy fixes from the second review

**Why:** a second outside review of the copy alignment (PR 148, already
merged) found three lines that claimed more than the offer or the evidence
supports, and two smaller inconsistencies.

**What changed:**

- **Home section 03** no longer implies every job includes the token
  pipeline. It says each screen is built from shared decisions, which "can
  include tokens, reusable components and checks between Figma and code,
  depending on what the work needs", matching `Offer.md`: clients buy the
  finished work, not the pipeline.
- **Home section 02:** "An approved design that has waited weeks for a
  developer" became "An approved design waiting to be built", so no one is
  cast as the bottleneck (`voice.md` §3). The closing line is now "Nobody's
  fault. The reusable foundation was missing, and the team had other work to
  ship."
- **Home Proof heading:** "This works. I've measured it." became "What
  changed at Vivo." The site doesn't yet say how the 60 per cent was
  measured, so the heading shouldn't claim the measurement.
- **Work, Vivo card:** two fragments became two sentences, and the saving is
  now "contributing to" rather than the result of the system alone.
- **IDEM page title** uses "| Orin" like every other page.

**Not done:** the Vivo method sentence (what was compared, over what period,
who calculated it, measured or reported). It waits on Warren. Once it exists,
the Proof heading and "contributing to" can be revisited.

---

## 2026-10-23 — The hero grid becomes quiet scaffolding

**Why:** Warren asked for it. The numbered 01–12 columns over the hero read
as a design-debug overlay rather than a finished composition. The grid's
technical identity stays; the labels go.

**What changed:**

- The hero overlay's 12 spans are empty: no column numbers.
- The lines sit at 0.6 opacity on `border/divider`, slightly quieter than
  before, and fade out toward the bottom of the hero through a mask (opaque
  to 30 per cent, transparent at the foot). The mask's opaque stop borrows
  `text/default` so no literal colour enters `styles.css`; a mask reads only
  alpha, so nothing is painted with it.
- Alignment was already structural and is now written down beside the rule:
  the overlay shares `.section-grid`'s columns, gap and padding, so line 1
  sits on the rail, line 2 on the headline's left edge, and line 7 where a
  future visual artefact in `.col-body` would start. Measured at 1440px:
  rail and line 1 both at 144px, headline and line 2 both at 242px.
- Still hero only, and still hidden below 64rem.

**Not done:** no visual artefact joins the hero yet; that belongs to the
deferred redesign. The `01`–`06` section rails elsewhere on the home page are
navigation labels, not the overlay, and stay.
