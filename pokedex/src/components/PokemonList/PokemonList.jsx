import React, { useState } from "react";

import Pokemon from "../Pokemon/Pokemon";
import usePokemonHooks from "../customHooks/customHooks";

function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonListState, setPokemonListState] = usePokemonHooks(DEFAULT_URL);
  return (
    <>
      <div className="text-center mt-12 font-bold">
        Pokemon List
        <div className="flex flex-wrap m-0  justify-evenly">
          {pokemonListState.pokemonList.map((pokemon) => (
            <Pokemon
              name={pokemon.name}
              key={pokemon.id}
              image={pokemon.image}
              id={pokemon.id}
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
