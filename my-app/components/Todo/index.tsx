import { MouseEvent } from "react";
import styles from "./Todo.module.css";
import CheckBox from "../CheckBox";
import { TodoItem } from "@/types/global";

interface TodoProps extends TodoItem {
  onCheckboxClick: (id: number, isCompleted: boolean) => void;
}

const Todo = ({
  id,
  isCompleted,
  name,
  onCheckboxClick,
  ...props
}: TodoProps) => {
  return (
    <span
      className={`${styles.todo} ${isCompleted && styles.done} font-regular-16`}
      aria-label="todo"
    >
      <CheckBox
        isCompleted={isCompleted}
        onClick={() => onCheckboxClick(id, isCompleted)}
      />
      <span aria-label={name}>{name}</span>
    </span>
  );
};

export default Todo;
