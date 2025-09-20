import type { Todo } from "@/types";
import { MouseEventHandler } from "react";
import styles from "./todo-list-item.module.css";

function TodoListItem({
  todo,
  onClick,
  onChange,
}: {
  todo: Todo;
  onClick: (todo: Todo) => void;
  onChange: (todo: Todo) => void;
}) {
  let className = styles.todoListItem;
  if (todo.isCompleted) {
    className += ` ${styles.checked}`;
  }

  const checkImage = todo.isCompleted
    ? "/images/checkbox-checked.svg"
    : "/images/checkbox.svg";

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const element = event.target as HTMLElement;
    if (element.tagName === "IMG") {
      onChange(todo);
    } else {
      onClick(todo);
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className={styles.checkImage}>
        <img src={checkImage} alt="check" />
      </div>
      <p className={styles.title}>{todo.name}</p>
    </div>
  );
}

export default TodoListItem;
