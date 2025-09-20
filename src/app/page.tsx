import Taskbar from "@/components/addTask/taskbar";
import styles from "./page.module.css";
import TodoList from "@/components/todo/todoList";

export default function Home() {
  return (
    <div>
      <Taskbar />
      <div className={styles.list_container}>
        <TodoList />
      </div>
    </div>
  );
}
