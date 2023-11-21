import React from "react";
import "./scss/dist/main.css";
import Home from "./pages/home";
import Error from "./pages/error";
import About from "./pages/about";
import Housing from "./pages/housing";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Kasa" element={<Home />} />
          <Route path="Kasa/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="Kasa/about" element={<About />} />
          <Route path="Kasa/housing/:id" element={<Housing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;