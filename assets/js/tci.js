// A fixed illustration of evidence categories, never a scoring or assessment tool.
const example = document.querySelector('[data-tci-example]');
if (example) {
  const states = {
    claim: {
      category: 'Asserted',
      evidence: 'A benefit is reported, but the claim has not been supported by records.',
      consideration: 'Establish the evidence behind the claim before drawing an investment conclusion.'
    },
    record: {
      category: 'Documented',
      evidence: 'A record of the benefit exists. Adoption, ownership and the wider evidence still need to be examined.',
      consideration: 'Test the record alongside the other six dimensions. A document alone does not establish overall confidence.'
    }
  };
  const buttons = [...example.querySelectorAll('[data-tci-state]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    const state = states[button.dataset.tciState];
    if (!state) return;
    buttons.forEach(node => node.setAttribute('aria-pressed', String(node === button)));
    example.querySelector('[data-tci-category]').textContent = state.category;
    example.querySelector('[data-tci-evidence]').textContent = state.evidence;
    example.querySelector('[data-tci-consideration]').textContent = state.consideration;
  }));
}
