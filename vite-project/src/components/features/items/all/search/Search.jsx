import React from 'react';
import './SearchStyle.css';

const Search = () => {
  return (
    <div className='search-add-wrapper'>
      <div className='search-input-wrapper'>
        <input type="text" placeholder='검색할 상품을 입력해주세요.' className='search-input' />
        <img src="/icons/search.svg" alt="검색 아이콘" aria-label='검색 버튼' />
      </div>
      <button className='add-product-button' aria-label='상품 등록 버튼'>상품 등록하기</button>
    </div>
  );
};

export default Search;