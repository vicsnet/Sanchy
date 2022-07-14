import React from 'react'
import Nav from '../re_components/Nav';
import Hero from '../re_components/Hero';
import About from '../re_components/About';
import Core from '../re_components/Core';
import What from '../re_components/What';
import Approach from '../re_components/Approach';
import Org from '../re_components/Org';
import Footer from '../re_components/Footer';
import NewHero from '../re_components/NewHero';

const Home = () => {
  return (
    <div>
      <NewHero />
      <About />
      <Core />
      <What />
      <Approach />
      <Org />
    </div>
  );
}

export default Home