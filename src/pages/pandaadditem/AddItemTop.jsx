import ProductTitle from "../../components/product/ProductTitle";

export default function AddItemTop({ submit }) {


  return (
    <div className="AddItemTop">
      <ProductTitle>상품 등록하기</ProductTitle>
      <button style={{ backgroundColor : !submit ?  'var(--primary-100)' : 'var(--gray-400)'}} disabled={submit}>등록</button>
    </div>
  );
}
