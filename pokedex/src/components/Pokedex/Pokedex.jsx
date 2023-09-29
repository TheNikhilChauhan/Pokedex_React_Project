import React, { useState } from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import PokeDetails from "../PokemonDetails/PokeDetails";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="flex flex-col align-middle justify-center text-center">
        <Search updateSearchTerm={setSearchTerm} />
        {searchTerm}

        {!searchTerm ? (
          <PokemonList />
        ) : (
          <PokeDetails key={searchTerm} pokemonName={searchTerm} />
        )}
      </div>
    </>
  );
}

export default Pokedex;
