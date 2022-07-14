import React from 'react'

import About_us from '../re_components/About_us'
import Mission from '../re_components/Mission'
import Why from '../re_components/Why'
import Team from '../re_components/Team'
import AboutHero from '../re_components/AboutHero'

const About = () => {
  return (
      <div> 
          <AboutHero />
          <About_us />
          <Mission />
          <Why />
          <Team />
    </div>
  )
}

export default About