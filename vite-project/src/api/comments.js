import { createUrl } from "./api";

export async function fetchComments(productId, { limit = 10 } = {}) {
  const url = createUrl(`products/${productId}/comments`, { limit });
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await response.json();
  return json.list;
}
