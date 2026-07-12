# Orin — Decisions Log

A dated record of significant decisions and the reasoning behind them.
Written in past tense at the moment of the decision, not retroactively.
Future me should be able to read this and understand why present me chose
what I chose, even if the answer would be different now.

Format: date, decision, reasoning, revisit-if.

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

## YYYY-MM-DD — [Short decision title]

**Decision:** [What was decided.]

**Reasoning:** [Why. Include the context, the alternatives considered,
and the specific factor that tipped the choice.]

**Revisit if:** [The condition under which this decision should be
re-examined. If none, say so explicitly.]
