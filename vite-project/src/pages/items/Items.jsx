import React from 'react';
import BestProducts from '../../components/features/items/best/BestProducts';
import AllProducts from '../../components/features/items/all/AllProducts';
import Pagination from '../../components/features/items/pagination/Pagination';
import './ItemsStyle.css';

const Items = () => {
  return (
    <>
      <div className='products'>
          <BestProducts />
          <AllProducts />
      </div>

      {/* 페이지네이션 */}
      <div className='pagination'>
        <Pagination />
      </div>
    </>
  );
};

export default Items;