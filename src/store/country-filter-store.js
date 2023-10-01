import { create } from "zustand";

const useCountryStore = create((set) => ({
  country: null,
  setCountry: (country) =>
    set({
      country: country,
    }),
}));

export default useCountryStore;
