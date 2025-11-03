import { ButtonHTMLAttributes } from "react";
import IcCheckTrue from "@/public/images/ic_check-true.svg";
import IcCheckFalse from "@/public/images/ic_check-false.svg";
import Image from "next/image";
import styles from "./CheckBox.module.css";

interface CheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCompleted: boolean;
}

const CheckBox = ({ isCompleted, ...props }: CheckBoxProps) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {isCompleted ? (
        <Image
          src={IcCheckTrue}
          alt="완료"
          aria-label="done"
          fill
          quality={100}
        />
      ) : (
        <Image
          src={IcCheckFalse}
          alt="미완료"
          aria-label="not-done"
          fill
          quality={100}
        />
      )}
    </button>
  );
};

export default CheckBox;
