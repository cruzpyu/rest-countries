import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CountriesProvider } from "./contexts/countries-provider";

import Header from "./components/header/header";
import { Footer } from "./components/footer/footer";

import Home from "./screens/home-screen";
import SingleCountryScreen from "./screens/single-country-screen.jsx";

function App() {
  return (
    <BrowserRouter>
      <CountriesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryName" element={<SingleCountryScreen />} />
        </Routes>
        <Footer />
      </CountriesProvider>
    </BrowserRouter>
  );
}

export default App;
