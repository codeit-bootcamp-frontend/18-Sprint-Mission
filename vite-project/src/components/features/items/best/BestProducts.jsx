import React from 'react';
import ItemCard from '../../../common/ItemCard/ItemCard';
import './BestProductsStyle.css';

const BestProducts = () => {
  return (
    <div className='best-products'>
      <h1 className='best-products-title'>베스트 상품</h1>
      <div className='best-products-wrapper'>
        <ItemCard type="BEST" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
        <ItemCard type="BEST" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
        <ItemCard type="BEST" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
        <ItemCard type="BEST" title="아이패드 미니 팝니다" price="500,000원" heartCount="240" />
      </div>
    </div>
  );
};

export default BestProducts;