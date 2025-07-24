import ItemsPage from "../pages/ItemsPage";
import "./App.css";
import Nav from "./Nav";
import PageControl from "./PageControl";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <ItemsPage />
      </div>
      <PageControl numberOfPages={10} />
    </>
  );
}

export default App;
