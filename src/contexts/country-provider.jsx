import React, { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext();

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }) {
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
    <CountryContext.Provider value={countriesData}>
      {children}
    </CountryContext.Provider>
  );
}
