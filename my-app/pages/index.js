import Button from "@/components/button/button";
import { BUTTON_TYPE } from "@/components/button/button-type";
import SearchInput from "@/components/input/search-input";
import GlobalNavBar from "@/components/nav-bar/global-nav-bar";
import Portal from "@/components/portal/portal";
import Todo from "@/components/todo/todo";
import TodoList from "@/components/todo/todo-list";
import { useAsyncCall } from "@/hooks/use-async-call";
import { addTodo, getTodos, toggleTodo } from "@/libs/apis/todo";
import styles from "@/styles/home.module.css";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, execute] = useAsyncCall();

  const canAdd = useMemo(() => inputValue.trim().length > 0, [inputValue]);

  const inProgressTodos = todos
    .filter((todo) => !todo.isCompleted)
    .sort((a, b) => a.id - b.id);
  const doneTodos = todos
    .filter((todo) => todo.isCompleted)
    .sort((a, b) => a.id - b.id);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = async (event) => {
    event.preventDefault();
    execute(async () => {
      const newTodo = await addTodo(inputValue);
      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    });
  };

  const handleToDoClick = async (todo) => {
    execute(async () => {
      const updatedTodo = await toggleTodo(todo);
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

  useEffect(() => {
    execute(async () => {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    });
  }, []);

  return (
    <>
      <GlobalNavBar />
      <main className={styles.main}>
        <div className={styles.content}>
          <form className={styles.searchForm}>
            <SearchInput
              value={inputValue}
              placeholder="할 일을 입력해주세요"
              onChange={handleInputChange}
            />
            <Button
              type={BUTTON_TYPE.add}
              onClick={handleAddClick}
              disabled={!canAdd}
            >
              추가하기
            </Button>
          </form>
          <div className={styles.todoListContainer}>
            <TodoList>
              {inProgressTodos.map((todo) => (
                <Todo key={todo.id} onClick={() => handleToDoClick(todo)}>
                  {todo.name}
                </Todo>
              ))}
            </TodoList>
            <TodoList done>
              {doneTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  checked
                  onClick={() => handleToDoClick(todo)}
                >
                  {todo.name}
                </Todo>
              ))}
            </TodoList>
          </div>
        </div>
      </main>
      <Portal>{isLoading && <div className={styles.loading}></div>}</Portal>
    </>
  );
}
