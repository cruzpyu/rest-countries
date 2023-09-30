import {
  BoldText,
  CardContainer,
  CardImage,
  CardInfo,
  CardTitle,
  RegularText,
  StyledLink,
} from "../style/country-card";

import { GetTheme } from "../utils/get-theme";

const CountryCard = ({ country }) => {
  const { name, population, region, capital } = country;

  const theme = GetTheme();

  return (
    <StyledLink to={`${name?.common}`}>
      <CardContainer theme={theme}>
        <CardImage alt={`${name?.common} flag`} src={country?.flags?.png} />
        <CardInfo>
          <CardTitle theme={theme}>{name?.common}</CardTitle>
          <RegularText theme={theme}>
            <BoldText theme={theme}>Population: </BoldText>
            {population.toLocaleString("pt-BR")}
          </RegularText>
          <RegularText theme={theme}>
            <BoldText theme={theme}>Region: </BoldText>
            {region}
          </RegularText>
          <RegularText theme={theme}>
            <BoldText theme={theme}>Capital: </BoldText>
            {capital}
          </RegularText>
        </CardInfo>
      </CardContainer>
    </StyledLink>
  );
};

export default CountryCard;
