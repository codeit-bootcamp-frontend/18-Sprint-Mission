import styled from "styled-components";
import likeImg from "../../assets/ic-heart.svg";
import { formatPrice } from "../../utils/formatter";

const StyledItem = styled.div`
  color: var(--color-secondary-800);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledItemImage = styled.div`
  border-radius: 16px;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
`;

const StyledItemFavorites = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin: 0;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    margin: 0;
  }
`;

function Item({ imageUrl, title, price, likeCount }) {
  return (
    <StyledItem>
      <StyledItemImage>
        <img src={imageUrl} alt="상품 이미지" />
      </StyledItemImage>
      <StyledItemInfo>
        <h3>{title}</h3>
        <span>{formatPrice(price, "원")}</span>
        <StyledItemFavorites>
          <img src={likeImg} alt="좋아요 갯수" />
          <span>{likeCount}</span>
        </StyledItemFavorites>
      </StyledItemInfo>
    </StyledItem>
  );
}

export default Item;
