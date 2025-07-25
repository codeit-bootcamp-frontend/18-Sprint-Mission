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
        <Search />
        <Dropdown />
      </div>
      <div className='all-products-wrapper'>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default AllProducts;