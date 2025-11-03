import Button from "@/components/Button";
import styles from "./SearchForm.module.css";
import { ChangeEvent, FormEvent } from "react";

interface SearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isDisabled: boolean;
}

const SearchForm = ({ value, onChange, onSubmit, isDisabled }: SearchProps) => {
  return (
    <search>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={`${styles.input} font-regular-16`}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="할 일을 입력해주세요"
        />
        <Button variants="append" type="submit" disabled={isDisabled} />
      </form>
    </search>
  );
};

export default SearchForm;
