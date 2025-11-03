import { TodoItem } from "@/types/global";
import { instance } from "./instance";

interface PatchTodoRequest {
  itemId: number;
  name?: string;
  isCompleted?: boolean;
}

export interface PatchTodoResponse extends TodoItem {
  tenantId: string;
  memo: string;
  imageUrl: string;
}

export const patchTodo = async ({
  itemId,
  name,
  isCompleted,
}: PatchTodoRequest): Promise<PatchTodoResponse> => {
  return instance.patch(`/items/${itemId}`, { name, isCompleted });
};
