import styles from "./checklist.module.css";

export default function Checklist() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="checkbox" />
      <div className={styles.content}>To do...</div>
      <button className={styles.button}>수정</button>
      <button className={styles.button}>삭제</button>
    </div>
  );
}
