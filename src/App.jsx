import React from 'react'
import Navbar from "./component/Navbar"
import Home from "./Section/Home"
import About from "./Section/About"
import Skills from "./Section/Skills"
import Projects from "./Section/Projects.jsx"
import Experiences from "./Section/Experiences"
import Footer from "./Section/Footer"
import ParticleBackground from './component/ParticleBackground'
import CustonCursur from './component/CustonCursur'
import Testimonials from './Section/Testimonials'
import Achievements from './Section/Achievements'

const App = () => {
  return (
  <div className="relative gradient text-blue-500">
   <CustonCursur/>
   <ParticleBackground/>   
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experiences/>
    <Testimonials/>
    <Achievements/>
    <Footer/>

</div>
    
  )
}

export default App
