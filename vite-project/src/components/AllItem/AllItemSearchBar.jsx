const AllItemSearchBar = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2.5 rounded-lg min-w-64">
      <img src="/ic_search.png" alt="검색 아이콘" className="w-4 h-4" />
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400"
      />
    </div>
  );
};

export default AllItemSearchBar;
