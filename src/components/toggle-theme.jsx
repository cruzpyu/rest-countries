import { useCallback } from "react";

import useThemeStore from "../store/theme-store";

import { BoldText } from "../style/country-card";

import MoonIcon from "../icons/moon-icon";
import SunIcon from "../icons/sun-icon";

import { GetTheme } from "../utils/get-theme";
import { StyledButton } from "../style/toggle-theme";


const ToggleTheme = () => {
  const { setTheme } = useThemeStore();
  const theme = GetTheme();

  const lightTheme = theme === "LIGHT";

  const handleToggleTheme = useCallback(() => {
    return lightTheme ? setTheme("DARK") : setTheme("LIGHT");
  }, [setTheme, theme]);

  return (
    <StyledButton onClick={handleToggleTheme}>
      {lightTheme ? (
        <>
          <MoonIcon />
          <BoldText theme={theme}>Dark mode</BoldText>
        </>
      ) : (
        <>
          <SunIcon />
          <BoldText theme={theme}>Light Mode</BoldText>
        </>
      )}
    </StyledButton>
  );
};

export default ToggleTheme;
