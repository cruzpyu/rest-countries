import React, { useMemo } from "react";

import { useCountry } from "../contexts/country-provider";

import useRegionStore from "../store/region-store";
import useCountryStore from "../store/country-store";

import RegionFilter from "./filters/region-filter";
import CountryFilter from "./filters/country-filter";

import CountryCard from "./country-card";

const CountryList = () => {
  const countriesData = useCountry();
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
      <CountryFilter />
      <RegionFilter />
      {filteredByRegion.map((country) => (
        <CountryCard key={country?.name?.common} country={country} />
      ))}
    </>
  );
};

export default CountryList;
