import React from "react";
import { useForm } from "react-hook-form";

import useRegionStore from "../store/region-store";
import { useTheme } from "../hooks/use-theme";
import { SelectContainer, StyledOption, StyledSelect } from "../style/filters";

const FilterRegion = () => {
  const { register, watch } = useForm();
  const theme = useTheme();
  const { setRegion } = useRegionStore();

  return (
    <SelectContainer theme={theme} onChange={() => setRegion(watch("region"))}>
      <StyledSelect theme={theme} {...register("region")}>
        <StyledOption theme={theme} defaultValue value="">
          Filter by Region
        </StyledOption>
        <StyledOption theme={theme} value="Africa">
          Africa
        </StyledOption>
        <StyledOption theme={theme} value="Americas">
          America
        </StyledOption>
        <StyledOption theme={theme} value="Asia">
          Asia
        </StyledOption>
        <StyledOption theme={theme} value="Europe">
          Europe
        </StyledOption>
        <StyledOption theme={theme} value="Oceania">
          Oceania
        </StyledOption>
      </StyledSelect>
    </SelectContainer>
  );
};

export default FilterRegion;
