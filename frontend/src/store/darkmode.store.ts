import { createContext } from "react";

export const DarkModeInitialState = false;

export type TDarkModeType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export const DarkModeContext = createContext<TDarkModeType | null>(null);
