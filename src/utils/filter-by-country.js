export const filterByCountry = (data, country) => {
  if (!country) {
    return data;
  }
  const searchQuery = country.toLowerCase();
  return data.filter((country) =>
    country?.name?.common.toLowerCase().includes(searchQuery)
  );
};
