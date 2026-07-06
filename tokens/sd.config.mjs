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

export default {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      // Explicit transform list — no size/rem, on purpose (see header).
      transforms: ['attribute/cti', 'name/kebab', 'color/css', 'fontFamily/css'],
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
