import { ChangeEvent, useEffect, useRef } from "react";
import styles from "./todo-detail-header.module.css";

export default function TodoDetailHeader({
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
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      const newWidth = spanRef.current.offsetWidth + 4;
      inputRef.current.style.width = `${newWidth}px`;
    }
  }, [inputRef.current?.value, spanRef.current]);

  let className = styles.todoDetailHeader;
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
    onNameChange(event.target.value);
  };

  return (
    <div className={className}>
      <div className={styles.checkImage} onClick={handleClick}>
        <img src={checkImage} alt="check" />
      </div>
      <div>
        <input
          className={styles.todoTitle}
          value={name}
          onChange={handleChange}
          ref={inputRef}
        />
        <span className={styles.todoTitleMirror} ref={spanRef}>
          {name}
        </span>
      </div>
    </div>
  );
}
