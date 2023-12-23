import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [randomColor, setRandomColor] = useState(generateRandomColor());

  function generateRandomColor() {
    const randomInt = () => Math.floor(Math.random() * 256);
    return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
  }

  useEffect(() => {
    if (window.matchMedia(`(prefers-color-scheme)`).matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty(
        "--background-color",
        randomColor
      );
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--background-color", "");
    }
  }, [theme, randomColor]);

  const handleThemeSwitch = () => {
    const newRandomColor = generateRandomColor();
    setRandomColor(newRandomColor);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    randomColor,
    handleThemeSwitch,
  };

  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
};
