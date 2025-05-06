/**
 * Creates a product card DOM element from product data
 * @param {Object} product - The product data object
 * @returns {HTMLElement|null} - The created card element or null if invalid data
 */
export const createProductCard = (product) => {
  if (!product) return null;
  const requiredProps = ["title", "imgSrc", "price"];
  const missingProps = requiredProps.filter((prop) => !product[prop]);

  if (missingProps.length > 0) {
    console.warn(
      `Product missing critical properties: ${missingProps.join(", ")}`,
    );
    return null;
  }

  const card = document.createElement("a");
  card.className = "product-card";
  card.dataset.category = product.category;
  card.href = product.url || "#";

  // Labels
  const labelClass = "product-card__label";
  const flagModifiers = {
    new: "Novinka",
    sale: "Výprodej",
    recommended: "Tip",
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

  card.appendChild(header);

  // Image
  const figure = document.createElement("figure");
  figure.className = "product-card__image";
  const img = document.createElement("img");
  img.src = product.imgSrc || "/assets/img/missing-product-image.webp";
  img.alt = product.title || "Produkt";
  img.loading = "lazy";
  figure.appendChild(img);
  card.appendChild(figure);

  // Content (title, availability, price, cart button)
  const content = document.createElement("div");
  content.className = "product-card__content";

  const title = document.createElement("h3");
  title.className = "product-card__title";
  title.textContent = product.title;
  content.appendChild(title);

  const availability = document.createElement("p");
  availability.className = "product-card__availability";
  availability.dataset.availability = product.availability;
  availability.textContent = product.availability || "Neznámá";
  content.appendChild(availability);

  const price = document.createElement("p");
  price.className = "product-card__price";
  price.textContent = product.price
    ? `${product.price.toLocaleString("cs-CZ")} CZK`
    : "Cena nedostupná";
  content.appendChild(price);

  const cartButton = document.createElement("button");
  cartButton.className = "product-card__cart-button";
  cartButton.setAttribute("aria-label", "Přidat do košíku");
  cartButton.innerHTML = `
  <svg width="24" height="24">
    <use href="/__spritemap#sprite-shopping-cart"></use>
  </svg>
`;
  content.appendChild(cartButton);

  card.appendChild(content);

  return card;
};
