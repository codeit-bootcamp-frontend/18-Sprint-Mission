import { useEffect, useState } from "react";
import leftArrowIcon from "../assets/images/left_arrow.svg";
import rightArrowIcon from "../assets/images/right_arrow.svg";
import wrap from "../assets/scss/pagination.module.scss";

function Pagination({ onPageLoad, totalCount, itemListLength }) {

  //페이지네이션 최대 생성 갯수
  const LIST_MAX = 5;
  const ITEM_LENGTH = itemListLength;
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [pages, setPages] = useState([]); //페이지네이션 배열
  const [hasNext, setHasNext] = useState(true);

  const paginationArr = (startPage, maxPages) => {
    const pages = [];   
    for (let i = 0; i < maxPages; i++) {
      pages.push(startPage + i);
    }
    return pages;
  };

  // 페이지네이션 상태 업데이트 함수
  useEffect(() => {
    const totalPages = Math.ceil(totalCount / ITEM_LENGTH);
    let startPage = Math.floor((currentPage - 1) / LIST_MAX) * LIST_MAX + 1;

    // 남은 아이템 페이지 계산
    const remainPage =
      0 < Math.ceil((totalCount - currentPage * ITEM_LENGTH) / ITEM_LENGTH)
        ? Math.ceil((totalCount - currentPage * ITEM_LENGTH) / ITEM_LENGTH)
        : 1;

    let newPages;
    if (totalPages > currentPage) {
      if (remainPage < totalPages % LIST_MAX) {
        newPages = paginationArr(currentPage, totalPages % LIST_MAX);
        setHasNext(false);
      } else {
        newPages = paginationArr(startPage, LIST_MAX);
      }

      setPages(newPages);
    }
  }, [currentPage,totalCount,itemListLength]);

  // 이전 페이지 버튼 클릭
  const handlePrevClick = () => {
    const prevPage = currentPage - 1 === 0 ? 1 : currentPage - 1;

    setCurrentPage(prevPage);
    onPageLoad(prevPage);
    setHasNext(true);
  };

  // 다음 페이지 버튼 클릭
  const handleNextClick = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    onPageLoad(nextPage);
  };

  // 페이지네이션 렌더링
  const renderPages = () => {
    return pages.map((number) => (
      <li key={number}>
        <button
          className={`${wrap.button} ${
            currentPage === number ? wrap.active : ""
          }`}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </button>
      </li>
    ));
  };

  //페이지 클릭
  const handlePageClick = (number) => {
    setCurrentPage(number); //현재 페이지 변경
    onPageLoad(number); //로드 함수에 전달
  };

  return (
    <div className={wrap.pagination}>
      <button className={wrap.button} onClick={handlePrevClick}>
        <img src={leftArrowIcon} alt="이전페이지" />
      </button>
      <ul>{renderPages()}</ul>
      {hasNext && (
        <button className={wrap.button} onClick={handleNextClick}>
          <img src={rightArrowIcon} alt="다음페이지" />
        </button>
      )}
    </div>
  );
}

export default Pagination;
