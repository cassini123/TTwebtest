(() => {
  const nav = document.querySelector(".nav");
  const tabs = [...document.querySelectorAll(".feature-tab")];
  const panels = [...document.querySelectorAll(".preview-panel")];

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.panel;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      panels.forEach((panel) => {
        const match = panel.dataset.panelView === id;
        panel.hidden = !match;
      });
      tab.classList.remove("is-pressed");
      // restart tap animation
      void tab.offsetWidth;
      tab.classList.add("is-pressed");
      window.setTimeout(() => tab.classList.remove("is-pressed"), 400);
    });
  });
})();
