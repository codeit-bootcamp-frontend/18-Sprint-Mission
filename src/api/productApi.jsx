import instance from "./axios_instance";

//베스트 상품
const BASE_URL = import.meta.env.VITE_PRODUCT_BASE_URL;
function createParams({ page, pageSize, orderBy }) {
  return new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    orderBy: orderBy,
  });
}


export async function getProductBest({ page, pageSize, orderBy  }) {
  try {
    const params=createParams({page, pageSize,orderBy});
    const response = await instance.get(   
      `/products?${params.toString()}`
    );
    return response.data;
  } catch (error) {
    throw new Error("목록을 불러오는데 싪패 했습니다.");
  }
}

//리스트
export async function getProductList({ page, pageSize, orderBy }) {
  try {
     const params=createParams({page, pageSize,orderBy});
    const response = await instance.get(
     `/products?${params.toString()}`
    );
    return response.data;
  } catch (error) {
    throw new Error("목록을 불러오는데 실패 헸습니다.");
  }
}
