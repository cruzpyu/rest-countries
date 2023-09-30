import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";

import { parseList, parseObject } from "../utils/parsers";
import CountryInfo from "../components/country-info";

const CountryPage = () => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState([]);

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
    <>
      {countryData.map((item) => {
        return (
          <CountryInfo
            item={item}
            currencies={countryCurrencies}
            languages={countryLanguages}
          />
        );
      })}
    </>
  );
};

export default CountryPage;
