import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { convertPxToRem, convertPxToVw } from "@/styles/utils/convert.utils";
import logo from "@/assets/logo/logo.svg";
import fontSize from "@/styles/utils/fontSize.utils";
import globalTheme from "@/styles/theme";
const Auth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${convertPxToRem(60)} 0;
  & ${Container} {
    max-width: 640px;
  }
  & .logo {
    text-align: center;
    margin-bottom: ${convertPxToRem(40)};
    & img {
      width: ${convertPxToRem(396)};
    }
  }
  @media all and (max-width: 744px) {
    & .logo {
      & img {
        width: min(${convertPxToRem(396)}, ${convertPxToVw(396, 744)});
      }
    }
  }
  @media all and (max-width: 375px) {
    padding: ${convertPxToRem(24)} 0;
    & .logo {
      margin-bottom: ${convertPxToRem(24)};
      & img {
        width: ${convertPxToRem(198)};
      }
    }
  }
`;
export const AuthSwitch = styled.div`
  ${fontSize("txt-md")}
  font-weight: 500;
  text-align: center;
  & a {
    color: ${globalTheme.colors.primary100};
    text-decoration: underline;
  }
`;
const AuthWrapper = ({ children }) => {
  return (
    <Auth className="min-vh">
      <Container>
        <h1>
          <Link to="/" className="logo">
            <img src={logo} alt="판다마켓로고" />
          </Link>
        </h1>
        {children}
      </Container>
    </Auth>
  );
};
export default AuthWrapper;
