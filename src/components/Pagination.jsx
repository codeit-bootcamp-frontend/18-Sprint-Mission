import styled, { css } from "styled-components";
import useDeviceSize from "@/hooks/useDeviceSize";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import Icon from "./Icon";
import globalTheme from "@/styles/theme";
import fontSize from "@/styles/utils/fontSize.utils";
const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 0 ${convertPxToRem(12)};
  padding: ${convertPxToRem(60)} 0;
`;
const PageButton = styled.button`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${convertPxToRem(40)};
  height: ${convertPxToRem(40)};
  border-radius: 50%;
  border: 1px solid ${globalTheme.colors.coolGray200};
  background-color: #fff;
  ${fontSize("txt-lg")};
  ${({ isCurrent }) =>
    isCurrent
      ? css`
          color: #fff;
          background-color: ${globalTheme.colors.primary100};
        `
      : css`
          color: ${globalTheme.colors.coolGray500};
          background-color: #fff;
        `}
`;
/**
 * 페이지네이션 버튼 목록을 출력하는 컴포넌트
 *
 * @param {{
 *   currentPage: number, // 현재 페이지
 *   totalPage: number,   // 전체 페이지 수
 *   viewBtnCount: number, // 한 화면에 보여줄 페이지 버튼 수
 *   handlePageChange: (page: number) => void // 페이지 변경 핸들러
 * }} props
 * @returns {JSX.Element}
 */
const Pagination = ({
  currentPage,
  totalPage,
  viewBtnCount,
  handlePageChange,
}) => {
  const isPrev = currentPage > 1;
  const isNext = currentPage < totalPage;
  // 현재 페이지를 기준으로 보여줄 페이지 버튼의 시작 번호
  let startPage = Math.max(1, currentPage - Math.floor(viewBtnCount / 2));
  // 현재 페이지를 기준으로 보여줄 페이지 버튼의 마지막 번호
  let endPage = Math.min(totalPage, startPage + viewBtnCount - 1);
  // 끝 페이지가 부족해서 보여줄 개수가 모자라면 startPage를 앞으로 당겨서 버튼개수 맞춤
  const viewBtn = endPage - startPage + 1;
  if (viewBtn < viewBtnCount) {
    startPage = Math.max(1, endPage - viewBtnCount + 1);
  }
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return (
    <>
      <PaginationWrapper>
        <PageButton
          disabled={!isPrev}
          onClick={() => isPrev && handlePageChange(currentPage - 1)}
        >
          <Icon
            iconName="chevronLeft"
            size="sm"
            color={isPrev ? "coolGray600" : "coolGray200"}
          />
        </PageButton>

        {pages.map((page) => (
          <PageButton
            key={page}
            isCurrent={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            <span>{page}</span>
          </PageButton>
        ))}

        <PageButton
          disabled={!isNext}
          onClick={() => isNext && handlePageChange(currentPage + 1)}
        >
          <Icon
            iconName="chevronRight"
            size="sm"
            color={isNext ? "coolGray600" : "coolGray200"}
          />
        </PageButton>
      </PaginationWrapper>
    </>
  );
};
export default Pagination;
