import React from "react";
import About from "./components/re_components/About";
import Approach from "./components/re_components/Approach";
import Core from "./components/re_components/Core";
import Footer from "./components/re_components/Footer";
import Hero from "./components/re_components/Hero";
import Navbar from "./components/re_components/Navbar";
import Org from "./components/re_components/Org";
import What from "./components/re_components/What";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <About />
      <Core />
      <What/>
      <Approach />
      <Org/>
      <Footer/>

    </div>
  );
}

export default App;
