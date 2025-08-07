import mock from "./comments-mock.json";

export async function fetchComments(productId) {
  // const url = createUrl(`products/${productId}/comments`, { limit });
  // const response = await fetch(url);
  // if (!response.ok) {
  //   throw new Error("Failed to fetch comments");
  // }

  // const json = await response.json();
  // return json.list;

  if (!productId) return;
  return mock.list;
}
