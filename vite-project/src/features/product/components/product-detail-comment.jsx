import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchComments } from "../../comment/apis/comments";
import CommentForm from "../../comment/components/comment-form";
import CommentsEmpty from "../../comment/components/comments-empty";
import CommentsList from "../../comment/components/comments-list";

const StyledProductDetailComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 40px;
  }
`;

function ProductDetailComment() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchComments(id).then((newComments) => setComments(newComments));
  }, [id]);

  return (
    <StyledProductDetailComment>
      <CommentForm />
      {comments.length > 0 ? (
        <CommentsList comments={comments} />
      ) : (
        <CommentsEmpty />
      )}
    </StyledProductDetailComment>
  );
}

export default ProductDetailComment;
