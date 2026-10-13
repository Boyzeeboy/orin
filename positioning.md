# Orin — Positioning

*Version 2.0 — 13 October 2026. The product is the React
package; the pipeline is how it gets built. Version 1.1 (14 July) is in git
history, and `decisions.md` 2026-10-13 says what changed and why.*

---

## One-liner

I turn your Figma library into the React package your developers ship from.

---

## Who it's for

Product teams with a Figma library and a React app that have drifted apart.
Usually one or two designers, a bigger development team, and a gap between
them that the developers fill by guessing.

The second buyer is a founder starting a new product on React, who has no
Figma library yet. They come in through the Foundation, which is code-first.

---

## 60-second version

When a team has a Figma library and a React app, something has to connect
them. Usually that something is a developer, looking at a component in Figma
and guessing. What's that padding? Which grey is that? What happens on hover?

Every guess is slightly different. So you end up with three versions of the
same button, and nobody chose any of them. Nobody's fault. The connection is
missing.

So I build it. The tokens come out of Figma into code. Each component gets a
contract taken from its Figma source, and the React code is checked against
that contract on every pull request. What comes out the other end is a
versioned package your app installs. Your designers keep working in Figma,
your developers install the package, and something checks that the two still
match.

I did a version of this at Vivo Energy, contracted via Rethink. No design
system, every developer making design calls alone. I put in a component
library, page patterns and tokens. Fewer defects, less rework, and a 60 per
cent saving in development time.

And I run the same pipeline on my own system, IDEM. The first time I checked
its Figma file, 3 of 43 components could be built without someone guessing a
value. 40 components now ship in the package, each one checked against its
Figma source.

That's the work. Figma at one end, a package your developers install at the
other, and checks in between so they stay the same thing.

---

## What carried over from 1.1

"The design system your developers ship from." The phrase survives because
the package is literally the thing they ship from now, where in July it was a
metaphor.

The worldview underneath is unchanged: design and development are one craft,
the system is the main thing, and Orin builds working things.

## What 1.1 said that 2.0 drops

**"For teams shipping without a full design department."** The component
pipeline reads a Figma library, so the buyer it serves has a designer, or had
one. Teams with no Figma at all still have a way in, the Foundation, but they
are no longer who the one-liner speaks to.

## What it does not claim yet

- **That it works on any Figma file.** The component machinery has read one
  file, mine. Two files I didn't design are being checked first
  (ORIN-140). Until that's done, say "on my own system" out loud.
- **That it fits any React stack.** It assumes React, TypeScript and
  Storybook. What happens when the client already runs MUI or shadcn isn't
  written into `Offer.md` yet.

---

## 3-minute version

*To be written.*
