import { useMediaQuery } from 'react-responsive';
import './BestProduct.css';
import ProductCard from "./ProductCard";
import ProductTitle from "./ProductTitle";

export default function BestProduct({ bestitems }) {
  // 미디어 쿼리
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1199 });
  const isPC = useMediaQuery({ minWidth: 1200 });

  const displayCount = isMobile ? 1 : isTablet ? 2 : isPC ? 4 : 4;

  return (
    <div className="best-product-wrap">
      <ProductTitle>베스트 상품</ProductTitle>
      <ul className="best-product-list">
        {bestitems.slice(0, displayCount).map((item) => {
          return <li key={item.id}><ProductCard item={item} /></li>
        })}
      </ul>
    </div>
  );
}
