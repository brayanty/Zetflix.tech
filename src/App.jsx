import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Proyects from './components/Proyects'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import Form from './components/Form'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import { useDarkLightMode } from './components/hooks/useDarkMode'
import ScrollReveal from 'scrollreveal'


function App () {
  const [theme , onDarkmode] = useDarkLightMode()
  useEffect(()=>{
     const sr = (window.sr = ScrollReveal());
    sr.reveal(".presentation, .proyects, .about, .skills, .contacts,article,button");

    sr.reveal(".route", {
      duration: 750,
      distance: "40px",
      easing: "cubic-bezier(0.4, 6, 0, 2)",
      interval: 64,
      origin: "bottom",
      viewFactor: 0.32
    });
  },[])

  return (
    <>
      <Navbar isSelectModeDark={theme} themeSelect={onDarkmode} />
      <Presentation />
      <Proyects />
      <AboutMe />
      <Skills />
      <Contacts />
      <Form />
      <Footer />
    </>
  )
}

export default App
