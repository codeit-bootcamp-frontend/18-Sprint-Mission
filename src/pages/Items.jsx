import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductList, getProductBest } from "../api/productApi";
import { ProductList, BestProduct } from "../components/ProductList";
import SearchGroup from "../components/SearchGroup";
import SelectBox from "../components/SelectBox";
import Pagination from "../components/Pagination";
import useAsync from "../hooks/useAsync";
import { useResponsiveQueries } from "../hooks/useMediaQuery";
import { useComma } from "../hooks/useComma";
import list from "../assets/scss/itemsList.module.scss";

function Items() {
  //미디어 쿼리
  const { isTABLET, isMOBILE } = useResponsiveQueries();

  //세자리 콤마
  const setNumberComma = useComma();

  const [totalCount, setTotalCount] = useState(0);

  //베스트 상품
  const [best, setBest] = useState([]);
  const [favorite, setFavorite] = useState("favoriteCount");
  const [isBestLoading, bestLoadingError, getBestAsync] =
    useAsync(getProductBest);
  const bestItems = best.sort((a, b) => b[favorite] - a[favorite]);
  const bestLength = isMOBILE ? 1 : isTABLET ? 2 : 4;

  //제품 리스트
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [isListLoading, listLoadingError, getListAsync] =
    useAsync(getProductList);
  const sortedItems = items.sort((a, b) => b[orderBy] - a[orderBy]);
  const itemListLength = isMOBILE ? 4 : isTABLET ? 6 : 10;

  //베스트 상품 불러오기
  const handleBestLoad = async (options) => {
    const result = await getBestAsync(options);
    if (!result) return;
    const { list } = result;
    setBest(list);
  };

  useEffect(() => {
    handleBestLoad({ page: 1, pageSize: bestLength, orderBy: "favorite" });
  }, [isTABLET, isMOBILE]);

  //리스트 불러오기
  const handleListLoad = async (options) => {
    const result = await getListAsync(options);
    if (!result) return;
    const { list } = result;
    setItems(list);
    setTotalCount(result.totalCount);
  };

  useEffect(() => {
    handleListLoad({ page, pageSize: itemListLength, orderBy });
  }, [page, orderBy, isTABLET, isMOBILE]);

  //선택한 페이지 리스트 불러오기
  const handlePageLoad = (pageNumber) => {
    setPage(pageNumber);
  };

  //정렬
  const handleNewestClick = () => setOrderBy("recent");
  const handleFavoriteClick = () => setOrderBy("favorite");

  return (
    <>
      <section className="section section-1">
        <div className="inner">
          <div className="sectionTitleWrap">
            <h2 className="sectionTitle">베스트 상품</h2>
          </div>
          <BestProduct
            items={bestItems}
            col={4}
            setNumberComma={setNumberComma}
            isBestLoading={isBestLoading}
          />
          {bestLoadingError?.message && <span>{bestLoadingError.message}</span>}
        </div>
      </section>
      <section className="section section-2">
        <div className="inner">
          <div className="sectionTitleWrap">
            <h2 className="sectionTitle">전체 상품</h2>
            <div className={list.formWrap}>
              <SearchGroup />
            </div>
            <NavLink to="/Additem" className={list.linkButton}>
              상품 등록하기
            </NavLink>
            <div className={list.selectBoxGroup}>
              <SelectBox
                onNewest={handleNewestClick}
                onFavorite={handleFavoriteClick}
              />
            </div>
          </div>
          <ProductList
            items={sortedItems}
            col={5}
            setNumberComma={setNumberComma}
            isListLoading={isListLoading}
          />
          {listLoadingError?.message && <span>{listLoadingError.message}</span>}
          <Pagination
            onPageLoad={handlePageLoad}
            totalCount={totalCount}
            itemListLength={itemListLength}
          />
        </div>
      </section>
    </>
  );
}

export default Items;
