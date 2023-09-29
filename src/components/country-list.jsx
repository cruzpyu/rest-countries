import { useCountry } from "../contexts/country-provider";
import CountryCard from "./country-card";

const CountryList = () => {
  const countriesData = useCountry();
  return (
    <>
      {countriesData.map((country) => {
        return <CountryCard key={country.name.common} country={country} />;
      })}
    </>
  );
};

export default CountryList;
