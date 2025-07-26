import React from "react";
import ItemCard from "../../../common/ItemCard/ItemCard";
import Search from "../../../common/search/Search";
import Dropdown from "../../../common/dropdown/Dropdown";
import AddButton from "../../../common/Button/AddButton";
import "./AllProductSectionStyle.css";

const AllProductSection = ({ products, onOrderByChange }) => {
  return (
    <section className="all-products">
      <div className="all-products-header">
        <h1 className="all-products-title">전체 상품</h1>
        <div className="all-products-header-search-dropdown">
          <Search />
          <AddButton />
          <Dropdown onOrderByChange={onOrderByChange} />
        </div>
      </div>
      <article className="all-products-wrapper">
        {products?.list?.map((product) => (
          <ItemCard
            key={product.id}
            img={product.images[0]}
            type="ALL"
            title={product.name}
            price={product.price}
            heartCount={product.favoriteCount}
          />
        ))}
      </article>
    </section>
  );
};

export default AllProductSection;
