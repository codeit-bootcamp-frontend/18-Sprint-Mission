import Image from "next/image";
import styles from "./checkList.module.css";
import notCheck from "../../../public/not_check.svg";

export default function CheckList() {
  return (
    <div className={styles.check_list_container}>
      <Image src={notCheck} width={32} height={32} alt="체크안됨" />
      <p className={styles.check_list_text}>비타민 챙겨먹기</p>
    </div>
  );
}
