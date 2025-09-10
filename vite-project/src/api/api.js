import instance from "./axiosInstance";

export async function getLists({
  page = 1,
  pageSize = 10,
  orderBy = "",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  try {
    const { data } = await instance.get(`/products?${query}`);
    return data;
  } catch {
    throw new Error("상품 목록을 가져오는데 실패했습니다.");
  }
}
