import { Outlet } from "react-router-dom";
import Header from "./Header";
import ResetStyles from "../styles/globalResetStyles";
import ComponentsStyles from "../styles/globalComponentsStyles";

const App = () => {
  return (
    <>
      <ResetStyles></ResetStyles>
      <ComponentsStyles></ComponentsStyles>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};
export default App;
