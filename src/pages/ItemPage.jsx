import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { getProductItems } from "@/api/api";
import useDeviceSize from "@/hooks/useDeviceSize";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import Container from "@/components/Container";
import ProductItem from "@/components/Product/ProductItem";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { InputWrapper, SearchInput } from "@/components/Form/Input";
import Icon from "@/components/Icon";
import SkeletonUI from "@/components/SkeletonUI";
`width: calc((($isMaxWidth - $isTotalGutter) / $isColumn * $isGridLoopNum) + $isGutter * ($isGridLoopNum - 1));

`;
const ItemWrapper = styled.main`
  padding: ${convertPxToRem(24)} 0;
`;
const ItemContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  gap: ${convertPxToRem(40)} 0;
`;
const ProductsWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: ${convertPxToRem(40)} ${convertPxToRem(24)};
  margin-top: ${convertPxToRem(24)};
  &.best li {
    width: ${({ width }) =>
      `calc(((100% - ${convertPxToRem(24 * (width - 1))} )/ ${width}));`};
  }
  &.all li {
    width: ${({ width }) => {
      const w = width / 2;
      return `calc(((100% - ${convertPxToRem(24 * (w - 1))} )/ ${w}));`;
    }};
  }
`;
const Toolbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  justify-content: end;
  gap: 0 ${convertPxToRem(12)};
  & h2 {
    flex: 1;
  }
  & input {
    min-width: 240px;
  }
  & .input-icon {
    left: ${convertPxToRem(16)};
  }
  & ${Button} {
    width: ${convertPxToRem(130)};
  }
`;

const ItemPage = () => {
  // 반응형 체크
  const { isSmall, isRegular, isMedium } = useDeviceSize();
  const allProductCount = useMemo(() => {
    return isSmall ? 4 : isRegular ? 6 : isMedium ? 8 : 10;
  }, [isSmall, isMedium, isRegular]);

  const bestProductCount = useMemo(() => {
    return isSmall ? 1 : isRegular ? 2 : 4;
  }, [isSmall, isRegular]);

  // 전체 상품 리스트
  const [allProducts, setAllProducts] = useState([]);
  // 베스트 상품 리스트
  const [bestProducts, setBestProducts] = useState([]);
  // 정렬 - 기본 최신순
  const [orderBy, setOrderBy] = useState("recent");
  // 페이지 불러오기
  const [page, setPage] = useState(1);
  // 검색 키워드
  const [keyword, setKeyword] = useState("");
  // 데이터 로딩 상태
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  // 상품 데이터 핸들러
  const handleProductsLoad = async () => {
    try {
      setIsLoading(true);
      const bastProduct = await getProductItems({
        page,
        pageSize: bestProductCount,
        orderBy: "favorite",
        keyword,
      });
      const allProduct = await getProductItems({
        page,
        pageSize: allProductCount,
        orderBy,
        keyword,
      });
      setBestProducts(bastProduct.list);
      setAllProducts(allProduct.list);
    } catch (error) {
      setLoadingError("상품을 불러오는데 실패했습니다");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleProductsLoad();
  }, [page, orderBy, keyword, allProductCount, bestProductCount]);

  // 샹품명 검색
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target["search"].value);
  };
  // 정렬변경
  const handleOrderChange = (value) => {
    setOrderBy(value);
  };

  return (
    <ItemWrapper>
      <Helmet>
        <title>판다마켓 - 중고마켓</title>
      </Helmet>
      <ItemContainer>
        <section>
          <h2 className="txt-xl fc-gray900 font-weight-700">베스트 상품</h2>
          <ProductsWrapper className="best" width={bestProductCount}>
            {isLoading ? (
              <SkeletonUI count={bestProductCount} />
            ) : (
              <ProductItem products={bestProducts} />
            )}
          </ProductsWrapper>
          {loadingError && <span>{loadingError}</span>}
        </section>
        <section>
          <Toolbar>
            <h2 className="txt-xl fc-gray900 font-weight-700">전체 상품</h2>
            <InputWrapper as="form" onSubmit={handleSearchSubmit}>
              <Icon
                iconName="search"
                color="gray400"
                className="input-icon"
              ></Icon>
              <SearchInput
                name="search"
                placeholder="검색할 상품을 입력해주세요"
              ></SearchInput>
            </InputWrapper>
            <Button as={Link} to="/additem" size="xs">
              상품 등록하기
            </Button>
            <Select
              order={orderBy}
              onChange={handleOrderChange}
              disabled={isLoading}
            ></Select>
          </Toolbar>
          <ProductsWrapper className="all" width={allProductCount}>
            {isLoading ? (
              <SkeletonUI count={allProductCount} />
            ) : (
              <ProductItem products={allProducts} />
            )}
          </ProductsWrapper>
          {loadingError && <span>{loadingError}</span>}
        </section>
      </ItemContainer>
    </ItemWrapper>
  );
};
export default ItemPage;
