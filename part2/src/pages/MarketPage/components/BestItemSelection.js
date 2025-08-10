import { useEffect, useState } from 'react';
import { getProducts } from '../../../api';
import ItemCard from './ItemCard';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } //Mobile
  else if (width < 1280) {
    return 2;
  } //Tablet
  else {
    return 4;
  } //Desktop
};

function BestItemSelection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const sortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    sortedData({ orderBy: 'favorite', pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pageSize]); //디펜던시 바뀔 때 BestItemSelection 함수 실행

  return (
    <div className="bestContainer">
      <h1 className="bestTitle">베스트 상품</h1>
      <div className="bestItemSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSelection;
