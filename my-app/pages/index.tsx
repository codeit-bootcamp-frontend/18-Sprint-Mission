import { useState, useRef, ReactNode } from "react";
import Editor from "src/components/editor";
import List from "src/components/list";
import styles from "./index.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchItems, createItem } from "src/api/api";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(context);

  const allItems = await fetchItems(1, 10);

  return { props: { allItems } };
};

export default function Home({
  allItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [items, setItems] = useState(allItems);

  const idRef = useRef(0);

  const onCreate = async (name) => {
    const created = await createItem(name);
    if (!created) return;

    setItems([created, ...items]);
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
