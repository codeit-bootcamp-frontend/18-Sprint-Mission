import styles from "./editor.module.css";
import { useState, useRef } from "react";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLInputElement>(null);

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      return alert("내용을 입력해주세요");
    }
    onCreate();
    setContent("");
  };
  return (
    <div className={styles.container}>
      <input
        ref={contentRef}
        onKeyDown={onKeydown}
        value={content}
        onChange={onChangeContent}
        className={styles.input}
        placeholder="할 일을 입력해주세요"
      />
      <button className={styles.button} onClick={onSubmit}>
        + 추가하기
      </button>
    </div>
  );
}
