import Button from "@/components/button/button";
import { ButtonType } from "@/components/button/button-type";
import Portal from "@/components/portal/portal";
import TodoDetailTitle from "@/components/todo/todo-detail-title";
import { useAsyncCall } from "@/hooks/use-async-call";
import { deleteTodo, editTodo, getTodo } from "@/libs/apis/todo";
import styles from "@/styles/item.module.css";
import type { Todo } from "@/types";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useMemo, useState } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params!;
  const todo = await getTodo(Number(id));

  if (!todo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      todo,
    },
  };
}

type TodoValuesState = Pick<Todo, "name" | "imageUrl" | "memo" | "isCompleted">;

export default function Page({ todo }: { todo: Todo }) {
  const router = useRouter();

  if (!todo) {
    return <div>Todo not found</div>;
  }

  const [todoValues, setTodoValues] = useState<TodoValuesState>({
    name: todo.name,
    imageUrl: todo.imageUrl,
    memo: todo.memo,
    isCompleted: todo.isCompleted,
  });
  const { isLoading, execute } = useAsyncCall();

  const canEdit = useMemo(() => {
    return (
      todoValues.name !== todo.name ||
      todoValues.memo != todo.memo ||
      todoValues.imageUrl != todo.imageUrl ||
      todoValues.isCompleted !== todo.isCompleted
    );
  }, [todoValues]);

  const handleTitleClick = (todo: Todo) => {
    console.log("Title clicked:", todo);
  };

  const handleEditClick = async () => {
    execute(async () => {
      const result = await editTodo(todo.id, {
        name: todoValues.name,
        memo: todoValues.memo ?? "",
        imageUrl: todoValues.imageUrl ?? "",
        isCompleted: todoValues.isCompleted,
      });

      if (result) {
        router.replace("/");
      }
    });
  };

  const handleDeleteClick = async () => {
    execute(async () => {
      const result = await deleteTodo(todo.id);
      if (result) {
        router.replace("/");
      }
    });
  };

  const handleMemoChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoValues((prev) => ({
      ...prev,
      memo: event.target.value || undefined,
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <TodoDetailTitle todo={todo} onClick={handleTitleClick} />
          <div className={styles.imageMemoContainer}>
            <div className={styles.imageContainer}>
              <img
                src="/images/todo-detail-image-background.svg"
                alt="background"
              />
            </div>
            <div className={styles.memoContainer}>
              <span>Memo</span>
              <textarea
                value={todoValues.memo ?? ""}
                onChange={handleMemoChange}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              buttonType={ButtonType.edit}
              disabled={!canEdit}
              onClick={handleEditClick}
            >
              수정 완료
            </Button>
            <Button buttonType={ButtonType.delete} onClick={handleDeleteClick}>
              삭제하기
            </Button>
          </div>
        </div>
      </div>
      <Portal>{isLoading && <div className={styles.loading}></div>}</Portal>
    </>
  );
}
