"use client";

import Image from "next/image";
import styles from "./check-list.module.css";
import notCheck from "../../../public/not_check.svg";
import checkedIcon from "../../../public/checked.svg";

export default function CheckList({
  id,
  name,
  isCompleted,
}: {
  id: number;
  name: string;
  isCompleted: boolean;
}) {
  return (
    <div
      className={
        isCompleted
          ? `${styles.check_list_container} ${styles.checked}`
          : styles.check_list_container
      }
    >
      <Image
        className={styles.check_btn}
        src={isCompleted ? checkedIcon : notCheck}
        width={32}
        height={32}
        alt={isCompleted ? "완료" : "미완료"}
      />
      <p>{name}</p>
    </div>
  );
}
