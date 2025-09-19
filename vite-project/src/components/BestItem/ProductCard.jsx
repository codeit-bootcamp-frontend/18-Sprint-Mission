const ProductCard = ({ product }) => {
  // API 응답 구조에 맞게 데이터 매핑
  const {
    name: title, // API에서는 'name', 기존에서는 'title'
    price,
    favoriteCount,
    images, // 배열로 들어옴
    tags,
  } = product;

  // 첫 번째 이미지 사용, 안전하게 처리
  const getImageUrl = () => {
    if (!images || !Array.isArray(images) || images.length === 0) {
      return null;
    }
    return images[0];
  };

  const imageUrl = getImageUrl();

  // 가격 포맷 함수
  const formatPrice = (price) => {
    return price.toLocaleString() + "원";
  };

  // 이미지 로드 에러 처리 개선
  const handleImageError = (e) => {
    console.log("Image load failed:", imageUrl);
    e.target.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer">
      {/* 상품 이미지 */}
      <div className="aspect-square bg-gray-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={handleImageError}
            loading="lazy"
            onLoad={() => console.log("Image loaded successfully:", imageUrl)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">이미지 없음</span>
          </div>
        )}
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

        {/* 태그들 (있다면 표시) */}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
