export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${params}`
  );
  if (!response.ok) {
    throw new Error("상품을 불러오는데 실패했습니다");
  }
  const data = await response.json();
  return [data.list, data.totalCount];
}
