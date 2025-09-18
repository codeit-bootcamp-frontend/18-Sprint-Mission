"use client";

import Image from "next/image";
import styles from "./taskbar.module.css";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import plus from "../../../public/plus.svg";
import plusWhite from "../../../public/plus_white.svg";
import addTaskAction from "@/actions/add-task.action";

export default function Taskbar() {
  const [task, setTask] = useState("");
  const [state, formAction, isPending] = useActionState(addTaskAction, {
    status: true,
    error: "",
  });

  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    if (state && !state.status) alert(state.error);
    setTask("");
  }, [state]);

  return (
    <form action={formAction}>
      <div className={styles.taskbar_box}>
        <input
          name="name"
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
          disabled={isPending ? true : false}
        >
          <Image
            src={task !== "" ? plusWhite : plus}
            width={16}
            height={16}
            alt="추가이미지"
          />{" "}
          추가하기
        </button>
      </div>
    </form>
  );
}
