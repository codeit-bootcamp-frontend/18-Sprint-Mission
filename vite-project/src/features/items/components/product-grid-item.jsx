import styled from "styled-components";
import likeImg from "../../../assets/ic-heart.svg";
import { formatPrice } from "../../../utils/formatter";

const StyledProductGridItem = styled.div`
  color: var(--color-secondary-800);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductImage = styled.div`
  border-radius: 16px;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
`;

const ProductInfo = styled.div`
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

const ProductFavorite = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  gap: 4px;
  align-items: center;
`;

function ProductGridItem({ imageUrl, title, price, likeCount }) {
  return (
    <StyledProductGridItem>
      <ProductImage>
        <img src={imageUrl} alt="상품 이미지" />
      </ProductImage>
      <ProductInfo>
        <h3>{title}</h3>
        <span>{formatPrice(price, "원")}</span>
        <ProductFavorite>
          <img src={likeImg} alt="좋아요 갯수" />
          <span>{likeCount}</span>
        </ProductFavorite>
      </ProductInfo>
    </StyledProductGridItem>
  );
}

export default ProductGridItem;
