import { useState } from "react";
import styled from "styled-components";
import Button from "../button/button";
import TextInput from "../text-input";

const StyledItemCommentForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    color: var(--color-secondary-800);
  }

  div:nth-child(2) {
    margin-top: 9px;
    margin-bottom: 16px;
  }

  button {
    align-self: flex-end;
  }

  @media (max-width: 767px) {
    div:nth-child(2) {
      margin-top: 16px;
    }
  }
`;

const INPUT_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

function ItemCommentForm() {
  const [comment, setComment] = useState("");
  const canSubmit = comment.length > 0;

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <StyledItemCommentForm>
      <label htmlFor="comment-input">문의하기</label>
      <TextInput
        id="comment-input"
        value={comment}
        placeholder={INPUT_PLACEHOLDER}
        onChange={handleInputChange}
        multiline
        rows="3"
      />
      <Button disabled={!canSubmit}>등록</Button>
    </StyledItemCommentForm>
  );
}

export default ItemCommentForm;
