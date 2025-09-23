import { InputHTMLAttributes } from "react";
import styles from "./search-input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function SearchInput({ ...props }: Props) {
  return (
    <div className={styles.searchInput}>
      <input type="text" {...props} />
    </div>
  );
}

export default SearchInput;
