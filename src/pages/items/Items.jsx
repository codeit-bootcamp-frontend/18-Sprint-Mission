import { useEffect, useLayoutEffect, useState } from 'react';
import Product from '../../components/Product';
import '../../styles/items/items.css';
import { requestProductList } from '../../services/itemsApi';
import DropdownList from '../../components/DropdownList';
import Pagination from '../../components/Pagination';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Items() {
  /**
   * tablet 뷰포트인지 확인
   */
  const isTablet = useMediaQuery('(max-width: 1200px)');

  /**
   * mobile 뷰포트인지 확인
   */
  const isMobile = useMediaQuery('(max-width: 768px)');

  /**
   * 뷰포트별로 표시할 아이템 개수
   */
  const [itemCounts, setItemsCounts] = useState({ best: 4, all: 10 });

  /**
   * 전체 상품 목록
   */
  const [products, setProducts] = useState({});

  /**
   * 베스트 상품 목록
   */
  const [bestProducts, setBestProducts] = useState([]);

  /**
   * 현재 페이지 번호
   */
  const [pageNum, setPageNum] = useState(1);

  /**
   * 정렬 조건
   */
  const [order, setOrder] = useState('recent');

  /**
   * isLoading
   */
  const [isLoading, setisLoading] = useState(true);

  /**
   * 베스트 상품 목록을 가져온다.
   */
  const getBestProducts = async (count) => {
    try {
      const { list: bestList } = await requestProductList('favorite', 1, count);
      if (!bestList) {
        throw new Error('베스트 상품 목록 데이터를 불러오지 못했습니다.');
      }
      setBestProducts(bestList);
    } catch (e) {
      console.error(e);
    } finally {
      setisLoading(false);
    }
  };

  /**
   * 전체 상품 목록을 가져온다.
   */
  const getProducts = async (order, page, count) => {
    try {
      const productList = await requestProductList(order, page, count);

      if (!productList) {
        throw new Error('상품목록 데이터를 불러오지 못했습니다.');
      }
      setProducts(productList);
    } catch (e) {
      console.error(e);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    /**
     * 현재 뷰포트에 맞추어 count를 담을 객체
     */
    let currentItemCounts;

    if (isMobile) {
      // 모바일 뷰
      currentItemCounts = { best: 1, all: 4 };
    } else if (isTablet) {
      // 태블릿 뷰
      currentItemCounts = { best: 2, all: 6 };
    } else {
      // 데스크탑 뷰
      currentItemCounts = { best: 4, all: 10 };
    }

    setItemsCounts(currentItemCounts);
    getProducts(order, pageNum, currentItemCounts.all);
    getBestProducts(currentItemCounts.best);
  }, [isTablet, isMobile, order, pageNum]);

  return (
    <>
      <div className="items-container">
        <div className="items-best-container">
          <p className="items-title">베스트 상품</p>
          {!isLoading && <Product products={bestProducts} />}
        </div>
        <div className="items-list-container">
          <div className="items-menus">
            <p className="items-title title-text">전체 상품</p>
            <input
              type="text"
              className="items-search"
              placeholder="검색할 상품을 입력해주세요"
            />
            <button className="btn-hover btn-active common-btn items-add-btn">
              상품 등록하기
            </button>
            <DropdownList changeOrder={setOrder} />
          </div>
          {!isLoading && <Product products={products.list} style={'all'} />}
        </div>
        <Pagination
          currentNum={pageNum}
          setPageNum={setPageNum}
          totalCount={products.totalCount}
          contentNum={itemCounts.all}
        />
      </div>
    </>
  );
}
