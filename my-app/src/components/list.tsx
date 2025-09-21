import Checklist from "./checklist";
import styles from "./list.module.css";
import { ListProps } from "src/api/types";

export default function List({ items, onUpdate, onDelete }: ListProps) {
  const todoItems = items.filter((item) => !item.isCompleted);
  const doneItems = items.filter((item) => item.isCompleted);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.todo_wrapper}>
          <div className={styles.todo}>
            <h3>To do</h3>
          </div>
          <div className={styles.checklist_wrapper}>
            {todoItems.map((item) => {
              return (
                <Checklist
                  key={item.id}
                  {...item}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.todo_wrapper}>
          <div className={styles.done}>
            <h3>Done</h3>
          </div>
          <div className={styles.checklist_wrapper}>
            {doneItems.map((item) => (
              <Checklist
                key={item.id}
                {...item}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
