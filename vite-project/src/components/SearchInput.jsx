import searchImg from "../assets/ic-magnifier.svg";
import "./SearchInput.css";

function SearchInput({ placeholder }) {
  return (
    <div className="SearchInput">
      <img src={searchImg} alt="상품 검색" />
      <input placeholder={placeholder} />
    </div>
  );
}

export default SearchInput;
