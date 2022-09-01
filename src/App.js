import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pages from './pages/Pages';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1 style={{"font-family": "Qwitcher Grypen", "font-size":"5rem", "text-align":"center"}}>Eddie's Recipe App</h1>
      <Pages />
    </div>
    </BrowserRouter>
  );
}

export default App;
