import stocks from "./data"
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Stock from "./pages/Stock";
import './App.css'; 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/stocks" element={<Dashboard stock={stocks} />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks/:symbol" element={<Stock stock={stocks} />} />
      </Routes>
    </div>
  );
}

export default App;