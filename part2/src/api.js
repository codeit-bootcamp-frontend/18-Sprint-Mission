export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error(`상품을 가져오지 못했습니다.`);
  }
  const body = await response.json();
  return body;
}
