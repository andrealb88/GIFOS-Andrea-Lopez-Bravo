import "./Nav.css";
import { ButtonSearch } from "../buttonSearch/ButtonSearch";

export const Nav = () => {
  return (
    <nav className="nav center flex-column">
      <h1 className="principal-title violet-text">
        ¬°Inspirate y busca los mejores GIFS!
      </h1>
      <img className="center" src="./images/ilustra_header.svg" alt="people" />
      <ButtonSearch />
    </nav>
  );
};
