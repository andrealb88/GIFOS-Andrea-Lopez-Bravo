import "./Header.css";
import { Button } from "../button/button";
import { useContext } from "react";
import { AppContext } from "../contextProvider/contextApp";

export const Header = () => {
  const { theme } = useContext(AppContext);
  return (
    <header className="header flex-row">
      {theme === "light" ? (
        <img className="logo" src="./images/logo-desktop.svg" alt="logo" />
      ) : (
        <img
          className="logo"
          src="./images/logo-mobile-modo-noct.svg"
          alt="logo"
        />
      )}
      <Button />
    </header>
  );
};