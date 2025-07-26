import React from "react";
import { Link } from "react-router-dom";
import "./ItemCardStyle.css";

const ItemCard = ({ img, title, price, heartCount, type }) => {
  return (
    <article className="item-card">
      <Link
        to="#"
        className="item-card-link"
        aria-label={`${title} 상세페이지 이동`}>
        <figure className="item-card-figure">
          <img
            src={img || "/ProductNullImage.png"}
            alt={title || "상품 이미지"}
            className={
              type === "BEST" ? "item-card-best-img" : "item-card-all-img"
            }
          />
        </figure>
        <div className="item-card-info">
          <h3 className="item-card-info-title">{title}</h3>
          <p className="item-card-info-price">{price}</p>
          <div className="item-card-heart">
            <img src="/icons/heart.svg" alt="좋아요" width={16} height={16} />
            <span className="item-card-heart-count">{heartCount}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ItemCard;
