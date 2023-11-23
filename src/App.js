import React from "react";
import "./scss/dist/main.css";
import Home from "./pages/home";
import Error from "./pages/error";
import About from "./pages/about";
import Housing from "./pages/housing";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/kasa">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
