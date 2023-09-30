import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./contexts/countries-provider";

import Home from "./screens/home-screen";
import CountryPage from "./screens/country-page";
import Header from "./components/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <CountriesProvider>
        <Header />
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
