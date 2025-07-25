import React from "react";
import ItemCard from "../../../common/ItemCard/ItemCard";
import "./BestProductSectionStyle.css";

const BestProductSection = () => {
  return (
    <section className="best-products">
      <h1 className="best-products-title">베스트 상품</h1>
      <article className="best-products-wrapper">
        <ItemCard
          img="/Black.JPG"
          type="BEST"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="BEST"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="BEST"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="BEST"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
      </article>
    </section>
  );
};

export default BestProductSection;
