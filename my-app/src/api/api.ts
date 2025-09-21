import { ItemData } from "./types";
import instance from "./axios";

const BASE_URL = "https://assignment-todolist-api.vercel.app";
const TENANT_ID = "tenantId";

export async function fetchItems(page = 1, pageSize = 10): Promise<ItemData[]> {
  try {
    const { data } = await instance.get<ItemData[]>(`/api/${TENANT_ID}/items`, {
      params: { page, pageSize },
    });
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function createItem(name): Promise<ItemData> {
  try {
    const { data } = await instance.post<ItemData>(
      `/api/${encodeURIComponent(TENANT_ID)}/items`,
      { name }
    );
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
}
