import "../scss/main.scss";
import { initProductList } from "./product-list.js";
import { initMobileMenu } from "./mobile-menu.js";
import { initSearchPanel } from "./search-panel.js";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSearchPanel();
  initProductList();
});
