/**
 * 서버에 상품 목록을 요청한다.
 * @param {string} orderBy
 * @returns {object}
 */
const requestProductList = async (
  orderBy = 'recent',
  page = 1,
  pageSize = 10
) => {
  const url = new URL('https://panda-market-api.vercel.app/products');
  url.searchParams.append('page', page);
  url.searchParams.append('pageSize', pageSize);
  url.searchParams.append('orderBy', orderBy);

  const response = await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export { requestProductList };
