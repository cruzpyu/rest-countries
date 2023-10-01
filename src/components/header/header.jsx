import { useTheme } from "../../hooks/use-theme";

import ToggleTheme from "../toggle-theme/toggle-theme";

import { HeaderContainer, HeaderTitle } from "./header-style";

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
