import styled from "styled-components";
import emptyImg from "../../assets/comments-empty.png";

const StyledItemCommentsEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-cool-gray-400);
  margin: 0 auto;

  img {
    width: 196px;
    height: 196px;
  }

  @media (max-width: 1199px) {
    img {
      width: 140px;
      height: 140px;
    }
  }
`;

function ItemCommentsEmpty() {
  return (
    <StyledItemCommentsEmpty>
      <img src={emptyImg} alt="문의 없음" />
      아직 문의가 없어요.
    </StyledItemCommentsEmpty>
  );
}

export default ItemCommentsEmpty;
