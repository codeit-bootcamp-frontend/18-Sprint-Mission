import { useNavigate } from "react-router-dom";
import "./AllItems.css";
import { OrderBy } from "../api/api";

interface Props {
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<OrderBy>>; // AllItems 왼쪽 setOrderBy가 any로 떠서 오른쪽 setOrderBy를 hover 해서 뜬걸 그대로 붙여넣었습니다
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>; // ''
}
const AllItems = ({ orderBy, setOrderBy, search, setSearch }: Props) => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/additem");
  };

  const SetOrderBySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "recent" || e.target.value === "favorite")
      setOrderBy(e.target.value);
  }; //OrderBy가 리터럴 유니온 타입인데, e.target.value가 string 으로 타입오류가 떠서 if 문으로 고쳤습니다

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
            onChange={SetOrderBySelect}
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
