import styled from "styled-components";
import moreImg from "../../../assets/ic-dots-3-vertical.svg";
import IconButton from "../../../components/button/icon-button";
import { formatPrice } from "../../../utils/formatter";

const StyledProductDetailTitle = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-secondary-800);

  @media (max-width: 1199px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const ProductPrice = styled.span`
  display: block;
  font-size: 40px;
  font-weight: 600;
  line-height: 100%;
  color: var(--color-secondary-800);
  margin-top: 16px;
  margin-bottom: 16px;

  @media (max-width: 1199px) {
    font-size: 32px;
    line-height: 42px;
    margin-top: 8px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Separator = styled.div`
  border-bottom: 1px solid var(--color-cool-gray-200);
`;

function ProductDetailTitle({ title, price }) {
  return (
    <StyledProductDetailTitle>
      <Header>
        <ProductName>{title}</ProductName>
        <IconButton src={moreImg} />
      </Header>
      <ProductPrice>{formatPrice(price, "원")}</ProductPrice>
      <Separator />
    </StyledProductDetailTitle>
  );
}

export default ProductDetailTitle;
