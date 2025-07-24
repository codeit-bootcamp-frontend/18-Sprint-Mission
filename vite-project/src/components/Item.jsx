import likeImg from "../assets/ic-heart.svg";
import "./Item.css";

function Item({ title, price, likeCount }) {
  const priceString = `${price}원`;
  return (
    <div className="Item">
      <div className="Item-image"></div>
      <div className="Item-info">
        <p className="Item-title">{title}</p>
        <p className="Item-price">{priceString}</p>
        <div className="Item-likes">
          <img src={likeImg} alt="좋아요 갯수" />
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
