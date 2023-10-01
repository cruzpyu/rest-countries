import { useTheme } from "../../hooks/use-theme";

import MoonIcon from "../../icons/moon-icon";
import SunIcon from "../../icons/sun-icon";

import { RegularText } from "../../style/text";

import { StyledButton } from "./toggle-button-style";

const ToggleButton = ({ onClick, lightTheme }) => {
  const theme = useTheme();
  return (
    <StyledButton onClick={onClick}>
      {lightTheme ? (
        <>
          <MoonIcon />
          <RegularText theme={theme}>Dark mode</RegularText>
        </>
      ) : (
        <>
          <SunIcon />
          <RegularText theme={theme}>Light Mode</RegularText>
        </>
      )}
    </StyledButton>
  );
};
export default ToggleButton;
