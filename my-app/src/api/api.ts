import { ItemData } from "./types";

const BASE_URL = "https://assignment-todolist-api.vercel.app";
const TENANT_ID = "tenantId";

export default async function fetchItems(
  page = 1,
  pageSize = 10
): Promise<ItemData[]> {
  const url = `{BASE_URL}}/api/{TENANT_ID}/items?page={page}&pageSize={pageSize}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
