import styled from "styled-components";
import chevronLeftImg from "../../assets/ic-chevron-left.svg";
import chevronRightImg from "../../assets/ic-chevron-right.svg";
import PageController from "./page-controller";

const StyledPageControl = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 43px auto 58px;
`;

const PageControlButton = styled.button`
  border: 1px solid var(--color-cool-gray-200);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $selected }) =>
    $selected ? "white" : "var(--color-cool-gray-500)"};
  background-color: ${({ $selected }) => ($selected ? "#2f80ed" : "white")};
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

const PAGE_MOVE_IMAGE = {
  prev: chevronLeftImg,
  next: chevronRightImg,
};
const PAGE_MOVE_PREV = "prev";
const PAGE_MOVE_NEXT = "next";

function PageControl({ numberOfPages, currentPage = 1, onPageChange }) {
  const {
    visiblePages,
    isFirstGroup,
    isLastGroup,
    prevGroupPage,
    nextGroupPage,
  } = PageController(numberOfPages, currentPage, 5);

  const pageButtons = visiblePages.map((page) => (
    <PageControlButton
      key={page}
      $selected={currentPage === page}
      onClick={() => onPageChange(page)}
    >
      {page}
    </PageControlButton>
  ));

  return (
    <StyledPageControl>
      <PageControlButton
        disabled={isFirstGroup}
        onClick={() => onPageChange(prevGroupPage)}
      >
        <img
          src={PAGE_MOVE_IMAGE[PAGE_MOVE_PREV]}
          alt={PAGE_MOVE_PREV}
          width={16}
        />
      </PageControlButton>
      {pageButtons}
      <PageControlButton
        disabled={isLastGroup}
        onClick={() => onPageChange(nextGroupPage)}
      >
        <img
          src={PAGE_MOVE_IMAGE[PAGE_MOVE_NEXT]}
          alt={PAGE_MOVE_NEXT}
          width={16}
        />
      </PageControlButton>
    </StyledPageControl>
  );
}

export default PageControl;
