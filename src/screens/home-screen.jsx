import CountryList from "../components/country-list/country-list";
import FiltersContainer from "../components/filters/filters-container/filters-container";

import { HomeContainer } from "../style/containers";

const Home = () => {
  return (
    <HomeContainer>
      <FiltersContainer />
      <CountryList />
    </HomeContainer>
  );
};

export default Home;
