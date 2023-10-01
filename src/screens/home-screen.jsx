import CountryList from "../components/country-list";
import FilterContainer from "../components/filter-container";

import { AppContainer } from "../style/containers";

const Home = () => {
  return (
    <AppContainer>
      <FilterContainer />
      <CountryList />
    </AppContainer>
  );
};

export default Home;
