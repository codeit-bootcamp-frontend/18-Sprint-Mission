import { MouseEventHandler, ReactNode } from "react";
import styles from "./todo.module.css";

function TodoListItem({
  children,
  checked = false,
  onClick,
}: {
  children: ReactNode;
  checked?: boolean;
  onClick: MouseEventHandler;
}) {
  let className = styles.todo;
  if (checked) {
    className += ` ${styles.checked}`;
  }

  const checkImage = checked
    ? "/images/checkbox-checked.svg"
    : "/images/checkbox.svg";

  return (
    <div className={className} onClick={onClick}>
      <div className={styles.checkImage}>
        <img src={checkImage} alt="check" />
      </div>
      <p className={styles.title}>{children}</p>
    </div>
  );
}

export default TodoListItem;
