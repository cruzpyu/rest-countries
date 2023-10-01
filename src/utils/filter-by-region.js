export const filterByRegion = (data, region) => {
  if (!region || region === "Filter by Region") {
    return data;
  }
  return data.filter((country) => country?.region === region);
};
