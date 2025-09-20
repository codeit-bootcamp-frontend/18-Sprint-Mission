import TodoDetailTitle from "@/components/todo/todo-detail-title";
import { getTodo } from "@/libs/apis/todo";
import styles from "@/styles/item.module.css";
import type { Todo } from "@/types";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params!;
  const todo = await getTodo(Number(id));
  return {
    props: {
      todo,
    },
  };
}

export default function Page({ todo }: { todo: Todo }) {
  const handleTitleClick = (todo: Todo) => {
    console.log("Title clicked:", todo);
  };

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div className={styles.content}>
      <TodoDetailTitle todo={todo} onClick={handleTitleClick} />
    </div>
  );
}
