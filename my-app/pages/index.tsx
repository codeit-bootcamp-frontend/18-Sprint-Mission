import Layout from "@/components/Layout";
import SearchForm from "./_components/SearchForm";
import { ChangeEvent, FormEvent, useState } from "react";
import { getTodos } from "@/api/getTodos";
import { TodoItem } from "@/types/global";
import { postTodo } from "@/api/postTodo";
import TodoList from "@/components/TodoList";
import { patchTodo } from "@/api/patchTodo";
import Badge from "@/components/Badge";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import ImgEmptyPending from "@/public/images/img_empty-todo.svg";
import ImgEmptyCompleted from "@/public/images/img_empty-done.svg";

interface HomeProps {
  todos: TodoItem[];
}

export const getServerSideProps = async () => {
  try {
    const response = await getTodos();
    return {
      props: {
        todos: response,
      },
    };
  } catch (error) {
    console.error(error);
  }
};

export default function Home({ todos: initialTodos }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [isDisabled, setIsDisabled] = useState(false);

  const completedTodos: TodoItem[] = [];
  const pendingTodos: TodoItem[] = [];

  todos.forEach((todo) => {
    if (todo.isCompleted) completedTodos.push(todo);
    else pendingTodos.push(todo);
  });

  const handleSearchTermSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    try {
      await postTodo({ name: searchTerm });
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  const handleCheckboxClick = async (id: number, isCompleted: boolean) => {
    try {
      await patchTodo({ itemId: id, isCompleted: !isCompleted });
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <SearchForm
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        onSubmit={handleSearchTermSubmit}
        isDisabled={isDisabled}
      />
      <main className={styles.main}>
        <section className={styles.section}>
          <Badge variants="todo" className={styles.badge} />
          {pendingTodos.length > 0 ? (
            <TodoList
              todos={pendingTodos}
              onCheckboxClick={handleCheckboxClick}
            />
          ) : (
            <Image
              className={styles.img}
              src={ImgEmptyPending}
              alt="pending todo"
              width={240}
              height={240}
            />
          )}
        </section>
        <section className={styles.section}>
          <Badge variants="done" className={styles.badge} />
          {completedTodos.length > 0 ? (
            <TodoList
              todos={completedTodos}
              onCheckboxClick={handleCheckboxClick}
            />
          ) : (
            <Image
              className={styles.img}
              src={ImgEmptyCompleted}
              alt="completed todo"
              width={240}
              height={240}
            />
          )}
        </section>
      </main>
    </Layout>
  );
}
