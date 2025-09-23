import { useEffect, useMemo, useState } from "react";
import TodoDetailImageButton from "./todo-detail-image-button";
import styles from "./todo-detail-image-preview.module.css";

export default function TodoDetailImagePreview({
  imageUrl,
  onChange,
}: {
  imageUrl?: string;
  onChange: (file: File) => void;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | undefined | null>(
    imageUrl
  );

  const hasPreview = useMemo(() => {
    return previewUrl !== "" && previewUrl != null;
  }, [previewUrl]);

  const handlePreviewChanged = (file: File | null, reset: () => void) => {
    if (!file) return;

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("파일 크기는 5MB 이하여야 합니다.");
      reset();
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const newPreviewUrl = URL.createObjectURL(file);
    setPreviewUrl(newPreviewUrl);
    onChange(file);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className={styles.preview}>
      <div className={styles.previewImageContainer}>
        <img
          className={styles.previewImage}
          src={
            hasPreview ? previewUrl! : "/images/image-preview-background.svg"
          }
          alt="Preview image"
        />
        {hasPreview || (
          <img
            className={styles.previewEmptyIcon}
            src="/icons/ic-image.svg"
            alt="empty preview logo"
          />
        )}
      </div>
      <TodoDetailImageButton
        className={styles.button}
        buttonType={previewUrl ? "edit" : "add"}
        onChange={handlePreviewChanged}
      />
    </div>
  );
}
