import Todo from "./todo";
import TodoLabel from "./todo-label";
import styles from "./todo-list.module.css";

function TodoList({ done = false }) {
  return (
    <div className={styles.todoList}>
      <TodoLabel done={done} />
      <div className={styles.todoListContent}>
        <Todo checked={done}>비타민 챙겨 먹기</Todo>
        <Todo checked={done}>맥주 마시기</Todo>
        <Todo checked={done}>운동하기</Todo>
      </div>
    </div>
  );
}

export default TodoList;
