import Searchbar from "@/components/searchbar/searchbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Searchbar />
    </div>
  );
}
