import { BoldText } from "../../style/text";
import { BorderBox, BorderItem } from "./borders-style";

const Borders = ({ theme, item }) => {
  return (
    <>
      <BoldText theme={theme}>Border countries: </BoldText>
      <BorderBox theme={theme}>
        {item.borders.map((border) => (
          <BorderItem theme={theme}>{border}</BorderItem>
        ))}
      </BorderBox>
    </>
  );
};

export default Borders;
