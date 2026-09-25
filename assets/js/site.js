const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  const background = [...document.querySelectorAll('main, .site-footer, .skip-link, .brand')];
  const mobile = window.matchMedia('(max-width: 1180px)');
  const setMenu = (open, restoreFocus = false) => {
    siteNav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
    background.forEach(node => { node.inert = open; });
    if (restoreFocus) navToggle.focus();
  };
  siteNav.id = 'site-navigation';
  navToggle.setAttribute('aria-controls', siteNav.id);
  navToggle.addEventListener('click', () => setMenu(!siteNav.classList.contains('open')));
  siteNav.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (!siteNav.classList.contains('open')) return;
    if (event.key === 'Escape') { setMenu(false, true); return; }
    if (event.key !== 'Tab') return;
    const links = [...siteNav.querySelectorAll('a[href]')];
    const last = links[links.length - 1];
    if (event.shiftKey && document.activeElement === navToggle) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); navToggle.focus();
    }
  });
  mobile.addEventListener('change', () => setMenu(false));
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));

const comparisonToggle = document.querySelector('[data-comparison-toggle]');
if (comparisonToggle) {
  comparisonToggle.addEventListener('click', () => {
    const matrix = document.querySelector('#status-confidence-matrix');
    const expanded = matrix.classList.toggle('show-all');
    comparisonToggle.setAttribute('aria-expanded', String(expanded));
    comparisonToggle.textContent = expanded ? 'Show fewer comparisons' : 'Show all comparisons';
  });
}

document.querySelectorAll('input[type="range"]').forEach((range) => {
  const value = document.querySelector(`[data-range-value="${range.id}"]`);
  const update = () => { if (value) value.textContent = range.value; };
  range.addEventListener('input', update);
  update();
});

const pulseForm = document.querySelector('[data-pulse-form]');
if (pulseForm) {
  pulseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = pulseForm.querySelector('[data-pulse-result]');
    result.querySelector('[data-pulse-score]').textContent = 'Discuss the evidence behind your ratings';
    result.querySelector('[data-pulse-copy]').textContent = 'These ratings start a discussion. Compare the evidence behind each answer; they are not a formal TCI assessment or validated confidence score.';
    result.classList.add('show');
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
  });
}

const serviceContext = document.querySelector('[data-service-context]');
if (serviceContext) {
  const serviceNames = {
    'tci-self-assessment': 'TCI Self-Assessment',
    'executive-diagnostic': 'TCI Executive Diagnostic',
    'ai-review': 'AI Investment Confidence Review',
    'transformation-assessment': 'Transformation Confidence Assessment',
    'executive-conversation': 'Transformation Confidence Executive Conversation',
    speaking: 'Speaking or executive session'
  };
  const selected = serviceNames[new URLSearchParams(window.location.search).get('service')];
  if (selected) {
    serviceContext.textContent = `Your enquiry is about ${selected}. This selection is included in the email draft.`;
    serviceContext.hidden = false;
    const serviceSelect = document.querySelector('#contact-service');
    if (serviceSelect) serviceSelect.value = selected;
  }
}

const openServiceDeepLink = () => {
  const target = document.querySelector('.service-tab:target');
  if (target) target.open = true;
};
window.addEventListener('load', openServiceDeepLink);
window.addEventListener('hashchange', openServiceDeepLink);

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const fields = new FormData(contactForm);
    const subject = `Akeel Advisory enquiry: ${fields.get('service')}`;
    const body = [
      `Name: ${fields.get('name')}`,
      `Reply email: ${fields.get('email')}`,
      `Decision or service: ${fields.get('service')}`,
      `Timing: ${fields.get('timing') || 'Not specified'}`,
      '',
      String(fields.get('message')).trim()
    ].join('\n');
    const draft = `mailto:akeelm@duck.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = contactForm.querySelector('[data-contact-status]');
    status.textContent = 'Your email app should open with a draft. Review and send it there. If it does not open, use this link or the direct email link above: ';
    const draftLink = document.createElement('a');
    draftLink.href = draft;
    draftLink.textContent = 'Open the prepared draft';
    status.appendChild(draftLink);
    status.classList.add('show');
    draftLink.click();
  });
}

const copyEmail = document.querySelector('[data-copy-email]');
if (copyEmail) {
  copyEmail.addEventListener('click', async () => {
    const status = document.querySelector('[data-copy-feedback]');
    try {
      await navigator.clipboard.writeText('akeelm@duck.com');
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Your browser blocked copying. Use the Email Akeel link above.';
    }
  });
}
