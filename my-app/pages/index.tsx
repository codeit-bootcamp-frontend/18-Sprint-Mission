import { useState, useRef, ReactNode } from "react";
import Editor from "src/components/editor";
import List from "src/components/list";
import styles from "./index.module.css";
import { InferGetServerSidePropsType } from "next";
import fetchItems from "src/api/api";

export const getServerSideProps = async () => {
  const allItems = await fetchItems(1, 10);

  return { props: { allItems } };
};

export default function Home({
  allItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(allItems);
  const [items, setItems] = useState(allItems);

  const idRef = useRef(Math.max(0, ...allItems.map((i) => i.id)) + 1);

  const onCreate = (name) => {
    const newItem = {
      id: idRef.current++,
      isCompleted: false,
      name: name,
    };

    setItems([newItem, ...items]);
  };

  const onUpdate = (targetId) => {
    setItems(
      items.map((item) =>
        item.id === targetId
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  };

  const onDelete = (targetId) => {
    setItems(items.filter((item) => item.id !== targetId));
  };

  return (
    <>
      <div className={styles.container}>
        <Editor onCreate={onCreate} />
        <List items={items} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}
