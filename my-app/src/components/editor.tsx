import styles from "./editor.module.css";
import { useState, useRef } from "react";
import { EditorProps } from "src/api/types";
export default function Editor({ onCreate }: EditorProps) {
  const [name, setName] = useState("");
  const contentRef = useRef<HTMLInputElement>(null);

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    if (name === "") {
      return alert("내용을 입력해주세요");
    }
    onCreate(name);
    setName("");
  };
  return (
    <div className={styles.container}>
      <input
        ref={contentRef}
        onKeyDown={onKeydown}
        value={name}
        onChange={onChangeName}
        className={styles.input}
        placeholder="할 일을 입력해주세요"
      />
      <button className={styles.button} onClick={onSubmit}>
        + 추가하기
      </button>
    </div>
  );
}
