import "./App.css";
import React from "react";
import About from "./components/re_components/About";
import Approach from "./components/re_components/Approach";
import Core from "./components/re_components/Core";
import Demo from "./components/re_components/Demo";
import Footer from "./components/re_components/Footer";
import Hero from "./components/re_components/Hero";
import Navbar from "./components/re_components/Navbar";
import Org from "./components/re_components/Org";
import What from "./components/re_components/What";
import Nav from "./components/re_components/Nav";
import Text from "./components/re_components/Text";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* donee  */}
      {/* <Text /> */}
      <About /> 
      {/* done */}
      <Core />
      {/* almost */}
      <What /> 
      {/* done */}
      <Approach /> 
      <Org />
      <Footer />
    </div>
  );
}

export default App;
