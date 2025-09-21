// components/AllItem/AllItemList.jsx
import { useState, useEffect } from "react";
import ProductCard from "../BestItem/ProductCard";
import { getProducts, searchProducts } from "../../api/products";

const AllItemList = ({
  sortBy = "recent",
  searchQuery = "",
  currentPage = 1,
  onTotalCountChange,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = {
          page: currentPage,
          pageSize: 10,
          orderBy: sortBy === "latest" ? "recent" : "favorite",
        };

        let data;
        if (searchQuery.trim()) {
          // 검색 API 함수 사용
          data = await searchProducts(searchQuery.trim(), params);
        } else {
          // 일반 상품 목록 API 함수 사용
          data = await getProducts(params);
        }

        setProducts(data.list || []);

        // 상위 컴포넌트에 전체 개수 전달
        if (onTotalCountChange) {
          onTotalCountChange(data.totalCount || 0);
        }

        // 상위 컴포넌트에 전체 개수 전달
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
  }, [sortBy, searchQuery, currentPage, onTotalCountChange]);

  // 로딩 상태
  if (loading) {
    return (
      <section className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(10)].map((_, index) => (
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllItemList;
