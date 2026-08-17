# Orin — Decisions Log

A dated record of significant decisions and the reasoning behind them.
Written in past tense at the moment of the decision, not retroactively.
Future me should be able to read this and understand why present me chose
what I chose, even if the answer would be different now.

Format: date, decision, reasoning, revisit-if.

**How to read this file** (added 2026-08-16, after auditing it):

- **Oldest first, newest last.** Entries run forwards, 2026-07-01 to the
  present, with the blank template pinned at the end. CLAUDE.md says to read
  backwards from the most recent, so **start at the bottom** and work up.
  Append new entries immediately above the template. (Until 2026-08-16 the
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

## 2026-08-16 — OG tags on every page, and a social card generated from the tokens

**Decision:** All seven pages carry Open Graph and X card tags, plus a
`rel="canonical"`. The image is `site/og.png`, 1200×630, rasterised from
`site/og/index.html` — a real page in `site/` that consumes `vendor/tokens.css`
like any other surface. Regeneration is one headless-Chrome command, documented
in that file's own comment.

**Reasoning:** `notes/launch-and-outreach-pack.md` is built on posting links.
Without these tags they unfurl as a bare title and a grey box.

**The tags cannot be shared.** `includes.js` fetches partials client-side, and
unfurlers do not run JavaScript, so nothing in `<head>` can come from a partial
the way nav and footer do. Seven copies is the only option available, which is
also why they were generated from each page's existing `<title>` and
description rather than retyped — the card cannot disagree with the page.

**The image is the part worth recording.** A social card is normally drawn in a
graphics tool, which would have put Orin's palette into a PNG by eyedropper —
invisible to every guardrail, since `verify-build` reads `.css`, `.html` and
`.js`, not pixels. Exactly the "a rule nothing checks is a preference" failure.
So the card is a page: it resolves `--paper`, `--accent`, `--ink`, the type
scale and the spacing scale through the token layer, and a palette change
reaches the social card the same way it reaches the site. Re-run the command
and the PNG follows.

**The guardrail earned its place immediately.** The first version referenced
`--orin-font-letter-spacing-heading-small`, `--orin-font-line-height-heading-large`
and `--orin-font-letter-spacing-heading-large`. None exists — the scale says
*title* and *display*, not *heading*. `verify-build` failed the build and named
all three. Three invented tokens that a hand-drawn PNG would have carried
silently, caught before the file was committed.

**Two literals in `site/og/index.html`, both deliberate:** the 1200×630 card
size, which is dictated by the unfurlers rather than by the design, and the
matching `--window-size` in the screenshot command. They must agree, and the
comment says so.

**Deferred:** per-page card images. One sitewide card for v1; a page-specific
card is a nice-to-have that would multiply the regeneration step by seven.
Also deferred: any check that `og.png` is current against `og/index.html`. The
staleness window is real but small, and a check with nothing to compare against
would be theatre.

**Revisit if:** the positioning line on the card stops matching
`positioning.md`, or a page's `<title>` changes without the tags being
regenerated — at which point a verify step earns its place.

---

## 2026-08-16 — Favicon: an O monogram, generated the same way as the card

**Decision:** Every page declares three PNG icons — `favicon-32.png`,
`icon-512.png` and `apple-touch-icon.png` (180). All three come from
`site/icon/index.html`, a companion to `/og/`: a page in `site/` that consumes
`vendor/tokens.css`, rendered at 512 by headless Chrome and downscaled with
`sips`. The mark is a white `O` on the accent teal.

**Reasoning:** Same argument as the social card, and it is the reason to reuse
the mechanism rather than open a graphics tool: the accent on a browser tab is
now literally the same token as the accent on a button, and a palette change
reaches both by re-running one command. An icon drawn by hand would carry a
teal that no guardrail can read.

**No `.ico`.** `sips` cannot write that format, and there is no rasteriser on
this machine that can. It costs nothing here: every page declares its icons
with link tags, so nothing falls back to a bare `/favicon.ico`. The only loss
is a 404 in the logs when something requests that path blind. If it ever
matters, the fix is a converter, not a redesign.

**One downscale chain rather than three renders.** 512 is the master; 180 and
32 are `sips -z` reductions of it. Rendering each size separately would let
them drift, and at these sizes the reduction is indistinguishable from a fresh
render.

**Two values set by eye, both marked as such in the file:** the 340px glyph
size, and a -0.045em vertical nudge. The type scale exists for running text —
a monogram is sized against its tile, and the O's round bowl sits low in the
baseline box. Called out in comments so neither reads as a missing token.

**Verified:** all three files serve as `image/png`, the tags resolve on every
page, and the mark still reads as an O at 32px.

**Deferred:** a dark-mode icon variant, and an SVG favicon. The site is
light-only, so neither has anything to express yet.

**Revisit if:** the accent token changes — the icons need regenerating, and
nothing checks that they match — or a dark mode arrives.

---

## 2026-08-16 — A 404 that keeps the chrome, and the one file that isn't a folder

**Decision:** `site/404.html` — eyebrow, heading, one sentence, a link home, and
the site's own nav and footer. It carries the icons and `noindex`, and no Open
Graph.

**It is deliberately a file, not a folder.** Pages are folders with an
`index.html` (2026-07-14), and this is the single exception: Cloudflare Pages
looks for `404.html` by name at the output root and serves it for any unmatched
route. A `/404/index.html` would never be found. The reason is written into the
file so the exception doesn't read as a lapse.

**Every path on it is absolute, and has to be.** It is served in place of
whatever URL was asked for, at any depth — `/no/such/deep/path` renders it as
readily as `/typo`. A relative `styles.css` would resolve against the bogus
path and 404 in turn, leaving an unstyled error page, which is the failure mode
this page exists to avoid. Same class of bug as the relative `partials/` paths
fixed in Step 0.

**No Open Graph on it**, unlike every other page. The tags would have to claim
an `og:url`, and this page has no URL of its own — it answers at all of them.
An error page has no business unfurling.

**Keeping the nav is the whole point.** "One line and a link home" was the
Step-4 note, and a bare line is the conventional 404. But the nav is five links
to everything the site has; a visitor who mistyped is one click from what they
wanted rather than two. It costs nothing — the chrome is already a partial.

**Verified** against a deep unmatched path, not just the file: `serve` returns
**404** for `/no/such/deep/path` with this document, styled, nav and footer
rendered, no console errors. `npm test` 8/8, verify clean.

**Revisit if:** Cloudflare Pages changes how it resolves the error document, or
the site grows enough nav that a mistyped URL needs search rather than links.

---

## 2026-08-16 — The batched QA pass: two defects found and fixed, one left open

**Decision:** Ran build-order step 4 across all eight pages. Two defects fixed;
CLS left open as a decision for the architecture rather than a bug to patch.

**Fixed — an AA contrast failure on every inverse band.** `.eyebrow` uses
`--ink-muted`, a mid neutral chosen against paper. On `--paper-inverse` it
measures **2:1**, against the 4.5:1 minimum for text at that size. It appears on
Home, How it works and Work, in the Close band each page ends on. The rail was
flipped to `--ink-inverse` in Step 0 and the eyebrow beside it was not — the
same defect, missed twice, so the two are one rule now. This is precisely the
shape the Step-0 inverse-band decision was about, and it still got through:
that decision reasoned about *links* on inverse and nothing checked the rest.

**Fixed — a heading-level skip on /work.** The card grid runs `h1` → `h3`,
because the cards carry `h3` and the section has no heading of its own. Added a
`.visually-hidden` `h2` reading "Case studies" — the section's own name from the
existing HTML comment, not new copy, and invisible so the approved page is
unchanged. `.visually-hidden` is an accessibility utility, not a component, and
does not spend the component budget.

**Method, because it matters for what these results mean.** Contrast was
computed from *rendered* styles — every element with its own text, its computed
colour against its effective background walked up the ancestor chain, at the
correct WCAG threshold for its size and weight. Not eyeballed, and not read off
the token file, which would have missed the eyebrow entirely: both values are
legitimate tokens, and the defect is in their pairing.

**Results after the fixes.** Eight pages, all clean: 0 contrast failures, no
horizontal overflow at 360px, one `h1` each, no heading skips, `lang` set, no
images without `alt`, skip link present and targeting a real `<main>`.
Keyboard: real Tab presses, every stop matching `:focus-visible` with a
2px teal outline at 3px offset; the skip link moves from `-9999px` to `16,16`
on focus. Lighthouse on Home and How it works: **accessibility 100,
best practices 100, SEO 100, performance 94**.

**Left open — CLS 0.14, above the 0.1 threshold.** One shift accounts for
0.1397 of it: `<main>` dropping when `includes.js` injects the nav after
`DOMContentLoaded`. The web-font shift is 0.00002, i.e. nothing. This is the
known cost of the client-side include, which exists to stop nav and footer
diverging across pages — the KR five-variants bug, named in `includes.js`.

The available fix is a `min-height` on the placeholder, derivable from tokens
as `calc(var(--orin-space-6) * 2 + var(--orin-font-line-height-body-medium) * 1em)`
≈ 71px against a measured 70. It is not applied, for one reason: the nav is
70px at every width down to 480 and **115px at 360**, where it wraps, so the
reservation fixes desktop and leaves 44px of shift on mobile — and it silently
goes wrong the day the nav gains a sixth link, with nothing checking it. A
magic number nothing verifies is the failure mode this repo keeps naming.

The real fix is a build step that inlines the partials, which the site does not
have and has not earned. Recorded as a known v1 characteristic rather than
patched.

**Revisit if:** a build step arrives for any other reason — inline the partials
then and CLS goes to roughly zero — or the nav changes, at which point the
measured 70/115 numbers above are stale.

---

## 2026-08-16 — v1 declared. Stop building.

**Decision:** The site is v1. Build-order steps 1–5 are closed. The stopping
rule in `BUILD-SEQUENCE.md` applies from here: a stranger can get what / who /
cost / credibility / contact in 90 seconds, so the next change to `site/` needs
a reason beyond "it could be better."

**What shipped.** Nine pages against a sitemap of five:

- The five: Home, Manifesto, How it works, Work, Contact.
- `/tokens` — the token demo, moved rather than deleted. It backs the claim
  that this site runs on the pipeline it sells, which is the one piece of
  proof a technical buyer can check without asking.
- `/work/vivo-energy` — the case study, shipped early because it was the only
  one with a measured number behind it.
- `404.html`, and `/og` + `/icon`, the two source pages the social card and
  favicon are rendered from.

Underneath: 113 tokens through the DTCG source, Style Dictionary, and the
`verify-build` consumer contract, with the report at 8/8. Every value on every
page resolves through that layer. No framework, no site build step, no
component beyond the budget in `PHASE5-BUILD.md`.

**Measured, not asserted** (2026-08-16 QA entry has the method): accessibility
100, best practices 100, SEO 100, performance 94 on Lighthouse. Zero contrast
failures across eight pages. No horizontal overflow at 360px. Real focus states
on every tab stop. Two defects were found and fixed in that pass rather than
declared away — an AA failure at 2:1 that had shipped on three pages, and a
heading skip on /work.

**What is deferred, with the reason:**

- **CLS 0.14.** The client-side partial include shifts `<main>` on load. The
  fix is a build step, not a patch; see the QA entry for why the obvious
  reservation was rejected.
- **The Phase-6 list** in `BUILD-SEQUENCE.md`: fuller footer, a "title 20" type
  step, a shadow/elevation token. None is a parity blocker and each is a token
  proposal or pure assembly when it is wanted.
- **Two case-study essays** — IDEM and KRM — marked "essay coming" on /work.
  Deliberately not drafted; a thin essay is worse than an honest placeholder.
- **Per-page social cards**, a dark-mode icon, an SVG favicon, and any staleness
  check tying `og.png` to its source page.
- **The infographic restyle.** `notes/pipeline-infographic.html` is a denser
  visual language that would suit a `/pipeline` page far better than it suits
  Home; adopting it wholesale would reopen the Step-0.5 grid, need a mono
  family token, and cost about eight components. Phase 6 at the earliest.

**What v1 does not mean.** The commercial layer is where the work has been
since 2026-08-05 and it does not stop: `Offer.md`, The Foundation, the
contracts, the material in `notes/`. v1 is a line under the *site*, so that
finishing it stops being the thing that is always nearly done.

**Revisit if:** the site starts costing a sale — a prospect asking something
these nine pages answer badly is a real signal, unlike the urge to polish.

---

## 2026-08-16 — Parked for Phase 6: a /pipeline page from the infographic

**Decision:** Not in v1, and not next. `notes/pipeline-infographic.html` is a
denser visual language that would suit a `/pipeline` page far better than it
suits Home, and Warren likes how it looks. Parking the scope here so the
appraisal isn't redone from scratch when it comes up. Nothing is adopted.

**The gating decision is content, not design.** Its five steps are *Edit tokens
→ Build → Sync → Consume → Verify* — Orin's own loop, JSON-first, where code
authors and Figma mirrors. `PIPELINE-LEDGER.md` is explicit that this is the
**flipped** direction: what is for sale is the KR-style baseline where Figma
authors and code consumes. So publishing it as "The Orin Token Pipeline" shows
a prospect the pipeline running backwards from the one they would buy. Either
relabel it as *how this site is built* — honest, and it reinforces the
runs-on-what-it-sells claim — or rewrite the steps Figma-first, which is a
different diagram. **Settle this before any markup.**

**Token conversion: mechanical, then not.** Deleting the transcribed `:root`
(20 hex values) and consuming `vendor/tokens.css` is the easy half. The file
then uses **primitives directly** — `neutral 0/200/300/500/700/800`, `teal
300/600` — and `semantic-only consumption` fails on every one in `site/`.
Three of those need decisions rather than substitutions:

- The design leans on **three tones of muted grey** where the semantic layer
  has one `--ink-muted`. Collapsing them flattens the hierarchy the sheet
  depends on; keeping them is two or three token proposals.
- `--teal-600` for band titles has no semantic text token. `--link-hover`
  carries the value, but using a hover token statically is a smell.
- **`--teal-300` on the inverse closing panel reopens Step 0.** That is exactly
  the `colour/text/link-on-inverse` token declined as option (a) on 2026-07-09.

**Type is easier than it looks.** The floor is `size-100` at 11px with 12 and
14 above, so 11.5/12.5/13.5 are rounding, and the 46px masthead maps onto the
existing fluid heading. Only the 10.5px step label sits below the scale. The
dimensional oddments (22px dots, 44px badges, 56px rule, `999px` pill) are
local layout mechanics like `--measure`, not token proposals.

**The mono family is a real cost.** `--family-mono` carries six devices — step
code, command chips, the file tree, lock values, footer and note code. Dropping
it guts the design, since code that doesn't look like code is the whole point
of those panels. Keeping it means a token proposal, an edit to the canonical
fonts link, the `fonts link ↔ tokens match` check that couples the two, and a
**third webfont** where two already account for 839ms of render-blocking.

**Components: ~24 devices against a budget of eight.** One page would triple
the component count of the whole site. Plus 26 inline SVGs needing
`aria-hidden` and a check they inherit `currentColor`.

**Page-level.** The usual folder page, description, OG tags with its own
`og:url`, icons, canonical, QA. Two specifics: the file's
`@media (max-width: 900px)` is off Orin's breakpoints and needs remapping to
40/48/64rem with the five-column rows checked at 360; and **a nav link is a
decision**, because six links changes the nav partial, its wrap at 360, and
therefore the 70/115px measurements and the CLS figure logged at v1. The
alternative is leaving it unlinked like `/og` and `/icon`, reached from
`/tokens`.

**The recommended shape, if it happens: rebuild, don't port.** Take three or
four devices at Orin's density — the band titles with their hairlines, the
numbered step row, the inverse closing panel — and lose the five-across benefit
grid and most of the trees. Roughly eight new components instead of 24, no mono
family, and a page that reads as the sheet's sibling rather than its
transplant. Porting 519 lines produces a dense A4 artefact on a site whose
other nine pages are none of those things.

**Revisit if:** a prospect asks how the pipeline works often enough that
`/tokens` plus a conversation stops covering it — that is the signal, not the
fact that the sheet looks good.

---

## 2026-08-16 — "The sync" comes out of the Foundation's description

**Decision:** The Foundation in `Offer.md` no longer promises "the sync." It now
reads "the build step, the generated file your components already read, and the
guardrails that stop it drifting." The paired sentence about what shadcn lacks
changes to match: "no authored source, no build, nothing that regenerates the
file, no guardrail."

**Reasoning:** Everywhere else in Orin's vocabulary, *sync* means Figma to
tokens — `npm run sync:figma`, which appears in the Diagnostic's description
twelve lines earlier. The Foundation is greenfield. There is usually no Figma
library to sync from, and the handover runbook's chain has no sync step in it:
source, build, generated `globals.css`, app. Four links, none of them Figma.

So the word promised a mechanism the engagement does not deliver, to the one
buyer least equipped to notice until it did not arrive. Caught by reading the
runbook against `Offer.md` rather than by anything failing.

**Both halves had to move**, which is why this is not a one-word edit. The two
sentences are deliberately parallel: the shadcn critique lists four things that
stack lacks, and the description promises the same four back. Changing one and
not the other would have broken a rhetorical pairing that does real work on a
call.

**Left open, deliberately:** whether a Foundation should mirror the tokens
*into* Figma once one exists — the JSON-to-Figma direction Orin's own site uses.
It is plausibly valuable for a founder who hires a designer later, but nothing
has decided it, and inventing scope inside a priced engagement is how a fixed
price stops being fixed. If it is wanted, it is a Retainer conversation or an
explicit line in `Offer.md`, not an assumption.

**Revisit if:** a Foundation client arrives already holding a Figma library, at
which point the greenfield assumption behind all of this needs re-testing.

---

## 2026-08-16 — A Foundation does not mirror tokens into Figma

**Decision:** No JSON-to-Figma mirror in The Foundation. The open question left
by the "sync" wording earlier today is closed: it stays out. Instead, **a
Foundation client hiring a designer becomes an explicit Retainer trigger**, now
written into `Offer.md`.

**The question was never whether a Figma mirror is nice.** It is *who authors,
and when do you answer that?* A mirror is only a mirror if a rule says which
side leads. Handing a founder a Figma file without that rule manufactures the
two-sources-of-truth ambiguity this practice exists to sell against.

**Two facts settled it.**

*Nothing can write into Figma.* The baseline reads only —
`getLocalVariableCollectionsAsync`, `getLocalVariablesAsync`, the sink, the
transform. There is no JSON-to-Figma writer anywhere in the machinery. So a
mirror is either a tool to build or a manual chore.

*The manual chore has a measured failure rate, and it is mine.* On 2026-07-09 I
mirrored the Step-0 accent tokens into the Figma file by hand, and the entry for
that day records the reason it was needed: the pipeline had shipped Step 0 as
CSS while the Figma side lagged. My own mirror drifted inside a week, on a
five-page site, with one author paying attention. A client's would drift faster
with nobody watching.

**The argument that actually decides it.** Mirroring during the Foundation
pre-empts a decision that belongs to a later moment, and probably pre-empts it
wrongly. If a founder hires a designer, that designer will expect to *author* in
Figma, and the right move is likely to flip them onto the Figma-first baseline —
the thing actually for sale. A code-first pipeline with a read-only Figma mirror
is the opposite arrangement, and it exists for reasons specific to a five-page
site designed in a browser with no designer involved. Building it for a client
hands them the wrong artefact plus an unstated rule, six months early.

**Against the Foundation's own scoping test** — how many people change this
after I leave, times how often — a Figma file nobody opens scores zero. The
founder has no designer. It would be built for a hypothetical person.

**What replaces it costs nothing.** The source is DTCG, the format design
tooling imports. So the honest line on a call is that nothing is locked away and
a future designer starts from what exists, while today we are not building a
Figma file nobody is opening. Refusing work that could have been sold is the
positioning, not a concession.

**Revisit if:** a Foundation prospect arrives who *already* has a designer. They
are not greenfield-with-no-Figma, the premise behind all of the above fails, and
the Figma-first path may fit them better than the Foundation does.

---

## 2026-08-16 — The Build's published floor is £12,000

**Decision:** The site said "From £14,000" and, two sentences later, "usually
£12,000–£18,000". Those contradict: a floor of £14,000 rules out the bottom of
the range printed beside it. Warren's call, taken today — **the floor is
£12,000**. Both pages now say so.

**Reasoning:** `Offer.md` reads "£14,000 base. Scoped £12,000–£18,000", which is
coherent as an anchor plus a range when you are the one saying it out loud on a
call. Compressed onto a page it stops being coherent, because "from" is a floor
and £14,000 is not the floor. A prospect who noticed would be right to ask which
number was true, and there is no good answer to that question.

**Why this is a v1 exception and not a reopening.** v1 declared a stopping rule
three hours earlier: a change to `site/` needs a reason beyond "it could be
better." A published price contradicting itself is that reason. The rule exists
to stop polish, not to freeze errors.

**`Offer.md` is left alone deliberately.** Its "£14,000 base" is internal
anchoring language for a conversation, and the range beneath it already carries
the floor. Changing it was not asked for and the two documents no longer
disagree about anything a client can see.

**Found by** cross-reading the Foundation sheet against the site while checking
something else, which is now the fourth defect today found by comparing two
documents rather than by any check firing.

---

## 2026-08-16 — One block for the two-layer rule, and not on every sheet

**Decision:** A standard semantic-only block, added to the two sheets that
lacked it, marked `data-block="semantic-only"` so every copy is findable with
`grep -l 'data-block="semantic-only"' notes/*.html`. **Not** added to all seven.
Three already carry the message in their own words, and one must never carry it.

**Why it needed standardising at all.** Semantic-only was the check missing from
three separate tables today: contract coverage in the Foundation runbook, two of
the nine in the pipeline setup sheet, and the primitive row in the client
handover sheet. It is the check every sheet's prose leans on hardest and the one
that kept getting left out of the lists.

**The finding that shaped the block: enforcement is not uniform.** The
Figma-first pipeline has a `semantic-only` report check that fails the build.
**The shadcn adapter does not.** Its four checks are contract coverage, mode
parity, consumer contract and discipline; discipline catches a colour typed into
a component, but reading a `ref` token is a proper token reference and nothing
flags it. So a single pasted block claiming "the build fails" would have been
false for every Foundation client — the exact defect this whole sweep has been
fixing.

So the block has two parts. **The rule and the reason are shared** and identical
everywhere: primitives are the palette, semantics say what a value is for,
reaching past a semantic works perfectly today and moves under you at the next
rebrand. **The enforcement paragraph is per-pipeline and deliberately not
shared** — the setup sheet states the check and the 195-use KR failure behind
it; the Foundation runbook says plainly that this one is a convention rather
than a check, and asks the client to ask.

**Where it did not go, and why:**

- `founder-explainer-sheet.html` — its own standfirst promises "no jargon, no
  code". A two-layer token explanation is exactly the jargon it exists without.
  The sheet already makes the same point in plain language: values are named by
  job, not by shade, so the job survives a rebrand.
- `client-site-handover-sheet.html`, `pipeline-setup-sheet.html`,
  `pipeline-infographic.html` — all three already carry it, in prose written for
  their own audience. Overwriting working copy with a template would be churn
  with a real risk of making each one slightly worse.

**The honest limitation.** A "standard block" pasted into standalone HTML with
no build step is two copies that can drift, which is the anti-pattern this repo
keeps naming. The marker is the mitigation, not a fix: it makes the set
greppable so an edit can reach every copy. If these sheets ever gain a build
step, this block is the first thing that should become an include.

**Surfaced and left open:** the shadcn adapter has no semantic-only check. That
is a real gap in the guardrail, not just in the prose. Worth adding when the
adapter is next opened — a `ref`-layer reference from a component is detectable
the same way the consumer contract is.

---

## 2026-08-16 — The shadcn adapter gets a semantic-only check

**Decision:** Built it. The adapter's guardrail is five checks, not four:
contract coverage, mode parity, consumer contract, **semantic-only**, and
discipline. Closes the gap logged an hour earlier the same day, when the
standard block had to say "convention, not a check" for Foundation clients.

**What it does.** Hand-written code reading a `--ref-*` value fails the build,
with file and line. The ref layer is the raw scale; roles sit on top. Ref names
are not exposed as Tailwind utilities, so `var()` is the only route in and one
test covers it.

**Why it needed a check rather than a rule.** It is the subtlest of the five and
the only one invisible to the other four: a ref token is real, defined, and
satisfies the consumer contract. Nothing was wrong except the *layer* — and it
comes due at the next rebrand, when the scale moves and everything pinned to it
moves too, unreviewed. Same shape as the KR failure where a stated rule sat in
the docs for months while the site broke it in nine places.

**The design decision worth recording: generated files are exempt.** A generated
file legitimately references the ref layer, because aliasing a role onto a raw
value is precisely its job — `--primary: var(--ref-brand-500)`. Without the
exemption the check would fail on every correctly generated `globals.css`, which
is the fastest way to get a guardrail switched off. Generated output is
identified by its header, which is the same way the runbook already tells
clients to identify it: *if in doubt, look at the first line.* If that header is
ever missing, the runbook's advice is broken too, so one signal covers both.

**Verified, both directions.** The clean fixture still passes. The dirty fixture
fails with the new finding named and located, at 11 problems rather than 10. And
the exemption was tested directly rather than assumed: a generated file with two
`var(--ref-…)` aliases and a hand-written file with one, in the same directory —
exactly one failure, from the hand-written file.

**Three documents moved with it**, because they described the old behaviour: the
Foundation runbook's semantic-only block now says the build checks this rather
than that it is a convention, and `client-situations.md` and the diagnostic
walkthrough both say five checks. The adapter README's table gained a row and
its finding count went 10 → 11.

**Note what this cost.** The gap was found by writing a client-facing block that
had to be honest about enforcement, not by anything failing. Prose forced the
code to improve, which is the opposite of the usual direction and worth noticing.

---

## 2026-08-16 — A narrow voice.md pass over the site copy

**Decision:** Applied four fixes from a full `voice.md` audit of all nine
pages, and deliberately left the rest. Em dashes in body copy went 46 → 26.
The site is still v1; this is a copy correction, not a reopening.

**The separator rule, now stated.** The site was using `—` and `·` for the
same job on the same screen: the home page said `The Diagnostic — £3,000,
1–2 weeks` while `/how-it-works` said `£3,000 fixed · 1–2 weeks`. The rule
from here: **`·` separates metadata fields** (price · duration, client ·
attribution, size · px · family). Changed the hero eyebrow, the four card
titles, and the `/tokens` eyebrow. An em dash joining a name to a *phrase*
is not a metadata list and stays: the footer tagline, the case-study h1,
and the manifesto signature. Three dashes survive on that reasoning, so if
the rule should be absolute, that is the follow-up.

**`/how-it-works` lost all 13 prose em dashes.** Not because 13 is over a
budget, but because they were doing the same job every time — land the
claim, append a qualifying clause — for six consecutive paragraphs. That is
`voice.md` §4I metronome as much as §2's dash ban; the two rules were
pointing at one defect. Replaced with commas, colons, and full stops as each
sentence wanted. The `—` in the "When it's a no" rail is a section marker,
not prose, and stays.

**One spelling of the number.** It appeared three ways: "sixty per cent"
(home, work), "60 per cent" (case study), "60%" (manifesto, and both Vivo
meta descriptions). Standardised on **"60 per cent"** — digits per
`voice.md`, British per `HANDOVER.md`, and already what the primary evidence
page used.

**One §3F reframe cut.** `manifesto` opened a paragraph with "This isn't an
agency built around a service. It's a vehicle for…" — the banned pattern in
its purest form. Deleted the negation; the paragraph now starts "It's a
vehicle for…", which follows "Orin exists because I'm done disappearing"
without a seam. The other three reframes in that document were left: the
four-beat "Not the artefact, not the deliverable…" is doing real rhetorical
work in a manifesto, which is a genre that permits it.

**Left alone, on purpose.** The manifesto's other 11 dashes and its
remaining reframes; the home, work, contact, tokens and case-study prose
dashes. The manifesto is a signed, dated personal document — editing it is a
different act from tightening a services page, and it got one surgical cut
rather than a pass.

**Flagged, not fixed: the number means two different things.** The case
study says *a 60 per cent saving in development time*, and the manifesto
says *the 60 per cent defect reduction at Vivo Energy*. `HANDOVER.md`'s
"Voice and copy rules" calls it a defect reduction too. The case study's own narrative treats
defects as the mechanism and time as the outcome, so one of these is wrong.
Formatting was standardised; the **claim was not touched**, because deciding
which is true is Warren's, and it needs the Vivo evidence, not an editor.

**A note on standing.** `voice.md` is not in CLAUDE.md's read-first list and
the copy it governs was approved in `PHASE5-BUILD.md` before it. Whether it
binds retroactively on shipped copy was raised and answered by asking for
this narrow set specifically, rather than a full rewrite.

**Verified:** `npm test` 8/8, verify-build clean. All pages render, no
console errors, `/how-it-works` re-read end to end after the edits.

---

## 2026-08-16 — The Vivo number is a development-time saving

**Decision:** Warren settled it: **60 per cent is a saving in development
time.** Not a defect reduction. This closes the item flagged as unresolved
in the entry above, which is now stale on that point.

**Fixed in two places.** The manifesto said "the 60 per cent defect
reduction at Vivo Energy" and now says "the 60 per cent development-time
saving at Vivo Energy". `HANDOVER.md` said the same wrong thing in the rule
that governs how the number is written, so it was corrected there too and
given the distinction explicitly, plus the "60 per cent" spelling. Fixing
the site without fixing the rulebook would have left the error sitting in
the document a future writer copies from.

**The mechanism, stated so it stops drifting.** Fewer defects were the
*mechanism*; the time was the *outcome*. The case study has always had this
right — "The defects were the mechanism. The time was the outcome." The
manifesto had compressed two links of the chain into one wrong claim, which
is how a summary usually goes wrong.

**What was deliberately not touched.** The 2026-06 entry at line 538 records
the number as a defect reduction. That is what was believed then and the log
is a record, not a wiki. It stays wrong on purpose.

**Verified live** after deploy, on both pages.

---

## 2026-08-16 — Five edits to the manifesto, and the case for stopping there

**Decision:** The manifesto got a deliberately partial voice pass: four em
dashes and one §3F reframe. Em dashes there go 12 → 8. The other seven, and
the signature, stay.

**The sort that produced the number.** The dashes were classified by what
they do, not counted. Four were the `/how-it-works` defect — claim, dash,
softening qualifier — and those went: "the worldview underneath — because
that's the thing being sold", "moves into building — usually in the space
between", "social media assets — those are legitimate needs", "Communication
is honest — I'd rather tell a client the hard truth". The remaining seven do
rhetorical work a credo permits: anaphoric expansion ("the parts that
crossed boundaries, the parts that cared…"), and one genuine volta ("at Vivo
Energy — **but** it came out despite the container"), where a comma would
flatten the turn.

**The reframe that went.** "Fixing that wasn't a design problem in the way
design is usually described. It was a systems problem…" became "Fixing that
was a systems problem that happened to require design skill to solve."
`voice.md`'s own prescription: delete everything before the positive claim.
It is shorter and lands harder, which is the argument for the rule.

**The reframes that stayed, and why.** "Not the artefact, not the
deliverable, not the Figma file, not the sprint output. The system." and
"Orin builds things. Not deliverables. Working things —" are load-bearing.
So is "I believe craft matters, but it isn't the point" — the concession is
a real position, not a rhetorical crutch. Applying §3F by the letter would
have cost the document more than it returned.

**The argument for stopping, recorded because it will come up again.** The
manifesto is the most unmistakably Warren-sounding document on the site. It
is at least as plausibly a *source* of `voice.md` as a violation of it, and
`voice.md` §5's own litmus test is "does this sound like something I would
actually write." A full pass risks sanding off the texture the rules exist
to protect. It is also signed and dated 1 July 2026, which makes late
editing a different act from tightening a services page.

**A claim from the earlier review, corrected.** That review said the
systems-problem reframe was "repeated near-verbatim in the case study." It
was not; it appeared only in the manifesto. The case study makes the point
its own way. One argument for the edit was therefore wrong, though the edit
still stands on `voice.md` §3F alone.

**Verified:** `npm test` 8/8, verify-build clean. All five paragraphs
re-read in the browser after the edits.

---

## 2026-08-16 — `voice.md` joins the read-first list

**Decision:** `voice.md` is now item 4 in CLAUDE.md's read-first list, above
`HANDOVER.md`, and the British-English guardrail points at it. `HANDOVER.md`
gained the same pointer as the first line of its voice section.

**The gap this closes.** Four documents routed a reader to `HANDOVER.md` for
voice rules, and `HANDOVER.md` never mentioned `voice.md`. `voice.md` was
also absent from the read-first list. So the governing document for prose
was reachable only by knowing it existed — which is how a voice pass came to
begin by going and finding it.

**Ordering.** It sits above `HANDOVER.md` because `HANDOVER.md`'s tone notes
predate it and partly duplicate it; the entry now says they defer to it.
That removes the "which one wins" question rather than leaving it to
judgement.

**Not done, and worth a decision.** `PHASE5-BUILD.md` carries its own copy
of the read-first list and still omits `voice.md`. It is a dated brief for a
closed phase, so it was left alone rather than quietly maintained — the same
question `HANDOVER.md` raises about version-stamped documents accumulating
live rules.

---

## 2026-08-16 — The dated briefs are maintained, not archived

**Decision:** Warren answered the question left open above by asking for
`PHASE5-BUILD.md`'s list to be fixed too. So `HANDOVER.md` and
`PHASE5-BUILD.md` are **live documents** despite their version stamps, and
get corrected when they go stale. They are not historical records. Only
`decisions.md` is that.

**What that decision immediately cost.** Treating them as live means reading
them as live, which surfaced three stale facts that had been sitting there
since The Foundation was added on 2026-08-12:

- `HANDOVER.md` called `Offer.md` "the three engagement shapes". There are
  four.
- Its sitemap said Home compresses "the three shapes" and How it works has
  "three sections: Diagnostic, Build, Retainer". The live page has four
  sections plus a "When it's a no".
- `PHASE5-BUILD.md` said "three sections from offer.md" for the same page.

None of these were found by anything failing. They were found by reading the
documents as though they governed, which is the whole argument for the
decision.

**Also fixed: the filename.** Three references said `offer.md`; the file is
`Offer.md`. Harmless on a case-insensitive macOS volume, wrong on a
case-sensitive checkout, and wrong either way.

**Both read-first lists now name `voice.md`** at position 4, above
`HANDOVER.md`, with the same "its tone notes defer to it" note.
`PHASE5-BUILD.md`'s copy is a six-item subset and now says so, and says to
keep it in step with CLAUDE.md's ten.

**What was deliberately not done.** No full audit of either brief. Three
facts were corrected because they contradicted the shipped site and were
found in passing. Whether the rest of those documents still describes
reality is unknown and unchecked. If they are live, they are due a proper
read — that is a task, not a side effect of this one.

---

## 2026-08-16 — HANDOVER.md audited against the shipped site

**Decision:** Did the full read the entry above called for. Every factual
claim in `HANDOVER.md` was checked against the live site, the repo, and
`Offer.md`/`positioning.md`. Six findings. Five corrected in the document;
one is not a document problem at all.

**The one that isn't a doc bug: `orindesign.co` does not redirect yet.**
The document has claimed since 2 July that it redirects to orinsystems.co.
It returns 200 from Cloudflare and serves a page titled "Orin Design".

*Resolved by Warren the same day:* that is his first site, due to be
retired. So the redirect is **pending, not broken** — an end state the
document recorded as though already true. The note now says so, and the
open item is "retire the old site and point the domain", with a 301 rather
than a lapse so inbound links survive. Worth recording that the audit
initially read this as a rogue site under a ruled-out name; the finding was
real, the alarm was not.

**The offer was recorded as three shapes at the wrong price.** Locked
decision 4 listed Diagnostic → Build → Retainer, with the Build at "£14,000
base", and asserted "prices are published on the site". The Foundation has
been missing since 12 August, and the published floor became £12,000 on 16
August. So the one section a reader would trust for pricing was wrong in
two directions at once. Rewritten to four shapes and two doors, with the
£14,000/£12,000 split explained rather than silently resolved.

**Editing a section marked "locked" — the reasoning.** This is a sync, not
a relitigation. Both changes were already decided and logged; `HANDOVER.md`
had simply not been updated. Locked means logged in `decisions.md`, not
frozen, and that reading is now written into the document's status note so
the next person does not face the same hesitation.

**Three more corrections.** The sitemap said five pages against nine
shipped, so it now distinguishes the five-page sitemap from the four
machinery pages. The Work entry said all essays were Phase 6, when Vivo
Energy shipped. Open items listed the 3-minute positioning version as
pending; it has existed since the 1.1 revision of 14 July.

**What the audit found clean.** The one-liner matches `positioning.md`
verbatim. Buyer language holds: the copy is in velocity, defects, and
source-of-truth terms throughout, with no designer vocabulary. The
"deliberately absent" list is fully respected — no About page, no blog, no
newsletter, no testimonials, no logo wall, and "services" appears nowhere
in the nav. Conversion logic verified: every page ends on the single
"Get in touch". Build approach and the working agreement are still true.

**Unverifiable, and marked as such.** The business-admin open item (HMRC,
bank account, PI insurance, contract template) cannot be checked from the
repo. It is now labelled unverifiable rather than left reading as current.

---

## 2026-08-16 — PHASE5-BUILD.md audited against the shipped site

**Decision:** Same audit, same treatment. Seven findings, all corrected.
The document now carries a status note saying Phase 5 is finished, and —
the important line — **where it and the live site disagree, the site
wins.** It is v1; the spec is the record of how it got there.

**The finding that mattered: a booby-trapped copy spec.** Section 4 of the
Home spec still read "Three blocks" and "The Build — from £14,000". That
section is labelled *approved copy, assemble it, don't rewrite it*. So the
one document that instructs a builder not to think was carrying a
superseded price and a missing engagement. Anyone rebuilding Home from the
spec would have reintroduced £14,000 to a live pricing page and dropped The
Foundation, and would have been following instructions correctly while
doing it. Now four cards, £12,000, interpuncts, with the change dated
inline.

**Two smaller copy drifts, from today's own work.** The hero eyebrow still
specified an em dash, and the Proof section still said "sixty per cent".
Both were changed on the site this morning. Worth noticing that a copy
change made in `site/` silently invalidated the spec it came from within
hours — which is the argument for the "site wins" line rather than for
diligence.

**Marked done rather than pending.** The standing rule for the token demo
page was followed exactly: the page is at `/tokens` and the footer links it
with the precise sentence the rule suggested. The whole "After Home" list
is complete through the v1 declaration. Both now say so, so neither reads
as outstanding work.

**The component budget held, and the audit says how.** Everything beyond
the eight primitives is an accessibility utility, a typographic label, grid
scaffolding, the hero overlay, or confined to `/tokens`. The case-study
card is reused for pricing rather than a second card being built. That is
recorded in the document so the next reader can check the claim instead of
trusting it.

**Clean:** Sections 2, 3 and 6 of the Home copy match the shipped page
word for word. Every hard constraint holds — token resolution, AA,
static-first, British English, one CTA, the attribution rules, and the
never-"design agency" rule. Definition of done met.

**Both briefs are now audited.** `HANDOVER.md` and `PHASE5-BUILD.md` were
each written as a snapshot and left to drift for six weeks. Between them
they held eleven false statements about a site sitting in the same repo,
and `npm test` was green the whole time because no guardrail reads prose.
The guardrails cover values, not claims.

---

## 2026-08-16 — design.md audited: one wrong instruction, three silences

**Decision:** Third and last brief audited against the shipped CSS and
tokens. Six findings. Unlike the other two, almost nothing here was *stale*
— design.md is principles, and principles don't rot the way a price does.
What it had instead was one instruction that was simply wrong, and three
things it never said.

**The wrong instruction: the rail does not carry the eyebrow.** The doc read
"the `.rail` (column 1) carries the eyebrow/index". The rail carries the
index alone; the eyebrow sits at the top of the content column, in
`.col-heading` or `.col-main`, on every page. Anyone composing a new section
from this doc would have put the eyebrow in column 1, and it would have
looked deliberate. This is the failure mode a principles doc is *most*
exposed to: it is read for guidance rather than checked against the code, so
a wrong line survives longer than it would anywhere else.

**Three silences, each load-bearing.**

- `.col-main` (2–end) was undocumented. The doc described only the 2–7 / 7–end
  split, which is one of two arrangements in use.
- `.section--inverse` was undocumented — the one band variant, with a real
  constraint attached: rail and eyebrow must flip or they fail contrast, and
  the band stays link-free (2026-07-09). That link-free rule is exactly the
  "intent that isn't already written down" this doc exists to hold, and it
  was only in `decisions.md`.
- Teal was listed as "links, the one button, the rail". It is also every
  card index and **every focus ring** — an accessibility-relevant appearance
  to leave off a colour-discipline list.

**The hero overlay is now a stated exception, not a silence.** The doc's
opening principle says that if a design needs a background flourish, the
layout isn't working. The hero has a decorative 12-column overlay. Both are
right, and the tension was undocumented, so the exception is now written
where the principle is, with the reasoning and a "no second exception
without the same argument".

**Clean, and verified against source rather than assumed:** `.wrap` at 68ch,
`.container` at 75rem (`container.max`), `.col-heading` 2–7 and `.col-body`
7–end, the 64rem collapse, the space scale's deliberate gaps (0,1,2,3,4,6,
8,12,16,24 — no 5, 7, 9, 10), `.section` at `space-16` with the hero at
`space-24`, tight pairings at `space-2`, two breakpoints with 64rem the one
that matters, and the DevTools → reassignment-or-proposal → `npm test` loop.

**All three briefs are now audited.** Between them: eleven false statements
in the two dated ones, one wrong instruction and three silences in the
principles one. Different failure modes. The dated briefs went stale because
the world moved; design.md was wrong from the start about the rail, and
nobody noticed for six weeks because principles docs get read for tone, not
checked for accuracy.

---

## 2026-08-16 — SETUP.md audited: the runbook was skipping a guardrail

**Decision:** Fourth document audited. Five findings. The important one is
that the pre-push checklist ran two guardrails when three exist.

**The runbook told you to run the weaker test.** There are two `npm test`
entry points. The root one runs `verify:deliverable` (does `deliverable.md`
still describe the real client pipeline?) *and then* the token chain. The
one in `tokens/` runs the token chain alone. `SETUP.md` documented only the
`tokens/` command, described it as "the whole chain and **both** guardrails",
and its pre-push checklist specified it by name. So anyone following the
runbook exactly — which is what a runbook is for — never ran
`verify:deliverable` before a push. `CLAUDE.md` had the root command right
all along; the operating manual did not. Both commands are now shown side by
side with the difference stated, and the checklist names the root one and
says why.

**A near-miss worth recording.** Mid-audit I reported that
`scripts/verify-deliverable.mjs` did not exist, because `ls` and `find` came
back empty. The working directory had drifted to `site/` from an earlier
`cd`, so both were searching the wrong tree while `npm` walked up and ran the
real thing. The file exists and passes. A tool that silently inherits state
between calls will produce a confident wrong answer, and "the file is
missing" is exactly the kind of finding that gets acted on fast. Verify the
ground you are standing on before reporting an absence.

**The 301 that isn't, again.** `SETUP.md` listed "orindesign.co → 301
redirect" as a completed deploy step, the same claim `HANDOVER.md` carried.
Same correction: the domain still serves Warren's first site, retirement
pending, redirect to be set when it comes down rather than letting it lapse.
Two documents asserted the same aspiration as fact, which is how a thing
nobody has done comes to look done.

**Phase-0 "still open" was settled by shipping.** Fonts, palette and dark
mode were seeded as placeholders "to confirm, then lock". v1 shipped on all
three. Renamed to say so. Fonts gained something the section didn't mention:
the report's fonts-link check now fails the build if the link and the tokens
diverge, so that decision is enforced rather than merely made. Dark mode is
genuinely still out — no dark token file — and that was confirmed, not
assumed.

**The repo tree understated the site.** It showed `index.html # pages`. The
site is folder-per-page with `404.html` as the one deliberate flat file,
because Pages looks for it by name. Nine pages against a sitemap of five, now
listed.

**Checked and clean:** the one loop matches `package.json` exactly, the eight
lints are named correctly and in order, `dist/` is gitignored and untracked,
`vendor/tokens.css` is committed, there is no site build step, and "CI does
not run these" is true — there is no `.github/` at all.

**Not verified, and now labelled:** the Figma mirror section. Confirming file
key, collections and variable syntax needs Figma access this session did not
have. Marked in the document as trusted rather than confirmed, instead of
being passed over in silence like the rest of the audit's clean results.

---

## 2026-08-16 — BUILD-SEQUENCE.md audited: where design.md's error came from

**Decision:** Fifth and last document audited. Seven findings, all corrected.
This one was the most accurate of the five — every foundation gap it
specified was verified present in the shipped site — and it still contained
the source of a bug that had propagated into another document.

**The rail label format never shipped, and design.md inherited the mistake.**
Step 0.5 specifies "numbered section labels in a persistent left rail (01
HERO, 02 THE PROBLEM…)", and the per-section map repeats it: rail "01 HERO",
rail "06 LET'S BUILD". What shipped is the number alone in the rail, with the
label in the `.eyebrow` at the top of the content column. That is almost
certainly where design.md's "the `.rail` carries the eyebrow/index" came
from — audited and corrected there earlier today without knowing its origin.
One wrong line in a plan, copied once into a principles doc, and it survived
six weeks in both. Now corrected in both, with a note here saying which was
upstream.

**Step 0 is done, all eleven items, and now says so.** Verified directly
rather than assumed: the three accent tokens exist, no `link-on-inverse`
token exists (option (a) was taken and stayed taken), and the button, card,
nav wrap, skip link with `id="main"`, reduced-motion block, absolute
`data-include` paths and preserved specimen CSS are all present. Item 11 is
the pleasing one — it told a later session to fix a stale font note in
`SETUP.md`, and `SETUP.md` now says Inter. The instruction worked.

**The cards row was superseded twice** and said neither. The Foundation made
it four cards, and `auto-fit` was replaced by an explicit `repeat(2, 1fr)`
because the track minimum that fitted three neatly orphaned the fourth. Both
now recorded where the original spec sits.

**Three smaller drifts.** The Step-0.5 primitive named `.grid` shipped as
`.section-grid`. Build-order step 3 still said three priced blocks and "do
not draft the essays" when Vivo Energy is written. The Phase-6 footer note
said "one line"; it is two.

**The `npm test` gap, again.** Step 0 and Step 0.5 both instruct `cd tokens
&& npm test`, which skips `verify:deliverable`. Same finding as `SETUP.md`
this morning, in a second document. The guardrails section now names the
root command and explains why the older instructions say otherwise, rather
than editing history that was correct when written.

**Checked and clean:** accent tokens exactly as specified, the inverse
decision honoured with no `link-on-inverse` token, `container.max` at 75rem,
all three breakpoints defined, the hero overlay as described, the fluid `h1`
clamp, heading at columns 2–6 and body at 7–12, the Close band inverse with
a button rather than a link, and the documented `@media` exception both
logged and honoured. Every Phase-6 deferral confirmed still deferred: no
1.25rem type step, no `shadow/*` token, cards still border-only, `/pipeline`
still parked with its source file present.

**All five documents are now audited.** `HANDOVER.md`, `PHASE5-BUILD.md`,
`design.md`, `SETUP.md`, `BUILD-SEQUENCE.md`. The pattern across them: the
dated briefs went stale because the world moved, the principles doc was
wrong from the start, the runbook documented the weaker of two commands, and
this one was accurate about everything it built while carrying one wrong
detail that spread. None of it was caught by `npm test`, because eight lints
check whether values resolve and none check whether sentences are true.

---

## 2026-08-16 — decisions.md audited, on different terms

**Decision:** Audited last, and deliberately **not** "the same way" as the
other five. Those documents claim to describe the world as it is, so
checking them against the shipped site was the right test. This one claims
to describe the world *as it was on a given date*. Running the same audit
would have "corrected" the June entry that says the offer is three
engagement shapes — which is not an error, it is the record working. Three
times today an entry here was left deliberately wrong about the present:
the three-shapes entry, the defect-reduction claim, and the pre-Foundation
pricing. That restraint is the document's whole value.

**So the audit asked different questions.** Is it navigable? Is it
internally consistent? Do its pointers to other files still resolve? Four
findings, three fixed with an additive note at the top and one left as a
question.

**The order was broken, and nothing said so.** The first eight entries ran
backwards (2026-08-04 down to 2026-07-14) while everything from "Founded
Orin" onward ran forwards. So the newest entry sat at the bottom while the
top block was also recent, and CLAUDE.md's "read from the most recent entry
backwards" was ambiguous in a file with two directions in it. A reader
starting at the top would take an August entry for the beginning of the
story.

*Resolved the same day, on Warren's instruction: the entries are now sorted
into one ascending order.* The audit had proposed a header note instead, on
the grounds that reordering history is the kind of retroactive edit this log
exists to prevent — but that reasoning conflated two different things.
Sorting changes the *order* entries are read in; it does not change what any
entry says. The prohibition is on rewriting, not on filing. A log nobody can
navigate protects its contents from being read at all.

**How the sort was made safe.** Round-trip verified byte-identical before
anything moved, the sort was stable so same-date entries kept their
narrative order, the output was asserted equal in length and content to the
input, and the four cross-entry "above" references were re-checked
afterwards and all still resolve to the right neighbours.

**A pointer I wrote this morning had already rotted by the afternoon.** The
entry on the Vivo number cited "`HANDOVER.md` line 87". The same day's edits
to `HANDOVER.md` moved that line, so by the time the audit reached it, line
87 read "When it's a no". Fixed to name the section instead, and the header
note now bans line numbers outright. This is the one failure mode an
append-only log genuinely has: the entries don't rot, but their references
to other files do, and faster than anything else in the repo.

**What the audit did not find.** No malformed entries, no duplicate
headings, no gaps in the format, and the template placeholder at the end is
intact. 63 entries over 2,568 lines. The deferrals were spot-checked and
are honest: the social-card and dark-icon deferrals are still genuinely
open, and the entry describing four pages as "currently 404" is correct
about the day it was written, which is the format behaving exactly as the
header promises.

**Left as a question, not fixed: there is no superseded-marker convention.**
When a later entry reverses an earlier one, nothing at the earlier entry
says so — the reader has to already know. Forward pointers would help, but
adding them means editing historical entries, which cuts against "written at
the moment of the decision, not retroactively". Worth deciding deliberately
rather than drifting into. My view: leave it. The cost of a stale entry is a
reader briefly misinformed; the cost of an editable log is that no entry can
be trusted as what was actually thought at the time.

**The honest headline.** This was the healthiest of the six documents, and
not because more care went into it. Append-only, dated, written in the
moment, never revised — the design makes it structurally resistant to the
drift that produced eleven false statements in the two dated briefs and a
wrong instruction in the principles doc. The lesson is not "audit harder".
It is that a document which never claims to be current cannot go stale.

---

## 2026-08-16 — README audited: the founder's name was spelled wrong

**Decision:** Seventh document audited, and the worst of them. Seven
findings, all corrected. This is the only one of the seven that strangers
read, and it was wrong about the practice's category, the founder's name,
the headline number, and whether the site exists.

**The name.** It said **Warren Grossiter**. It is Warren G Rossiter — the
middle initial had been absorbed into the surname. Confirmed four ways: the
git config, the author line on every commit in the repo, the manifesto's
signature on the live site, and the README's own reference to *Kirsten
Rossiter Ministries* two lines below. Six weeks on a public remote.

**The 60 per cent claim, for the third time.** "A 60% reduction in
development defects." Same error corrected in the manifesto and
`HANDOVER.md` this morning, now found in the most public file of the three.
Three documents carried one wrong claim, which is what happens when a number
is repeated from memory rather than from its source. Now "a 60 per cent
saving in development time", matching the case study.

**It broke a locked decision in its first sentence.** "Orin is a design and
build practice." Locked decision 5 in `HANDOVER.md` says never lead with
design as Orin's *category*; CLAUDE.md says never frame Orin as a design
agency or studio. The distinction that makes the fix easy: "design system"
as the name of the artefact is fine, "design practice" as the category is
not. Now opens with the systems-practice framing and the locked one-liner.
Also "Senior UI designer" in the bio, against a positioning that says he has
outgrown UI design as an identity.

**Status said "Pre-launch."** The site has been live since this morning,
positioning is locked at 1.1, the offer has four shapes, and the first case
study is published. Every clause of that section was false.

**The repo contents list was wrong in both directions.** It described `/site`
as "added when it exists" — it exists, nine pages. And it omitted `/tokens`
entirely: the token pipeline, the thing the practice sells, was not mentioned
in the README of its own repo. Rewritten into three groups (the thinking,
the build, the client-facing work) naming what is actually here.

**A near-miss, again.** I nearly reported `/case-studies` as a phantom
directory. It exists and is tracked, with `vivo-energy.md` in it. Second time
today an absence was almost reported on a bad check. Verify presence before
claiming absence — the same lesson as the `verify-deliverable.mjs` scare, and
it did not stick the first time.

**Clean:** the working principles all hold — manifesto as source of truth,
GitHub canonical with Notion as workshop, ship the honest first version.
Bath, UK. The attribution rules are correctly applied: Vivo contracted via
Rethink, IDEM a personal rebuild, KRM fully owned.

**All seven documents are now audited.** The README was audited last and was
the most wrong, which is the inverse of how much it is read by outsiders. It
is the only file a stranger arriving at the repo sees first, and it had the
founder's name misspelled in it.

---

## 2026-08-16 — The name is Warren Rossiter, no middle initial

**Decision:** Warren's call, correcting the entry above: it is **Warren
Rossiter**. That entry inferred "Warren G Rossiter" from the manifesto
signature, which was the best evidence available but was not the form he
uses. Logged as a new entry rather than an edit to the old one, per this
file's own rule.

**Changed in four places:** `README.md`, `SOUL.md`, `MANIFESTO.md`, and the
manifesto signature on the live site. The site one deploys.

**A second instance of the misspelling, found only by following up.**
`SOUL.md` also read "Warren Grossiter" — the same merged surname the README
had. That file is described in the README as the personal context file
pasted into Claude conversations to skip the calibration phase, so it had
been feeding a misspelled name into those conversations for six weeks. It
also said "senior UI designer", the same outgrown identity corrected in the
README; fixed to "senior designer" while there. The README audit found one
instance and reported it as *the* instance. It was one of two.

**Deliberately not changed: the contract templates.** `notes/contracts/`
carries "Warren G Rossiter" four times — in the MSA parties clause, its
signature block, the engagement-letter letterhead, and its sign-off. Those
are legal documents where the full legal name may be the correct and
intended form, and a sole trader's contracting name is not a style
preference. Flagged for Warren rather than changed. If the legal name is
also plain "Warren Rossiter", those four want updating before the templates
are used.

**Untouched, as always:** the 2026-07 entry quoting the signature as it then
stood.

---

## 2026-08-16 — The contract templates take the legal name too

**Decision:** Warren confirmed the legal name is also plain **Warren
Rossiter**, so the conditional left open in the entry above is closed. All
four occurrences in `notes/contracts/` updated: the MSA parties clause and
its signature block, and the engagement letter's letterhead and sign-off.

**Why these waited for an answer when the other four didn't.** A trading
name on a website is a style choice; the name in a parties clause is the
thing that makes the contract bind the right person. Getting it wrong in a
signature block is not a typo, it is a defect in an executed agreement. The
same string in two kinds of document warranted two different levels of care,
and the contracts were worth one round-trip.

**Nothing else carries it.** A sweep of every tracked `.md` and `.html`
confirms the only remaining instances of "Warren G Rossiter" or "Warren
Grossiter" are in this log — the July entry quoting the old signature, and
today's entries quoting the errors they describe. All correct as written.

---

## 2026-08-16 — The contract templates come off the public remote

**Decision:** `notes/contracts/` is gitignored and untracked. The files stay
on disk; they stop being published. Same reasoning as the shadcn adapter and
the outreach pack, plus one specific to these: they carry the legal name, the
address line, and the commercial terms Orin contracts on. Templates today,
filled instruments tomorrow, and the first time a real client name lands in
one there is no undo on a public remote.

**Gitignoring alone would have done nothing.** They were already tracked, so
the rule needed `git rm --cached` behind it — otherwise the ignore is inert
and the files keep being committed. Verified after: both files still on disk,
`git check-ignore` resolves to the new rule, and a probe file dropped into the
directory came back ignored too, so the rule covers what gets added later
rather than just the two files that exist now.

**The limit, stated plainly: this is not a delete.** Both files are in the
history of a public remote and remain retrievable from earlier commits.
Untracking stops the bleeding; it does not undo it. Scrubbing them properly
means rewriting history and force-pushing, which is disruptive and worth it
only if something genuinely sensitive is in there. Today there is not — every
client-identifying field is still a placeholder. The judgement to record is
that this was checked rather than assumed.

**Checked before untracking:** neither `deliverable.md` nor
`verify-deliverable.mjs` classifies these paths, so the guardrail's "6
correctly absent" count is unaffected. `npm test` green after.

---

## 2026-08-16 — The contracts stay in the history, and a git trap worth knowing

**Decision:** Warren's call: leave the history alone. The contract templates
remain retrievable from commits before `fa3bfec` and that is accepted, not
overlooked. Every client-identifying field in them is a placeholder, so the
exposure is Orin's own commercial terms on a repo that already publishes the
manifesto, the offer and the prices. Rewriting shared history and
force-pushing to buy that back is not a trade worth making.

**The trap, recorded because this repo's workflow walks straight into it.**
Untracking `notes/contracts/` deleted both files from the working tree.
`git rm --cached` did the right thing and left them on disk — verified at the
time. What removed them was the step after: commit the deletion on a branch,
`git checkout main` (where the files were still tracked), then fast-forward
main onto the deletion commit. Git then removed the working-tree copies,
because from its side it was applying a commit where those paths do not
exist. `.gitignore` offers no protection there; it governs what gets added,
not what gets deleted.

Every commit today used branch → commit → checkout main → ff-merge. Any
future `git rm --cached` under that workflow will do the same thing. The
check that catches it is to re-verify the files exist *after* the merge, not
after the `rm --cached`. Recovered here from `ac1bb68` and confirmed
byte-identical by checksum, with the name corrections intact — but only
because they had been committed once. A file that had never been committed
would simply have been gone.

---

## 2026-08-16 — /tokens shows its names and values, and gains spacing and radius

**Decision:** Reviewed the proof artefact and rebuilt most of it. The page now
prints every token's **name and resolved value**, covers all 13 semantic
colours (was 5), all 11 type steps (was 8), and adds the spacing and radius
scales it never had. First substantive `site/` change since v1, and it had a
reason: the page's whole job is evidence, and it was withholding the evidence.

**The review finding that drove it.** The swatch names lived only in `title`
attributes — invisible on the page, absent on touch, unreliable to screen
readers. A technical buyer arriving to check whether the semantic layer is
real saw five unlabelled squares, which any Figma export produces. The names
*are* the proof and they were the one thing not shown.

**Values are read back out of the page, not typed in.** This matters more
than it looks. The old labels were hand-written strings ("1100 · 56 · Inter
Tight"); change a token and the label would silently lie, with `npm test`
still green, because the report checks that values resolve and not that prose
about them is true. Now a short script reads each colour off its swatch's
computed background and each dimension off `:root`, so the page can only
disagree with itself. It also keeps the source free of colour literals, which
is why lint 5 stays green — the honest reason, not a dodge.

**The duplicate that wasn't.** `text/default` and `background/inverse` both
resolve to `#1F343A`, which read as a copy-paste error. It is the strongest
thing on the page: one primitive, two roles, either free to move without
touching a consumer. Now said in a sentence next to the swatches.

**Broke the 360px guarantee, and caught it.** The new `1000` step at 44px
overflowed by 7px — a single word is wider than the column left beside a 9rem
label. Fixed at the layout rather than by shortening the sample text: the
specimen stacks label above sample below `md`, which protects the whole scale
instead of the one row that happened to expose it. `.specimen-row` is used
only on this page, so the media query is contained. Re-verified: no overflow,
38/38 values resolving, no console errors, every other page still 200.

**Five CSS modifier classes deleted.** `.swatch--ink` and friends were
replaced by an inline `background:var(--orin-colour-…)` per item — thirteen
near-identical modifiers would have been worse, and the inline value still
resolves through the token layer, so the law holds. Net CSS is smaller
despite the page roughly doubling.

**Left alone deliberately:** the page still uses `.wrap` rather than the
12-column grid and rail every other page uses, so it demonstrates the token
layer but not the layout system. That is a bigger change than this one and
was not part of the ask. *(Done the same day — see the entry below.)*

---

## 2026-08-16 — /tokens moves onto the grid and rail

**Decision:** The proof artefact now uses the same 12-column grid and numbered
rail as every other page. `.wrap` is gone from it. Closes the item the entry
above left open.

**Why it was worth doing rather than leaving.** The page argues that the site
runs on its own substrate, and it was the one page not laid out on that
substrate. It proved the token layer while visibly opting out of the layout
layer, which is a strange thing for a proof artefact to do. A technical buyer
comparing it to the other four pages would see a different site.

**Structure.** Seven sections: an intro with no rail (matching `/work` and
`/how-it-works`, where the first section carries the h1 and no number), then
rails 01–06 for colours, type, spacing, radius, links and the button. The
four scale sections use `.col-main` because their grids want the full width;
links and the button use the `.col-heading` / `.col-body` split, the same
shape as Home's "The problem". Nothing was invented — every class already
existed.

**Two small copy additions**, because the layout change made them true: a line
in the intro saying the page is on the same grid as the rest, and a sentence
on the button section naming the three tokens it resolves through. The button
previously sat under a bare heading with no explanation, which was the
thinnest part of the page.

**The h1 gained `.hero-heading`**, the fluid clamp the other intro pages use.
It had been a plain h1, which is why the page read a step quieter than
`/work` and `/how-it-works` despite doing the same job.

**Verified at both ends:** 12 columns at 1280px with all six rails aligned on
the same left edge, `col-main` and `col-heading` starting at column 2 and
`col-body` at column 7 — the same geometry as the other pages. At 360px the
grid collapses, rails stack above their headings in DOM order, no overflow,
38/38 values still resolving, no console errors. Tag balance checked before
rendering, since the conversion moved every closing tag on the page.

**No CSS changed.** This was HTML only, so no other page could be affected by
it.

---

## 2026-08-17 — styles.css defines no custom properties

**Decision:** Deleted the 17-name alias block from `site/styles.css` and pointed
all 71 call sites at `var(--orin-…)` directly. Promoted `--measure` and `--ease`
into the token source, added a `motion` category, added a `font.family.ui`
semantic token, and added a ninth report check that fails if any custom property
is defined in site source at all. `styles.css` now defines nothing.

**Why this was worth reopening a v1 site.** Not because the aliases were wrong.
They pointed at semantics rather than primitives, and checks 5 and 7 already
guarded that — the mapping was correct and verified. The reason is that a
developer evaluating me opens DevTools, and the first thing on `:root` was a
block of names (`--ink`, `--paper`, `--rule`) that appear nowhere in
`tokens/src/*.json`. That is a thing I would have to explain. The claim is that
everything resolves through the pipeline, and any explanation at all is a cost
when the site is meant to *be* the proof rather than describe it.

Two sharper versions of the same point. First, a local alias layer is the exact
shape of the failure logged on 2026-08-01 — the client site routing 195 uses
through local aliases onto primitives. Someone who knows design systems reads a
local alias layer as where drift starts, and has to check 17 lines before
believing me. Second, a client consuming my tokens writes `--orin-…`; the
nicknames don't travel. So the site was demonstrating a variant of the
deliverable customised for my own typing comfort, which is the same
care-goes-into-mine, generalisation-goes-into-theirs split that entry named.

**The alias layer was never a design layer.** It added no meaning — `--ink` says
nothing `--orin-colour-text-default` didn't. The standard third tier is a
*component* layer, which earns its place by scoping to a thing. This was a
rename, and it correlated with name length: colour and family got nicknames,
`--orin-space-6` didn't need one. Ergonomics, not architecture.

**Four values moved into the pipeline rather than being deleted.** `--measure`
and `--ease` had been carved out as "layout mechanics, not
values-that-should-be-tokens". That was the convenient reading. Line length is a
typographic decision and easing is a first-class DTCG type, so both were token
proposals under my own rule. `120ms`, sitting as a literal next to the easing
curve, became `motion.duration.fast` for the same reason. And `--font-ui` and
`--font-body` both aliased `family.base`, so collapsing them would have quietly
deleted a role distinction — `font.family.ui` now carries it in the layer where
it belongs.

**The one transform in the build.** `cubicBezier` is the only DTCG type here
with no CSS scalar form: `[0.2, 0, 0, 1]` serialises to `0.2,0,0,1`, which is
invalid. Rather than hand-author the string and make the source non-conformant,
I registered `cubicBezier/css` to wrap the array. This does not reopen the
footgun `sd.config.mjs` deliberately avoids — that risk is *arithmetic*, a
transform multiplying a bare number by a base and changing what a value means.
This one adds function syntax. The distinction is written into the config header
so a later reader doesn't take it as permission to add a size transform.

**Check 9 can fail, which was the point.** Verified by reintroducing
`--ink: var(--orin-colour-text-default)` and watching the report drop to 8/9
naming the offender. Check 3 was also widened to cover `container` and `measure`
dimensions and to accept `ch`, because adding a dimension token the unit check
didn't cover would have been the observation-wearing-the-costume-of-a-control
problem from 2026-08-01 all over again.

**Verified:** `npm test` from the repo root — 9/9, verify-build clean, 117
tokens resolve. All nine pages return 200, no console errors. Computed values
identical to before at every checked point: body `#f4f5f5` on `#1f343a`, button
`#007582`, h1 Inter Tight, prose measure 526.5px (68ch), link transition
resolving to `color 0.12s cubic-bezier(0.2, 0, 0, 1)`. All 11 `/tokens`
specimens still resolve and its live readout still prints real values. Zero
custom properties defined anywhere outside `vendor/tokens.css`.

**Docs updated:** the 8/8 targets in `CLAUDE.md`, `SETUP.md` and
`BUILD-SEQUENCE.md` are now 9/9, and SETUP's lint list names the new check.
The 8/8 references in *this* file were left alone — they record what was true
when written.

**Deferred:** `CONSUMABLE` in `report.mjs` is dead — declared, never read. Left
in place because deleting it is unrelated to this change and wants its own look
at whether check 7 should have been using it as an allowlist all along.

**Revisit if:** a real second consumer of the token set appears. An alias layer
earns its place as an insulation seam when you don't own both ends; I own both.
If that stops being true, the seam is worth rebuilding — but as a component
layer with scoped meaning, not as nicknames.

---

## 2026-08-17 — check 7 becomes an allowlist and fails closed

**Decision:** Rewrote check 7 to use `CONSUMABLE` as an allowlist instead of
`PRIMITIVE` as a denylist. `CONSUMABLE` had been declared and never read since
the suite was written; the choice was to delete it as dead code or to make it
the check. It became the check.

**Why the denylist was the weaker of the two.** It flagged four known primitive
prefixes and silently permitted everything else, so its coverage was frozen at
the moment it was written. The entry above added `motion-` and `measure-`
tokens; a denylist would never have had an opinion about either, and would not
have noticed the site consuming a new primitive category had one been added.
An allowlist fails closed: a category added to `tokens/src` is unconsumable
until someone names it here, which makes consumption a decision rather than a
default. This is the same objection as 2026-08-01 — a check whose coverage
cannot grow is closer to an observation than a control.

**The list is the seven prefixes the site actually consumes:** `colour-`,
`font-`, `space-`, `radius-`, `container-`, `measure-`, `motion-`. Verified
against the source rather than assumed — 72 `font-` references, 58 `colour-`,
57 `space-`, 9 `radius-`, 4 `motion-`, 2 each for `measure-` and `container-`.

**`breakpoint-` is deliberately excluded.** CSS `@media` cannot read custom
properties, so breakpoints are single-sourced in `layout.json` and referenced by
comment — the documented exception from 2026-07-13. That decision means a
`var(--orin-breakpoint-…)` in site source is always a mistake, so the allowlist
should reject it, and now does. The denylist could not have: `breakpoint-` is
not a primitive.

**`PRIMITIVE` stayed, demoted to diagnostics.** It no longer decides anything;
it distinguishes "raw primitive — use the semantic token" from "not a consumable
layer" in the failure message. The first tells you what to do, the second tells
you to think. Deleting it would have made every rejection read the same.

**Verified:** `npm test` from the repo root — 9/9, verify-build clean. Both
rejection classes proved by probe: `var(--orin-teal-500)` and
`var(--orin-breakpoint-md)` added to `styles.css` together, each flagged with
its own message, then reverted. The breakpoint case is the one the old check
would have passed.

**No doc changes needed** — `SETUP.md` lists check 7 by name only and never
described the mechanism.

**Revisit if:** a token category is added that the site should consume. The
symptom will be check 7 failing with "not a consumable layer" on a name that
looks perfectly reasonable. That failure is the check working; add the prefix
to `CONSUMABLE` deliberately, rather than widening the rule to make it quiet.

---

## 2026-08-17 — /tokens sections 05 and 06 stack under their headings

**Decision:** Links and Button primitive moved from the `col-heading` /
`col-body` two-column split to `col-main`, so their prose and the button sit
under their headings rather than beside them. The page now has one section
shape throughout.

**Reasoning:** Warren asked for it looking at the live page. The 2026-08-16
entry chose the split for these two because it matched Home's "The problem",
but on this page it made them the odd pair — the four scale sections above
already stacked inside `col-main`, so the eye had to change tack twice near the
bottom of a page whose argument is that everything here follows one system.
Consistency within the page beat consistency with a section on a different one.

**HTML only.** No CSS changed, so no other page could be affected. Nothing was
invented — `col-main` already existed and is what the other five sections use.

**Verified:** all seven `section-grid` blocks now report `col-main` at grid
column `2 / -1` with the rail at `1 / 2`; heading and prose share a left edge at
162px in both changed sections (previously 162 and ~1016), the button sits below
its own heading with `background/accent` intact, and there is no horizontal
overflow. `npm test` 9/9, verify-build clean.

**Not verified visually.** The browser pane was hidden while this was checked,
so scrolled screenshots came back blank and the geometry above is the whole of
the evidence. The numbers are unambiguous, but nobody has looked at it.

**Revisit if:** Home's "The problem" section ever changes shape. The two are no
longer the same pattern, which is deliberate, but it means the split now lives
in exactly one place on the site.

---

## 2026-08-17 — the stacked /tokens sections were checked on the live page

**Follow-up to the entry above,** which shipped saying "not verified visually"
and recorded the geometry as the whole of the evidence. It has now been looked
at on orinsystems.co and it is right: rail number in the margin, heading, prose
beneath it on the same left edge, and the button directly under its own
paragraph rather than off to the right. It matches sections 01–04.

**How the image was obtained, because it was not a plain screenshot.**
Screenshots of that tab only captured at scroll position 0 — every scrolled
capture came back blank while the DOM reported correct geometry, and the native
scroll call kept returning that the browser pane was hidden. The workaround was
to set `display:none` on the five sections above, capture, then restore them;
all seven were confirmed back afterwards and the document height was unchanged
at 4087px. Section layout on this page is independent of what precedes it, so
the capture is faithful for those two sections, but it is worth writing down
that it was a workaround rather than a straight view of the page as loaded.

**Nothing changed as a result.** No code, no copy, no tokens. This entry exists
only so the log does not keep asserting the page went out unseen when it did
not stay that way.

---

## 2026-08-17 — The Figma question for a Foundation, stated properly

**Decision:** None. This entry restates the item the 2026-08-16 entry left open
in one clause, because the clause was too small to hold the question and one of
its premises was wrong. Nothing is decided here and nothing shipped.

**The premise that was wrong.** The open item was phrased as whether a
Foundation should mirror tokens into Figma, "the JSON-to-Figma direction Orin's
own site uses." Orin's own site does not use it. There is no Figma automation
in this repo at all — no `sync:figma`, no Figma script, no Figma-related file;
`sync:figma` lives in `Offer.md`, `PIPELINE-REVIEW.md` and this log as a
description of the *client* pipeline, and it runs the other way. The 2026-07-09
mirroring of the three accent tokens was done **by hand**: each variable created
individually as a `VARIABLE_ALIAS`, scopes read off existing variables first.
One direction is a pipeline; the other is something I did once, manually, to
thirteen variables. Calling them both "directions the site uses" flattered the
second.

**The question is not "should we do Figma."** `Offer.md` already answers the
founder who asks, and answers it without building anything: the source is DTCG,
the format design tooling imports, so nothing is locked away and their future
designer starts from what exists. It also names the trigger — *they hire a
designer* — and frames that moment as whether to flip them onto the Figma-first
pipeline. The gap is that flipping is not the only coherent answer, and it is
the only one written down. At that moment there are three:

1. **Flip.** Truth moves to Figma, the designer authors there, `sync:figma`
   pulls. The pipeline already sold, applied to an existing client.
2. **Mirror.** Truth stays in code. Figma gets a generated variable collection
   the designer designs *against* but does not author in.
3. **Neither, deliberately.** Hand over DTCG and let the designer's tooling
   import it, which is what `Offer.md` already tells founders today.

These are different products, with different prices, different failure modes,
and a different answer to who holds the pen. Nothing has chosen between them.

**The evidence against the mirror being cheap is already in this log.** The
2026-07-09 entry exists *because the mirror had drifted* — Step 0 shipped as CSS
while the Figma side lagged, which that entry calls exactly the drift the
JSON→Figma mirror is supposed to prevent. Its recorded mitigation is a manual
periodic check of this file's last-mirrored state against `tokens/src/*.json`.
So on my own substrate, one operator, thirteen semantic tokens, the mirror
direction drifted and the fix was a human remembering. Selling it inside a fixed
£4,000 two-week Foundation means either shipping that same manual promise to a
client, or first building the automation this repo does not have. By the rule
from 2026-08-01, an unautomated mirror is an observation wearing the costume of
a control.

**Which does not kill option 2**, and this is the distinction worth keeping: a
mirror *generated once at handover and explicitly not maintained* is a
legitimate, honest shape. "We mirrored your tokens into Figma" and "we mirror
your tokens into Figma" are different promises, and a client will hear the
second. If option 2 is ever taken, the tense is the deliverable.

**Revisit if:** a Foundation client hires a designer — the trigger `Offer.md`
already names — or a prospect asks what happens to Figma often enough that the
current answer stops covering it. Whichever shape wins becomes an explicit line
in `Offer.md` or a Retainer conversation, not an improvisation on the call, and
not scope invented inside a fixed price.

---

## 2026-08-17 — The mirror gets an Offer.md line, triggered and priced apart

**Decision:** Of the three shapes set out in the entry above, the mirror now has
explicit words in `Offer.md`. It sits in the trigger passage as the smaller of
two answers available when a Foundation client hires a designer: flip, or
mirror. It is **not** in the Foundation's fixed scope, and it is quoted
separately at the point it is wanted.

**Why triggered rather than bundled.** Putting it in the Foundation would have
contradicted a line already in the document, that what we are not doing today is
building a Figma file nobody is opening yet. A Foundation client by definition
has no designer, so a mirror delivered at handover is precisely a file nobody is
opening. Triggering it on the designer arriving keeps that sentence true, keeps
the £4,000 fixed, and puts the work at the moment `Offer.md` already names as
when the direction of truth gets settled.

**The copy says three things deliberately.** That the code stays the source and
Figma is generated from it. That it is generated once and not maintained, said
plainly rather than buried, because a Figma file drifting quietly from the
source is worse than no Figma file. And that keeping it current is either the
flip or a Retainer line, so the maintained version has somewhere to go rather
than being smuggled into a one-off.

**Left blank on purpose: the price.** The line says "quoted separately at the
point it's wanted" and names no figure, because inventing one is Warren's call
and not mine. That is a soft edge in a document whose whole discipline is
bounded, priced work, and it should be closed with a real number the first time
someone asks.

**What this does not decide.** Nothing about which answer any given client
should get. Flip against mirror is still a decision at the trigger, with a real
piece of work behind either. This only means both are written down, where
before only the flip was.

**Revisit if:** a real trigger arrives and the quote has to be invented on the
spot, which is the signal the blank price has cost something.

---

## 2026-08-17 — If the mirror is built, it is automated. Manual is retired.

**Decision:** Warren settled the *how*: JSON→Figma mirroring will be automated
or it will not be offered. The hand-maintained mirror, with a periodic human
diff as its mitigation, is retired as an approach. Whether to build it at all is
still open, and depends on a constraint named at the bottom of this entry.

**The scale is what settles it.** `SETUP.md` records five collections mirroring
the JSON 1:1 — Primitives, Semantic, Fonts, Spacing, Radius — and
`verify-build` counts 117 tokens. The 2026-07-09 entry's mitigation was me
remembering to diff that against `tokens/src/*.json`. One operator, 117
variables, no automation, and a note to check periodically. That was never going
to hold, and `SETUP.md` flags its own Figma section as "trusted, not confirmed",
so the Orin file may already have drifted and nobody has looked.

**The defence, in its stronger form: the short-term contract designer.** Warren's
framing, and better than the general "buys evidence" version. A contractor is
temporary by definition, so handing them the source of truth is obviously wrong,
and when the contract ends there is nothing to unwind.

**With one correction: the guardrail is not the mirror.** The mirror enforces
nothing; a Figma variable is a suggestion a designer overrides with a typed hex
in two seconds. The guardrail is *the decision not to flip* — truth stays in
code, held by the people who remain. The mirror's job is to remove the
designer's legitimate complaint that they cannot see the tokens, which is what
makes not-flipping tolerable to work under rather than obstructive. Control and
courtesy, and they are different things.

**What would make "guardrail" literally true: a check mode.** Automation that
only pushes is a favour. Automation that also reports where the Figma file has
diverged from the JSON — a variable the designer added, an alias overridden with
a raw hex, a collection left behind — is a control that can fail, which is the
standard checks 7 and 9 were held to today and the standard 2026-08-01 set. It
is the automated form of the periodic diff, and `sync:figma --dry-run` already
does diagnostics in the other direction, so the shape is symmetrical.

That is also the sellable difference. "We generate your Figma file" is a favour.
"We tell you when your Figma file stops agreeing with your code" is a guardrail,
and for a contract designer it covers the risk that actually matters: finding
out whether they invented things before the contract ends rather than after.

**The naming collision, re-flagged.** Two artefacts share one name: the `Orin
Token Pipeline` *repo* (the client baseline, Figma authors and code consumes,
what is for sale) and the `Orin-Token-Pipeline` *Figma file* (Orin's own, a
mirror target populated from the JSON). Same name, opposite directions. The
2026-08-16 infographic entry already caught a version of this and marked it
"Settle this before any markup." Still unsettled, and it is now a live trap on
a call, because a mirror conversation puts both artefacts in the same sentence.

**The constraint to resolve first, before any build.** Figma has gated the
Variables REST API by plan, with the variable endpoints restricted to
Enterprise. If that still holds and clients are not on Enterprise, REST-based
mirroring is unavailable and this becomes a Figma plugin, which is a different
build with different distribution. The evidence is in the baseline repo: check
how `sync:figma` currently reads variables, and note that the write direction
may be gated differently from the read. This decides whether the thing is a
script or a plugin, so it is the first question, not a detail.

**Consequence for the `Offer.md` line written earlier today.** It promises a
mirror "generated once and not maintained." If automation with a check mode
lands, that copy becomes an undersell and should be rewritten to "regenerated on
demand, drift reported" — a better product, and probably a different price than
the blank currently sitting there.

**Revisit if:** the API gating question is answered, which unblocks the
build-or-not decision. Also if a Foundation client hires a contractor before any
of this exists, in which case the honest answer is the manual one-off, sold as
exactly that.

---


**Decision:** [What was decided.]

**Reasoning:** [Why. Include the context, the alternatives considered,
and the specific factor that tipped the choice.]

**Revisit if:** [The condition under which this decision should be
re-examined. If none, say so explicitly.]
