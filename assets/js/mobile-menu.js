const initMobileMenu = () => {
  const menuToggleButton = document.querySelector(".js-mobile-menu-toggle");
  const mainNavigation = document.querySelector(".js-main-navigation");

  if (!menuToggleButton || !mainNavigation) return;

  const navLinks = mainNavigation.querySelectorAll("a[href]");
  let isMenuOpen = mainNavigation.getAttribute("aria-hidden") === "false";
  updateMenuAccessibility(isMenuOpen);

  menuToggleButton.addEventListener("click", toggleMenu);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    updateMenuVisuals(isMenuOpen);
    updateMenuAccessibility(isMenuOpen);
  }

  function updateMenuVisuals(isOpen) {
    document.body.classList.toggle("mobile-menu-active", isOpen);
    menuToggleButton.classList.toggle("is-active", isOpen);
  }

  function updateMenuAccessibility(isOpen) {
    menuToggleButton.setAttribute("aria-expanded", String(isOpen));
    mainNavigation.setAttribute("aria-hidden", String(!isOpen));

    navLinks.forEach((link) => {
      link.setAttribute("tabindex", isOpen ? "0" : "-1");
    });
  }
};

export { initMobileMenu };
