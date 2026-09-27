# Six substrate checks the Diagnostic should run

*Written 27 September 2026 from ORIN-49. Every check here fired on a
real system: IDEM, my own, which I would have described as working.
Nothing is speculative, and the "found" column is the reason each one is
worth a client's time.*

---

## How these fit the engagement, which matters more than the list

`Offer.md` §1 already draws the line this list has to respect. The
Diagnostic **installs** the repo-side report, which the client runs
unsupervised forever after. The drift comparison is run **with** them
during the week and never handed over, because a check that can quietly
say "fine" when it is not fine must not run unattended.

So each check below is one of three kinds:

- **Installs.** Static, repo-side, no live read. Joins the report and
  keeps naming what is unfixed, every build.
- **Run with them.** Needs a live Figma read or judgement. Happens in
  the week, goes in the write-up, does not ship.
- **A question.** No tool. Something to ask in the first meeting, where
  the answer is the finding.

And three of the six are **refinements to checks the baseline already
has**, not new ones. That distinction is what makes this a day of work
rather than a project.

---

## 1. Every authored token file reaches the build

**Kind:** installs. **New.**

Read the build config's `source` list. Read the token directory. Diff.
Any authored file the build never compiles is reported by name.

**Found on IDEM:** `size.json` and `typography.json`, authored,
versioned, shown in Storybook, and compiled by nothing. Every component
needing padding, radius or a type size had no token to reach for.

**Say out loud:** *"You have spacing and typography in source and none of
it is in your CSS. Nothing is wrong with the files. Nothing has ever
asked them a question."*

**Why it belongs in the report rather than the write-up:** a document
saying "two files are uncompiled" is true the day you write it. A check
says it again on the day someone adds a third.

---

## 2. A token typed `number` whose description names a unit

**Kind:** installs. **Refines baseline check 3**, `dimensions carry
units`, which exists for the line-height:80 bug.

The existing check catches `$type: dimension` with a bare value. IDEM's
escaped it by being `$type: number` with a description reading
"0.1px letter spacing". Extend the check: a `number` token whose
description mentions px, rem or em is either mistyped or misdescribed.

**Found on IDEM:** all 15 letter-spacing tokens, emitting
`letter-spacing: 0.1`, which is invalid CSS. Invisible until the file
was compiled for the first time.

**Say out loud:** *"These say px in the description and carry no unit in
the value. One of the two is a lie, and the build believes the value."*

---

## 3. Literals in the token source, not just in consuming code

**Kind:** installs. **New.** The baseline has three checks for literals
in code (`no hardcoded hex in site`, `no hardcoded font-family`,
`no local custom properties`) and none for literals in the token files
themselves.

A hardcoded hex in a token source still resolves, still builds, and
still passes every downstream check. It is only visible against its
neighbours: a literal sitting in a file of aliases.

**Found on IDEM:** two `focus/text` tokens as raw hex in a file where
almost everything else was an alias. One of them was white on a light
grey button at 1.40:1, and it had been there long enough that nobody
looked.

**Say out loud:** *"Everything around this is an alias and this is a
value. Somebody was in a hurry, and the system cannot tell."*

---

## 4. Contrast on the bindings, not on the palette

**Kind:** installs, where they have component tokens. **New, and already
ticketed as ORIN-46** on the Orin baseline.

Checking a palette proves colours exist. Checking *bindings* proves the
ink a component actually puts on the background it actually uses passes
AA, in every mode. Disabled states are exempt under WCAG 1.4.3, and the
exemption should be declared rather than assumed.

**Found on IDEM:** seven of twenty Button combinations failing, traced to
**one** semantic token being white in dark mode where the brand ramp is
light. One wrong value, three failures, through aliases.

**Say out loud:** *"Your palette is fine. Your buttons are not. The
difference is that nothing has ever checked which colour lands on which
surface."*

---

## 5. Does the documentation consume the system?

**Kind:** a question first, then installs. **Partially covered**: the
baseline scans the site, and **ORIN-47** exists because that scan only
reads `.css`, `.html` and `.js` and skips whole stacks. Storybook is
exactly the surface it misses.

Ask it before running anything. The answer is usually "of course", and
it is usually wrong.

**Found on IDEM:** 188 contrast failures across the five stories that
document the system, because they are styled with hardcoded hex rather
than the tokens they teach. Nobody had ever run axe on them.

**Say out loud:** *"Your documentation does not use your design system.
It describes it."*

**Why this one lands hardest in a first meeting:** it needs no access, no
setup and no permission. It is a question, and the discomfort does the
work.

---

## 6. Accessibility of the design source, not only the code

**Kind:** run with them. Judgement, not a script.

Everyone audits the built product. Almost nobody audits the file the
product is built from. If the design has no focus state, the code either
invents one or ships without one, and both are somebody's judgement call
made silently.

**Found on IDEM:** the primary button's focus variant was pixel-identical
to its resting state in both modes. No effects, transparent border,
focus background aliasing the base background. A WCAG 2.4.7 failure in
the source, which the code had been quietly covering with an outline the
design never specified.

**Say out loud:** *"Your focus state is in the code because a developer
put it there, not because the design asked for it. Nobody decided this."*

---

## The one that does not fit, and belongs to the Build

**A component bound to a variable that does not exist.**

IDEM's Button font weight was bound to an id in no collection's variable
list, while the real token was a different variable. Both resolved to
500, so the design rendered correctly and editing the real token would
have done nothing.

This needs a name-level diff between the design source and the contract,
which means the component layer exists, which means the Build. It cannot
be a Diagnostic check because there is nothing to diff against yet.

It is worth *mentioning* in a Diagnostic, as the thing the Build catches
that nothing else can.

---

## What to build, in order

| | Work | Why first |
|---|---|---|
| 1 | Checks 1 and 3 | Pure static, no config, no live read. Half a day, and they found three of the ten |
| 2 | Extend baseline check 3 (check 2 above) | A few lines on a check that already exists |
| 3 | Check 4 (ORIN-46) | Already ticketed, already argued, now has an instance |
| 4 | Check 5, via ORIN-47 | Needs the profile-aware scanning that ticket describes |
| 5 | Check 6 | No code. A page in the runbook |

Checks 1, 2 and 3 are a day and cover four of the ten defects. That is
the whole of the near-term work.

---

## The line to be careful about

Every finding here came off **my own greenfield system, built and
maintained by one person.** None of it came off a client.

That is the argument rather than a caveat, and it is how it should be
said: if a system one person designed, with a real pipeline and real
guardrails, hides ten faults until something looks, a system a team built
over three years hides more. The difference is not care.

What it is not is a promise that a Diagnostic finds ten things. Do not
say a number. Say what the checks look for, and let their system answer.
