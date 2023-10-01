import BackButton from "../components/back-button/back-button";
import SingleCountry from "../components/single-country/single-country";
import { SingleCountryContainer } from "../style/containers";

const SingleCountryScreen = () => {
  return (
    <SingleCountryContainer>
      <BackButton />
      <SingleCountry />
    </SingleCountryContainer>
  );
};

export default SingleCountryScreen;
