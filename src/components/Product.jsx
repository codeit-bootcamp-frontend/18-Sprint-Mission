import { memo } from 'react';
import ic_heart from '../assets/icons/ic_heart.svg';

function Product({ products, style }) {
  return (
    <>
      <div
        className={
          style ? `product-container product-${style}` : 'product-container'
        }
      >
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <img
                  className={style ? `product-img-${style}` : 'product-img'}
                  src={product.images[0]}
                />
                <p className="product-name">{product.name}</p>
                <p className="product-price">
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
                </p>
                <div className="product-favorite-container">
                  <img src={ic_heart} alt="하트_아이콘" />
                  <span className="product-favorite-count">
                    {product.favoriteCount}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default memo(Product);
