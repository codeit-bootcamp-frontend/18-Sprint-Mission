import styles from "./checklist.module.css";

export default function Checklist({ id, isDone, content, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className={styles.container}>
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        className={styles.input}
        type="checkbox"
      />
      <div className={styles.content}>{content}</div>
      <button onClick={onClickDeleteButton} className={styles.button}>
        삭제
      </button>
    </div>
  );
}
