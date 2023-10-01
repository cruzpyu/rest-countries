export const countryCardData = (population, region, capital) => {
  return [
    { key: "Population: ", value: population.toLocaleString("pt-BR") },
    { key: "Region: ", value: region },
    { key: "Capital", value: capital },
  ];
};
