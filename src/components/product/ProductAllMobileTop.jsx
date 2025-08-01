import { Link } from 'react-router-dom'
import ProductAddButton from './ProductAddButton'
import "./ProductAllMobileTop.css"
import ProductSearch from './ProductSearch'
import ProductSelect from './ProductSelect'
import ProductTitle from './ProductTitle'

export default function ProductAllMobileTop({onClickNew, onClickLike}) {
  return (
    <>
      <div className='product-all-mobile-top'>
        <ProductTitle>전체 상품</ProductTitle>
        <Link to="/additem">
          <ProductAddButton>상품 등록하기</ProductAddButton>
        </Link>
      </div>
      <div className='product-all-mobile-top'>
        <ProductSearch />
        <ProductSelect onClickNew={onClickNew} onClickLike={onClickLike}/>
      </div>
    </>
  )
}
