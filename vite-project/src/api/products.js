function trimPath(str) {
  let trimmed = str.trim();
  while (trimmed.startsWith("/")) {
    trimmed = trimmed.slice(1);
  }
  return trimmed;
}

function createUrl(path, params) {
  const trimmed = trimPath(path);
  const url = new URL(`${import.meta.env.VITE_API_BASE_URL}/${trimmed}`);

  if (!params) {
    return url;
  }

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return url;
}

export async function fetchProducts({
  keyword = "",
  page = 1,
  pageSize = 10,
  orderBy = "recent",
} = {}) {
  const params = {
    page,
    pageSize,
    orderBy,
  };

  if (keyword) {
    params.keyword = keyword;
  }

  const url = createUrl("products", params);
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

export async function fetchProduct(id) {
  const url = createUrl(`products/${id}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const json = await response.json();
  return json;
}
