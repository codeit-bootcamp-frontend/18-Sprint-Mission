import Button from "@/components/button/button";
import { ButtonType } from "@/components/button/button-type";
import SearchInput from "@/components/input/search-input";
import Portal from "@/components/portal/portal";
import TodoList from "@/components/todo/todo-list";
import TodoListItem from "@/components/todo/todo-list-item";
import { TodoStatus } from "@/components/todo/todo-status";
import { useAsyncCall } from "@/hooks/use-async-call";
import { addTodo, getTodos, toggleTodo } from "@/libs/apis/todo";
import styles from "@/styles/home.module.css";
import type { Todo } from "@/types";
import { useRouter } from "next/router";
import {
  type ChangeEventHandler,
  MouseEventHandler,
  useMemo,
  useState,
} from "react";

export async function getServerSideProps() {
  const todos = await getTodos();
  return { props: { todos } };
}

export default function Home({ todos: initialTodos }: { todos: Todo[] }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(initialTodos ?? []);
  const { isLoading, execute } = useAsyncCall();
  const router = useRouter();

  const canAdd = useMemo(() => inputValue.trim().length > 0, [inputValue]);

  const inProgressTodos = todos
    .filter((todo) => !todo.isCompleted)
    .sort((a, b) => a.id - b.id);
  const doneTodos = todos
    .filter((todo) => todo.isCompleted)
    .sort((a, b) => a.id - b.id);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick: MouseEventHandler = async (event) => {
    event.preventDefault();
    execute(async () => {
      const newTodo = await addTodo(inputValue);
      if (!newTodo) return;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    });
  };

  const handleTodoChange = async (todo: Todo) => {
    execute(async () => {
      const updatedTodo = await toggleTodo(todo);
      if (!updatedTodo) return;
      setTodos((prevTodos) => {
        const index = prevTodos.findIndex(
          (prevTodo) => prevTodo.id === todo.id
        );
        let newTodos = [...prevTodos];
        newTodos[index] = updatedTodo;
        return newTodos;
      });
    });
  };

  const handleTodoClick = async (todo: Todo) => {
    router.push(`/items/${todo.id}`);
  };

  return (
    <>
      <div className={styles.content}>
        <form className={styles.searchForm}>
          <SearchInput
            value={inputValue}
            placeholder="할 일을 입력해주세요"
            onChange={handleInputChange}
          />
          <Button
            buttonType={ButtonType.add}
            onClick={handleAddClick}
            disabled={!canAdd}
          >
            추가하기
          </Button>
        </form>
        <div className={styles.todoListContainer}>
          <TodoList status={TodoStatus.inProgress}>
            {inProgressTodos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onChange={handleTodoChange}
                onClick={handleTodoClick}
              />
            ))}
          </TodoList>
          <TodoList status={TodoStatus.done}>
            {doneTodos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onChange={handleTodoChange}
                onClick={handleTodoClick}
              />
            ))}
          </TodoList>
        </div>
      </div>
      <Portal>{isLoading && <div className={styles.loading}></div>}</Portal>
    </>
  );
}
