import styles from "@/styles/404.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.description}>
        The page you are looking for does not exist.
      </p>
      <div>
        <Link href="/" className={styles.homeLink}>
          Go Home
        </Link>
        <button className={styles.button} onClick={() => router.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
}
