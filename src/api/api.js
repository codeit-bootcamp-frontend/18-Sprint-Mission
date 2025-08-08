const URL = "https://panda-market-api.vercel.app";

export const getProductItems = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(`${URL}/products?${query}`);
  if (!response.ok) {
    throw new Error("제품 목록을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
};


