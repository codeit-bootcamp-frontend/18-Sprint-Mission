import TodoLabel from "./todo-label";
import styles from "./todo-list.module.css";

function EmptyMessage({ children }) {
  const chunks = children.split("\n");
  let messageChunks = [];
  for (const chunk of chunks) {
    messageChunks.push(<span key={chunk}>{chunk}</span>);
    messageChunks.push(<br key={`${chunk}-br`} />);
  }
  messageChunks.pop();
  return <p>{messageChunks}</p>;
}

function TodoList({ done = false, children }) {
  const emptyMessage = done
    ? "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!"
    : "할 일이 없어요.\nTODO를 새롭게 추가해주세요!";

  return (
    <div className={styles.todoList}>
      <TodoLabel done={done} />
      {children.length > 0 ? (
        <div className={styles.todoListContent}>{children}</div>
      ) : (
        <div className={styles.todoListEmptyContainer}>
          <img
            src={`/images/${done ? "done" : "todo"}-list-empty.svg`}
            alt="empty"
          />
          <EmptyMessage>{emptyMessage}</EmptyMessage>
        </div>
      )}
    </div>
  );
}

export default TodoList;
