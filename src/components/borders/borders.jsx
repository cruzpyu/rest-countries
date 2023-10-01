import { BoldText } from "../../style/text";
import { BorderBox, BorderContainer, BorderItem } from "./borders-style";

const Borders = ({ theme, item }) => {
  return (
    <BorderContainer theme={theme}>
      <BoldText theme={theme}>Border countries: </BoldText>
      <BorderBox>
        {item.borders.map((border) => (
          <BorderItem theme={theme}>{border}</BorderItem>
        ))}
      </BorderBox>
    </BorderContainer>
  );
};

export default Borders;
