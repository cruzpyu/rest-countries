import React from "react";
import { useForm } from "react-hook-form";

import useCountryStore from "../../store/country-store";

const CountryFilter = () => {
  const { register, watch } = useForm();
  const { setCountry } = useCountryStore();

  return (
    <form onChange={() => setCountry(watch("country"))}>
      <input type="text" {...register("country")} />
    </form>
  );
};

export default CountryFilter;
