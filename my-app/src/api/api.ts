import { ItemData } from "./types";

const BASE_URL = "https://assignment-todolist-api.vercel.app";
const TENANT_ID = "tenantId";

export async function fetchItems(page = 1, pageSize = 10): Promise<ItemData[]> {
  const url = `${BASE_URL}/api/${TENANT_ID}/items?page=${page}&pageSize=${pageSize}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function createItem(name): Promise<ItemData> {
  const url = `${BASE_URL}/api/${TENANT_ID}/items`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
}
