import '../styles/components/dropDownList.css';
import { memo, useEffect, useState } from 'react';

/**
 * 드롭다운 리스트 메뉴
 */
const orderList = [
  { name: '최신순', value: 'recent' },
  { name: '좋아요순', value: 'favorite' },
];

function DropdownList({ changeOrder }) {
  const [order, setOrder] = useState(orderList[0].name);

  /**
   * 드롭다운 리스트의 열림/닫힘 상태
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * 드롭다운 리스트 열림/닫힘 이벤트
   */
  const onClickOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  /**
   * 드롭다운 리스트의 정렬 조건을 변경한다.
   * @param {string} value
   */
  const onClickChangeOrder = (menu) => {
    setOrder(menu.name);
    changeOrder(menu.value);
    onClickOpen();
  };

  useEffect(() => {
    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <>
      <div className="dropdown-container">
        <button type="button" className="dropdown-btn" onClick={onClickOpen}>
          {orderList && order}
        </button>
        {isOpen && (
          <div className="dropdown-box">
            {orderList &&
              orderList.map((menu) => {
                return (
                  <li
                    key={menu.name}
                    className="dropdown-li"
                    onClick={() => onClickChangeOrder(menu)}
                  >
                    {menu.name}
                  </li>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}

export default memo(DropdownList);
