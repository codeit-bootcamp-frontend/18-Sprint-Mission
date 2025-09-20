import { TodoSectionProps } from "@/types";
import Image from "next/image";
import CheckList from "./check-list";
import styles from "./empty-img.module.css";

export default function TodoSection({
  img,
  imgAlt,
  list,
  emptyImg,
  emptyMsg,
}: TodoSectionProps) {
  return (
    <>
      <Image src={img} width={101} height={36} alt={imgAlt} priority />
      {list.length > 0 ? (
        list.map((todo) => <CheckList key={todo.id} {...todo} />)
      ) : (
        <div className={styles.empty}>
          <Image
            src={emptyImg}
            width={240}
            height={240}
            alt="리스트 없음"
            priority
          />
          <p className={styles.empty_msg}>{emptyMsg}</p>
        </div>
      )}
    </>
  );
}
