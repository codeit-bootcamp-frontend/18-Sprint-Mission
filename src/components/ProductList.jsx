import { Link, NavLink } from "react-router-dom";
import { ImageFallback } from "../hooks/useFallBackSrc";
import likeIcon from "../assets/images/heart.svg";
import product from "../assets/scss/productList.module.scss";
import image_none from "../assets/images/image_none.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//베스트 아이템
function BestProduct({ items, col, setNumberComma, isBestLoading }) {
  return (
    <ul className={`${product.thumbNailList} ${product["col" + col]}`}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ProductItem
              item={item}
              setNumberComma={setNumberComma}
              isLoading={isBestLoading}
            />
          </li>
        );
      })}
    </ul>
  );
}

//상품 리스트
function ProductList({ items, col, setNumberComma, isListLoading }) {
  return (
    <ul className={`${product.thumbNailList} ${product["col" + col]}`}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ProductItem
              item={item}
              setNumberComma={setNumberComma}
              isLoading={isListLoading}
            />
          </li>
        );
      })}
    </ul>
  );
}

//상품 아이템
function ProductItem({ item, setNumberComma, isLoading }) {
  return (
    <Link to="/">
      <div className={product.listItem}>
        {isLoading ? (
          <div className={product.productImage}>
            <Skeleton />
          </div>
        ) : (
          <div className={product.productImage}>
            {item.images && item.images.length > 0 ? (
              <ImageFallback
                src={item.images[0]}
                alt={item.name}
                fallbackSrc={image_none}
              />
            ) : (
              <ImageFallback
                src={image_none}
                alt={item.name}
                fallbackSrc={image_none}
              />
            )}
          </div>
        )}

        <h3 className={product.productName}>{item.name}</h3>
        <div className={product.price}>{setNumberComma(item.price)}</div>
        <div className={product.favoriteCountBox}>
          <i className={product.icon}>
            <img src={likeIcon} alt="좋아요" />
          </i>
          <span className={product.likeCount}>
            {setNumberComma(item.favoriteCount)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export { ProductList, BestProduct };
