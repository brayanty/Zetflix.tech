import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Proyects from "./components/Proyects";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import AboutMe from "./components/AboutMe";

function App() {
  // Inicializar el tema desde localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const changeTheme = () => {
    const newTheme = "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    // Aplicar la clase correspondiente al documento
    function applyColorScheme(theme) {
      document.documentElement.classList.remove("light", "dark");

      theme === "dark"
        ? document.documentElement.style.setProperty(
            "--background",
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/denim.png')"
          )
        : document.documentElement.style.setProperty(
            "--background",
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/beige-tiles.png')"
          );
    }

    if (theme === "dark") {
      applyColorScheme("dark");
    } else {
      applyColorScheme("light");
    }

    document.documentElement.classList.add(theme);
    // Guardar el tema en localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Navbar isSelectModeDark={theme} onDarkMode={changeTheme} />
      <Presentation />
      <Proyects />
      {/* <Testimony users={users} /> */}
      <AboutMe />
      <Contacts />
      <Form />
      <Footer />
    </>
  );
}

export default App;
