/** @format */

import React, { useEffect, createContext, useState } from "react";

interface AppContextProps {
  theme: string;
  setTheme: Function;
}
export const AppContext = createContext<AppContextProps>({
  theme: "dark",
  setTheme: () => {},
});

export const AppContextProvider = ({ children }: {children: JSX.Element[] | JSX.Element}) => {
  const [theme, setTheme] = useState("dark");

  // Grab User theme preference on initial app load
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(matchMedia.matches ? "dark" : "light");
  }, [setTheme]);

  // Theme change handling
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  const switchThemeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppContext.Provider
      value={{ theme, setTheme: switchThemeMode }}
    >
      {children}
    </AppContext.Provider>
  );
};
