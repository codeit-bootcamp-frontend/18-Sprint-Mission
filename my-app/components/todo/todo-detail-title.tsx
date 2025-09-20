import type { Todo } from "@/types";
import styles from "./todo-detail-title.module.css";

export default function TodoDetailTitle({
  todo,
  onClick,
}: {
  todo: Todo;
  onClick: (todo: Todo) => void;
}) {
  let className = styles.todoDetailTitle;
  if (todo.isCompleted) {
    className += ` ${styles.checked}`;
  }

  const checkImage = todo.isCompleted
    ? "/images/checkbox-checked.svg"
    : "/images/checkbox.svg";

  const handleClick = () => {
    onClick(todo);
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
