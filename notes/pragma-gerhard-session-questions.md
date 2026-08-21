# Gerhard — questions

UI architect. Owns all UI development. **He is the veto on this engagement and
he has not been won.** Thirty to forty-five minutes, asked for on Monday's call
if he is not on it.

**★ = must get.**

This session has two jobs and they pull in different directions. Get the
technical facts the Build depends on, and give him reasons to stop resisting.
Do the second by asking rather than telling. He pushed back twice in the group
meeting and both pushes were fair, so treat him as a colleague diagnosing the
problem with you rather than an objection to handle.

---

## Open with his diagnosis, not your pitch

- [ ] ★ **"What would you fix first if you had a clear month?"**
      His answer tells you where the real pain is and whether it is anywhere
      near where you are pointing.
- [ ] What have you already tried, and what stopped it?
- [ ] ★ **You asked Amanda for something about the token naming and she said
      it is not a simple solve. What was it?**
      She raised this unprompted. There is a specific request sitting there
      and it is probably the fastest thing you could fix for him.

## A. The theme, and how tokens reach the code

- [ ] ★ Which MUI version, and is CSS-variables mode switched on?
- [ ] ★ Where does the theme live today? One file, hand-typed, or generated?
- [ ] Is it a package the app depends on, or a folder in the app repo?
- [ ] How does a value get from Amanda's Figma into your theme right now?
      Copy and paste, or something more?
- [ ] Is the paid MUI Figma kit Material 2 or Material 3? You ship M2
      deliberately, so an M3 kit means a mismatch is already there.

## B. How much bypasses the theme

This is the number that sizes the Build on their side.

- [ ] ★ Roughly how much hex and px is typed inline in `sx` and `styled`?
- [ ] Do you use `styleOverrides` on MUI slots, and does anything reach into
      MUI's internal selectors?
- [ ] Would you object to a check that fails a build on a colour literal?
      **Ask this directly.** If he says no, the guardrail is agreed before it
      is built. If he says yes, you need to know why now.
- [ ] What does your CI run today, and is it Azure DevOps Pipelines?

## C. The old UI

- [ ] ★ You pushed tokens into the old UI for visual consistency. What did
      that involve, and how are they kept current?
- [ ] Both UIs land in one production environment and a user meets both in a
      single session. What is the plan for that?
- [ ] How much of the old UI will still be live in a year?

**This is the conversation where the two-UI argument belongs**, more than with
Stefan. Gerhard has already solved it by hand, so he will recognise the
mechanism immediately. Let him get there.

## D. White labelling

- [ ] ★ Is it a commitment or an aspiration, and how many brands?
- [ ] Does each brand need light and dark, or is white label light only?
- [ ] When does it land?

This is the single biggest cost driver in the Build. Two schemes is what the
pipeline does today. Any third triggers work across fourteen files, and the
count after that is nearly free.

## E. Storybook, and what he actually meant

- [ ] ★ **"When you said you weren't sure what Storybook gives you, did you
      mean you don't want it, or that you're not worried about how design
      connects to your world?"**
      Amanda genuinely does not know which he meant and it is holding up her
      planning. Ask it plainly and settle it for both of them.
- [ ] What is the existing endpoint wired to, and is it live?
- [ ] Do you have any visual regression testing today?

## F. His view of the design system

- [ ] What do you consume from Amanda's file, and how?
- [ ] When she changes something, how do you find out?
- [ ] What would you want to be true about the design system that isn't?
- [ ] Have you seen Darren's MCP output? What did you make of it?

---

## Three things to land, in his language

Do not lead with these. Bring them in where they answer something he raises.

**The codebase change is incremental.** The theme file becomes generated,
which is one pull request. Everything else is literals cleaned up as they
surface. No big-bang refactor, no frozen sprint, no ceremony.

**The MUI restraint is a written commitment.** Palette, typography, shape,
spacing and `styleOverrides` on documented slots. Nothing reaching into MUI's
internals from outside. Where a component needs something the theme cannot
express, that is a finding that goes back up rather than a deep selector.

**TypeScript does half the guardrail for free.** The theme is emitted as `.ts`,
typed against MUI's own `Theme`, so a wrong palette path is a compile error
instead of a component silently falling back to an MUI default. This is the
one most likely to change his mind, because it costs him nothing at upgrade
time.

## If he raises "our variables barely change"

He is right, and say so. The gate earns its place on artefacts rather than on
change frequency: it stops a value entering that cannot work, and it makes a
release solid enough to sign off against. Then ask him what he currently
builds and tests against, because that is his own unanswered question from the
group call and nobody has given him an answer yet.

## What not to do

**No demo.** He understood it in one sentence the first time.

**No diagnosis.** Findings are the two weeks.

**Do not oversell the pipeline to him.** What he actually lacks is something
stable to build against. Solve that and the pipeline is simply how it
happens, which is a much easier thing for him to agree to.
