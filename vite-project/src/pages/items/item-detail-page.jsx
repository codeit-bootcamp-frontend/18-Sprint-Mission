import styled from "styled-components";
import backImg from "../../assets/ic-arrow-back.svg";
import Button from "../../components/button/button";
import {
  BUTTON_SIZE,
  BUTTON_TYPE,
} from "../../components/button/button-styles";
import ItemComment from "../../components/item-comment/item-comment";
import ItemDetail from "../../components/item-detail/item-detail";

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

const BackButton = styled(Button)`
  align-self: center;
  margin-top: 64px;

  @media (max-width: 1199px) {
    margin-top: 48px;
  }

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

function ItemDetailPage() {
  return (
    <StyledItemDetailPage>
      <ItemDetail />
      <Separator />
      <ItemComment />
      <BackButton size={BUTTON_SIZE.medium} type={BUTTON_TYPE.pill}>
        목록으로 돌아가기
        <img src={backImg} alt="되돌아가기" />
      </BackButton>
    </StyledItemDetailPage>
  );
}

export default ItemDetailPage;
