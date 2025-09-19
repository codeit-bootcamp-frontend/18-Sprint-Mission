import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import PrevIcon from "@/assets/icons/ic_arrow_left.svg";
import NextIcon from "@/assets/icons/ic_arrow_right.svg";

const PaginationWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PaginationItem = styled.li``;

const getPageRange = (currentPage, totalPage, pageRange) => {
  const halfRange = Math.floor(pageRange / 2);
  const initStart = Math.max(1, currentPage - halfRange);
  const initEnd = initStart + pageRange - 1;
  const end = initEnd > totalPage ? totalPage : initEnd;
  const start = initEnd > totalPage ? Math.max(1, end - pageRange + 1) : initStart;

  return [start, end];
};

const Pagination = ({ totalDataCount, itemsPerPage, currentPage = 1, onPageChange, pageRange = 5 }) => {
  const totalPage = Math.max(1, Math.ceil(totalDataCount / itemsPerPage));
  const [startPage, endPage] = getPageRange(currentPage, totalPage, pageRange);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <PaginationWrapper>
      <PaginationItem>
        <Button
          appearance="tertiary"
          shape="round40"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icon src={PrevIcon} size="xxs" alt="이전 페이지" />
        </Button>
      </PaginationItem>
      {pages.map(page => (
        <PaginationItem key={page}>
          <Button
            appearance={page === currentPage ? "primary" : "tertiary"}
            shape="round40"
            aria-label={page === currentPage ? "현재 페이지" : `페이지 ${page}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        </PaginationItem>
      ))}
      <PaginationItem>
        <Button
          appearance="tertiary"
          shape="round40"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          <Icon src={NextIcon} size="xxs" alt="다음 페이지" />
        </Button>
      </PaginationItem>
    </PaginationWrapper>
  );
};

export default Pagination;
