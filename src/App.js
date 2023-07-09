import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Error from "./components/error/error";
import About from "./components/about/about";
import Housing from "./components/housing/housing";
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