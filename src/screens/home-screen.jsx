import CountriesList from "../components/countries-list";
import FilterContainer from "../components/filters/filter-container";

const Home = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "blue" }}>
      <FilterContainer />
      <CountriesList />
    </div>
  );
};

export default Home;
