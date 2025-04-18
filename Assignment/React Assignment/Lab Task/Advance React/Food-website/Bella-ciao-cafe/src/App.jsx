import React from "react";
import "./App.css";
import "./Responsive.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Pages/Menu";
import Services from "./Components/Pages/Services";
// import Restaurent from "./Components/Pages/Restaurent";
import ContactUs from "./Components/Pages/ContactUs";
// import Food from "./Components/Pages/Food";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/restaurent" element={<Restaurent />} /> */}
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
