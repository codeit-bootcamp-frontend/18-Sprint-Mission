import React from "react";
import { Link } from "react-router-dom";
import formatPrice from "../../../utils/formatPrice";
import { clean } from "../../../utils/security/sanitize";
import "./ItemCardStyle.css";

const ItemCard = ({ img, title, price, heartCount, type }) => {
  return (
    <article className="item-card">
      <Link
        to="#"
        className="item-card-link"
        aria-label={`${title} 상세페이지 이동`}>
        <figure
          className={
            type === "BEST" ? "item-card-best-img" : "item-card-all-img"
          }>
          <img
            src={clean(img) || "/ProductNullImage.png"}
            alt={clean(title) || "상품 이미지"}
            className={
              type === "BEST" ? "item-card-best-img" : "item-card-all-img"
            }
          />
        </figure>
        <div className="item-card-info">
          <h3 className="item-card-info-title">{clean(title)}</h3>
          <p className="item-card-info-price">{formatPrice(clean(price))}</p>
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
