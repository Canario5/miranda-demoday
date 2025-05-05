import { createProductCard } from "./product/product-card.js";

const initProductList = () => {
  const productGrid = document.querySelector(".js-products-grid");
  const filterContainer = document.querySelector(".products__filters");
  const loadMoreBtn = document.querySelector(".js-load-more-products");

  if (!productGrid || !filterContainer) {
    console.error("Product list container or filters not found.");
    return;
  }

  const filterButtons = filterContainer.querySelectorAll(".btn[data-filter]");
  let allProducts = [];
  let currentCategory = null;
  let displayLimit = 4;

  /**
   * Renders products that match the current category
   * @param {string} category - The category to filter by (e.g., 'news', 'bestsellers'...).
   * @param {number} limit - Maximum number of products to display
   */
  const renderFilteredProducts = (category, limit = displayLimit) => {
    productGrid.innerHTML = "";

    const filteredProducts = allProducts.filter(
      (product) => product.category === category,
    );

    const productsToShow = filteredProducts.slice(0, limit);

    // Display products or show empty message
    if (productsToShow.length > 0) {
      productsToShow.forEach((product) => {
        const cardElement = createProductCard(product);
        if (cardElement) productGrid.appendChild(cardElement);
      });
    } else {
      productGrid.innerHTML = "<p>Žádné produkty v této kategorii.</p>";
    }

    if (filteredProducts.length > productsToShow.length) {
      loadMoreBtn.disabled = false;
    } else {
      loadMoreBtn.disabled = true;
    }
  };

  const handleFilterClick = (event) => {
    const clickedButton = event.target.closest(".btn[data-filter]");

    if (clickedButton && filterContainer.contains(clickedButton)) {
      // Update active button styling
      filterButtons.forEach((button) => {
        button.classList.toggle("is-active", button === clickedButton);
      });

      // Update current category and render products
      currentCategory = clickedButton.dataset.filter;
      renderFilteredProducts(currentCategory);
    }
  };

  const handleLoadMoreClick = () => {
    if (currentCategory) {
      renderFilteredProducts(currentCategory, Infinity);
    }
  };

  const fetchAndInitializeProducts = () => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((products) => {
        allProducts = products;

        // Find initial category from active button or first product
        const initialActiveButton = filterContainer.querySelector(
          ".btn.is-active[data-filter]",
        );
        currentCategory = initialActiveButton
          ? initialActiveButton.dataset.filter
          : products[0]?.category || "Novinky";

        renderFilteredProducts(currentCategory);
      })
      .catch((error) => {
        console.error("Could not fetch or process product data:", error);
        productGrid.innerHTML =
          '<p class="error-message">Chyba při načítání produktů. Zkuste to prosím později.</p>';
      });
  };

  loadMoreBtn.addEventListener("click", handleLoadMoreClick);
  filterContainer.addEventListener("click", handleFilterClick);

  fetchAndInitializeProducts();
};

export { initProductList };
