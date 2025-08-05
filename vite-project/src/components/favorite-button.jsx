import styled from "styled-components";
import favoriteImg from "../assets/ic-heart.svg";

const StyledFavoriteButton = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  border: 1px solid var(--color-secondary-200);
  border-radius: 40px;
  background: none;
  padding: 4px 12px;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: var(--color-cool-gray-500);
  }

  @media (max-width: 1199px) {
    div {
      width: 24px;
      height: 24px;
    }
  }
`;

function FavoriteButton({ count, isFavorite }) {
  return (
    <StyledFavoriteButton>
      <img src={isFavorite ? "" : favoriteImg} alt="좋아요" />
      <span>{count}</span>
    </StyledFavoriteButton>
  );
}

export default FavoriteButton;
