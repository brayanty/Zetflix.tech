import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Proyects from './components/Proyects'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import Form from './components/Form'
import AboutMe from './components/AboutMe'

function useDarkLightMode (theme) {
  useEffect(() => {
    // Aplicar la clase correspondiente al documento
    function applyBackground (theme) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)

      theme === 'dark'
        ? document.documentElement.style.setProperty(
          '--background',
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/denim.png')"
        )
        : document.documentElement.style.setProperty(
          '--background',
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/beige-tiles.png')"
        )
    }

    if (theme === 'dark') {
      applyBackground('dark')
    } else {
      applyBackground('light')
    }

    // Guardar el tema en localStorage
    window.localStorage.setItem('theme', theme)
  }, [theme])
}

function App () {
  // Inicializar el tema desde localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useDarkLightMode(theme)

  function handlerClickDark () {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <>
      <Navbar isSelectModeDark={theme} themeSelect={handlerClickDark} />
      <Presentation />
      <Proyects />
      <AboutMe />
      <Contacts />
      <Form />
      <Footer />
    </>
  )
}

export default App
