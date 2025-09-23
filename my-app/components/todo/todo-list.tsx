import TodoLabel from "./todo-label";
import styles from "./todo-list.module.css";
import { TodoStatus } from "./todo-status";

const emptyMessage: {
  [key in keyof typeof TodoStatus]: string;
} = {
  [TodoStatus.inProgress]:
    "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!",
  [TodoStatus.done]: "할 일이 없어요.\nTODO를 새롭게 추가해주세요!",
};

function EmptyMessage({ status }: { status: keyof typeof TodoStatus }) {
  const chunks = emptyMessage[status].split("\n");
  let messageChunks: JSX.Element[] = [];
  for (const chunk of chunks) {
    messageChunks.push(<span key={chunk}>{chunk}</span>);
    messageChunks.push(<br key={`${chunk}-br`} />);
  }
  messageChunks.pop();
  return <p>{messageChunks}</p>;
}

interface Props {
  status: keyof typeof TodoStatus;
  children: React.ReactNode[];
}

const emptyImage: {
  [key in keyof typeof TodoStatus]: string;
} = {
  [TodoStatus.inProgress]: "/images/todo-list-empty.svg",
  [TodoStatus.done]: "/images/done-list-empty.svg",
};

function TodoList({ status, children }: Props) {
  return (
    <div className={styles.todoList}>
      <TodoLabel status={status} />
      {children.length > 0 ? (
        <div className={styles.todoListContent}>{children}</div>
      ) : (
        <div className={styles.todoListEmptyContainer}>
          <img src={emptyImage[status]} alt="empty" />
          <EmptyMessage status={status} />
        </div>
      )}
    </div>
  );
}

export default TodoList;
