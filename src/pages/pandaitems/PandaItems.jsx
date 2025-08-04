import Header from "../../components/header/Header";
import BestProduct from "../../components/product/BestProduct";
import ProductAll from "../../components/product/ProductAll";
import ProductPagination from "../../components/product/ProductPagination";
import "./PandaItems.css";

export default function PandaItems({ items, bestitems, onClickNew, onClickLike }) {
  return (
    <div className="product-wrap">
      <Header />
      <div className="main">
        <BestProduct bestitems={bestitems} />
        <ProductAll
          items={items}
          onClickNew={onClickNew}
          onClickLike={onClickLike}
        />
      </div>
      <ProductPagination />
    </div>
  );
}
