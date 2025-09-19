// src/components/AllItem/AllItemSearchBar.jsx
import { useState } from "react";

const AllItemSearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2.5 rounded-lg min-w-64">
        <img src="/ic_search.png" alt="검색 아이콘" className="w-4 h-4" />
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </form>
  );
};

export default AllItemSearchBar;
