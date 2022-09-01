import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DietaryOption from "./pages/DietaryOption";
import Pages from "./pages/Pages";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link className="link"to={"/"}>
          <h1 className="logo">Eddie's Recipe App</h1>
        </Link>
        <DietaryOption />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
