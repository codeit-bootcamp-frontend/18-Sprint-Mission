import { ReactNode } from "react";
import Link from "next/link";
import styles from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className={styles.header}>
        <header className={styles.headerContent}>
          <Link href="/">
            <img src="/logo.svg" alt="로고" />
            <span>do it ; </span>
          </Link>
        </header>
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
