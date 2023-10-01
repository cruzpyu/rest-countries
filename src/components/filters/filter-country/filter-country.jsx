import React from "react";
import { useForm } from "react-hook-form";

import useCountryStore from "../../../store/country-filter-store";

import SearchIcon from "../../../icons/search-icon";

import { useTheme } from "../../../hooks/use-theme";

import {
  SearchContainer,
  TextInput,
} from "../filters-container/filters-container-style";

const FilterCountry = () => {
  const { register, watch } = useForm();
  const { setCountry } = useCountryStore();
  const theme = useTheme();

  return (
    <SearchContainer
      theme={theme}
      onChange={() => setCountry(watch("country"))}
    >
      <SearchIcon />
      <TextInput
        theme={theme}
        type="text"
        placeholder="Search for a country..."
        {...register("country")}
      />
    </SearchContainer>
  );
};

export default FilterCountry;
