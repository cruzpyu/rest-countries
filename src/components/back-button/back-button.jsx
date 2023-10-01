import { useTheme } from "../../hooks/use-theme";

import ArrowIcon from "../../icons/arrow-icon";

import { RegularText } from "../../style/text";

import { StyledBackBtn } from "./back-button-style";

const BackButton = () => {
  const theme = useTheme();
  return (
    <StyledBackBtn theme={theme} to="/">
      <ArrowIcon />
      <RegularText>Back</RegularText>
    </StyledBackBtn>
  );
};
export default BackButton;
