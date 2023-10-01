import React from "react";
import { useForm } from "react-hook-form";

import useRegionStore from "../store/region-store";
import { useTheme } from "../hooks/use-theme";
import { SelectContainer, StyledOption, StyledSelect } from "../style/filters";
import { FilterOptions } from "../utils/filter-options";

const FilterRegion = () => {
  const { register, watch } = useForm();
  const theme = useTheme();
  const { setRegion } = useRegionStore();

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
