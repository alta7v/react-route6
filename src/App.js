import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        <br />
        <Link to="/Page1/detailA">Page1DetailA</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page1/detailA" element={<Page1DetailA />} />
        <Route path="/Page1/detailB" element={<Page1DetailB />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
