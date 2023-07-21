import React from "react";
import "./App.css";
import "./error.css";
import "./home.css";
import "./about.css";

import Home from "./pages/home/home";
import Error from "./pages/error/error";
import About from "./pages/about/about";
import Housing from "./pages/housing/housing";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing" element={<Housing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;