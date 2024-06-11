import SearchContext from "./context/SearchContext";

import Header from "./components/Header";
import Search from "./components/Search";
import MovieContainer from "./components/MovieContainer";

import "./App.css";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("woman");

  console.log(searchText);
  return (
    <SearchContext.Provider
      value={{ searchText: searchText, setSearchText: setSearchText }}
    >
      <Header title="Movie Search"></Header>
      <Search />
      <MovieContainer />
    </SearchContext.Provider>
  );
}

export default App;
