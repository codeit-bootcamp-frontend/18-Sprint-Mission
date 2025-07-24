import "./App.css";
import Nav from "./Nav";
import PageControl from "./PageControl";

function App({ children }) {
  return (
    <>
      <Nav />
      <div className="content">{children}</div>
      <PageControl numberOfPages={10} />
    </>
  );
}

export default App;
