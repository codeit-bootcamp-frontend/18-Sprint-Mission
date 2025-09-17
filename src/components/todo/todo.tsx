import Image from "next/image";
import CheckList from "./checkList";
import styles from "./todo.module.css";
import todoImg from "../../../public/todo.png";
import { todoData } from "@/mock";

export default function Todo() {
  return (
    <div className={styles.todo_container}>
      <Image src={todoImg} width={101} height={36} alt="todo 이미지" />
      {todoData.map((todo) => (
        <CheckList
          key={todo.id}
          name={todo.name}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
}
