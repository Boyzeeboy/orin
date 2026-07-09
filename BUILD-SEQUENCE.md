# Orin — Phase 5 Build Sequence

*Version 1.0 — 9 July 2026*
*Purpose: the order to build the five-page site in, and the foundation
gaps to close before assembly starts. Companion to PHASE5-BUILD.md
(which holds the approved copy and the constraints). This file is the
method; that file is the content.*

---

## The principle

Build the site the way Orin would roll out a client design at MVP
tier: **substrate first, then assembly, ship live as you go.** The
efficiency comes from the order — get the primitive layer solid once
and every page after is composition, not design. The temptation to
perfect each page before moving on is the thing to resist; the real
cost of a five-page site isn't the pages, it's the primitives being
inconsistent across them. Lock the kit and that can't happen.

Design in the browser, not in Figma. The token layer is already live
and the type scale is the visual — a Figma round-trip for five
text pages would reintroduce the handoff-where-value-leaks that Orin
exists to delete. (A Figma deliverable for showing clients the *method*
is a separate Phase-6 artefact; don't let it precede this build.)

Honour the definition of done as a **stopping rule**: the moment a
stranger clears "what / who / cost / credibility / contact in 90
seconds," ship and stop polishing. MVP over polish — the manifesto's
own rule applies to its website.

---

## Step 0 — Close the foundation gaps first

Do these before building any page. Each is cheap now and expensive
mid-assembly (you'd build the button three times, discover the missing
token on page four, etc.). Full reasoning in the kit review; the
short list:

**Token additions (JSON → build → sync — the one loop):**

1. **Accent surface tokens for the primary button.** The button appears
   on three pages and no button surface token exists — only
   `colour/text/link`. Add semantic tokens so the button isn't built on
   a text token:
   - `colour/background/accent` → `{teal.500}` (white text on it = 5.4:1, passes AA)
   - `colour/background/accent-hover` → `{teal.600}`
   - `colour/text/on-accent` → `{neutral.0}`

2. **Decide the inverse-section question now.** `colour/background/inverse`
   exists and the Close section is a natural dark band. But `text/link`
   (teal.500) on the dark ground fails contrast (2.4:1). Either
   (a) keep any inverse section to heading + white-filled button only,
   no inline links — no new token needed; or
   (b) if inverse sections will carry inline links, add
   `colour/text/link-on-inverse` → `{teal.300}`. Pick (a) for MVP unless
   a section design demands links on dark.

**CSS / structure additions in `styles.css` (the primitives budget):**

3. **Button primitive** — `.button` (primary): accent background,
   on-accent text, `--orin-radius-md`, `space-3 space-6` padding, own
   `:hover` and `:focus-visible`. This is the single biggest gap.
4. **Section wrapper that supports full-bleed backgrounds** — split the
   current single `.wrap` into an outer full-width band (carries the
   background, e.g. inverse) + inner `.wrap` (carries the 68ch measure).
   Home needs section rhythm and at least one candidate inverse band;
   the current `.wrap` can't do a full-bleed background.
5. **Case-study card** — for /work. Border + `background/raised` +
   `radius-md` + padding. Tokens already exist; it's assembly, but it's
   a primitive to define once.
6. **Nav wraps on small screens** — `.site-nav` is a fixed flex row of
   five links; at 360px it overflows. Add `flex-wrap: wrap` (and confirm
   in the QA 360px check). There are no media queries anywhere yet.
7. **Skip link + `<main id>`** — add a visually-hidden "skip to content"
   link and an `id` target on `<main>`. Required for the keyboard-nav
   QA step.
8. **`prefers-reduced-motion`** — wrap the colour transitions. Cheap,
   and correct.

**Robustness / housekeeping (not blockers, but fix in Step 0):**

9. **Make `data-include` paths absolute** — `partials/nav.html` is
   relative and will 404 from a pretty URL served with a trailing slash.
   Use `/partials/nav.html` and `/partials/footer.html`.
10. **Preserve, don't delete, the specimen CSS.** The comment in
    `styles.css` says "delete when real pages land," but the Phase-5 rule
    is to *move* the token demo to `/tokens`. Keep the `.swatches` /
    `.specimen-*` rules and scope them to that page.
11. **SETUP.md is stale on fonts** — it still names Source Serif 4 for
    prose; the tokens and the fonts link are Inter. Correct the note so
    it doesn't mislead a later session.

Run `cd tokens && npm test` (build → sync → verify-build → report 8/8)
after the token additions, before touching pages.

---

## Step 0.5 — Layout foundation (Home "modern grid" refinement)

*Added 9 July 2026 after Home v1. Warren supplied a reference comp
(Stripe/Resend-style structure) — and it's already drawn in Orin's own
palette: the reference's swatches are the existing tokens. So we adopt
its **structure**, keep Orin's restraint, and keep the approved copy.
The visible grid and numbered sections reinforce the systems-practice
positioning — the site shows its grid the way it shows its tokens.*

**Locked choices (9 July 2026):**

1. **Visible grid + left rail.** Numbered section labels in a persistent
   left rail (01 HERO, 02 THE PROBLEM…) plus a faint 12-column overlay in
   the hero. Teal, uppercase, using the existing `.eyebrow` treatment.
2. **Proof stays approved prose.** No stat table, no invented metrics —
   the Vivo paragraph (with its 60% figure) placed in the new two-column
   layout. PHASE5 "assemble, don't rewrite" holds.
3. **Do not invent content the approved copy lacks.** No ✕ problem-list,
   no three sub-services under "What Orin does." Only Section 4 has three
   items in the approved copy (Diagnostic / Build / Retainer) → that's
   the three-card row. Everything else stays as written.

**Token additions (`layout.json` → build → sync):**

- `container.max` = `75rem` (~1200px) — the wide content container.
  Prose still clamps to ~68ch *inside* it (wide scaffolding, narrow text).
- `breakpoint.sm` `40rem`, `breakpoint.md` `48rem`, `breakpoint.lg`
  `64rem` — single-sourced here for documentation.
- No new colour or font tokens — the reference is already on-palette.
  Reuse `space-6` for grid gap/gutter, `radius-md` for cards.

**The one documented exception to the token law:** CSS `@media` cannot
read custom properties, so breakpoints can't resolve through `var()`
like every other value. Keep the JSON the single source and reference the
breakpoint *values* by comment in each `@media` block. Log this as the
deliberate exception — it's the honest systems answer, not a hole in the
guardrail.

**Primitives (`styles.css`):**

- `.container` — `max-width: var(--container-max)` (aliased from the
  token), `margin-inline: auto`, inline padding `space-6`.
- `.grid` — 12-col CSS grid (`repeat(12, 1fr)`, gap `space-6`). The
  column count is a structural constant, not a token.
- **Section + rail** — each `.section` places its number/label into grid
  column 1 and its content into the remaining columns. Two-column bodies
  place heading and body onto the grid (e.g. heading cols 2–6, body 7–12).
- **Hero overlay** — an `aria-hidden` decorative layer drawing 12 faint
  vertical hairlines (`border/divider`) with 01–12 labels, hero only.
- **Fluid hero type** — `h1` uses `clamp()` between the existing
  `size-1000` and `size-1100` tokens; the vw interpolation term is local
  layout mechanics (like `--measure` / `--ease`).
- **Cards row** — the three priced blocks become a responsive row:
  `repeat(auto-fit, minmax(~16rem, 1fr))`, stacking below `md`. Add
  01/02/03 numbering, a hairline, and "What's included →" to match.

**Responsive — fluid-first:** default to `clamp()` type/padding and
`auto-fit` rows so few breakpoints are needed. At `< lg`, two-column
sections stack (the rail number/label moves above the heading) and cards
stack. Nav already wraps.

**Per-section layout map (copy unchanged from PHASE5-BUILD):**

1. **Hero** — rail "01 HERO"; faint 12-col overlay; clamp `h1`; muted
   subhead; accent button.
2. **The problem** — rail "02"; heading left, approved paragraph right
   (prose, not bullets).
3. **What Orin does** — rail "03"; heading left, approved paragraph +
   "View the tokens →" right. Do **not** split into sub-services.
4. **How it works** — rail "04"; three priced cards, auto-fit row,
   numbered.
5. **Proof** — rail "05"; heading left, approved Vivo prose right (keep
   the 60% figure in prose; no stat table).
6. **Close** — rail "06 LET'S BUILD"; inverse band; heading left, button
   right (button, not link — honours the inverse-link decision).

The reference's "07 SYSTEM" colophon strip is already satisfied by the
`/tokens` page and the quiet footer link — no inline duplicate needed.

**Done when:** `cd tokens && npm test` → 8/8, verify clean; Home reflows
to the grid at ≥`lg` and stacks cleanly at 360px; the layout decision and
the `@media`/breakpoint exception are logged in `decisions.md`.

---

## The build order

1. **Lock the kit.** Land the Step-0 primitives against the tokens. The
   existing token demo page is effectively your kit-in-use — freeze it
   as the reference once the button/section/card exist.

2. **Build Home, ship it live immediately.** Highest-value page and the
   one that forces every primitive into existence. Six sections from
   PHASE5-BUILD.md, copy assembled not rewritten. Move the token demo to
   `/tokens` (don't delete it — it's the proof-for-technical-buyers and
   backs the "this site runs on the pipeline it sells" claim); link it
   quietly from the footer.

3. **Clone across the remaining four** — Manifesto (65–75ch long-form,
   no decoration), How it works (three priced blocks, single CTA),
   Work (three cards, essays marked coming soon — do not draft them),
   Contact (heading, two sentences, mailto). These are ~90% type poured
   into the same primitives. Build no new component unless a page truly
   demands it.

4. **One QA pass at the end, batched** — keyboard nav end to end,
   visible focus states, AA contrast, 360px layout, Lighthouse, per-page
   meta descriptions, OG tags (outreach links must unfurl), favicon,
   one-line 404 with a link home.

5. **Declare v1** — log the launch in decisions.md: date, what shipped,
   what was deferred. Then stop building.

---

## Phase 6 — deferred polish (do not do during v1)

Nice-to-haves surfaced by the reference comp that v1 deliberately skips.
None is a foundation gap; each is a small addition once the five pages
ship and clear the 90-second test.

- **Fuller footer** — the reference footer carries logo, © line, contact
  email, and a repeat of the nav. Current footer is one line. A richer
  footer is pure assembly from existing primitives (no new tokens).
- **"Title 20" type step** — the reference type scale includes a 20px
  title (1.25rem) between `size-500` (18) and `size-600` (24). Not in the
  current scale. Add as a token only if a page actually needs that step;
  don't add it speculatively.
- **Shadow / elevation token** — the reference shows a faint card shadow
  (`0 1px 2px rgba(31,52,58,0.04)`). Cards are border-only for v1. If
  elevation is wanted later, it's a token proposal (`shadow/*`), not a
  literal.

These are polish, not parity blockers — v1 ships without them.

---

## Guardrails that don't move

- Every value resolves through the token layer. A value the design
  needs but doesn't have is a **token proposal** (edit JSON, rebuild,
  sync) — never a literal in `styles.css` or a page.
- `npm test` green (report 8/8, verify clean) before every push.
- One CTA sitewide: "Get in touch." No new components beyond the budget
  in PHASE5-BUILD.md. British English, first person singular.
