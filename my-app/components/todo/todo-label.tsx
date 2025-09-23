import styles from "./todo-label.module.css";
import { TodoStatus } from "./todo-status";

const title: {
  [key in keyof typeof TodoStatus]: string;
} = {
  [TodoStatus.inProgress]: "TO DO",
  [TodoStatus.done]: "DONE",
};

interface Props {
  status: keyof typeof TodoStatus;
}

function TodoLabel({ status }: Props) {
  const className = `${styles.todoLabel} ${styles[status]}`;
  return <span className={className}>{title[status]}</span>;
}

export default TodoLabel;
