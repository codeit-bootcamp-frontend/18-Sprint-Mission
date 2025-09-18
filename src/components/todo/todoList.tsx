import styles from "./todoList.module.css";
import todoImg from "../../../public/todo.png";
import doneImg from "../../../public/done.png";
import { SeparatedTodos, TodoData } from "@/types";
import emptyTodo from "../../../public/empty_todo.png";
import emptyDone from "../../../public/empty_done.png";
import TodoSection from "./todo-section";

async function getAllTodoList() {
  const response = await fetch(`${process.env.NEXT_API_URL}/items`, {
    next: { tags: ["todo"] },
  });

  if (!response.ok) console.error(response.statusText);

  const todoList: TodoData[] = await response.json();
  const separatedTodos = todoList.reduce<SeparatedTodos>(
    (acc, todo) => {
      if (todo.isCompleted) {
        acc.completed.push(todo);
      } else {
        acc.incomplete.push(todo);
      }
      return acc;
    },
    {
      completed: [],
      incomplete: [],
    }
  );

  return separatedTodos;
}

export default async function TodoList() {
  const separatedTodos = await getAllTodoList();

  return (
    <>
      <div className={styles.todo_list_container}>
        <section className={styles.todo_list_box}>
          <TodoSection
            img={todoImg}
            imgAlt="TODO 이미지"
            list={separatedTodos.incomplete}
            emptyImg={emptyTodo}
            emptyMsg={
              <>
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </>
            }
          />
        </section>

        <section className={styles.todo_list_box}>
          <TodoSection
            img={doneImg}
            imgAlt="TODO 이미지"
            list={separatedTodos.completed}
            emptyImg={emptyDone}
            emptyMsg={
              <>
                아직 다 한 일이 없어요.
                <br />
                해야 할 일을 체크해보세요!
              </>
            }
          />
        </section>
      </div>
    </>
  );
}
