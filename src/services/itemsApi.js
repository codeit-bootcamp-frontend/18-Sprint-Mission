/**
 * 서버에 상품 목록을 요청한다.
 * @param {string} orderBy
 * @returns {object}
 */
const requestProductList = async (querys) => {
  const url = new URL('https://panda-market-api.vercel.app/products');
  url.searchParams.append('page', querys.page);
  url.searchParams.append('pageSize', querys.pageSize);
  url.searchParams.append('orderBy', querys.orderBy);

  const response = await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export { requestProductList };
