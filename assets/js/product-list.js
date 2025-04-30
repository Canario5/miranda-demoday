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
  let showAll = false;

  const createProductCard = (product) => {
    if (!product) return null;
    const requiredProps = ["title", "imgSrc", "price"];
    const missingProps = requiredProps.filter((prop) => !product[prop]);

    if (missingProps.length > 0) {
      console.warn(
        `Product missing critical properties: ${missingProps.join(", ")}`,
      );
      return null;
    }

    const article = document.createElement("article");
    article.className = "product-card";
    article.dataset.category = product.category;

    // Labels
    const labelClass = "product-card__label";
    const flagModifiers = {
      new: "Novinka",
      sale: "Výprodej",
    };

    const header = document.createElement("header");
    header.className = "product-card__labels";

    product.flags = product.flags || [];

    product.flags.forEach((flag) => {
      const labelSpan = document.createElement("span");
      const modifier = Object.keys(flagModifiers).find(
        (key) => flagModifiers[key] === flag,
      );

      labelSpan.className = modifier
        ? `${labelClass} ${labelClass}--${modifier}`
        : labelClass;
      labelSpan.textContent = flagModifiers[modifier] || flag;
      header.appendChild(labelSpan);
    });

    article.appendChild(header);

    // Image
    const figure = document.createElement("figure");
    figure.className = "product-card__image";
    const img = document.createElement("img");
    img.src = product.imgSrc || "/assets/img/missing-product-image.png";
    img.alt = product.title || "Produkt";
    img.loading = "lazy";
    figure.appendChild(img);
    article.appendChild(figure);

    // Content (title, availability, price)
    const content = document.createElement("div");
    content.className = "product-card__content";

    const title = document.createElement("h2");
    title.className = "product-card__title";
    title.textContent = product.title;
    content.appendChild(title);

    const availability = document.createElement("p");
    availability.className = "product-card__availability";
    availability.textContent = product.availability || "Neznámá";
    content.appendChild(availability);

    const price = document.createElement("p");
    price.className = "product-card__price";
    price.textContent = product.price
      ? `${product.price.toLocaleString("cs-CZ")} CZK`
      : "Cena nedostupná";
    content.appendChild(price);

    article.appendChild(content);

    // Footer with cart button
    const footer = document.createElement("footer");
    footer.className = "product-card__footer";
    const cartButton = document.createElement("button");
    cartButton.className = "product-card__cart-button";
    cartButton.setAttribute("aria-label", "Přidat do košíku");

    cartButton.innerHTML = `
  <svg width="24" height="24">
    <use href="/__spritemap#sprite-shopping-cart"></use>
  </svg>
`;
    footer.appendChild(cartButton);
    article.appendChild(footer);

    return article;
  };

  /**
   * Clears the product grid and renders products matching the specified category.
   * @param {string} category - The category to filter by (e.g., 'news', 'bestsellers').
   * @param limit - number of products to display.
   */
  const renderProducts = (category, limit = 4) => {
    productGrid.innerHTML = "";

    const filteredProducts = allProducts.filter(
      (product) => product.category === category,
    );

    const productsToShow = filteredProducts.slice(0, limit);

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
      const activeFilter = clickedButton.dataset.filter;

      filterButtons.forEach((button) => {
        button.classList.toggle("is-active", button === clickedButton);
      });

      currentCategory = activeFilter;
      showAll = false;
      renderProducts(currentCategory, 4);
    }
  };

  loadMoreBtn.addEventListener("click", () => {
    if (currentCategory) {
      showAll = true;
      renderProducts(currentCategory, Infinity);
    }
  });

  fetch("/assets/src/products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      allProducts = products;

      const initialActiveButton = filterContainer.querySelector(
        ".btn.is-active[data-filter]",
      );
      currentCategory = initialActiveButton
        ? initialActiveButton.dataset.filter
        : products[0]?.category || "Novinky";
      showAll = false;

      renderProducts(currentCategory, 4);

      filterContainer.addEventListener("click", handleFilterClick);
    })
    .catch((error) => {
      console.error("Could not fetch or process product data:", error);

      productGrid.innerHTML =
        '<p class="error-message">Chyba při načítání produktů. Zkuste to prosím později.</p>';
    });
};

export { initProductList };
