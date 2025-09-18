import dotIcon from "../../assets/images/dot_btn.svg";
import userIcon from "../../assets/images/header_user_icon.svg";
import likeIcon from "../../assets/images/ic_heart.svg";

export default function PandaItemSection({ item }) {
  return (
    <div className="pandaitem_section">
      <div className="pandaitem_img">
        <img src={item.images} alt="상품이미지" />
      </div>
      <div className="pandaitem_data">
        <div className="pandaitem_data_top">
          <div>
            <p className="pandaitem_data_title">{item.name}</p>
            <p className="pandaitem_data_price">
              {item.price.toLocaleString()}원
            </p>
          </div>
          <div>
            <button>
              <img src={dotIcon} alt="더보기버튼" />
            </button>
          </div>
        </div>
        <p className="pandaitem_data_intro">상품 소개</p>
        <p className="pandaitem_data_text">{item.description}</p>
        <p className="pandaitem_data_tag_title">상품 태그</p>
        <div className="pandaitem_data_tag_list">
          {item.tags.map((tag, index) => (
            <div key={index} className="pandaitem_data_tag">
              <span>#{tag}</span>
            </div>
          ))}
        </div>
        <div className="pandaitem_data_user">
          <div className="pandaitem_data_user_icon">
            <img src={userIcon} alt="유저 아이콘" />
          </div>
          <div className="pandaitem_data_user_main">
            <p>{item.ownerNickname}</p>
            <p>{item.createdAt.split("T")[0]}</p>
          </div>
          <div className="pandaitem_data_user_like">
            <img src={likeIcon} alt="좋아요 아이콘" />
            <span>{item.favoriteCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
