import BackButton from "../components/back-button/back-button";
import SingleCountry from "../components/single-country/single-country";
import { useTheme } from "../hooks/use-theme";
import { SingleCountryContainer } from "../style/containers";

const SingleCountryScreen = () => {
  const theme = useTheme();
  return (
    <SingleCountryContainer theme={theme}>
      <BackButton />
      <SingleCountry />
    </SingleCountryContainer>
  );
};

export default SingleCountryScreen;
