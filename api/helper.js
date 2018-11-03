import { productUrl, queryProductUrl, queryIngredientUrl } from './constants';

export function fetchProduct(id) {
  return `${productUrl}/${id}`;
}

export function fetchProducts() {
  return productUrl;
}

export function searchProducts(query) {
  const queryFormatted = query.replace(new RegExp(' ', 'g'), '+');
  return `${queryProductUrl}?q=${queryFormatted}`;
}

export function searchIngredients(query) {
  const queryFormatted = query.replace(new RegExp(' ', 'g'), '+');
  return `${queryIngredientUrl}?q=${queryFormatted}`;
}
