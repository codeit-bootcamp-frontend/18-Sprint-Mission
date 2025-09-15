import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_box}>
        <Image
          src="/doit_logo.svg"
          width={151}
          height={41}
          alt="logo"
          priority
        />
      </div>
    </div>
  );
}
