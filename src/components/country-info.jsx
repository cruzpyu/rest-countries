import { useTheme } from "../hooks/use-theme";
import {
  CountryFlag,
  CountryName,
  InfoContainer,
  OneSide,
  TwoSides,
} from "../style/country-page";
import { BoldText, RegularText } from "../style/text";

import { countryPageData } from "../utils/country-page-data";

import CountryBorders from "./country-borders";

const CountryInfo = ({ item, languages, currencies }) => {
  const theme = useTheme();
  const data = countryPageData(item, languages, currencies);

  return (
    <InfoContainer theme={theme}>
      <OneSide>
        <CountryFlag alt={`${item.name.common} flag`} src={item.flags.svg} />
      </OneSide>
      <OneSide>
        <CountryName theme={theme}>{item.name.official}</CountryName>
        <TwoSides>
          <OneSide>
            {data?.RIGHT.map((item) => {
              return (
                <RegularText theme={theme}>
                  <BoldText>{item.key}</BoldText>
                  {item.value}
                </RegularText>
              );
            })}
          </OneSide>
          <OneSide>
            {data?.LEFT.map((item) => {
              return (
                <RegularText theme={theme}>
                  <BoldText>{item.key}</BoldText>
                  {item.value}
                </RegularText>
              );
            })}
          </OneSide>
        </TwoSides>
        {item.borders && <CountryBorders theme={theme} item={item} />}
      </OneSide>
    </InfoContainer>
  );
};

export default CountryInfo;
