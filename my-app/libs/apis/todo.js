import HttpClient from "./http-client";

export async function getTodos() {
  try {
    const client = new HttpClient();
    const items = await client.get("items");
    return items;
  } catch (error) {
    return [];
  }
}

export async function addTodo(name) {
  try {
    const client = new HttpClient();
    const newItem = await client.post(`items`, { name });
    return newItem;
  } catch (error) {
    return null;
  }
}

export async function toggleTodo(todo) {
  try {
    const client = new HttpClient();
    const updatedItem = await client.patch(`items/${todo.id}`, {
      isCompleted: !todo.isCompleted,
    });
    return updatedItem;
  } catch (error) {
    return null;
  }
}
