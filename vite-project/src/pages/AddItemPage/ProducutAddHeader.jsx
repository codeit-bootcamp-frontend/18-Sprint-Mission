import styled from "styled-components";

const ProductAddHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductAddHeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: var(--gray-800);
`;

const ProductAddHeaderButton = styled.button`
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--gray-100);
  border-radius: 0.8rem;
  width: 7.4rem;
  height: 4.2rem;
  border: 0.1rem solid var(--gray-400);
  &:enabled {
    background-color: var(--blue);
    cursor: pointer;
  }
  &:disabled {
    background-color: var(--gray-400);
    cursor: not-allowed;
  }
`;

export default function ProductAddHeader({ isFormValid }) {
  return (
    <ProductAddHeaderDiv>
      <ProductAddHeaderTitle>상품 등록하기</ProductAddHeaderTitle>
      <ProductAddHeaderButton type="submit" disabled={!isFormValid}>
        등록
      </ProductAddHeaderButton>
    </ProductAddHeaderDiv>
  );
}
