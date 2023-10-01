import { useTheme } from "../../hooks/use-theme";
import {
  CountryFlag,
  CountryName,
  InfoContainer,
  OneSide,
  TwoSides,
} from "./single-country-style";
import { BoldText, RegularText } from "../../style/text";

import { getCountryPageData } from "../../utils/get-country-page-data";

import Borders from "../borders/borders";

const SingleCountryInfo = ({ item, languages, currencies }) => {
  const theme = useTheme();
  const data = getCountryPageData(item, languages, currencies);

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
        {item.borders && <Borders theme={theme} item={item} />}
      </OneSide>
    </InfoContainer>
  );
};

export default SingleCountryInfo;
