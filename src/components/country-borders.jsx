import { BorderBox, BorderItem } from "../style/country-page";
import { BoldText } from "../style/text";

const CountryBorders = ({ theme, item }) => {
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

export default CountryBorders;
