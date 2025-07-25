import React from "react";
import { Link } from "react-router-dom";
import "./ItemCardStyle.css";

const ItemCard = ({ img, title, price, heartCount, type }) => {
  return (
    <Link to="#" className="item-card" aria-label={`${title} 상세페이지 이동`}>
      <img
        src={img}
        alt={title}
        className={type === "BEST" ? "item-card-best-img" : "item-card-all-img"}
      />
      <div className="item-card-info">
        <p className="item-card-info-title">{title}</p>
        <p className="item-card-info-price">{price}</p>
        <div className="item-card-heart">
          <img src="/icons/heart.svg" alt="" width={16} height={16} />
          <span className="item-card-heart-count">{heartCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
