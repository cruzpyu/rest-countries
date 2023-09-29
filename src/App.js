import React from "react";

import { CountryProvider } from "./contexts/country-provider";
import CountryList from "./components/country-list";

function App() {
  return (
    <CountryProvider>
      <CountryList />
    </CountryProvider>
  );
}

export default App;
