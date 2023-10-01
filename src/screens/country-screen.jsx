import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";

import { parseList, parseObject } from "../utils/parsers";
import CountryInfo from "../components/country-info";
import BackButton from "../components/back-button";

import { useTheme } from "../hooks/use-theme";
import { CountryPageContainer } from "../style/country-page";

const CountryScreen = () => {
  const { countryName } = useParams();

  const [countryData, setCountryData] = useState([]);

  const theme = useTheme();

  const countryLanguages = parseList(countryData.map((item) => item.languages));
  const countryCurrencies = parseObject(
    countryData.map((item) => item.currencies)
  );

  useEffect(() => {
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [countryName]);

  return (
    <CountryPageContainer theme={theme}>
      {countryData.map((item) => {
        return (
          <>
            <BackButton />
            <CountryInfo
              item={item}
              currencies={countryCurrencies}
              languages={countryLanguages}
            />
          </>
        );
      })}
    </CountryPageContainer>
  );
};

export default CountryScreen;
