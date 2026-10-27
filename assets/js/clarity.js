// Decision prompts use ANLAQ's existing copy. The page remains readable without JS.
const decisionTabs = [...document.querySelectorAll('[data-decision-tab]')];
const decisionPanels = [...document.querySelectorAll('[data-decision-panel]')];
const decisionGroup = document.querySelector('[data-decision-group]');

if (decisionGroup && decisionTabs.length === decisionPanels.length) {
  const selectDecision = (index, moveFocus = false) => {
    decisionTabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      decisionPanels[tabIndex].hidden = !selected;
    });
    if (moveFocus) decisionTabs[index].focus();
  };
  decisionGroup.setAttribute('role', 'tablist');
  decisionTabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    decisionPanels[index].setAttribute('role', 'tabpanel');
    tab.addEventListener('click', () => selectDecision(index));
    tab.addEventListener('keydown', event => {
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % decisionTabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + decisionTabs.length) % decisionTabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = decisionTabs.length - 1;
      if (nextIndex !== undefined) {
        event.preventDefault();
        selectDecision(nextIndex, true);
      }
    });
  });
  selectDecision(0);
}
