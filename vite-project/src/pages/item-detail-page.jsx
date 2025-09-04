import { Link } from "react-router-dom";
import styled from "styled-components";
import backImg from "../assets/ic-arrow-back.svg";
import Button from "../components/button/button";
import { BUTTON_SIZE, BUTTON_TYPE } from "../components/button/button-styles";
import ProductDetailComment from "../features/product/components/product-detail-comment";
import ProductDetailInfo from "../features/product/components/product-detail-info";

const StyledItemDetailPage = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 200px;

  @media (max-width: 767px) {
    margin-bottom: 64px;
  }
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-cool-gray-200);
  margin: 40px 0;

  @media (max-width: 1199px) {
    margin-top: 32px;
  }

  @media (max-width: 767px) {
    margin: 24px 0;
  }
`;

const StyledBackButton = styled(Link)`
  align-self: center;
  margin-top: 64px;
  text-decoration: none;

  @media (max-width: 1199px) {
    margin-top: 48px;
  }

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

function BackButton({ children }) {
  return (
    <StyledBackButton to="/items">
      <Button size={BUTTON_SIZE.medium} type={BUTTON_TYPE.pill}>
        {children}
        <img src={backImg} alt="되돌아가기" />
      </Button>
    </StyledBackButton>
  );
}

function ItemDetailPage() {
  return (
    <StyledItemDetailPage>
      <ProductDetailInfo />
      <Separator />
      <ProductDetailComment />
      <BackButton>목록으로 돌아가기</BackButton>
    </StyledItemDetailPage>
  );
}

export default ItemDetailPage;
