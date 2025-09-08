import "./ListItem.css";

function ListItem({ item }) {
  return (
    <div>
      <div className="list-item">
        <div className="item-images">
          <img src={item.images} />
        </div>
        <div className="item-text">
          <p>{item.name}</p>
          <p className="item-price">{item.price} 원</p>
          <p>🤍 {item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
