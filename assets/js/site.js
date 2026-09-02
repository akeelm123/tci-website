const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll('.reveal').forEach((node) => {
  if (observer) observer.observe(node);
  else node.classList.add('visible');
});

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
    const values = [...pulseForm.querySelectorAll('input[type="range"]')].map((input) => Number(input.value));
    const total = values.reduce((sum, value) => sum + value, 0);
    const result = pulseForm.querySelector('[data-pulse-result]');
    const score = result.querySelector('[data-pulse-score]');
    const copy = result.querySelector('[data-pulse-copy]');
    score.textContent = `${total}/20`;
    copy.textContent = total >= 17
      ? 'Your answers indicate strong executive confidence. The full assessment will help test whether the evidence supports this view.'
      : total >= 12
        ? 'Your answers indicate conditional confidence. The full assessment will help locate the assumptions and evidence gaps.'
        : 'Your answers indicate fragile confidence. Start with the full assessment to identify the most urgent leadership questions.';
    result.classList.add('show');
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

document.querySelectorAll('[data-preview-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = 'Thanks. This preview keeps your details on this device. Connect your preferred email or form service before publishing.';
      status.classList.add('show');
    }
    form.reset();
  });
});

