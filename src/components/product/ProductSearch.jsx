import InputImg from '../../assets/images/ic_search.svg';
import './ProductSearch.css';

export default function ProductSearch() {
  return (
    <div className='product-search-wrap'>
      <label htmlFor='product-search'>
        <img src={InputImg} alt="검색창 아이콘" />
      </label>
      <input id='product-search' className='product-search' type='text' placeholder='검색할 상품을 입력해주세요' />
    </div>
  )
}
