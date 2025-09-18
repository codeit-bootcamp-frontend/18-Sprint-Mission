import Editor from "src/components/editor";
import List from "src/components/List";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Editor />
        <List />
      </div>
    </>
  );
}
