import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./contexts/countries-provider";

import Home from "./screens/home-screen";
import CountryPage from "./screens/country-page";
function App() {
  return (
    <>
      <BrowserRouter>
        <CountriesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:countryName" element={<CountryPage />} />
          </Routes>
        </CountriesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
