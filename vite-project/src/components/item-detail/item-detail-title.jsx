import styled from "styled-components";
import moreImg from "../../assets/ic-dots-3-vertical.svg";
import { formatPrice } from "../../utils/formatter";
import IconButton from "../button/icon-button";

const StyledItemDetailTitle = styled.div``;

const StyledItemTitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledItemName = styled.h2`
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

const StyledItemPrice = styled.span`
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

const StyledSeparator = styled.div`
  border-bottom: 1px solid var(--color-cool-gray-200);
`;

function ItemDetailTitle({ title, price }) {
  return (
    <StyledItemDetailTitle>
      <StyledItemTitleHeader>
        <StyledItemName>{title}</StyledItemName>
        <IconButton src={moreImg} />
      </StyledItemTitleHeader>
      <StyledItemPrice>{formatPrice(price, "원")}</StyledItemPrice>
      <StyledSeparator />
    </StyledItemDetailTitle>
  );
}

export default ItemDetailTitle;
