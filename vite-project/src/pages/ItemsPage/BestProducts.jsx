import { Link } from "react-router-dom";
import likeIcon from "../../assets/ic-heart.svg";

function BestProducts({ bestProducts }) {
  return (
    <>
      <div className="best-products-container">
        <h1 className="products-title">베스트 상품</h1>
      </div>
      <div className="best-products-card">
        {bestProducts.map((product) => (
          <Link
            to={`/items/${product.id}`}
            className="best-product-card"
            key={product.id}
          >
            <img
              className="best-product-card-img"
              src={product.images[0]}
              alt={product.name}
            />
            <h3 className="product-name">{product.name}</h3>
            <span className="product-price">
              {product.price.toLocaleString()}원
            </span>
            <span className="product-like">
              <button>
                <img src={likeIcon} alt="좋아요 아이콘" />
              </button>
              {product.favoriteCount}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default BestProducts;
