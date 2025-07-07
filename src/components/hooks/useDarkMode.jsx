import { useState,useEffect  } from "react";

export function useDarkLightMode() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const onDarkmode = () =>{
    setTheme(pre => pre == "dark" ? "light" : "dark")
  } 

  useEffect(() => {
    function applyBackground(theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);

      theme === "dark"
        ? document.documentElement.style.setProperty(
            "--background",
            "rgba(0, 0, 0, 0.9)"
          )
        : document.documentElement.style.setProperty(
            "--background",
            "rgba(110, 99, 99, 0.3)"
          );
    }

    if (theme === "dark") {
      applyBackground("dark");
    } else {
      applyBackground("light");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme,onDarkmode]
}
