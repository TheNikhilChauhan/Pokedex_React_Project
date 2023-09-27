import React, { useState } from "react";

import Pokemon from "../Pokemon/Pokemon";
import usePokemonHooks from "../customHooks/customHooks";

function PokemonList() {
  // const [pokemonList, setPokemonList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [pokedexUrl, setPokedexUrl] = useState(
  //   "https://pokeapi.co/api/v2/pokemon"
  // );

  // const [nextUrl, setNextUrl] = useState("");
  // const [prevUrl, setPrevUrl] = useState("");
  const [pokemonListState, setPokemonListState] = usePokemonHooks(false);
  return (
    <>
      <div className="text-center mt-12 font-bold">
        Pokemon List
        <div className="flex flex-wrap m-0  justify-evenly">
          {pokemonListState.isLoading
            ? "Loading..."
            : pokemonListState.pokemonList.map((p) => (
                <Pokemon
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  image={p.image}
                  types={p.types}
                />
              ))}
        </div>
        <div className="m-2 flex align-middle justify-center">
          <button
            className="border-solid border 2px border-gray-400 m-2 p-2 disabled:bg-slate-600"
            disabled={pokemonListState.prevUrl === null}
            onClick={() => {
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.prevUrl,
              });
            }}
          >
            {" "}
            Prev
          </button>
          <button
            className="border-solid border 2px border-gray-400 m-2 p-2  disabled:bg-slate-600"
            disabled={pokemonListState.nextUrl === null}
            onClick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedexUrl: pokemonListState.nextUrl,
              })
            }
          >
            {" "}
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default PokemonList;
