import { client } from "../../../api/HttpClient";

async function fetchProducts({
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

  const result = await client.get("products", params);

  return {
    products: result.list,
    numberOfPages: Math.ceil(result.totalCount / pageSize),
  };
}

async function fetchProduct(id) {
  const result = await client.get(`products/${id}`);
  return result;
}

export { fetchProduct, fetchProducts };
