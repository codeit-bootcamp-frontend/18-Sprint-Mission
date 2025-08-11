import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./app/Main";
createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_startTransition: false, v7_relativeSplatPath: false }}
  >
    <Main></Main>
  </BrowserRouter>
);
