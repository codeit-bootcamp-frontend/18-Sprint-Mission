// api/products/searchProducts.js
import apiClient from "../axiosInstance";

export const searchProducts = async (keyword, params = {}) => {
  try {
    if (!keyword || !keyword.trim()) {
      throw new Error("검색어를 입력해주세요.");
    }

    const response = await apiClient.get("/products", {
      params: {
        page: params.page || 1,
        pageSize: params.pageSize || 10,
        orderBy: params.orderBy || "recent",
        keyword: keyword.trim(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "상품 검색에 실패했습니다."
    );
  }
};
