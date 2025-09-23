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
            {todoItems.length === 0 ? (
              <div className={styles.empty}>
                <img src="/Todo.svg" alt="빈 Todo" />
                <p>
                  할 일이 없어요.
                  <br />
                  TODO를 새롭게 추가해주세요!
                </p>
              </div>
            ) : (
              todoItems.map((item) => {
                return (
                  <Checklist
                    key={item.id}
                    {...item}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className={styles.todo_wrapper}>
          <div className={styles.done}>
            <h3>Done</h3>
          </div>
          <div className={styles.checklist_wrapper}>
            {doneItems.length === 0 ? (
              <div className={styles.empty}>
                <img src="/Done.svg" alt="빈 Done" />
                <p>
                  아직 다 한 일이 없어요.
                  <br />
                  해야 할 일을 체크해보세요!
                </p>
              </div>
            ) : (
              doneItems.map((item) => (
                <Checklist
                  key={item.id}
                  {...item}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
