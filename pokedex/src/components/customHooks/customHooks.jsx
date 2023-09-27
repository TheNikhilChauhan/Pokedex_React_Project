import { useState, useEffect } from "react";
import axios from "axios";

function usePokemonHooks(type) {
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: "",
    type: "",
  });

  async function downloadPokemons() {
    setPokemonListState({ ...pokemonListState, isLoading: true });
    const response = await axios.get(pokemonListState.pokedexUrl);
    const pokemonResults = response.data.results;
    const pokePromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

    const pokeData = await axios.all(pokePromise);

    const res = pokeData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
      };
    });

    setPokemonListState((state) => ({
      ...state,
      pokemonList: res,
      isLoading: false,
    }));
  }
  useEffect(() => {
    downloadPokemons();
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
}

export default usePokemonHooks;
