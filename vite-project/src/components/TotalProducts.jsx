import likeIcon from "../assets/ic-heart.svg";
import searchIcon from "../assets/ic-search.svg";
import { Link } from "react-router-dom";

function TotalProducts({
  totalProducts,
  orderBy,
  onOrderChange,
  keyword,
  onKeywordChange,
}) {
  return (
    <>
      <div className="total-products-container">
        <h1 className="products-title">전체 상품</h1>
        <div className="total-products-content">
          <div className="total-products-content-input">
            <img src={searchIcon} alt="검색 아이콘" />
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              value={keyword}
              onChange={onKeywordChange}
            />
          </div>
          <Link to="/additem" className="add-item-button">
            상품 등록하기
          </Link>
          <select onChange={onOrderChange} value={orderBy}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      <div className="total-products-card">
        {totalProducts.map((product) => (
          <div className="total-product-card" key={product.id}>
            <img
              className="total-product-card-img"
              src={product.images[0]}
              alt={product.name}
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.toLocaleString()}원</p>
            <p className="product-like">
              <button>
                <img src={likeIcon} alt="좋아요 아이콘" />
              </button>
              {product.favoriteCount}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TotalProducts;
