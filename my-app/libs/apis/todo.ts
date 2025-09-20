import type { Todo } from "@/types";
import HttpClient from "./http-client";

export async function getTodos(): Promise<Todo[]> {
  try {
    const client = new HttpClient();
    const items = await client.get("items");
    return items;
  } catch (error) {
    return [];
  }
}

export async function getTodo(id: number): Promise<Todo | null> {
  try {
    const client = new HttpClient();
    const item = await client.get(`items/${id}`);
    return item;
  } catch (error) {
    return null;
  }
}

export async function addTodo(name: string): Promise<Todo | null> {
  try {
    const client = new HttpClient();
    const newItem = await client.post(`items`, { name });
    return newItem;
  } catch (error) {
    return null;
  }
}

export async function toggleTodo(todo: Todo): Promise<Todo | null> {
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
