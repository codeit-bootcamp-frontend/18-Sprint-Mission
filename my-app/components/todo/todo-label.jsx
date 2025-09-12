import styles from "./todo-label.module.css";
import TODO_STATUS from "./todo-status";

const title = {
  [TODO_STATUS.inProgress]: "TO DO",
  [TODO_STATUS.done]: "DONE",
};

function TodoLabel({ status }) {
  const className = `${styles.todoLabel} ${styles[status]}`;
  return <span className={className}>{title[status]}</span>;
}

export default TodoLabel;
