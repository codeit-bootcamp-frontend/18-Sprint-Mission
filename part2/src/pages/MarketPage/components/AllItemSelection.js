import { useEffect, useState } from 'react';
import { getProducts } from '../../../api';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../assets/img/ic_search.svg';
import ItemCard from './ItemCard';
import SortMenu from '../../../components/SortMenu';
import PaginationBar from '../../../components/PaginationBar';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } //Mobile
  else if (width < 1280) {
    return 6;
  } //Tablet
  else {
    return 10;
  } //Desktop
};

function AllItemSelection() {
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [totalPageNum, setTotalPageNum] = useState();

  const sortedData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize)); //상품 수 / 보이는 물품 개수 = 총 페이지 수
  };

  const handleSortSelection = (sortOption) => {
    //recent, favorite가 sortOption으로 넘어감 (SortMenu.js)
    setOrderBy(sortOption);
  };

  const onPageChange = (pageNumber) => {
    //page가 pageNumber로 넘어감 (PaginationBar.js)
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    sortedData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize]); //디펜던시 바뀔 때 BestItemSelection 함수 실행

  return (
    <div>
      <div className="allContainer">
        <h1 className="allTitle">전체 상품</h1>
        <div className="allSearchSection">
          <div className="searchBar">
            <SearchIcon />
            <input
              className="searchBarInput"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link to="/additem" className="link button">
            상품 등록하기
          </Link>
          <SortMenu onSortSelection={handleSortSelection} />
        </div>
      </div>
      <div className="allItemSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`all-item-${item.id}`} />
        ))}
      </div>
      <div className="paginationBarSection">
        <PaginationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default AllItemSelection;
