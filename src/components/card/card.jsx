import { useTheme } from "../../hooks/use-theme";

import { getCountryCardData } from "../../utils/get-country-card-data";

import { BoldText, RegularText } from "../../style/text";

import {
  CardContainer,
  CardImage,
  CardInfo,
  CardTitle,
  StyledLink,
} from "./card-style";

const CountryCard = ({ country }) => {
  const theme = useTheme();

  const { name, population, region, capital } = country;

  const data = getCountryCardData(population, region, capital);

  return (
    <StyledLink to={`${name?.common}`}>
      <CardContainer theme={theme}>
        <CardImage alt={`${name?.common} flag`} src={country?.flags?.png} />
        <CardInfo>
          <CardTitle theme={theme}>{name?.common}</CardTitle>
          {data.map((item) => {
            return (
              <RegularText key={item.key} theme={theme}>
                <BoldText theme={theme}>{item.key} </BoldText>
                {item.value}
              </RegularText>
            );
          })}
        </CardInfo>
      </CardContainer>
    </StyledLink>
  );
};

export default CountryCard;
