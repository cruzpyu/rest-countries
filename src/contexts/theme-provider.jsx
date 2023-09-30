import React, { createContext, useContext, useEffect, useState } from "react";
import useThemeStore from "../store/theme-store";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const { theme } = useThemeStore();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
