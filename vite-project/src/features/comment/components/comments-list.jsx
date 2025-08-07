import { useMemo } from "react";
import styled from "styled-components";
import CommentsListItem from "./comments-list-item";

const StyledCommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

function CommentsList({ comments }) {
  const handleEdit = (/* commentId, content */) => {
    // TODO: Comment 수정 API 연동
  };

  const handleDelete = (/* commentId */) => {
    // TODO: Comment 삭제 API 연동
  };

  const sortedComments = useMemo(
    () =>
      comments.sort(
        (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
      ),
    [comments]
  );

  return (
    <StyledCommentsList>
      {sortedComments.map((comment) => (
        <CommentsListItem
          key={comment.id}
          writer={comment.writer}
          updatedAt={comment.updatedAt}
          content={comment.content}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </StyledCommentsList>
  );
}

export default CommentsList;
