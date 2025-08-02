import styled from "styled-components";
import useDeviceSize from "../hooks/useDeviceSize";
import { Link } from "react-router-dom";
const HeaderStyle = styled.header``;
const Header = () => {
  // const { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge } =
  //   useDeviceSize();
  //   console.log(isLaptop, isBigTablete, isTablete, isMobile);
  return (
    <HeaderStyle>
      <Link to="/">
        <h1 className="txt-4xl">h1</h1>
        <h2 className="txt-lg fc-primary100">h2</h2>
      </Link>
      <nav></nav>
      <Link></Link>
    </HeaderStyle>
  );
};

export default Header;
