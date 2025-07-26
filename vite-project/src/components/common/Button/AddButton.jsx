import React from "react";
import "./AddButtonStyle.css";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link
      to="/items/add-item"
      className="add-product-button"
      aria-label="상품 등록 버튼">
      상품 등록하기
    </Link>
  );
};

export default AddButton;
