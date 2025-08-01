import React from "react";
import Search from "../../../common/search/Search";
import AddButton from "../../../common/Button/AddButton";
import Dropdown from "../../../common/dropdown/Dropdown";
import "./OptionsBoxStyle.css";

const OptionsBox = ({ onOrderByChange, isMobile }) => {
  return (
    <>
      {!isMobile ? (
        <div className="all-products-header">
          <h1 className="all-products-title">전체 상품</h1>
          <div className="all-products-header-search-dropdown">
            <Search />
            <AddButton />
            <Dropdown onOrderByChange={onOrderByChange} />
          </div>
        </div>
      ) : (
        <div className="all-products-header">
          <div className="all-products-title-button">
            <h1 className="all-products-title">전체 상품</h1>
            <AddButton />
          </div>
          <div className="all-products-header-search-dropdown">
            <Search />
            <Dropdown onOrderByChange={onOrderByChange} />
          </div>
        </div>
      )}
    </>
  );
};

export default OptionsBox;
