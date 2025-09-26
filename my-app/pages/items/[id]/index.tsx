import Button from "@/components/button/button";
import { ButtonType } from "@/components/button/button-type";
import Portal from "@/components/portal/portal";
import TodoDetailHeader from "@/components/todo/todo-detail-header";
import TodoDetailImagePreview from "@/components/todo/todo-detail-image-preview";
import { useAsyncCall } from "@/hooks/use-async-call";
import { uploadImage } from "@/libs/apis/image";
import { revalidate } from "@/libs/apis/revalidate";
import { deleteTodo, editTodo, getTodo, getTodos } from "@/libs/apis/todo";
import styles from "@/styles/item.module.css";
import type { Todo } from "@/types";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useMemo, useState } from "react";

export async function getStaticPaths() {
  const todos = await getTodos();
  const paths = todos.map((todo) => ({
    params: { id: todo.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
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

type TodoValuesState = Pick<Todo, "name" | "memo" | "isCompleted">;

export default function Page({ todo }: { todo: Todo }) {
  const router = useRouter();

  const [todoValues, setTodoValues] = useState<TodoValuesState>({
    name: todo.name,
    memo: todo.memo,
    isCompleted: todo.isCompleted,
  });
  const [image, setImage] = useState<File | undefined>();
  const { isLoading, execute } = useAsyncCall();

  const canEdit = useMemo(() => {
    if (image) {
      return true;
    }

    return (
      todoValues.name !== todo.name ||
      todoValues.memo != todo.memo ||
      todoValues.isCompleted !== todo.isCompleted
    );
  }, [image, todoValues]);

  const handleNameChange = (newName: string) => {
    setTodoValues((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  const handleCompletedChange = (newCompleted: boolean) => {
    setTodoValues((prev) => ({
      ...prev,
      isCompleted: newCompleted,
    }));
  };

  const handleImageChange = (file: File) => {
    setImage(file);
  };

  const handleEditClick = async () => {
    execute(async () => {
      const updateValues: Partial<Todo> = {
        name: todoValues.name,
        memo: todoValues.memo ?? "",
        isCompleted: todoValues.isCompleted,
      };

      if (image) {
        const imageUrl = await uploadImage(image);
        if (imageUrl) {
          updateValues.imageUrl = imageUrl;
        } else {
          console.log("Failed to upload image");
          return;
        }
      }

      const result = await editTodo(todo.id, updateValues);
      if (result) {
        await revalidate(["/", `/items/${todo.id}`]);
        router.push("/");
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
          <TodoDetailHeader
            name={todoValues.name}
            isCompleted={todoValues.isCompleted}
            onNameChange={handleNameChange}
            onCompletedChange={handleCompletedChange}
          />
          <div className={styles.imageMemoContainer}>
            <div className={styles.imageContainer}>
              <TodoDetailImagePreview
                imageUrl={todo.imageUrl}
                onChange={handleImageChange}
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
