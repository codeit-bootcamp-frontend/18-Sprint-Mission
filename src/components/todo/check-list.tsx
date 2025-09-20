"use client";

import Image from "next/image";
import styles from "./check-list.module.css";
import notCheck from "../../../public/not_check.svg";
import checkedIcon from "../../../public/checked.svg";
import { useState } from "react";
import useCompleteTodo from "@/hooks/useCompleteTodo";
import { TodoDetailData } from "@/types";
import Spinner from "../loading/spinner";

export default function CheckList({
  id,
  name,
  isCompleted,
}: {
  id: number;
  name: string;
  isCompleted: boolean;
}) {
  const [task, setTask] = useState<TodoDetailData | null>(null);
  const { isLoading } = useCompleteTodo(id, task);
  const onClickSetTask = () => {
    setTask({ name, memo: "", imageUrl: "", isCompleted: !isCompleted });
  };

  return (
    <div
      className={
        isCompleted
          ? `${styles.check_list_container} ${styles.checked}`
          : styles.check_list_container
      }
    >
      <button
        type="button"
        onClick={onClickSetTask}
        disabled={isLoading ? true : false}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <Image
            src={isCompleted ? checkedIcon : notCheck}
            width={32}
            height={32}
            alt={isCompleted ? "완료" : "미완료"}
          />
        )}
      </button>
      <p>{name}</p>
    </div>
  );
}
