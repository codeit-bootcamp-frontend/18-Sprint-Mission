import styled from "styled-components";
import Midia from "@/styles/utils/media";
import CardItem from "./CardItem";

const CardContainer = styled.ul`
  width: 100%;
  display: grid;
  gap: 40px 24px;
  ${({ type }) =>
    type === "all" &&
    `
  grid-template-columns: repeat(5, 1fr);
  ${Midia("md")} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 16px;
  }
  ${Midia("sm")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 8px;
  }
  `}
  ${({ type }) =>
    type === "best" &&
    `
  grid-template-columns: repeat(4, 1fr);
  ${Midia("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 10px;
  }
  ${Midia("sm")} {
    grid-template-columns: repeat(1, 1fr);
  }
  `}
`;

const CardList = ({ items, type = "all" }) => {
  return (
    <CardContainer type={type}>
      {items.map(item => (
        <CardItem key={item.id} {...item} />
      ))}
    </CardContainer>
  );
};

export default CardList;
