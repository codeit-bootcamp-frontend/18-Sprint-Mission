import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonType } from "./button-type";
import styles from "./button.module.css";

const className: {
  [key in keyof typeof ButtonType]: string;
} = {
  [ButtonType.add]: `${styles.button} ${styles.add}`,
  [ButtonType.edit]: `${styles.button} ${styles.edit}`,
  [ButtonType.delete]: `${styles.button} ${styles.delete}`,
};

const leadingIcon: {
  [key in keyof typeof ButtonType]: string;
} = {
  [ButtonType.add]: "/icons/ic-plus.svg",
  [ButtonType.edit]: "/icons/ic-check.svg",
  [ButtonType.delete]: "/icons/ic-xmark-white.svg",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType: keyof typeof ButtonType;
}

function Button({ children, buttonType = ButtonType.add, ...props }: Props) {
  return (
    <button className={className[buttonType]} {...props}>
      <div className={styles.trailingIcon}>
        <img src={leadingIcon[buttonType]} alt={buttonType} />
      </div>
      {children}
    </button>
  );
}

export default Button;
