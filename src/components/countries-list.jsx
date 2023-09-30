import React, { useMemo } from "react";

import { useCountries } from "../contexts/countries-provider";

import useRegionStore from "../store/region-store";
import useCountryStore from "../store/country-store";

import { ListContainer } from "../style/country-list";

import { GetTheme } from "../utils/get-theme";

import CountryCard from "./country-card";

const CountriesList = () => {
  const { region } = useRegionStore();
  const { country } = useCountryStore();

  const countriesData = useCountries();

  const theme = GetTheme();

  const filteredByCountry = useMemo(() => {
    if (!country) {
      return countriesData;
    } else {
      const searchQuery = country.toLowerCase();
      return countriesData.filter((country) =>
        country?.name?.common.toLowerCase().includes(searchQuery)
      );
    }
  }, [countriesData, country]);

  const filteredByRegion = useMemo(() => {
    if (!region || region === "Filter by Region") {
      return filteredByCountry;
    } else {
      return filteredByCountry.filter((country) => country?.region === region);
    }
  }, [filteredByCountry, region]);

  return (
    <ListContainer theme={theme}>
      {filteredByRegion?.map((country) => (
        <CountryCard key={country?.name?.common} country={country} />
      ))}
    </ListContainer>
  );
};

export default CountriesList;
