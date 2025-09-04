import type { JSX } from "react";
import styled from "styled-components";

const StyledNotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function NotFoundPage(): JSX.Element {
  return (
    <StyledNotFoundPage>
      <h1>404 Not Found</h1>
    </StyledNotFoundPage>
  );
}

export default NotFoundPage;
