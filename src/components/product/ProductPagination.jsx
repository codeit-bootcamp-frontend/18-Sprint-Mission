import pagiLeftArrow from "../../assets/images/arrow_left.svg";
import pagiRightArrow from "../../assets/images/arrow_right.svg";
import "./ProductPagination.css";

export default function ProductPagination() {
  return (
    <div className="product-pagination-wrap">
      <div className="product-pagination">
        <button className="product-pagination-button">
          <img src={pagiLeftArrow} alt="화살표아이콘" />
        </button>
        <button className="product-pagination-button active">1</button>
        <button className="product-pagination-button">2</button>
        <button className="product-pagination-button">3</button>
        <button className="product-pagination-button">4</button>
        <button className="product-pagination-button">5</button>
        <button className="product-pagination-button">
          <img src={pagiRightArrow} alt="화살표아이콘" />
        </button>
      </div>
    </div>
  );
}
