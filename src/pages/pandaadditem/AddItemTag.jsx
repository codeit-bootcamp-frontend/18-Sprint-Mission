import Xicon from "../../assets/images/ic_X.svg";
import ProductTitle from "../../components/product/ProductTitle";
import { AddItemInput } from "./AddItemInput";

export default function AddItemTag({ tag, setTag }) {
  const handleChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <div className="AddItemTag">
      <ProductTitle>태그</ProductTitle>
      <AddItemInput
        value={tag}
        onChange={handleChange}
        type="text"
        placeholder="태그를 입력해주세요"
      />
      <div className="tag-box">
        <div className="tag">
          <p>#티셔츠</p>
          <button>
            <img src={Xicon} alt="태그삭제아이콘" />
          </button>
        </div>
      </div>
    </div>
  );
}
