import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DietaryOption from "./pages/DietaryOption";
import Pages from "./pages/Pages";
import { Link } from "react-router-dom";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link className="link" to={"/"}>
          <h1 className="logo">Eddie's Recipe App</h1>
        </Link>
        <Options />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
