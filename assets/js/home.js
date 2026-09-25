document.documentElement.classList.add('js');
const toggle = document.querySelector('#menu');
const nav = document.querySelector('#navigation');
const background = [...document.querySelectorAll('main, footer, .skip, .brand')];
function setMenu(open, restoreFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  background.forEach(element => { element.inert = open; });
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (toggle.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') { setMenu(false, true); return; }
  if (event.key !== 'Tab') return;
  const links = [...nav.querySelectorAll('a[href]')];
  const last = links[links.length - 1];
  if (event.shiftKey && document.activeElement === toggle) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); toggle.focus(); }
});
window.matchMedia('(max-width:800px)').addEventListener('change', () => setMenu(false));
const details = document.querySelector('#engagement-details');
function openDetails() { if (location.hash === '#engagement-details') details.open = true; }
document.querySelector('a[href="#engagement-details"]').addEventListener('click', () => { details.open = true; });
window.addEventListener('hashchange', openDetails);
openDetails();
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
