import "./App.css";
import Navbar from "./component/NavBar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import FourK from "./pages/FourK";
import Trending from "./pages/Trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<FourK />} />
          <Route path="/contact" element={<Trending />} />
          <Route path="/service" element={<Browse />} />
          <Route path="/movie-details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
