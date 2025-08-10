import { useState } from 'react';
import { ReactComponent as SortIcon } from '../assets/img/ic_sort.svg';
import { ReactComponent as DownArrow } from '../assets/img/ic_arrow_down.svg';
import './SortMenu.css';

function SortMenu({ onSortSelection }) {
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [activeSort, setActiveSort] = useState('최신순');

  const sortDropdown = () => {
    setIsSortVisible(!isSortVisible); //true면 false로, false면 true로
  };

  const handleSortClick = (option, label) => {
    onSortSelection(option);
    setActiveSort(label);
    setIsSortVisible(false);
  };

  return (
    <div className="sortWrapper">
      <button className="sortDropdownButton" onClick={sortDropdown}>
        <SortIcon className="mobileSortButton" />
        <span className="labelButton">{activeSort}</span>
        <DownArrow className="downArrowButton" />
      </button>

      {isSortVisible && (
        <div className="sortDropdownMenu">
          <div
            className="sortItem"
            onClick={() => {
              handleSortClick('recent', '최신순');
            }}
          >
            최신순
          </div>
          <div
            className="sortItem"
            onClick={() => {
              handleSortClick('favorite', '좋아요순');
            }}
          >
            좋아요순
          </div>
        </div>
      )}
    </div>
  );
}

export default SortMenu;
