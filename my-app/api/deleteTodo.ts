import { instance } from "./instance";

interface DeleteTodoRequest {
  itemId: number;
}

export interface DeleteTodoResponse {
  message: string;
}

export const deleteTodo = async ({
  itemId,
}: DeleteTodoRequest): Promise<DeleteTodoResponse> => {
  return instance.delete(`/items/${itemId}`);
};
