import Checklist from "./checklist";
import styles from "./list.module.css";

export default function List() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h3>To do</h3>
          <div className={styles.todo_wrapper}>
            <Checklist />
            <Checklist />
            <Checklist />
          </div>
        </div>
        <div>
          <h3>Done</h3>
        </div>
      </div>
    </>
  );
}
