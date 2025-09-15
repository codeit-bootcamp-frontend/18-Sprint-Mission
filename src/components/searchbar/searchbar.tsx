import Image from "next/image";
import styles from "./searchbar.module.css";

export default function Searchbar() {
  return (
    <div className={styles.searchbar_container}>
      <div className={styles.searchbar_box}>
        <input
          className={styles.searchbar}
          placeholder="할 일을 입력해주세요"
        />
        <button className={styles.add_btn}>
          <Image
            src="/plus.svg"
            width={16}
            height={16}
            alt="추가이미지"
            className={styles.plus}
          />
          추가하기
        </button>
      </div>
    </div>
  );
}
