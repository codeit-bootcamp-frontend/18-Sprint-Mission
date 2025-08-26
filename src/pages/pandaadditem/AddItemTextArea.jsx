import styled from "styled-components";

export const AddItemTextArea = styled.textarea`
  padding : 24px 16px;
  width : 100%;
  height : 282px;
  background-color: var(--gray-100);
  border:none;
  border-radius : 12px;
  margin-top : 16px;
  font-size: 1.6rem;
  resize: none;
  font-family: "Pretendard", arial;
  &::placeholder{
    color:var(--gray-400);
  }
`
