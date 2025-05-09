import "../scss/main.scss";
import { initProductList } from "./product-list.js";
import { initMobileMenu } from "./mobile-menu.js";
import { initSearchPanel } from "./search-panel.js";
import initHeroSlider from "./swiper/hero-slider.js";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSearchPanel();
  initProductList();
  initHeroSlider();
});

document.addEventListener("click", function (event) {
  // Log the clicked element to the console
  console.log("You clicked on:", event.target);
});
