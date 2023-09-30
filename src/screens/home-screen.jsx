import CountriesList from "../components/countries-list";
import CountryFilter from "../components/filters/country-filter";
import RegionFilter from "../components/filters/region-filter";
import ToggleTheme from "../components/toggle-theme";
import useThemeStore from "../store/theme-store";
import { colors } from "../style/theme";

const Home = () => {
  const { theme } = useThemeStore();
  const themeColors = colors[theme];
  return (
    <div style={{ backgroundColor: themeColors.BACKGROUND_COLOR }}>
      <ToggleTheme />
      <CountryFilter />
      <RegionFilter />
      <CountriesList />
    </div>
  );
};

export default Home;
