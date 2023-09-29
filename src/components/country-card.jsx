const CountryCard = ({ country }) => {
  const CountryCardInfo = () => {
    return (
      <>
        <p>{country?.name?.common}</p>
        <p>{`População: ${country?.population}`}</p>
        <p>{`Região: ${country?.region}`}</p>
        <p>{`Capital: ${country?.capital}`}</p>
      </>
    );
  };

  return (
    <div>
      <img alt={"sadasda"} src={country?.flags?.png}></img>
      <CountryCardInfo />
    </div>
  );
};

export default CountryCard;
