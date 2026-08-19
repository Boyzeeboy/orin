# The Foundation's guardrail checks mode parity by key, not by value

*Filed 19 August 2026. A gap in the product, not only in the prose. Found while
checking `notes/foundation-shadcn-sheet.html` against the adapter it describes.
Everything below was read out of `notes/shadcn-adapter/`, and the absence was
confirmed by grep across both scripts rather than inferred.*

## What is there

`guardrail.mjs` check 2 compares key sets:

```js
for (const name of lightKeys) {
  if (!darkKeys.includes(name) && !MODE_EXEMPT.has(name)) {
    fail('mode-parity', `--${name} defined in light but not dark`);
  }
}
```

That catches the failure its own comment names: a token present in one mode and
absent in the other, which it calls the single most common shadcn theming bug.
`radius` is exempt, correctly, being mode-invariant by design.

## What is not there

No comparison of light and dark **values**, anywhere. Not in `guardrail.mjs`, not
in `build.mjs`. A token defined in both modes and resolving to the same value in
both passes every one of the five checks.

That is the exact defect the baseline exists to catch, and the reason it exists.
In July 2026 alias resolution matched Figma's per-collection mode ids, so every
cross-collection alias fell back to Light and 148 of 150 dark colours silently
carried their light values, for months, past every gate that existed. The check
written afterwards is `mode-parity` **by value**, and the comment above it is
explicit that key parity is not a substitute: key parity already passed
throughout that incident.

Orin's own site has the same check. The Foundation does not.

## Is the failure even reachable here?

Worth asking honestly, because the mechanism differs. In the baseline the bug came
from Figma alias resolution. In the Foundation, dark is authored in
`src/extension.dark.json` and `src/contract.dark.json` and built from source, so
there is no alias resolver to get mode ids wrong.

That makes the *original* mechanism unreachable. It does not make the *defect*
unreachable. A dark contract that repeats a light value, whether typed, pasted or
left behind when a light value moved, produces the identical outcome: a theme
that exists in the file and does nothing on the screen. Nothing in the adapter
would say so.

And the fix the baseline arrived at is not "resolve aliases correctly," it is
"compare the values and make somebody justify each identical pair." That
conclusion travels to any stack with two modes, including this one.

## What adding it would look like

The baseline's shape ports almost directly. Collect the colour-typed entries from
the built light and dark bundles, compare, and fail on any pair that is identical
and not declared. The declaration belongs in the adapter's config with a reason
per entry, the way `modeParity.expectedIdentical` does in `pipeline.config.mjs`
and the way `report.allowedPrimitives` already does for the semantic-only check.

Two Foundation-specific details to get right:

- **`radius` is already mode-exempt** for key parity and would be exempt here for
  the same reason, but by a different rule: it is not a colour, so a value
  comparison scoped to colours never sees it.
- **shadcn's channel syntax.** These values are `173 100% 26%`, not `#00d9c0`, so
  the comparison is a string match on the channel triplet rather than on hex.
  Simpler, not harder, but it means the baseline's `/^(#|rgba?\()/` filter cannot
  be copied verbatim.

## Why it was not built today

Nothing needs it this week. No Foundation engagement has been sold, the adapter
has no consumer yet, and the sheet that overstated it has been corrected to
describe what the guardrail actually does. Building the check tonight would be
writing code for a sales sheet rather than for a client.

The trigger is the first Foundation engagement. At that point the check should be
built **before** the fortnight starts, not during it, because the sheet promises
"both themes, resolved and verified" as a deliverable and the guardrail is what
would make that sentence true.

## The wider point

The Foundation's runbook and offer sheet are accurate about the guardrail's other
four checks, and one of them, DISCIPLINE, genuinely does fail on a hardcoded
colour where the baseline deliberately does not. The gap is narrow and specific:
the practice's single best story is a check this stack has not yet been given.
