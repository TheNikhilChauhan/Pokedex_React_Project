import { useState, useEffect } from "react";
import downloadPokemons from "../../utils/downloadPokemon";

function usePokemonHooks(DEFAULT_URL) {
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: DEFAULT_URL,
    nextUrl: DEFAULT_URL,
    prevUrl: DEFAULT_URL,
  });

  useEffect(() => {
    downloadPokemons(pokemonListState, setPokemonListState, DEFAULT_URL);
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
}

export default usePokemonHooks;
