import { ChangeEvent } from "react";
import styles from "./todo-detail-image-button.module.css";

interface Props {
  className?: string;
  buttonType: "add" | "edit";
  onChange: (file: File | null, reset: () => void) => void;
}

const icon = {
  add: "/icons/ic-plus-gray.svg",
  edit: "/icons/ic-pencil.svg",
};

const typeClassName = {
  add: styles.add,
  edit: styles.edit,
};

export default function TodoDetailImageButton({
  className,
  buttonType,
  onChange,
}: Props) {
  const classNames = `${styles.editButton} ${typeClassName[buttonType]} ${className}`;

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files?.[0] ?? null, () => {
      event.target.value = "";
    });
  };

  return (
    <label htmlFor="image-input" className={classNames}>
      <img
        className={styles.editButtonImg}
        src={icon[buttonType]}
        alt={buttonType}
      />
      <input
        id="image-input"
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />
    </label>
  );
}
