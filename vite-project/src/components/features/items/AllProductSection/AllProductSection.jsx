import React from "react";
import ItemCard from "../../../common/ItemCard/ItemCard";
import Search from "../../../common/search/Search";
import Dropdown from "../../../common/dropdown/Dropdown";
import AddButton from "../../../common/Button/AddButton";
import IsLoading from "../../../common/State/IsLoading";
import IsError from "../../../common/State/IsError";
import "./AllProductSectionStyle.css";

const AllProductSection = ({
  products,
  onOrderByChange,
  isLoading,
  isError,
}) => {
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
      {/* isLoading, isError 상태 렌더링 */}
      {isLoading && <IsLoading type="ALL" />}
      {isError && <IsError message="전체 상품을 불러오는데 실패했습니다." />}

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
