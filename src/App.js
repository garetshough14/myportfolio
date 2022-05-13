import "./App.css";
import Navbar from "./Components/Navbar";
import { HashRouter } from "react-router-dom";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <div
        className=" container-sm h-100 d-flex flex-column"
        style={{ maxWidth: "800px" }}
      >
        <HashRouter>
          <Navbar />
          <Content />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
