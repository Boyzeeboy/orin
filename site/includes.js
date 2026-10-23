// Minimal partial includes — shared chrome (nav, footer) edited in ONE place.
// Any element with data-include="partials/x.html" is replaced by that file's
// markup. When a build step earns its place this can move server-side; until
// then this keeps nav/footer from diverging across pages (the KR 5-variants bug).
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    try {
      const res = await fetch(el.getAttribute('data-include'));
      if (res.ok) { el.outerHTML = await res.text(); markCurrent(); }
    } catch { /* chrome is progressive; page content stands without it */ }
  });
});

// The nav's current-page link gets aria-current: "page" on the page itself,
// "true" inside its section (a case study under /work). The bar in styles.css
// draws from the attribute, so what a screen reader hears and what the eye
// sees cannot disagree. The brand is never marked.
function markCurrent() {
  const trim = (p) => p.replace(/\/+$/, '') || '/';
  const here = trim(location.pathname);
  document.querySelectorAll('.site-nav a:not(.brand)').forEach((a) => {
    const path = trim(new URL(a.href).pathname);
    if (here === path) a.setAttribute('aria-current', 'page');
    else if (here.startsWith(path + '/')) a.setAttribute('aria-current', 'true');
  });
}
