import Checklist from "./checklist";
import styles from "./list.module.css";

export default function List() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.todo_wrapper}>
          <div className={styles.todo}>
            <h3>To do</h3>
          </div>
          <div className={styles.checklist_wrapper}>
            <Checklist />
            <Checklist />
            <Checklist />
          </div>
        </div>
        <div className={styles.todo_wrapper}>
          <div className={styles.done}>
            <h3>Done</h3>
          </div>
          <div className={styles.checklist_wrapper}>
            <Checklist />
          </div>
        </div>
      </div>
    </>
  );
}
