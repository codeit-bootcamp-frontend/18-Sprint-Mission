import Todo from "../Todo";
import { TodoItem } from "@/types/global";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoItem[];
  onCheckboxClick: (id: number, isCompleted: boolean) => void;
}

const TodoList = ({ todos, onCheckboxClick }: TodoListProps) => {
  return (
    <ul className={styles.ul}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            onCheckboxClick={onCheckboxClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
