import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [newListaGifs, setNewListaGifs] = useState({});
  const [autocomplete, setAutocomplete] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [theme, setTheme] = useState("light");
  const handlerTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const handlerInput = (e) => {
    setInput(e.target.value);
  };
  const handlerSearch = (e) => {
    setSearch(true);
    setSearchedText(input);
  };
  return (
    <AppContext.Provider
      value={{
        theme,
        handlerTheme,
        input,
        setInput,
        handlerInput,
        autocomplete,
        setAutocomplete,
        search,
        setSearch,
        handlerSearch,
        searchedText,
        setSearchedText,
        newListaGifs,
        setNewListaGifs
      }}
    >
      {children}
    </AppContext.Provider>
  );
}