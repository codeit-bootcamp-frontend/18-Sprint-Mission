// api/products/getBestProducts.js
import apiClient from "../axiosInstance";

export const getBestProducts = async (limit = 4) => {
  try {
    const response = await apiClient.get("/products", {
      params: {
        page: 1,
        pageSize: limit,
        orderBy: "favorite",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "베스트 상품을 불러오는데 실패했습니다."
    );
  }
};
