import styles from "./Badge.module.css";

const variantsToLabel = {
  todo: "TO DO",
  done: "DONE",
};

interface BadgeProps {
  variants: keyof typeof variantsToLabel;
  className?: string;
}

const Badge = ({ variants, className }: BadgeProps) => {
  return (
    <span
      className={`${styles.badge} ${styles[variants]} ${className ?? ""}`}
      aria-label={variantsToLabel[variants]}
    >
      {variantsToLabel[variants]}
    </span>
  );
};

export default Badge;
