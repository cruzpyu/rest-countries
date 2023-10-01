import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { parseList, parseObject } from "../../utils/parsers";

import CountryInfo from "./single-country-info";

const SingleCountry = () => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState([]);

  const countryLanguages = useMemo(() => {
    return parseList(countryData?.map((item) => item.languages));
  }, [countryData]);

  const countryCurrencies = useMemo(() => {
    return parseObject(countryData?.map((item) => item.currencies));
  }, [countryData]);

  useEffect(() => {
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [countryName]);

  return (
    <>
      {countryData?.map((item) => (
        <CountryInfo
          item={item}
          languages={countryLanguages}
          currencies={countryCurrencies}
        />
      ))}
    </>
  );
};

export default SingleCountry;
