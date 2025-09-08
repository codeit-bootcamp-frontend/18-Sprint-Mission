import styles from "./todo-label.module.css";

function TodoLabel({ done }) {
  let className = styles.todoLabel;
  if (done) {
    className += ` ${styles.done}`;
  }

  return <span className={className}>{done ? "DONE" : "TO DO"}</span>;
}

export default TodoLabel;
