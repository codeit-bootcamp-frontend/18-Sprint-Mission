import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchComments } from "../../api/comments";
import ItemCommentForm from "./item-comment-form";
import ItemCommentList from "./Item-comment-list";
import ItemCommentsEmpty from "./item-comments-empty";

const StyledItemComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 40px;
  }
`;

function ItemComment() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchComments(id).then((newComments) => setComments(newComments));
  }, [id]);

  return (
    <StyledItemComment>
      <ItemCommentForm />
      {comments.length > 0 ? (
        <ItemCommentList comments={comments} />
      ) : (
        <ItemCommentsEmpty />
      )}
    </StyledItemComment>
  );
}

export default ItemComment;
