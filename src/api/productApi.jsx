import axios from "axios";

//베스트 상품
const BASE_URL = "https://panda-market-api.vercel.app/products?page=";
export async function getProductBest({ pageSize = 4 }) {
  try {
    const response = await axios.get(
      `${BASE_URL}1&pageSize=${pageSize}&orderBy=favorite`
    );
    return response.data;
  } catch (error) {
    throw new Error("목록을 불러오는데 싪패 했습니다.");
  }
}

//리스트
export async function getProductList({ page, pageSize, orderBy }) {
  try {
    const response = await axios.get(
      `${BASE_URL}${page}&pageSize=${pageSize}&orderBy=${orderBy}`
    );
    return response.data;
  } catch (error) {
    throw new Error("목록을 불러오는데 실패 헸습니다.");
  }
}
