import styles from "./checklist.module.css";

export default function Checklist({
  id,
  isCompleted,
  name,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div
      className={`${styles.container} ${
        isCompleted ? styles.doneContainer : ""
      }`}
    >
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isCompleted}
        className={styles.input}
        type="checkbox"
      />
      <div
        className={`${styles.content} ${isCompleted ? styles.doneContent : ""}`}
      >
        {name}
      </div>
      <button onClick={onClickDeleteButton} className={styles.button}>
        삭제
      </button>
    </div>
  );
}
