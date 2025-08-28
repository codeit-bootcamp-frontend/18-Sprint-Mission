import search from "../assets/scss/searchGroup.module.scss";

function SearchGroup() {
  return (
    <form>
      <div className={search.searchGroup}>
        <label className="hidden" htmlFor="searchBox">
          검색할 상품을 입력해 주세요.
        </label>
        <input type="search" placeholder="검색할 상품을 입력해주세요." />
      </div>
    </form>
  );
}

export default SearchGroup;
