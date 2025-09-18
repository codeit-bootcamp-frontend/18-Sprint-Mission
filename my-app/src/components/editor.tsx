import styles from "./editor.module.css";

export default function Editor() {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="할 일을 입력해주세요" />
      <button className={styles.button}>+ 추가하기</button>
    </div>
  );
}
