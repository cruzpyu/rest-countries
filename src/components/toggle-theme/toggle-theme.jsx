import { useCallback, useEffect } from "react";

import useThemeStore from "../../store/theme-store";

import ToggleButton from "./toggle-button";

const ToggleTheme = () => {
  const { theme, setTheme } = useThemeStore();
  const lightTheme = theme === "LIGHT";

  const saveThemeToLocalStorage = (selectedTheme) => {
    localStorage.setItem("theme", selectedTheme);
  };

  const handleToggleTheme = useCallback(() => {
    const newTheme = lightTheme ? "DARK" : "LIGHT";
    setTheme(newTheme);
    saveThemeToLocalStorage(newTheme);
  }, [lightTheme, setTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  return <ToggleButton onClick={handleToggleTheme} lightTheme={lightTheme} />;
};

export default ToggleTheme;
