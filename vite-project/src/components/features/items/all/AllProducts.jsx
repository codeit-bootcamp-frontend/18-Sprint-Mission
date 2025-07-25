import React from 'react';
import ItemCard from '../../../common/ItemCard/ItemCard';
import Search from './search/Search';
import Dropdown from './dropdown/Dropdown';
import './AllProductsStyle.css';

const AllProducts = () => {
  return (
    <div className='all-products'>
      <div className='all-products-header'>
        <h1 className='all-products-title'>전체 상품</h1>
        <div className='all-products-header-search-dropdown'>
          <Search />
          <Dropdown />
        </div>
      </div>
      <div className='all-products-wrapper'>
        <ItemCard type="ALL" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
        <ItemCard type="ALL" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
        <ItemCard type="ALL" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
        <ItemCard type="ALL" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
        <ItemCard type="ALL" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
      </div>
    </div>
  );
};

export default AllProducts;