import Image from "next/image";
import CheckList from "./checkList";
import styles from "./todoList.module.css";
import todoImg from "../../../public/todo.png";
import doneImg from "../../../public/done.png";
import { SeparatedTodos, TodoData } from "@/types";

async function getAllTodoList() {
  const response = await fetch(
    `${process.env.NEXT_API_URL}/fe-18-sprint9/items`
  );

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
          <Image src={todoImg} width={101} height={36} alt="todo 이미지" />
          {separatedTodos.incomplete.map((todo) => (
            <CheckList
              key={todo.id}
              name={todo.name}
              isCompleted={todo.isCompleted}
            />
          ))}
        </section>

        <section className={styles.todo_list_box}>
          <Image src={doneImg} width={101} height={36} alt="done 이미지" />
          {separatedTodos.completed.map((todo) => (
            <CheckList
              key={todo.id}
              name={todo.name}
              isCompleted={todo.isCompleted}
            />
          ))}
        </section>
      </div>
    </>
  );
}
