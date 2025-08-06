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
  // const [comments, setComments] = useState([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   fetchComments(id).then((comments) =>
  //     setComments((prev) => [...prev, comments])
  //   );
  // }, [id]);

  return (
    <StyledItemComment>
      <ItemCommentForm />
      <ItemCommentList />
      {/* {comments.count > 0 ? (
        <ItemCommentList comments={comments} />
      ) : (
        <ItemCommentsEmpty />
      )} */}
    </StyledItemComment>
  );
}

export default ItemComment;
