import styled from "styled-components";
import addImg from "../../assets/ic-plus-gray.svg";

const StyledAddingItemImageLabel = styled.label`
  background-color: var(--color-secondary-100);
  color: var(--color-cool-gray-400);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  cursor: pointer;

  width: 282px;
  height: 282px;
  border-radius: 12px;

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
`;

function AddingItemImageInput({ onClick, onChange, ref }) {
  return (
    <StyledAddingItemImageLabel htmlFor="AddingItemImageInput">
      <img src={addImg} alt="상품 이미지 추가 아이콘" />
      <span>이미지 등록</span>
      <input
        id="AddingItemImageInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onClick={onClick}
        onChange={({ target }) => {
          onChange(target.files[0]);
        }}
        ref={ref}
      />
    </StyledAddingItemImageLabel>
  );
}

export default AddingItemImageInput;
