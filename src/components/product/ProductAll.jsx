import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import ProductAddButton from "./ProductAddButton";
import "./ProductAll.css";
import ProductAllMobileTop from './ProductAllMobileTop';
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import ProductSelect from "./ProductSelect";
import ProductTitle from "./ProductTitle";

export default function ProductAll({ items, onClickNew, onClickLike }) {
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1199 });
  const isPC = useMediaQuery({ minWidth: 1200 });

  const displayCount = isMobile ? 4 : isTablet ? 6 : isPC ? 10 : 10;

  return (
    <div className="product-all">
      { !isMobile &&  <div className="product-all-top">
        <ProductTitle>전체 상품</ProductTitle>
        <div>
          <ProductSearch />
          <Link to="/additem">
            <ProductAddButton>상품 등록하기</ProductAddButton>
          </Link>
          <ProductSelect onClickNew={onClickNew} onClickLike={onClickLike} />
        </div>
      </div>}
      { isMobile && <ProductAllMobileTop onClickNew={onClickNew} onClickLike={onClickLike}/> }
      <ul className="product-all-list">
        {items.slice(0, displayCount).map((item) => {
          return (
            <li key={item.id}>
              <ProductCard item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
