// App.jsx - 반응형 pageSize 적용
import { useState, useEffect } from "react";
import BestItem from "../components/BestItem/BestItem";
import AllItemHeader from "../components/AllItem/AllItemHeader";
import AllItemSearchBar from "../components/AllItem/AllItemSearchBar";
import AllItemRegisterButton from "../components/AllItem/AllItemRegisterButton";
import SortDropDown from "../components/AllItem/SortDropDown";
import AllItemList from "../components/AllItem/AllItemList";
import Pagination from "../components/Pagination/Pagination";
import useResponsiveCount from "../hooks/useResponsiveCount";

function App() {
  // 상태 관리
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // 반응형 훅 사용
  const { getAllProductCount, screenSize } = useResponsiveCount();
  const pageSize = getAllProductCount();

  useEffect(() => {
    setCurrentPage(1);
  }, [screenSize]);

  // 이벤트 핸들러들
  const onSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const onSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onTotalCountChange = (count) => {
    setTotalCount(count);
  };

  return (
    <>
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="best-products-heading">
          <BestItem />
        </section>

        <section aria-labelledby="all-products-heading">
          <header className="flex items-center justify-between mt-8">
            <AllItemHeader />

            <div
              className="flex items-center gap-2"
              role="toolbar"
              aria-label="상품 필터링 및 관리 도구"
            >
              <SortDropDown onSortChange={onSortChange} currentSort={sortBy} />
              <AllItemSearchBar onSearch={onSearch} />
              <AllItemRegisterButton />
            </div>
          </header>

          <AllItemList
            sortBy={sortBy}
            searchQuery={searchQuery}
            currentPage={currentPage}
            onTotalCountChange={onTotalCountChange}
          />

          {/* 🎯 화면 크기별 pageSize 적용 */}
          <nav aria-label="상품 목록 페이지네이션">
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={pageSize} // 반응형 페이지 크기
              onPageChange={onPageChange}
            />
          </nav>
        </section>
      </main>
    </>
  );
}

export default App;
