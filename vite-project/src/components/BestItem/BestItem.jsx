import ProductCard from "./ProductCard";

const BestItem = () => {
  // 테스트 데이터 (나중에 API로 교체)
  const bestProducts = [
    {
      id: 1,
      title: "아이패드 미니 판다",
      price: 500000,
      favoriteCount: 240,
      imageUrl: "/test-product1.jpg",
    },
    {
      id: 2,
      title: "아이패드 미니 판다",
      price: 500000,
      favoriteCount: 240,
      imageUrl: "/test-product2.jpg",
    },
    {
      id: 3,
      title: "아이패드 미니 판다",
      price: 500000,
      favoriteCount: 240,
      imageUrl: "/test-product3.jpg",
    },
    {
      id: 4,
      title: "아이패드 미니 판다",
      price: 500000,
      favoriteCount: 240,
      imageUrl: "/test-product4.jpg",
    },
  ];

  return (
    <section className="py-8">
      {/* 베스트 상품 제목 */}
      <p className="text-xl font-bold text-gray-900 mb-6">베스트 상품</p>

      {/* 상품 그리드 - 반응형 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestItem;
