import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
function Main() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: false, v7_relativeSplatPath: false }}
      >
        <Routes>
          <Route path="/" element={<App></App>}>
            <Route index element={<HomePage></HomePage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
