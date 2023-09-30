import { HeaderTitle, StyledHeader } from "../style/header";
import { GetTheme } from "../utils/get-theme";

import ToggleTheme from "./toggle-theme";

const Header = () => {
  const theme = GetTheme();

  return (
    <StyledHeader theme={theme}>
      <HeaderTitle theme={theme}>Where in the world?</HeaderTitle>
      <ToggleTheme />
    </StyledHeader>
  );
};

export default Header;
