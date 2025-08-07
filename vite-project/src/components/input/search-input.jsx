import styled from "styled-components";
import searchImg from "../../assets/ic-magnifier.svg";

const StyledSearchInput = styled.div`
  background-color: var(--color-secondary-100);
  padding: 9px 16px;
  display: flex;
  gap: 4px;
  border-radius: 12px;
  width: 325px;

  img {
    width: 24px;
  }

  input {
    border: none;
    background: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    flex-grow: 1;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: var(--color-secondary-400);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }

  @media (max-width: 1199px) {
    width: 242px;
  }

  @media (max-width: 767px) {
    width: 100%;
    flex-grow: 1;
  }
`;

function SearchInput({ placeholder }) {
  return (
    <StyledSearchInput>
      <img src={searchImg} alt="상품 검색" />
      <input placeholder={placeholder} />
    </StyledSearchInput>
  );
}

export default SearchInput;
