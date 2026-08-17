// Orin token build — Style Dictionary v4, DTCG source.
//
// Deliberate omission: there is NO size/dimension transform in this platform.
// Every dimension token is authored WITH its unit in the JSON (e.g. "3rem",
// "1px") and passes through verbatim. This makes it structurally impossible
// for a transform to reinterpret a bare `80` as `80 * base` — the exact
// line-height footgun the playbook calls out. Units live in the source.
//
// outputReferences keeps the primitive -> semantic alias chain live in the
// generated CSS (e.g. --orin-colour-text-default: var(--orin-neutral-900)),
// which is the whole point: the site consumes semantics, semantics resolve
// to primitives, and the relationship is visible rather than flattened.
//
// The one transform that touches a value is cubicBezier/css, and it does NOT
// reopen the footgun above. That risk is arithmetic — a transform multiplying
// a bare number by a base and changing what the value MEANS. DTCG requires a
// cubicBezier $value to be an array of four numbers, which has no CSS scalar
// form at all; [0.2, 0, 0, 1] serialises to `0.2,0,0,1`, which is not valid
// CSS. This transform only wraps the array in its function syntax. No
// arithmetic, no base, nothing to reinterpret. Authoring the string by hand
// instead would emit valid CSS but make the source non-conformant DTCG, so
// the source stays correct and the serialisation is done here.

import StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
  name: 'cubicBezier/css',
  type: 'value',
  transitive: true,
  filter: (token) => token.$type === 'cubicBezier' && Array.isArray(token.$value),
  transform: (token) => `cubic-bezier(${token.$value.join(', ')})`
});

export default {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      // Explicit transform list — no size/rem, on purpose (see header).
      transforms: ['attribute/cti', 'name/kebab', 'color/css', 'fontFamily/css', 'cubicBezier/css'],
      prefix: 'orin',
      buildPath: 'dist/light/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { outputReferences: true }
        },
        {
          destination: 'tokens.flat.json',
          format: 'json/flat'
        }
      ]
    }
  }
};
