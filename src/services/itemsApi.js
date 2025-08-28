/**
 * 서버에 상품 목록을 요청한다.
 * @param {string} orderBy
 * @returns {object}
 */
export const requestProductList = async (query) => {
  const url = new URL("https://panda-market-api.vercel.app/products");
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
  const url = new URL(
    `https://panda-market-api.vercel.app/products/${productId}`
  );

  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const requestInquiryLists = async (productId) => {
  const url = new URL(
    `https://panda-market-api.vercel.app/products/${productId}/comments`
  );
  url.searchParams.append("limit", 3);

  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
