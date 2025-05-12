import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Examples from "./pages/Examples";
import { Routes, Route, NavLink } from "react-router-dom";
function App() { 
  return (
    <>
    <div className="container">
      <NavLink to="/" >Ana sehife</NavLink>
      <NavLink to="/about">Haqqında</NavLink>
      <NavLink to="/examples">İş nümunələri</NavLink>
      <NavLink to="/contact">Əlaqə məlumatları</NavLink>
    </div>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </>
  );
}

export default App;
