import { useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import usePagination from "../../hooks/usePagination";
import ProductGrid from "../common/ProductGrid";
import Pagination from "../ProductListSection/Pagination";
import searchIcon from "../../assets/searchIcon.svg";
import Dropdown from "./Dropdown";
import { useResponsivePage } from "../../hooks/useResponsivePage";
import { Link } from "react-router-dom";
import { SORT_OPTIONS } from "../../constant/SORT_OPTIONS";

const Container = ({ pageSize, isMobile }) => {
  const [orderBy, setOrderBy] = useState(SORT_OPTIONS[0].value);
  const { setCurrentPage, getPageNumber, currentPage } = usePagination();
  const { products, totalProductCount } = useGetProducts({
    pageSize,
    orderBy,
    currentPage,
  });
  const ResponsiveValues = useResponsivePage();

  const handleSelect = (val) => {
    console.log("$$", val);
    setOrderBy(val);
  };
  const { pages, totalPages } = getPageNumber(totalProductCount);
  return (
    <div className="flex flex-col items-center gap-6 mt-6 max-w-[1200px]">
      {isMobile ? (
        <div className="flex flex-col w-full gap-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">전체 상품</h2>
            <Link
              className="px-6 py-3 text-white bg-blue-500 rounded-lg"
              to="/addItems"
            >
              상품등록하기
            </Link>
          </div>
          <div className="flex w-full gap-3">
            <div className="flex items-center flex-1 gap-2">
              <div className="relative flex-1">
                <img
                  src={searchIcon}
                  alt="검색 아이콘"
                  className="absolute top-2.5 left-2 w-5 h-5"
                />
                <input
                  className="w-full h-12 bg-gray-100 px-7 rounded-xl"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </div>
              <Dropdown
                onChange={handleSelect}
                value={orderBy}
                options={SORT_OPTIONS}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <h2 className="text-xl font-bold">전체 상품</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2">
              <div className="relative">
                <img
                  src={searchIcon}
                  alt="검색 아이콘"
                  className="absolute top-4 left-2"
                />
                <input
                  className="h-12 px-8 bg-gray-100 w-80 rounded-xl"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </div>
              <Link
                className="px-6 py-3 text-white bg-blue-500 rounded-lg"
                to="/addItems"
              >
                상품등록하기
              </Link>
              <Dropdown
                onChange={handleSelect}
                value={orderBy}
                options={SORT_OPTIONS}
              />
            </div>
          </div>
        </div>
      )}

      <ProductGrid
        products={products}
        picSize={ResponsiveValues.normalPicSize}
        gridSize={ResponsiveValues.normalPicContainerSize}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Container;
