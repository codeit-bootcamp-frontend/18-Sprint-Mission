import { useState } from "react";
import dotIcon from "../../assets/images/dot_btn.svg";
import userIcon from "../../assets/images/header_user_icon.svg";

export default function PandaItemComment({ item }) {
  const [updateBox, setUpdateBox] = useState(null);


  const handleChangeBtn = (id) => {
    if (updateBox === id) {
      setUpdateBox(null);
    } else { 
      setUpdateBox(id);
    }
  }

  const UpdateClick = () => { 
    setUpdateBox(null);
  }

  const displayCreateAt = (createdAt) => {
    const date = new Date(createdAt);
    const now = Date.now();
    const milliSeconds = now - date;

    const seconds = milliSeconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = months / 12;

    if (seconds < 60) {
      return "방금 전";
    } else if (minutes < 60) {
      return `${Math.floor(minutes)}분 전`;
    } else if (hours < 24) {
      return `${Math.floor(hours)}시간 전`;
    } else if (days < 30) {
      return `${Math.floor(days)}일 전`;
    } else if (months < 12) {
      return `${Math.floor(months)}달 전`;
    } else {
      return `${Math.floor(years)}년 전`;
    }
  };

  return (
    <>
      {item.map((comment) => (
        <div key={comment.id} className="pandaitem_comments_box">
          <div className="pandaitem_comments_top">
            <p>{comment.content}</p>
            <button onClick={() => handleChangeBtn(comment.id)}>
              <img src={dotIcon} alt="댓글버튼" />
            </button>
            {updateBox === comment.id && (
              <div className="update_box">
                <button onClick={UpdateClick}>수정하기</button>
                <button onClick={UpdateClick}>삭제하기</button>
              </div>
            )}
          </div>
          <div className="pandaitem_comments_bottom">
            <img
              src={comment.writer.image ? comment.writer.image : userIcon}
              alt="유저프로필"
            />
            <div className="pandaitem_comments_user_data">
              <p>{comment.writer.nickname}</p>
              <p>{displayCreateAt(comment.updatedAt)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
