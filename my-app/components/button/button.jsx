import { BUTTON_TYPE } from "./button-type";
import styles from "./button.module.css";

const className = {
  [BUTTON_TYPE.add]: `${styles.button} ${styles.add}`,
  [BUTTON_TYPE.edit]: `${styles.button} ${styles.edit}`,
  [BUTTON_TYPE.delete]: `${styles.button} ${styles.delete}`,
};

const leadingIcon = {
  [BUTTON_TYPE.add]: "/icons/ic-plus.svg",
  [BUTTON_TYPE.edit]: "/icons/ic-check.svg",
  [BUTTON_TYPE.delete]: "/icons/ic-xmark-white.svg",
};

function Button({ children, type = BUTTON_TYPE.add, ...props }) {
  return (
    <button className={className[type]} {...props}>
      <div className={styles.trailingIcon}>
        <img src={leadingIcon[type]} alt={type} />
      </div>
      {children}
    </button>
  );
}

export default Button;
