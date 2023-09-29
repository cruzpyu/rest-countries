import React from "react";
import { useForm } from "react-hook-form";

import useRegionStore from "../../store/region-store";

const RegionFilter = () => {
  const { register, watch } = useForm();
  const { setRegion } = useRegionStore();

  return (
    <form onChange={() => setRegion(watch("region"))}>
      <select {...register("region")}>
        <option defaultValue>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default RegionFilter;
