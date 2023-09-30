import CountryList from "../components/country-list";
import CountryFilter from "../components/filters/country-filter";
import RegionFilter from "../components/filters/region-filter";

const Home = () => {
  return (
    <>
      <CountryFilter />
      <RegionFilter />
      <CountryList />
    </>
  );
};

export default Home;
