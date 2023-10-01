import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./contexts/countries-provider";

import Home from "./screens/home-screen";
import Header from "./components/header";

import { Footer } from "./components/footer";
import CountryScreen from "./screens/country-screen";

function App() {
  return (
    <BrowserRouter>
      <CountriesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryName" element={<CountryScreen />} />
        </Routes>
        <Footer />
      </CountriesProvider>{" "}
    </BrowserRouter>
  );
}

export default App;
