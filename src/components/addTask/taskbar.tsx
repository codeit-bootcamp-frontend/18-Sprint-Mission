"use client";

import Image from "next/image";
import styles from "./taskbar.module.css";
import { ChangeEvent, useState } from "react";
import plus from "../../../public/plus.svg";
import plusWhite from "../../../public/plus_white.svg";

export default function Taskbar() {
  const [task, setTask] = useState("");
  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <form>
      <div className={styles.taskbar_box}>
        <input
          className={styles.taskbar}
          placeholder="할 일을 입력해주세요"
          onChange={onChangeTask}
        />
        <button
          className={
            task !== ""
              ? `${styles.add_btn} ${styles.writing_task}`
              : styles.add_btn
          }
        >
          <Image
            src={task !== "" ? plusWhite : plus}
            width={16}
            height={16}
            alt="추가이미지"
          />
          추가하기
        </button>
      </div>
    </form>
  );
}
