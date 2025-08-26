import ProductTitle from "../../components/product/ProductTitle";

export default function AddItemTop() {
  return (
    <div className="AddItemTop">
      <ProductTitle>상품 등록하기</ProductTitle>
      <button disabled={true}>등록</button>
    </div>
  );
}
