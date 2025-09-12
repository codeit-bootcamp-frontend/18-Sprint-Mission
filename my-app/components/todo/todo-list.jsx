import TodoLabel from "./todo-label";
import styles from "./todo-list.module.css";
import TODO_STATUS from "./todo-status";

const emptyMessage = {
  [TODO_STATUS.inProgress]:
    "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!",
  [TODO_STATUS.inProgress]: "할 일이 없어요.\nTODO를 새롭게 추가해주세요!",
};

function EmptyMessage({ status }) {
  const chunks = emptyMessage[status].split("\n");
  let messageChunks = [];
  for (const chunk of chunks) {
    messageChunks.push(<span key={chunk}>{chunk}</span>);
    messageChunks.push(<br key={`${chunk}-br`} />);
  }
  messageChunks.pop();
  return <p>{messageChunks}</p>;
}

function TodoList({ status, children }) {
  return (
    <div className={styles.todoList}>
      <TodoLabel status={status} />
      {children.length > 0 ? (
        <div className={styles.todoListContent}>{children}</div>
      ) : (
        <div className={styles.todoListEmptyContainer}>
          <img
            src={`/images/${done ? "done" : "todo"}-list-empty.svg`}
            alt="empty"
          />
          <EmptyMessage status={status} />
        </div>
      )}
    </div>
  );
}

export default TodoList;
