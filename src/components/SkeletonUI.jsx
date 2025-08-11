import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: 282px; /* 상품 카드 예상 높이 */
  border-radius: 12px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;
  margin-bottom: 12px;
`;

/**
 * Skeleton UI 컴포넌트
 *
 * @param {{ count: number }} param0 - 렌더링할 Skeleton 박스의 개수를 담은 객체
 * @returns {JSX.Element[]} Skeleton 박스 리스트를 반환
 */
const SkeletonUI = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonBox key={i} />
      ))}
    </>
  );
};

export default SkeletonUI;
