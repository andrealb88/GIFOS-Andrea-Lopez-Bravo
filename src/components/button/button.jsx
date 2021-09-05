import "./button.css";
import React from "react";
import { AppContext } from "../contextProvider/contextApp";

export const Button = () => {
  const { theme, handlerTheme } = React.useContext(AppContext);
  return (
    <>
      <button className="btn violet-text" value={theme} onClick={handlerTheme}>
        MODO {theme === "light" ? "DARK" : "LIGHT"}
      </button>
    </>
  );
};