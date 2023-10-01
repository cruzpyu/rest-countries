import { create } from "zustand";

const useRegionStore = create((set) => ({
  region: null,
  setRegion: (region) =>
    set({
      region,
    }),
}));

export default useRegionStore;
