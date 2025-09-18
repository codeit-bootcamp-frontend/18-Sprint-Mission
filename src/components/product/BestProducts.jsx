import { useNavigate } from 'react-router-dom';
import './BestProducts.css';
import ProductCard from "./ProductCard";
import ProductTitle from "./ProductTitle";

export default function BestProducts({ bestitems }) {
  const nav = useNavigate();

  return (
    <div className="best-product-wrap">
      <ProductTitle>베스트 상품</ProductTitle>
      <ul className="best-product-list">
        {bestitems.map((item) => {
          return <li onClick={() => nav(`/item/${item.id}`)} key={item.id}><ProductCard item={item} /></li>
        })}
      </ul>
    </div>
  );
}
