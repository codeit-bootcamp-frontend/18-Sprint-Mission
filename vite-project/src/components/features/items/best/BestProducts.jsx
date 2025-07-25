import React from 'react';
import './BestProductsStyle.css';
import ItemCard from '../../../common/ItemCard/ItemCard';

const BestProducts = () => {
  return (
    <div className='best-products'>
      <h1 className='best-products-title'>베스트 상품</h1>
      <div className='best-products-wrapper'>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default BestProducts;