const ProductCard = ({ product }) => {
  const { title, price, favoriteCount, imageUrl } = product;

  // 가격 포맷 함수
  const formatPrice = (price) => {
    return price.toLocaleString() + "원";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer">
      {/* 상품 이미지 */}
      <div className="aspect-square bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // 이미지 로드 실패시 플레이스홀더
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=";
          }}
        />
      </div>

      {/* 상품 정보 */}
      <div className="p-4">
        {/* 상품 제목 */}
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* 가격 */}
        <p className="text-lg font-bold text-gray-800 mb-2">
          {formatPrice(price)}
        </p>

        {/* 좋아요 */}
        <div className="flex items-center text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
