# Stefan — Monday 24 August, from 13:00

Proposal sent over the weekend, so he has read it. Internal prep, not a
document to share.

**What this call is for: turning "seems like a logical approach" into a start
date and a number.** He has already agreed the problem is real. Nothing needs
selling. If the call ends without a decision or a named next step with a date
on it, it did not work.

---

## Before you dial

- [ ] Know the rand figures. £3,000 and £12,000 to £18,000 at Friday's rate.
      He will do that arithmetic in his head and you should not be behind him.
- [ ] Have a start date in mind and the two weeks after it clear.
- [ ] Have the referral answer ready. Names, or a date by which you will have
      names.
- [ ] Decide whether you can start before a contract is signed. You probably
      cannot, so know what the minimum paperwork is.

## Do not

**Do not demo the pipeline again.** It won Thursday and it cannot carry
Monday. He needs the business argument now.

**Do not diagnose further.** Findings are the product. Naming *that* you have
seen something is fine. Explaining it is the two weeks.

**Do not fill silence with more thinking.** You have done more of that than
anyone in the building. The gap in this call is the ask.

---

## 1. Open by inviting the correction (5 min)

He asked for something his team could correct. Give him the opening rather
than presenting.

> "You asked me to write it up so you could tell me where I had it wrong.
> What did I get wrong?"

Then listen. What he corrects tells you where the resistance is, and whether
anyone else has read it yet.

Follow with: **who else has seen it, and whose yes do you need?**

Likely more than Stefan. Mauritz owns the EAM product that Material Manager
sits inside, and he asked on the call what he and Darren are actually signing
off. Gerhard has to live with whatever gets built. Both have a veto in
practice even if neither has one on paper.

## 2. Three things to say, mostly as questions (15 min)

These are the parts deliberately kept out of the document. Ask rather than
assert. He gets there himself and it costs him nothing to agree.

**Infrastructure, not a project.**
> "How is the design system funded next year? Is it a project with an end
> date, or a line that persists?"

The mandate for the year was to build it alongside a module migration. If he
reaches the conclusion himself that it does not have a finish date, the
retainer stops being an upsell and becomes obvious.

**Continuity.**
> "If Amanda or Gerhard were unavailable for a month, what happens to the
> system?"

Today the answer is that it stops, because it lives in a Figma file and in
two people's heads. This is the argument a business person feels, and it is
better than velocity.

**The two UIs.**
> "When Material Manager goes live beside the old UI, what happens to a
> planner who meets both inside one session?"

Gerhard is already hand-patching tokens into the old UI for consistency. Shared
tokens are the only mechanism that makes that transition coherent. Ask the
question, let him answer, then name the mechanism.

**One thing to state rather than ask:** the rules layer he wants for the BAs
has to come after the substrate, not instead of it. Rules that constrain
generation have to constrain it towards something versioned and true. On the
current substrate you get confident, consistent, wrong output at speed.

## 3. The commercial mechanics (10 min)

Ask these plainly. They read as someone who has done business before.

- [ ] **What is your approval threshold, and does this need procurement?**
      £3,000 is roughly R70,000 and may sit above what he can sign alone.
- [ ] **What are your standard payment terms?** The engagement letter says 14
      days. Expect 30 and decide whether you mind.
- [ ] **Who signs, and how long does that take?**
- [ ] **When could I start?** Have a date ready.
- [ ] Figma seat with **edit** rights, and read access to the UI repository.

## 4. Capacity and the referral (5 min)

He asked in writing, so answer it in the call.

Give names or a date. Then the boundary, once, lightly: whoever arrives will
be working inside the same master file, so it is worth agreeing how they slot
in before they start.

If he pushes you towards screen production, the line is that he gets better
value from you on the system than in the sprint queue, and that reviewing
components and being the person Gerhard and Amanda can call is already in the
retainer.

## 5. Ask for the work (5 min)

The part most likely to get skipped.

> "So the first step is the two weeks. Shall I send the engagement letter
> today?"

Then stop talking.

**If he cannot decide on the call**, do not leave it vague. Get one of:

- A date by which he will decide.
- The name of whoever else has to agree, and an offer to speak to them.
- What specifically is missing that would let him say yes.

## 6. Ask for Gerhard (2 min)

Only if Gerhard is not on the call.

He is the veto and he has not been won. Ask for thirty minutes with him this
week. Three things to land when you get it, all in his language:

- The codebase change is **incremental**. No big-bang refactor, no sprint
  surrendered.
- Everything generated stays inside MUI's supported theming surface, and that
  is a written commitment.
- The theme comes out as TypeScript, so a wrong palette path is a compile
  error rather than a component silently falling back to an MUI default.

---

## If it goes sideways

**"Can you just do the assessment and we will talk after?"**
The assessment is the two weeks. The ten minutes of running a script is free
and you would do it on this call. What the fee buys is being told which of its
findings matter.

**"We would rather start with design capacity."**
Fair, and it is a different job. Take the referral route, and say the systems
work is what stops the capacity being spent on rework.

**"Our AI team could build this."**
Probably, given time. It is Style Dictionary, six checks and a convention.
What takes the time is knowing which checks matter, and that came from
watching a real system break.

**"The budget is not there this year."**
Ask when the financial year turns and what would need to be true. Amanda has
already put a Figma seat for you in next year's budget, so the machinery
exists.
