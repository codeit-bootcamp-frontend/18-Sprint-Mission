import styles from "./search-input.module.css";

function SearchInput({ ...props }) {
  return (
    <div className={styles.searchInput}>
      <input type="text" {...props} />
    </div>
  );
}

export default SearchInput;
