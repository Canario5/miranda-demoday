document.addEventListener("DOMContentLoaded", () => {
  const menuToggleButton = document.querySelector(".js-mobile-menu-toggle");
  const mainNavigation = document.querySelector(".js-main-navigation");

  if (menuToggleButton && mainNavigation) {
    menuToggleButton.addEventListener("click", () => {
      document?.body.classList.toggle("mobile-menu-active");
      menuToggleButton.classList.toggle("is-active");

      const isExpanded =
        menuToggleButton.getAttribute("aria-expanded") === "true";
      menuToggleButton.setAttribute("aria-expanded", String(!isExpanded));
      mainNavigation.setAttribute("aria-hidden", String(isExpanded));
    });
  }
});
