import instance from "./axiosInstance";

export default async function getProductLists(
  page = 1,
  pageSize = 10,
  orderBy = "recent"
) {
  try {
    const response = await instance.get("products", {
      params: { page, pageSize, orderBy },
    });
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패하였습니다. ${error.message}`);
  }
}
