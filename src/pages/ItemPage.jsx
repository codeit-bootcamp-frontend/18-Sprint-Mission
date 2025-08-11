import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { getProductItems } from "@/api/api";
import useDeviceSize from "@/hooks/useDeviceSize";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import Container from "@/components/Container";
import ProductItem from "@/components/Product/ProductItem";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import { InputWrapper, SearchInput } from "@/components/Form/Input";
import Icon from "@/components/Icon";
import SkeletonUI from "@/components/SkeletonUI";
import Pagination from "@/components/Pagination";
import EmptyProduct from "@/components/Product/EmptyProduct";

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
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  gap: ${convertPxToRem(8)} ${convertPxToRem(14)};
  & h2 {
    flex: 1;
    white-space: nowrap;
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
  @media all and (max-width: 680px) {
    & h2 {
      order: 1;
    }
    & ${Button} {
      order: 2;
    }
    & ${InputWrapper} {
      width: calc(100% - ${convertPxToRem(14 + 130)});
      order: 3;
    }
    & .dropdown {
      order: 4;
    }
  }
  @media all and (max-width: 480px) {
    & ${InputWrapper} {
      width: calc(100% - ${convertPxToRem(14 + 44)});
      order: 3;
    }
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
  const [allProducts, setAllProducts] = useState({ list: [], totalCount: 0 });
  // 베스트 상품 리스트
  const [bestProducts, setBestProducts] = useState({ list: [], totalCount: 0 });
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
      setBestProducts(bastProduct);
      setAllProducts(allProduct);
    } catch (error) {
      setLoadingError("상품을 불러오는데 실패했습니다");
    } finally {
      setIsLoading(false);
    }
  };
  const hasNoProduct = allProducts.list.length === 0;
  // 샹품명 검색
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target["search"].value);
    setPage(1);
  };
  // 정렬변경
  const handleOrderChange = (value) => {
    setOrderBy(value);
    setPage(1);
  };
  // 페이지네이션
  const handlePageChange = (page) => {
    setPage(page);
  };
  // 반응형 페이징 버튼 카운트
  const viewBtnCount = useMemo(() => {
    return isSmall ? 3 : isRegular ? 5 : isMedium ? 7 : 10;
  }, [isSmall, isRegular, isMedium]);

  useEffect(() => {
    handleProductsLoad();
  }, [page, orderBy, keyword, allProductCount, bestProductCount]);

  // 반응형 전환 시 없는 페이지 대응
  useEffect(() => {
    const totalPage = Math.max(
      1,
      Math.ceil(allProducts.totalCount / allProductCount)
    );
    if (page > totalPage) {
      setPage(totalPage);
    } else if (page < 1) {
      setPage(1);
    }
  }, [allProductCount, allProducts.totalCount]);

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
            ) : hasNoProduct ? (
              <EmptyProduct>검색 결과가 없습니다 !</EmptyProduct>
            ) : (
              <ProductItem products={bestProducts.list} />
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
            <Dropdown
              order={orderBy}
              onChange={handleOrderChange}
              disabled={isLoading}
              className="dropdown"
            ></Dropdown>
          </Toolbar>
          <ProductsWrapper className="all" width={allProductCount}>
            {isLoading ? (
              <SkeletonUI count={bestProductCount} />
            ) : hasNoProduct ? (
              <EmptyProduct>검색 결과가 없습니다 !</EmptyProduct>
            ) : (
              <ProductItem products={allProducts.list} />
            )}
          </ProductsWrapper>
          {loadingError && <span>{loadingError}</span>}
        </section>
        {!hasNoProduct && (
          <Pagination
            currentPage={page}
            totalPage={Math.ceil(allProducts.totalCount / allProductCount)}
            viewBtnCount={viewBtnCount}
            handlePageChange={handlePageChange}
          />
        )}
      </ItemContainer>
    </ItemWrapper>
  );
};
export default ItemPage;
