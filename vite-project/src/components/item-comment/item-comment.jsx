import styled from "styled-components";
import ItemCommentForm from "./item-comment-form";
import ItemCommentList from "./Item-comment-list";

const StyledItemComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 40px;
  }
`;

function ItemComment() {
  return (
    <StyledItemComment>
      <ItemCommentForm />
      <ItemCommentList />
    </StyledItemComment>
  );
}

export default ItemComment;
