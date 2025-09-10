const AllItemSearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/ic_search.png" alt="검색 아이콘" />
      <input type="text" placeholder="검색할 상품을 입력해주세요" />
    </div>
  );
};

export default AllItemSearchBar;
