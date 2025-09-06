const ProductCard = ({
  className,
  name,
  price,
  images,
  picSizeClass,
  favoriteCount,
}) => {
  const formattedPrice = price.toLocaleString();
  return (
    <div className={`${className} flex flex-col`}>
      <img
        src={images}
        alt="상품이미지"
        className={`${picSizeClass} rounded-xl`}
      />
      <span>{name}</span>
      <span>{formattedPrice}원</span>
      <span>🩶 {favoriteCount}</span>
    </div>
  );
};

export default ProductCard;
