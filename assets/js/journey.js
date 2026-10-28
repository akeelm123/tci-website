// Native disclosures keep comparisons and optional detail accessible without JavaScript.
const comparison = document.getElementById('comparison');
const revealComparison = () => {
  if (comparison && window.location.hash === '#comparison') comparison.open = true;
};
document.querySelectorAll('[data-open-comparison]').forEach(link => {
  link.addEventListener('click', () => { if (comparison) comparison.open = true; });
});
revealComparison();
window.addEventListener('hashchange', revealComparison);
