import { Link, useNavigate } from "react-router-dom";
import ProductAddButton from "./ProductAddButton";
import "./ProductAll.css";
import ProductAllMobileTop from "./ProductAllMobileTop";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import ProductSelect from "./ProductSelect";
import ProductTitle from "./ProductTitle";

export default function ProductAll({
  items,
  onClickNew,
  onClickLike,
  isMobile,
}) {
  const nav = useNavigate();

  return (
    <div className="product-all">
      {!isMobile && (
        <div className="product-all-top">
          <ProductTitle>전체 상품</ProductTitle>
          <div>
            <ProductSearch />
            <Link to="/additem">
              <ProductAddButton>상품 등록하기</ProductAddButton>
            </Link>
            <ProductSelect onClickNew={onClickNew} onClickLike={onClickLike} />
          </div>
        </div>
      )}
      {isMobile && (
        <ProductAllMobileTop
          onClickNew={onClickNew}
          onClickLike={onClickLike}
        />
      )}
      <ul className="product-all-list">
        {items.map((item) => {
          return (
            <li key={item.id} onClick={() => nav(`/item/${item.id}`)} >
              <ProductCard item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
