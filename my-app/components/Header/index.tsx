import ImgLogoLarge from "@/public/images/img_logo-large.svg";
import ImgLogoSmall from "@/public/images/img_logo-small.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src={ImgLogoLarge}
            alt="헤더 로고"
            quality={100}
            className={styles["logo-large"]}
          />
          <Image
            src={ImgLogoSmall}
            alt="헤더 로고"
            quality={100}
            className={styles["logo-small"]}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
