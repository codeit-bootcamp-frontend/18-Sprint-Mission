import './BestProducts.css';
import ProductCard from "./ProductCard";
import ProductTitle from "./ProductTitle";

export default function BestProducts({ bestitems, displayCount }) {
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
