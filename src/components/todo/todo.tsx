import Image from "next/image";
import CheckList from "./checkList";
import styles from "./todo.module.css";

export default function Todo() {
  return (
    <div className={styles.todo_container}>
      <Image src="/todo.png" width={101} height={36} alt="todo 이미지" />
      <CheckList />
    </div>
  );
}
