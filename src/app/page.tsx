import Searchbar from "@/components/searchbar/searchbar";
import styles from "./page.module.css";
import TodoList from "@/components/todo/todoList";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <div className={styles.list_container}>
        <TodoList />
      </div>
    </div>
  );
}
