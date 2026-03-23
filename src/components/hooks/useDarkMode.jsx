import { useState, useEffect } from "react";

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

  const onDarkmode = () => {
    setTheme((pre) => (pre == "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    function applyBackground(theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);

      theme === "light"
        ? document.documentElement.classList.add("liane-pattern")
        : document.documentElement.classList.remove("liane-pattern");

      theme === "dark"
        ? document.documentElement.classList.add("cyber-pattern")
        : document.documentElement.classList.remove("cyber-pattern");
    }

    if (theme === "dark") {
      applyBackground("dark");
    } else {
      applyBackground("light");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, onDarkmode];
}
