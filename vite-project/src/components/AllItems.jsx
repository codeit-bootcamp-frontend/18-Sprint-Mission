import { useNavigate } from "react-router-dom";
import "./AllItems.css";

const AllItems = ({ orderBy, setOrderBy, search, setSearch }) => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/additem");
  };

  return (
    <>
      <div className="allitems_menu">
        <div className="allitems_title">
          <h2>전체 상품</h2>
        </div>
        <div className="allitems_bar">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="search"
            placeholder="검색할 상품을 입력해주세요"
          />
          <button className="register" onClick={navigateToRegister}>
            상품 등록하기
          </button>
          <select
            className="dropped-down"
            value={orderBy}
            onChange={(e) => {
              setOrderBy(e.target.value);
            }}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AllItems;
