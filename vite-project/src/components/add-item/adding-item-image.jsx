import styled from "styled-components";
import removeImg from "../../assets/ic-xmark-fill.svg";

const StyledAddingItemImage = styled.div`
  width: 282px;
  height: 282px;
  position: relative;

  & > img {
    width: 100%;
    border-radius: 12px;
  }

  & > button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
`;

function AddingItemImage({ imageUrl }) {
  return (
    <StyledAddingItemImage>
      {imageUrl && <img src={imageUrl} alt="등록할 상품 이미지" />}
      <button>
        <img src={removeImg} alt="등록한 상품 이미지 삭제" />
      </button>
    </StyledAddingItemImage>
  );
}

export default AddingItemImage;
