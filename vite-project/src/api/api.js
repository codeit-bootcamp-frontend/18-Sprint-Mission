export async function getLists({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await res.json();
  return body;
}
