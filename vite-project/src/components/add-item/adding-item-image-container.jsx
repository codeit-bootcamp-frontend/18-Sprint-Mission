import { useEffect, useState } from "react";
import styled from "styled-components";
import AddingItemImage from "./adding-item-image";
import AddingItemImageInput from "./adding-item-image-input";

const StyledAddingItemImageContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 10px;
  }
`;

function AddingItemImageContainer() {
  const [preview, setPreview] = useState();

  const handleInputChange = (file) => {
    if (!file) return;
    const nextPreview = URL.createObjectURL(file);
    setPreview(nextPreview);
  };

  useEffect(() => {
    return () => {
      if (!preview) return;
      URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <StyledAddingItemImageContainer>
      <AddingItemImageInput onChange={handleInputChange} />
      {preview && <AddingItemImage imageUrl={preview} />}
    </StyledAddingItemImageContainer>
  );
}

export default AddingItemImageContainer;
