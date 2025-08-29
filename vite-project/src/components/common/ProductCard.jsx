import React from "react";

const ProductCard = ({ className, name, price, images }) => {
  return (
    <div className={`${className} flex flex-col`}>
      <img src={images} alt="상품이미지" />
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
