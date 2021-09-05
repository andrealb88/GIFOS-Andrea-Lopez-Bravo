import "./Dropdown.css";
import { AppContext } from "../contextProvider/contextApp";
import React from "react";

export const InputDropdown = (props) => {
  const { setInput, setSearch, setSearchedText } = React.useContext(AppContext);
  const handlerUpdateInput = (e) => {
    setInput(props.name);
    setSearchedText(props.name);
    setSearch(true);
  };
  return (
    <input
      className={
        props.name.length > 0
          ? "autocomplete-items input-search"
          : "no-autocomplete"
      }
      value={props.name}
      onClick={handlerUpdateInput}
      onChange={() => {}}
      type="text"
    />
  );
};