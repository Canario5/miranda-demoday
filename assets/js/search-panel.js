document.addEventListener("DOMContentLoaded", () => {
  const initSearchPanel = () => {
    const container = document.querySelector(".js-search");
    const toggleButton = document.querySelector(".js-search-toggle");
    const panel = document.querySelector(".js-search-panel");

    // Exit early if elements don't exist
    if (!container || !toggleButton || !panel) return;

    // Configuration
    const mobileBreakpoint = 1024;

    // Viewport detection
    const isMobileScreen = () => window.innerWidth < mobileBreakpoint;
    const isDesktopScreen = () => !isMobileScreen();
    let lastScreenType = isMobileScreen();

    const isPanelVisible = () => panel.classList.contains("is-active");

    const showPanel = () => {
      panel.removeAttribute("hidden");
      panel.classList.add("is-active");
      toggleButton.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
    };

    const hidePanel = () => {
      panel.classList.remove("is-active");
      toggleButton.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
      panel.setAttribute("hidden", "");
    };

    const togglePanel = () => {
      isPanelVisible() ? hidePanel() : showPanel();
    };

    // Helper functions
    const temporarilyDisableTransitions = (callback) => {
      const originalTransition = panel.style.transition;
      panel.style.transition = "none";

      callback();

      // Restore transition after a brief delay
      requestAnimationFrame(() => {
        setTimeout(() => {
          panel.style.transition = originalTransition;
        }, 50);
      });
    };

    const configurePanelForCurrentViewport = () => {
      if (isDesktopScreen()) {
        // On desktop: panel is always visible but not "active"
        panel.removeAttribute("hidden");
        panel.setAttribute("aria-hidden", "false");
        panel.classList.remove("is-active");
      } else {
        // On mobile: panel is hidden by default
        hidePanel();
      }
    };

    const updatePanelLayout = (shouldSuppressTransition = false) => {
      if (shouldSuppressTransition) {
        temporarilyDisableTransitions(configurePanelForCurrentViewport);
      } else {
        configurePanelForCurrentViewport();
      }
    };

    // Event handlers
    const handleToggleClick = () => togglePanel();

    const handleOutsideClick = (event) => {
      const isClickOutside = !container.contains(event.target);
      if (isClickOutside && isPanelVisible()) {
        hidePanel();
      }
    };

    const handleResize = () => {
      const currentScreenType = isMobileScreen();

      if (lastScreenType !== currentScreenType) {
        updatePanelLayout(true);
        lastScreenType = currentScreenType;
      }
    };

    // Initialize
    updatePanelLayout();

    toggleButton.addEventListener("click", handleToggleClick);
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", handleResize);
  };

  // Initialize the search panel
  initSearchPanel();
});
