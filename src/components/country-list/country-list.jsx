import { useMemo } from "react";

import { useCountries } from "../../contexts/countries-provider";

import { useTheme } from "../../hooks/use-theme";

import useCountryStore from "../../store/country-filter-store";
import useRegionStore from "../../store/region-filter-store";

import { filterByRegion } from "../../utils/filter-by-region";
import { filterByCountry } from "../../utils/filter-by-country";

import CountryCard from "../card/card";

import { ListContainer } from "./country-list-style";

const CountryList = () => {
  const { region } = useRegionStore();
  const { country } = useCountryStore();

  const countriesData = useCountries();

  const theme = useTheme();

  const filteredByCountry = useMemo(
    () => filterByCountry(countriesData, country),
    [countriesData, country]
  );
  const filteredByRegion = useMemo(
    () => filterByRegion(filteredByCountry, region),
    [filteredByCountry, region]
  );

  return (
    <ListContainer theme={theme}>
      {filteredByRegion?.map((countryItem) => (
        <CountryCard key={countryItem?.name?.common} country={countryItem} />
      ))}
    </ListContainer>
  );
};

export default CountryList;
