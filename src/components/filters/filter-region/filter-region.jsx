import React from "react";
import { useForm } from "react-hook-form";

import { useTheme } from "../../../hooks/use-theme";

import { FilterOptions } from "../../../utils/filter-options";

import useRegionStore from "../../../store/region-filter-store";

import {
  SelectContainer,
  StyledOption,
  StyledSelect,
} from "../filters-container/filters-container-style";

const FilterRegion = () => {
  const { register, watch } = useForm();
  const { setRegion } = useRegionStore();
  const theme = useTheme();

  return (
    <SelectContainer theme={theme} onChange={() => setRegion(watch("region"))}>
      <StyledSelect theme={theme} {...register("region")}>
        {FilterOptions.map((item) => {
          return (
            <StyledOption key={item.key} theme={theme} value={item.value}>
              {item.key}
            </StyledOption>
          );
        })}
      </StyledSelect>
    </SelectContainer>
  );
};

export default FilterRegion;
