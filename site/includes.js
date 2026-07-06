// Minimal partial includes — shared chrome (nav, footer) edited in ONE place.
// Any element with data-include="partials/x.html" is replaced by that file's
// markup. When a build step earns its place this can move server-side; until
// then this keeps nav/footer from diverging across pages (the KR 5-variants bug).
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    try {
      const res = await fetch(el.getAttribute('data-include'));
      if (res.ok) el.outerHTML = await res.text();
    } catch { /* chrome is progressive; page content stands without it */ }
  });
});
