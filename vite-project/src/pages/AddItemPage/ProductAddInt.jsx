import styled from "styled-components";

const ProductAddIntDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ProductAddIntTitle = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--gray-800);
`;

const ProductAddIntInput = styled.textarea`
  border-radius: 1.2rem;
  padding: 1.6rem 2.4rem;
  height: 28.2rem;
  background-color: var(--gray-100);
  border: 0.1rem solid var(--gray-100);
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--gray-800);
  font-family: Noto Sans KR;

  &::placeholder {
    color: var(--gray-400);
  }
`;

export default function ProductAddInt() {
  return (
    <ProductAddIntDiv>
      <ProductAddIntTitle>상품 소개</ProductAddIntTitle>
      <ProductAddIntInput type="text" placeholder="상품명을 입력해주세요" />
    </ProductAddIntDiv>
  );
}
