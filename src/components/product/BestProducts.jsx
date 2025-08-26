import './BestProducts.css';
import ProductCard from "./ProductCard";
import ProductTitle from "./ProductTitle";

export default function BestProducts({ bestitems }) {
  return (
    <div className="best-product-wrap">
      <ProductTitle>베스트 상품</ProductTitle>
      <ul className="best-product-list">
        {bestitems.map((item) => {
          return <li key={item.id}><ProductCard item={item} /></li>
        })}
      </ul>
    </div>
  );
}
