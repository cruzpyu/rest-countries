import ArrowIcon from "../icons/arrow-icon";
import { useTheme } from "../hooks/use-theme";
import { StyledBackBtn } from "../style/back-button";
import { RegularText } from "../style/text";

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
