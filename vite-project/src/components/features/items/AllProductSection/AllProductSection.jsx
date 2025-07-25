import React from "react";
import ItemCard from "../../../common/ItemCard/ItemCard";
import Search from "../../../common/search/Search";
import Dropdown from "../../../common/dropdown/Dropdown";
import AddButton from "../../../common/Button/AddButton";
import "./AllProductSectionStyle.css";

const AllProductSection = () => {
  return (
    <section className="all-products">
      <div className="all-products-header">
        <h1 className="all-products-title">전체 상품</h1>
        <div className="all-products-header-search-dropdown">
          <Search />
          <AddButton />
          <Dropdown />
        </div>
      </div>
      <article className="all-products-wrapper">
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
      </article>
      <article className="all-products-wrapper">
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
        <ItemCard
          img="/Black.JPG"
          type="ALL"
          title="아이패드 미니 팝니다"
          price="500,000원"
          heartCount="240"
        />
      </article>
    </section>
  );
};

export default AllProductSection;
