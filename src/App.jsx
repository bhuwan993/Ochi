// import React from 'react';
import Projects from './Components/Project'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';

function App(){
  const locomotiveScroll = new LocomotiveScroll()
    
  return (
    
      <div className="main overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee/>
      <About />
      <Eyes />
      <Projects />
    
      </div>
    )
}
export default App