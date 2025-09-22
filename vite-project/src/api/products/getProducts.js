// api/products/getProducts.js
import apiClient from "../axiosInstance";

export const getProducts = async (params = {}) => {
  try {
    const response = await apiClient.get("/products", {
      params: {
        page: params.page || 1,
        pageSize: params.pageSize || 10,
        orderBy: params.orderBy || "recent",
        ...(params.keyword && { keyword: params.keyword }),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "상품을 불러오는데 실패했습니다."
    );
  }
};
