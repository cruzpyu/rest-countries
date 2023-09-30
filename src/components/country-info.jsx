const CountryInfo = ({ item, languages, currencies }) => {
  return (
    <>
      <img alt={`${item.name.common} flag`} src={item.flags.svg} />
      <p>{item.name.official}</p>
      <p>Population: {item.population}</p>
      <p>Region: {item.region}</p>
      <p>Capital: {item.capital}</p>
      <p>Subregion: {item.subregion}</p>

      <p>Top level domain: {item.tld}</p>
      <p>Languages: {languages}</p>
      <p>Currencies: {currencies} </p>

      <p>Borders Countries: </p>
      {item.borders && (
        <ul>
          {item.borders.map((border) => (
            <li>{border}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CountryInfo;
