import { client } from "../../../api/HttpClient";
import { ORDER_BY_DEFAULT } from "../utils/order-by-values";

async function fetchProducts({
  keyword = "",
  page = 1,
  pageSize = 10,
  orderBy = ORDER_BY_DEFAULT,
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
