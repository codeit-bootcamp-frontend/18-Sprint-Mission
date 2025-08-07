import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AddingProductImageInput from "./adding-product-image-input";
import AddingProductImagePreview from "./adding-product-image-preview";

const StyledAddingProductImageContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-error-red);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin: 16px 0 0;
`;

function AddingProductImageContainer() {
  const inputRef = useRef();
  const [preview, setPreview] = useState();
  const [error, setError] = useState(false);

  const handleInputClick = (event) => {
    if (!preview) return;
    setError(true);
    event.preventDefault();
  };

  const handleInputChange = (file) => {
    if (!file) return;
    const nextPreview = URL.createObjectURL(file);
    setPreview(nextPreview);
  };

  const handleRemovePreview = () => {
    URL.revokeObjectURL(preview);
    setPreview(null);
    setError(false);
    inputRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (!preview) return;
      setPreview(null);
      URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div>
      <StyledAddingProductImageContainer>
        <AddingProductImageInput
          value={preview}
          onClick={handleInputClick}
          onChange={handleInputChange}
          ref={inputRef}
        />
        {preview && (
          <AddingProductImagePreview
            imageUrl={preview}
            onRemove={handleRemovePreview}
          />
        )}
      </StyledAddingProductImageContainer>
      {error && (
        <ErrorMessage>*이미지 등록은 최대 1개까지 가능합니다.</ErrorMessage>
      )}
    </div>
  );
}

export default AddingProductImageContainer;
