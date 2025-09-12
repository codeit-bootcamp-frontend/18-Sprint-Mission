import styles from "./todo.module.css";

function Todo({ children, checked = false, ...props }) {
  let className = styles.todo;
  if (checked) {
    className += ` ${styles.checked}`;
  }

  const checkImage = checked
    ? "/images/checkbox-checked.svg"
    : "/images/checkbox.svg";

  return (
    <div className={className} {...props}>
      <div className={styles.checkImage}>
        <img src={checkImage} alt="check" />
      </div>
      <p className={styles.title}>{children}</p>
    </div>
  );
}

export default Todo;
