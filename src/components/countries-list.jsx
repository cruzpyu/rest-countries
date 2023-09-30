import React, { useMemo } from "react";
import { useCountries } from "../contexts/countries-provider";
import useRegionStore from "../store/region-store";
import useCountryStore from "../store/country-store";
import CountryCard from "./country-card";

const CountriesList = () => {
  const countriesData = useCountries();
  const { region } = useRegionStore();
  const { country } = useCountryStore();

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
    <>
      {filteredByRegion?.map((country) => (
        <CountryCard key={country?.name?.common} country={country} />
      ))}
    </>
  );
};

export default CountriesList;
