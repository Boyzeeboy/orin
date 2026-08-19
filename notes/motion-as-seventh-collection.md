# Motion as a seventh collection in the baseline convention

*Filed 19 August 2026. A proposal, not a decision. Everything below was read
out of `Orin Token Pipeline` and `Synthesis Token Pipeline` rather than
remembered, and the blocking problem is in the type mapping rather than in the
collection list.*

## The idea

`CONFIG.collections` in `scripts/lib/figma-to-dtcg.mjs` currently knows six
names: Primitives, Semantic, Components, Fonts, Spacing, Radius. Motion would be
a seventh, holding durations and easing curves.

It qualifies on the test the convention implies. The six are role-based layers
rather than content buckets, so a bigger design system usually wants more depth
inside Semantic and Components rather than another collection. Motion is
different: it is a new kind of decision that has no sensible home under any
existing branch. Orin's own site already authors it, in `tokens/src/motion.json`,
which is the strongest argument that the category is real rather than
speculative.

## Adding the collection is the easy half

One line in `CONFIG.collections`:

```js
Motion: { branch: 'motion' },
```

The collection audit, the key-parity assertion and the diff need nothing. A
single-mode collection is emitted into both outputs already, which is almost
certainly what motion wants: durations and curves rarely differ between light
and dark.

## The type mapping is where it actually stops

`toToken` handles exactly three Figma resolved types, and two of the three are
wrong for motion:

| Figma type | Current mapping | What motion needs |
|---|---|---|
| COLOR | `$type: color` | not relevant |
| FLOAT | `${n}px`, `$type: dimension` | `120ms`, `$type: duration` |
| STRING | `$type: fontFamily`, unconditionally | `$type: cubicBezier`, from an array |

**FLOAT is hardcoded to px.** A duration authored as `120` in Figma emits
`120px` as a dimension. There is one existing escape hatch, `cfg.unitlessNumber`,
which is a list of path patterns that emit a bare `number` instead. It is the
right shape to copy but the wrong destination: motion needs a *different unit*,
not the absence of one.

**STRING is hardcoded to fontFamily.** This is the sharper problem. Any string
variable anywhere in the file becomes a `fontFamily` token. An easing curve
written as `"0.2, 0, 0, 1"` would emit typed as a font family, and nothing
downstream would object, because the value is structurally valid and the key
parity check compares names rather than meanings. That is the same class of
silent-wrong-type failure the mode-parity check exists to catch, in a different
place.

## So the work is a typing rule, not a collection

The honest shape of this change is: make the FLOAT and STRING arms of `toToken`
consult path-matched configuration the way `unitlessNumber` already does, rather
than hardcoding a single destination each. Something like a `unitByPath` map for
FLOAT, and a `stringType` map for STRING with `fontFamily` as the default so
existing behaviour is unchanged.

That is worth doing on its own merits. The convention claims that pointing the
pipeline at a new file is a naming question rather than a code change, and a
string type that can only ever mean "font family" quietly limits what a client's
Figma file is allowed to contain.

## The Figma-side question that has to be answered first

Figma variables are COLOR, FLOAT, STRING or BOOLEAN. There is no curve type. So
an easing token can be authored two ways, and the choice belongs to whoever is
drawing the file rather than to the pipeline:

- **One STRING per curve**, `"0.2, 0, 0, 1"`, parsed into the four-number array
  DTCG wants. Reads well in Figma, and puts a parser plus its failure modes in
  the transform.
- **Four FLOAT variables per curve**, assembled on the way out. No parsing, and
  a curve becomes four rows in the variables panel, which is unpleasant to author
  and easy to get half-right.

The first is better for the designer and worse for the transform. That trade is
the actual decision in this note, and it should be made with a real motion set in
front of us rather than in the abstract.

## What else moves when this lands

- `templates/agent-rules.md` line 112 names the six collections in prose, and
  `verify:docs` checks the generated `CLAUDE.md` and `AGENTS.md` against reality.
  Update the template, then `npm run generate-docs`, or the docs check goes red.
- `notes/pipeline-setup-sheet.html` lists the convention on a client-facing sheet.
- `notes/baseline-pipeline-infographic.html` names the collections too.
- Existing clones do not receive any of it. KR and Synthesis are clones taken at
  a moment in time, so this reaches future pipelines only, exactly as
  `notes/stale-dump-guard.md` sets out for the guard.

## Do it when there is a client asking

Nothing needs this today. Synthesis has no motion variables, Orin's motion tokens
live in a code-first repo that does not use this transform at all, and the two
motion tokens that exist there are one easing curve and one duration. Building a
seventh collection for two values nobody has asked for is the wrong order.

The trigger is a prospect whose Figma file has a motion collection in it, which
the collection audit will report as unknown the first time the pipeline is
pointed at them. That is a good moment for this note, not a bad one: it means the
convention is being asked to grow by a real file rather than by an idea.
