import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "LIGHT",
  setTheme: (toggle) =>
    set({
      theme: toggle,
    }),
}));

export default useThemeStore;
