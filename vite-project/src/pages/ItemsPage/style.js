import { Link } from "react-router-dom";
import styled from "styled-components";
import typography from "@/styles/utils/typography";
import media from "@/styles/utils/media";
import Input from "@/components/Input";

export const SectionWrapper = styled.section`
  margin: 40px 0;
  &:first-child {
    margin-top: 24px;
  }
  ${media("sm")} {
    margin: 24px 0;
    &:first-child {
      margin-top: 17px;
    }
  }
`;

export const SectionHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  ${media("sm")} {
    .section-all-items & {
      display: block;
    }
  }
`;

export const SectionTitle = styled.h2`
  ${typography["text-xl-bold"]};
  color: var(--color-gray-900);
`;

export const ProductControlBar = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: flex-end;
  gap: 0 12px;
  ${media("sm")} {
    .section-all-items & {
      --product-control-bar-spacing: 13px;
      margin-top: var(--product-control-bar-spacing);
    }
  }
`;

export const SearchInput = styled(Input)`
  max-width: 325px;
  ${media("sm")} {
    .section-all-items & {
      max-width: none;
    }
  }
`;

export const AddItemButton = styled(Link)`
  ${media("sm")} {
    .section-all-items & {
      position: absolute;
      bottom: calc(50% - (var(--product-control-bar-spacing) / -2));
      right: 0;
    }
  }
`;
