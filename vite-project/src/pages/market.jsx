// App.jsx - 시맨틱 태그와 함수명 개선 버전
import { useState } from "react";
import Header from "../components/Header/Header";
import BestItem from "../components/BestItem/BestItem";
import AllItemHeader from "../components/AllItem/AllItemHeader";
import AllItemSearchBar from "../components/AllItem/AllItemSearchBar";
import AllItemRegisterButton from "../components/AllItem/AllItemRegisterButton";
import SortDropDown from "../components/AllItem/SortDropDown";
import AllItemList from "../components/AllItem/AllItemList";
import Pagination from "../components/Pagination/Pagination";

function App() {
  // 상태 관리
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // 이벤트 핸들러들 - on으로 시작하는 컨벤션
  const onSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // 검색시 첫 페이지로 리셋
  };

  const onSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1); // 정렬 변경시 첫 페이지로 리셋
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onTotalCountChange = (count) => {
    setTotalCount(count);
  };

  return (
    <>
      {/* 메인 콘텐츠 영역 */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 베스트 상품 섹션 */}
        <section aria-labelledby="best-products-heading">
          <BestItem />
        </section>

        {/* 전체 상품 섹션 */}
        <section aria-labelledby="all-products-heading">
          {/* 전체 상품 헤더와 컨트롤 */}
          <header className="flex items-center justify-between mt-8">
            <AllItemHeader />

            {/* 검색, 정렬, 등록 툴바 */}
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

          {/* 상품 목록 */}
          <AllItemList
            sortBy={sortBy}
            searchQuery={searchQuery}
            currentPage={currentPage}
            onTotalCountChange={onTotalCountChange}
          />

          {/* 페이지네이션 네비게이션 */}
          <nav aria-label="상품 목록 페이지네이션">
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={10}
              onPageChange={onPageChange}
            />
          </nav>
        </section>
      </main>
    </>
  );
}

export default App;
