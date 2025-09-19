// App.jsx
import { useState } from "react";
import Header from "./components/Header/Header";
import BestItem from "./components/BestItem/BestItem";
import AllItemHeader from "./components/AllItem/AllItemHeader";
import AllItemSearchBar from "./components/AllItem/AllItemSearchBar";
import AllItemRegisterButton from "./components/AllItem/AllItemRegisterButton";
import SortDropDown from "./components/AllItem/SortDropDown";
import AllItemList from "./components/AllItem/AllItemList";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // AllItemList에서 받아올 전체 개수

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // 검색시 첫 페이지로 리셋
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1); // 정렬 변경시 첫 페이지로 리셋
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // AllItemList에서 전체 개수를 받아오는 함수
  const handleTotalCountChange = (count) => {
    setTotalCount(count);
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BestItem />

        <div className="flex items-center justify-between mt-8">
          <AllItemHeader />
          <div className="flex items-center gap-2">
            <SortDropDown
              onSortChange={handleSortChange}
              currentSort={sortBy}
            />
            <AllItemSearchBar onSearch={handleSearch} />
            <AllItemRegisterButton />
          </div>
        </div>

        <AllItemList
          sortBy={sortBy}
          searchQuery={searchQuery}
          currentPage={currentPage}
          onTotalCountChange={handleTotalCountChange}
        />

        {/* 페이지네이션 */}
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={10}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default App;
