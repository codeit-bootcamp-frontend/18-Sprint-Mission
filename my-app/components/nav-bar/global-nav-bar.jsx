import Link from "next/link";
import styles from "./global-nav-bar.module.css";

function GlobalNavBar() {
  return (
    <nav className={styles.globalNavBar}>
      <div className={styles.content}>
        <Link href="/">
          <picture>
            <source
              srcset="/images/logo-small.svg"
              media="(max-width: 743px)"
            />
            <img src="/images/logo-large.svg" alt="logo" />
          </picture>
        </Link>
      </div>
    </nav>
  );
}

export default GlobalNavBar;
