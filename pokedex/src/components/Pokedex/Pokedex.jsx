import React from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";

function Pokedex() {
  return (
    <>
      <div className="flex flex-col align-middle justify-center text-center">
        <Search />
        <PokemonList />
      </div>
    </>
  );
}

export default Pokedex;
