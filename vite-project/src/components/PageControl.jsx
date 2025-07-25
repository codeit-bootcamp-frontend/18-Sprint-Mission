import chevronLeftImg from "../assets/ic-chevron-left.svg";
import chevronRightImg from "../assets/ic-chevron-right.svg";
import PageController from "../utils/pageController";
import "./PageControl.css";

const PAGE_MOVE_IMAGE = {
  prev: chevronLeftImg,
  next: chevronRightImg,
};
const PAGE_MOVE_PREV = "prev";
const PAGE_MOVE_NEXT = "next";

function PageMoveButton({ direction, disabled, onClick }) {
  const image = PAGE_MOVE_IMAGE[direction];
  return (
    <button
      className={`PageControl-button ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <img src={image} alt={direction} width={16} />
    </button>
  );
}

function PageButton({ number, selected, onClick }) {
  const className = `PageControl-button ${selected ? "selected" : ""}`;
  return (
    <button className={className} onClick={onClick}>
      {number}
    </button>
  );
}

function PageControl({ numberOfPages, currentPage = 1, onPageChange }) {
  const {
    visiblePages,
    isFirstGroup,
    isLastGroup,
    prevGroupPage,
    nextGroupPage,
  } = PageController(numberOfPages, currentPage, 5);

  const pageButtons = visiblePages.map((page) => (
    <PageButton
      key={page}
      number={page}
      selected={currentPage === page}
      onClick={() => onPageChange(page)}
    />
  ));

  return (
    <div className="PageControl">
      <PageMoveButton
        direction={PAGE_MOVE_PREV}
        disabled={isFirstGroup}
        onClick={() => onPageChange(prevGroupPage)}
      />
      {pageButtons}
      <PageMoveButton
        direction={PAGE_MOVE_NEXT}
        disabled={isLastGroup}
        onClick={() => onPageChange(nextGroupPage)}
      />
    </div>
  );
}

export default PageControl;
