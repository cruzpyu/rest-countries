import { useTheme } from "../../../hooks/use-theme";
import { Container } from "./filters-container-style";
import FilterCountry from "../filter-country/filter-country";
import FilterRegion from "../filter-region/filter-region";

const FiltersContainer = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <FilterCountry />
      <FilterRegion />
    </Container>
  );
};

export default FiltersContainer;
