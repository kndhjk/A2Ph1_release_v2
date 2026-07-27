const tabs = document.querySelectorAll('.venture-tab');
const panels = document.querySelectorAll('.venture-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });

    panels.forEach((panel) => {
      const selected = panel.dataset.panel === target;
      panel.classList.toggle('active', selected);
      panel.hidden = !selected;
    });

    requestAnimationFrame(() => {
      document.querySelectorAll(`#panel-${target} .reveal`).forEach((element) => {
        element.classList.add('visible');
      });
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
);

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

const copyButton = document.querySelector('.copy-link');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const value = copyButton.dataset.copy;
    const label = copyButton.querySelector('span');
    const original = label.textContent;

    try {
      await navigator.clipboard.writeText(value);
      label.textContent = '已复制';
      window.setTimeout(() => {
        label.textContent = original;
      }, 1400);
    } catch {
      window.prompt('复制这个联系方式：', value);
    }
  });
}
