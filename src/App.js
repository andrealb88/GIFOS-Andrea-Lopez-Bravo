import "./App.css";
import React, { useEffect } from "react";
import { AppContext } from "./components/contextProvider/contextApp";
import { Nav } from "./components/nav/Nav";
import { Result } from "./components/result/Result";
import { Header } from "./components/header/Header";
import { Loading } from "./components/loading/Loading";

export function App() {
  const {
    theme,
    input,
    setInput,
    setAutocomplete,
    search,
    setSearch,
    setNewListaGifs,
  } = React.useContext(AppContext);

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=fpXXuICjM9Qt2GRH8ygx77rySBq5yjoi&q=${input}&limit=12&offset=0&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((data) => {
          setNewListaGifs(data);
          setSearch(false);
          setInput("");
          setAutocomplete([]);
        })
        .catch((error) => console.log(error));
    }
  }, [search]);

  useEffect(() => {
    if (input) {
      fetch(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=fpXXuICjM9Qt2GRH8ygx77rySBq5yjoi&q=${input}&limit=5&offset=0&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((data) => setAutocomplete(data.data))
        .catch((error) => console.log(error));
    }
  }, [input, setAutocomplete]);

  return (
    <div className={`App ${theme} center`}>
      <div className="principal-container">
        <Header />
        <Nav />
        {
          search ? <Loading /> : <Result />
          // <Result newListaGifs={newListaGifs} searchedText={searchedText} />
        }
      </div>
    </div>
  );
}

export default App;
