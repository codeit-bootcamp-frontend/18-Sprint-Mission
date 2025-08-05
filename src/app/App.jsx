import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import ResetStyles from "../styles/globalResetStyles";
import ComponentsStyles from "../styles/globalComponentsStyles";
import globalTheme from "../styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={{ globalTheme }}>
        <ResetStyles></ResetStyles>
        <ComponentsStyles></ComponentsStyles>
        <Outlet></Outlet>
      </ThemeProvider>
    </>
  );
};
export default App;
