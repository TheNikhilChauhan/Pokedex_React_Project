import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokedexUrl, setPokedexUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  async function downloadPokemons() {
    setIsLoading(true);
    const response = await axios.get(pokedexUrl);
    const pokemonResults = response.data.results;
    console.log(pokemonResults);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    const pokePromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
    const pokeData = await axios.all(pokePromise);
    console.log(pokeData);
    const res = pokeData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
      };
    });
    console.log(res);
    setPokemonList(res);
    setIsLoading(false);
  }

  useEffect(() => {
    downloadPokemons();
  }, [pokedexUrl]);

  return (
    <>
      <div className="text-center mt-12 font-bold">
        Pokemon List
        <div className="flex flex-wrap m-0  justify-evenly">
          {isLoading
            ? "Loading..."
            : pokemonList.map((p) => (
                <Pokemon
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
            disabled={prevUrl === null}
            onClick={() => setPokedexUrl(prevUrl)}
          >
            {" "}
            Prev
          </button>
          <button
            className="border-solid border 2px border-gray-400 m-2 p-2  disabled:bg-slate-600"
            disabled={nextUrl === null}
            onClick={() => setPokedexUrl(nextUrl)}
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
