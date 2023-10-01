import { useCallback } from "react";

import useThemeStore from "../../store/theme-store";

import { useTheme } from "../../hooks/use-theme";

import { RegularText } from "../../style/text";

import MoonIcon from "../../icons/moon-icon";
import SunIcon from "../../icons/sun-icon";

import { StyledButton } from "./toggle-theme-style";

const ToggleTheme = () => {
  const { theme, setTheme } = useThemeStore();
  const colorsTheme = useTheme();

  const lightTheme = theme === "LIGHT";

  const handleToggleTheme = useCallback(() => {
    return lightTheme ? setTheme("DARK") : setTheme("LIGHT");
  }, [lightTheme, setTheme]);

  return (
    <StyledButton onClick={handleToggleTheme}>
      {lightTheme ? (
        <>
          <MoonIcon />
          <RegularText theme={colorsTheme}>Dark mode</RegularText>
        </>
      ) : (
        <>
          <SunIcon />
          <RegularText theme={colorsTheme}>Light Mode</RegularText>
        </>
      )}
    </StyledButton>
  );
};

export default ToggleTheme;
