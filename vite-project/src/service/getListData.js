// LIST 조회 API
export const getListData = async () => {
  const response = await fetch("https://panda-market-api.vercel.app/products");
  const data = await response.json();
  return data;
};
