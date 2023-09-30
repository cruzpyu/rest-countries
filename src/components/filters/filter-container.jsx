
import { GetTheme } from "../../utils/get-theme";
import { Container } from "../../style/filters";

import CountryFilter from "./country-filter";
import RegionFilter from "./region-filter";


const FilterContainer = () => {
  const theme = GetTheme();

  return (
    <Container theme={theme}>
      <RegionFilter />
      <CountryFilter />
    </Container>
  );
};

export default FilterContainer;
