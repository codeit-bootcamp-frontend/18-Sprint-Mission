import { useState } from "react";
import DropDown from "../../assets/images/ic_arrow_down.svg";
import MobileDropDown from "../../assets/images/ic_sort_mo.svg";
import "./ProductSelect.css";
import { useMediaQuery } from "react-responsive";

export default function ProductSelect({ onClickNew, onClickLike }) {
  const [text, setText] = useState("최신순");
  const [show, setShow] = useState(false);

  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });

  const handleNew = () => {
    setText("최신순");
    onClickNew();
    setShow(!show);
  };
  const handlefavorite = () => {
    setText("추천순");
    onClickLike();
    setShow(!show);
  };
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="product-select-wrap">
      {!isMobile && (
        <button className="product-select-button" onClick={handleShow}>
          {text}
          <img src={DropDown} alt="드랍다운아이콘" />
        </button>
      )}
      {isMobile && (
        <button className="product-select-button" onClick={handleShow}>
          <img src={MobileDropDown } alt="드랍다운아이콘" />
        </button>
      )}
      {show && (
        <div className="product-select-box">
          <button onClick={handleNew}>최신순</button>
          <button onClick={handlefavorite}>추천순</button>
        </div>
      )}
    </div>
  );
}
