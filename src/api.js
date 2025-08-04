const BASE_URL = "https://panda-market-api.vercel.app";

export async function getPanda({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const body = await response.json();
    console.log(body);
    return body;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
