import Checklist from "./checklist";
import styles from "./list.module.css";

export default function List({ todos, onUpdate, onDelete }) {
  const todoItems = todos.filter((todo) => !todo.isDone);
  const doneItems = todos.filter((todo) => todo.isDone);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.todo_wrapper}>
          <div className={styles.todo}>
            <h3>To do</h3>
          </div>
          <div className={styles.checklist_wrapper}>
            {todoItems.map((todo) => {
              return (
                <Checklist
                  key={todo.id}
                  {...todo}
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
            {doneItems.map((todo) => (
              <Checklist
                key={todo.id}
                {...todo}
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
