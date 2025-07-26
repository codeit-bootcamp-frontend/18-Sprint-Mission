import React from "react";
import ItemCard from "../../../common/ItemCard/ItemCard";
import "./BestProductSectionStyle.css";

const BestProductSection = ({ products }) => {
  return (
    <section className="best-products">
      <h1 className="best-products-title">베스트 상품</h1>
      <article className="best-products-wrapper">
        {products?.list?.map((product) => (
          <ItemCard
            key={product.id}
            img={product.images[0]}
            type="BEST"
            title={product.name}
            price={product.price}
            heartCount={product.favoriteCount}
          />
        ))}
      </article>
    </section>
  );
};

export default BestProductSection;
