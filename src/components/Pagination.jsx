import { useEffect, useState } from 'react';
import '../styles/components/pagination.css';

export default function Pagination({
  currentNum,
  setPageNum,
  totalCount,
  contentNum,
}) {
  /**
   * 페이지 번호를 표시할 배열
   */
  const [pageArr, setPageArr] = useState([]);

  /**
   * 페이지의 총 개수
   */
  const totalPageCount = Math.ceil(totalCount / contentNum);

  /**
   * 보여질 페이지 그룹
   */
  const pageGroup = Math.ceil(currentNum / 5);

  /**
   * 페이지 그룹별 첫 번째 번호
   */
  const pageFirstNum = (pageGroup - 1) * 5 + 1;

  /**
   * 페이지 그룹별 마지막 번호
   */
  const pageLastNum =
    pageGroup * 5 > totalPageCount ? totalPageCount : pageGroup * 5;

  useEffect(() => {
    let pages = [];

    for (let i = pageFirstNum; i <= pageLastNum; i++) {
      pages.push(i);
    }

    setPageArr(pages);
  }, [pageGroup, contentNum]);

  /**
   * 화살표 모양으로 다음 페이지로 이동할 때 이벤트
   * @param {event} e
   */
  const onClickMoveNext = (e) => {
    e.stopPropagation();
    setPageNum(currentNum + 1);
  };

  /**
   * 화살표 모양으로 이전 페이지로 이동할 때 이벤트
   * @param {event} e
   */
  const onClickMovePrev = (e) => {
    e.stopPropagation();
    setPageNum(currentNum - 1);
  };

  return (
    <>
      <div className="pgn-container">
        <ul
          className="pgn-ul"
          onClick={(e) => {
            if (e.target.value) setPageNum(e.target.value);
          }}
        >
          {currentNum !== 1 ? (
            <li className="pgn-prev-btn" onClick={onClickMovePrev}>
              &lt;
            </li>
          ) : (
            <li
              className="pgn-prev-btn pgn-disabled"
              onClick={(e) => e.stopPropagation()}
            >
              &lt;
            </li>
          )}
          {pageArr.map((pageNum) => {
            return (
              <li
                style={
                  pageNum === currentNum
                    ? { backgroundColor: '#2f80ed', color: 'white' }
                    : {}
                }
                key={pageNum}
                value={pageNum}
              >
                {pageNum}
              </li>
            );
          })}
          {totalPageCount === currentNum ? (
            <li
              className="pgn-next-btn pgn-disabled"
              onClick={(e) => e.stopPropagation()}
            >
              &gt;
            </li>
          ) : (
            <li className="pgn-next-btn" onClick={onClickMoveNext}>
              &gt;
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
