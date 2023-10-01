import { BoldText, RegularText } from "../style/text";
import { SocialLink, StyledFooter } from "../style/footer";

import { useTheme } from "../hooks/use-theme";

export const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter theme={theme}>
      <RegularText theme={theme}>Coded by</RegularText>
      <BoldText>
        <SocialLink theme={theme} to="https://www.linkedin.com/in/yullie/">
          Yu
        </SocialLink>
      </BoldText>
    </StyledFooter>
  );
};
