import styles from "./global-nav-bar.module.css";

function GlobalNavBar() {
  return (
    <nav className={styles.globalNavBar}>
      <div className={styles.content}>
        <picture>
          <source src="/images/logo-small" media="(max-width: 743px)" />
          <img src="/images/logo-large.svg" alt="logo" />
        </picture>
      </div>
    </nav>
  );
}

export default GlobalNavBar;
