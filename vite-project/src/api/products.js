export async function fetchProducts({
  keyword = "",
  page = 1,
  pageSize = 10,
  orderBy = "recent",
} = {}) {
  const url = new URL(`${import.meta.env.VITE_API_BASE_URL}/products`);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("orderBy", orderBy);
  if (keyword) {
    url.searchParams.append("keyword", keyword);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await response.json();
  return {
    products: json.list,
    numberOfPages: Math.ceil(json.totalCount / pageSize),
  };
}
