import { TodoItem } from "@/types/global";
import { instance } from "./instance";

interface PostTodoRequest {
  name: string;
}

export interface PostTodoResponse extends TodoItem {
  tenantId: string;
  memo: string;
  imageUrl: string;
}

export const postTodo = async ({
  name,
}: PostTodoRequest): Promise<PostTodoResponse> => {
  return instance.post("/items", { name });
};
