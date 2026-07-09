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

## Guardrails that don't move

- Every value resolves through the token layer. A value the design
  needs but doesn't have is a **token proposal** (edit JSON, rebuild,
  sync) — never a literal in `styles.css` or a page.
- `npm test` green (report 8/8, verify clean) before every push.
- One CTA sitewide: "Get in touch." No new components beyond the budget
  in PHASE5-BUILD.md. British English, first person singular.
