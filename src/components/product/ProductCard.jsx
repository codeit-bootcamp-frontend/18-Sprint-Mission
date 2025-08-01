import LikeIcon from '../../assets/images/ic_heart.svg';
import './ProductCard.css';

export default function ProductCard({item}) {
  return (
    <div className='product-card'>
      <img src={item.images} alt={item.name} />
      <p className='product-title'>
        {item.description}
      </p>
      <p className='product-price'>
        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </p>
      <div className='product-like'>
        <img src={LikeIcon} alt="찜아이콘" />
        <span>
          {item.favoriteCount}
        </span>
      </div>
    </div>
  )
}
