import React, { createContext, useContext, useEffect, useState } from "react";

const CountriesContext = createContext();

export function useCountries() {
  return useContext(CountriesContext);
}

export function CountriesProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);
  const apiUrl = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <CountriesContext.Provider value={countriesData}>
      {children}
    </CountriesContext.Provider>
  );
}
