import { useTheme } from "../hooks/use-theme";
import { Container } from "../style/filters";
import FilterCountry from "./filter-country";
import FilterRegion from "./filter-region";

const FilterContainer = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <FilterCountry />
      <FilterRegion />
    </Container>
  );
};

export default FilterContainer;
