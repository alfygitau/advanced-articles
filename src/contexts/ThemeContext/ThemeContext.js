import { createContext } from "react";
import { Theme } from "./Theme";

export const ThemeContext = createContext(Theme);

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
};
