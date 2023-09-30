import { useCallback } from "react";
import useThemeStore from "../store/theme-store";

const ToggleTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const handleToggleTheme = useCallback(() => {
    return theme === "LIGHT" ? setTheme("DARK") : setTheme("LIGHT");
  }, [setTheme, theme]);

  return <button onClick={handleToggleTheme}>MUDAR TEMA</button>;
};

export default ToggleTheme;
