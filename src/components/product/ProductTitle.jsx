import './ProductTitle.css';

export default function ProductTitle({ children }) {
  return (
    <h2 className='best-product-title'>
      {children}
    </h2>
  )
}
