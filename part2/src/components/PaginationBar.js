import { ReactComponent as LeftArrow } from '../assets/img/arrow_left.svg';
import { ReactComponent as RightArrow } from '../assets/img/arrow_right.svg';
import './PaginationBar.css';

const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5;
  let startPage;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1; //페이지 버튼 시작점
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1); //현재 페이지 버튼 가운데
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1); //총 페이지 수 넘지 않게
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <LeftArrow />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${
            activePageNum === page ? 'active' : ''
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="paginationButton"
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default PaginationBar;
