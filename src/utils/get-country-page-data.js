export const getCountryPageData = (item, languages, currencies) => {
  return {
    RIGHT: [
      { key: "Population: ", value: item.population.toLocaleString("pt-BR") },
      { key: "Region: ", value: item.region },
      { key: "Capital: ", value: item.capital },
      { key: "Subregion: ", value: item.subregion },
    ],
    LEFT: [
      { key: "Top Level Domain: ", value: item.tld },
      { key: "Languages: ", value: languages },
      { key: "Currencies: ", value: currencies },
    ],
  };
};
