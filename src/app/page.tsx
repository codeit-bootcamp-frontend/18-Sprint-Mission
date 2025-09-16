import Searchbar from "@/components/searchbar/searchbar";
import styles from "./page.module.css";
import Todo from "@/components/todo/todo";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <div>
        <Todo />
      </div>
    </div>
  );
}
