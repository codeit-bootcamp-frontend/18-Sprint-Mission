import styled from "styled-components";

const ProductAddNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ProductAddNameTitle = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--gray-800);
`;

const ProductAddNameInput = styled.input`
  border-radius: 1.2rem;
  padding: 1.6rem 2.4rem;
  height: 5.6rem;
  background-color: var(--gray-100);
  border: 0.1rem solid var(--gray-100);
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--gray-800);

  &::placeholder {
    color: var(--gray-400);
  }
`;

export default function ProductAddName({ value, onChange }) {
  return (
    <ProductAddNameDiv>
      <ProductAddNameTitle>상품명</ProductAddNameTitle>
      <ProductAddNameInput
        type="text"
        placeholder="상품명을 입력해주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </ProductAddNameDiv>
  );
}
