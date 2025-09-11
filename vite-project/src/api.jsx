import instance from "./axiosInstance";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  try {
    const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
    const response = await instance.get("/products", { params });
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

export async function getProductDetails(productId) {
  try {
    const response = await instance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

export async function getProductComments(productId, limit = 5, cursor) {
  try {
    const params = { limit };
    if (cursor) params.cursor = cursor;
    const response = await instance.get(`/products/${productId}/comments`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

export async function postProducts(body) {
  try {
    const response = await instance.post("/products/", body);
    return response.data;
  } catch (error) {
    throw new Error(`상품을 등록하는데 실패했습니다 : ${error.message}`);
  }
}
