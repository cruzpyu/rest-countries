import { Link } from "react-router-dom/dist";

const CountryCard = ({ country }) => {
  const { name, population, region, capital } = country;
  const CountryCardInfo = () => {
    return (
      <>
        <p>{name?.common}</p>
        <p>{`População: ${population}`}</p>
        <p>{`Região: ${region}`}</p>
        <p>{`Capital: ${capital}`}</p>
      </>
    );
  };

  return (
    <Link to={`${name?.common}`}>
      <img alt={"sadasda"} src={country?.flags?.png}></img>
      <CountryCardInfo />
    </Link>
  );
};

export default CountryCard;
