const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * 서버에 상품 목록을 요청한다.
 * @param {string} orderBy
 * @returns {object}
 */
export const requestProductList = async (query) => {
  const url = new URL(`${BASE_URL}products`);
  url.searchParams.append("page", query.page);
  url.searchParams.append("pageSize", query.pageSize);
  url.searchParams.append("orderBy", query.orderBy);

  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

/**
 * 상품의 상세 정보를 요청한다.
 * @param {string} productId
 * @returns {json} response
 */
export const requestProductDetail = async (productId) => {
  const url = new URL(`${BASE_URL}products/${productId}`);

  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
