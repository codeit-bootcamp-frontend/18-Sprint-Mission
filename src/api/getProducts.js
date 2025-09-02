import instance from "./api";

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  try {
    const res = await instance.get(`/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`);
    const body = res.data;
    return body;
  } catch (e) { 
    throw new Error(e);
  }
};

// fetch
// export async function getProducts({
//   page = 1,
//   pageSize = 10,
//   orderBy = "recent",
//   keyword = "",
// }) {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const body = await response.json();
//     return body;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     throw new Error(error);
//   }
// }
