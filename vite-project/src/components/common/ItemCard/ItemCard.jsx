import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCardStyle.css';

const ItemCard = () => {
  return (
    <Link to="#" className='item-card' aria-label='베스트 상품 상세페이지 이동'>
      <img src="/" alt="" width={282} height={282} />
      <div className='item-card-info'>
        <p className='item-card-info-title'>아이패드 미니 팝니다</p>
        <p className='item-card-info-price'>500,000원</p>
        <div className='item-card-heart'>
          <img src="/icons/heart.svg" alt="" width={16} height={16} />
          <span className='item-card-heart-count'>240</span>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;