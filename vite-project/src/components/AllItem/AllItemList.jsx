// components/AllItem/AllItemList.jsx - 반응형 개수 적용
import { useState, useEffect } from "react";
import ProductCard from "../BestItem/ProductCard";
import { getProducts, searchProducts } from "../../api/products";
import useResponsiveCount from "../../hooks/useResponsiveCount";

const AllItemList = ({
  sortBy = "recent",
  searchQuery = "",
  currentPage = 1,
  onTotalCountChange,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 반응형 훅 사용
  const { getAllProductCount, getGridClass } = useResponsiveCount();
  const pageSize = getAllProductCount();
  const gridClass = getGridClass("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = {
          page: currentPage,
          pageSize: pageSize, // 🎯 화면 크기별 다른 개수
          orderBy: sortBy === "latest" ? "recent" : "favorite",
        };

        let data;
        if (searchQuery.trim()) {
          data = await searchProducts(searchQuery.trim(), params);
        } else {
          data = await getProducts(params);
        }

        setProducts(data.list || []);

        if (onTotalCountChange) {
          onTotalCountChange(data.totalCount || 0);
        }
      } catch (err) {
        setError(err.message);
        console.error("Products fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [sortBy, searchQuery, currentPage, pageSize, onTotalCountChange]); // pageSize 의존성 추가

  // 로딩 상태
  if (loading) {
    return (
      <section className="mt-8">
        {/* 🎯 반응형 그리드 클래스와 개수 적용 */}
        <div className={gridClass}>
          {[...Array(pageSize)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg h-64 animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <section className="mt-8">
        <div className="text-center py-12">
          <p className="text-red-500 mb-4">상품을 불러오는데 실패했습니다.</p>
          <p className="text-gray-500">{error}</p>
        </div>
      </section>
    );
  }

  // 빈 상태
  if (products.length === 0) {
    return (
      <section className="mt-8">
        <div className="text-center py-12">
          <p className="text-gray-500">
            {searchQuery
              ? `'${searchQuery}'에 대한 검색 결과가 없습니다.`
              : "등록된 상품이 없습니다."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8">
      {/* 🎯 반응형 그리드 + 반응형 개수 */}
      <div className={gridClass}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllItemList;
