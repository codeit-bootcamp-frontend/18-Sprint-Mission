import "./App.css";
import Nav from "./Nav";

function App({ children }) {
  return (
    <>
      <Nav />
      <div className="content">{children}</div>
    </>
  );
}

export default App;
