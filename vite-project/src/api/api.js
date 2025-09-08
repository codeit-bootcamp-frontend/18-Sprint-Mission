export async function getLists({
  page = 1,
  pageSize = 10,
  orderBy = "",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!res.ok) {
    throw new Error("요청 실패");
  }
  const body = await res.json();
  return body;
}
