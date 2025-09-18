import revalidateTodo from "@/actions/revalidate-todo.action";
import { TodoDetailData } from "@/types";
import { useEffect, useState } from "react";

export default function useCompleteTodo(
  id: number,
  todoData: TodoDetailData | null
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onClickComplete = async (taskId: number, data: TodoDetailData) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/${taskId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        alert(`완료하지 못했습니다`);
        setError(true);
        return;
      }

      revalidateTodo();
    } catch (error) {
      alert("완료하지 못했습니다");
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!todoData) return;

    onClickComplete(id, todoData);
  }, [id, todoData]);

  return {
    isLoading,
    error,
    onClickComplete,
  };
}
