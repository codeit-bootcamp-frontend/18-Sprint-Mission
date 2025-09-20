import { useState, useRef } from "react";
import Editor from "src/components/editor";
import List from "src/components/list";
import styles from "./index.module.css";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "공부하기",
  },
  {
    id: 1,
    isDone: false,
    content: "게임하기",
  },
  {
    id: 2,
    isDone: false,
    content: "잠자기",
  },
];

export default function Home() {
  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <>
      <div className={styles.container}>
        <Editor onCreate={onCreate} />
        <List />
      </div>
    </>
  );
}
