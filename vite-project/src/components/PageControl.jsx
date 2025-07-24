import chevronLeftImg from "../assets/ic-chevron-left.svg";
import chevronRightImg from "../assets/ic-chevron-right.svg";
import "./PageControl.css";

const PAGE_MOVE_IMAGE = {
  prev: chevronLeftImg,
  next: chevronRightImg,
};
const PAGE_MOVE_PREV = "prev";
const PAGE_MOVE_NEXT = "next";

function PageMoveButton({ direction }) {
  const image = PAGE_MOVE_IMAGE[direction];
  return (
    <button className="PageControl-button">
      <img src={image} alt={direction} width={16} />
    </button>
  );
}

function PageButton({ number, selected }) {
  const className = `PageControl-button ${selected ? "selected" : ""}`;
  return <button className={className}>{number}</button>;
}

function PageControl({ numberOfPages, currentPage = 1 }) {
  const visibleCount = Math.min(5, numberOfPages);

  const pageButtons = Array.from(
    { length: visibleCount },
    (_, index) => index + 1
  ).map((number) => (
    <PageButton
      key={number}
      number={number}
      selected={currentPage === number}
    />
  ));

  return (
    <div className="PageControl">
      <PageMoveButton direction={PAGE_MOVE_PREV} />
      {pageButtons}
      <PageMoveButton direction={PAGE_MOVE_NEXT} />
    </div>
  );
}

export default PageControl;
