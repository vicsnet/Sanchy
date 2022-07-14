import "./App.css";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/re_components/Hero";
import NewHero from "./components/re_components/NewHero";
import Approach from "./components/re_components/Approach";
import Org from "./components/re_components/Org";
import Nav from "./components/re_components/Nav";
import Footer from "./components/re_components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
