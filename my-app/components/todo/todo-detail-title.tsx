import { ChangeEvent } from "react";
import styles from "./todo-detail-title.module.css";

export default function TodoDetailTitle({
  name,
  isCompleted,
  onNameChange,
  onCompletedChange,
}: {
  name: string;
  isCompleted: boolean;
  onNameChange: (newName: string) => void;
  onCompletedChange: (newCompleted: boolean) => void;
}) {
  let className = styles.todoDetailTitle;
  if (isCompleted) {
    className += ` ${styles.checked}`;
  }

  const checkImage = isCompleted
    ? "/images/checkbox-checked.svg"
    : "/images/checkbox.svg";

  const handleClick = () => {
    onCompletedChange(!isCompleted);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const span = document.createElement("span");
    span.textContent = event.target.value;
    onNameChange(event.target.value);
  };

  return (
    <div className={className}>
      <div className={styles.checkImage} onClick={handleClick}>
        <img src={checkImage} alt="check" />
      </div>
      <input className={styles.title} value={name} onChange={handleChange} />
    </div>
  );
}
