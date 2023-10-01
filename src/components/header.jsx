import { HeaderContainer, HeaderTitle } from "../style/header";
import { useTheme } from "../hooks/use-theme";

import ToggleTheme from "./toggle-theme";

const Header = () => {
  const theme = useTheme();

  return (
    <HeaderContainer theme={theme}>
      <HeaderTitle theme={theme}>Where in the world?</HeaderTitle>
      <ToggleTheme />
    </HeaderContainer>
  );
};

export default Header;
