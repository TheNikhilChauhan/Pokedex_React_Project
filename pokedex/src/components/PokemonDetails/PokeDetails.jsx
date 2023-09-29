import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePokemonDetails from "../customHooks/usePokemonDetails";

function PokeDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon, pokemonListState] = usePokemonDetails(id, pokemonName);

  return (
    <>
      <div className=" m-4 ml-32 mr-32 flex justify-center mt-12">
        <div className=" flex flex-col flex-wrap justify-center align-center text-center border-solid border 2 w-1/3 p-3 bg-slate-900">
          <img className=" mb-12  " src={pokemon.image} />
          <div className="font-bold font-mono text-xl text-purple-600 ">
            <div>Rank: {pokemon.id}</div>
            <div>Name: {pokemon.name}</div>
            <div>Height: {pokemon.height}</div>
            <div>Weight: {pokemon.weight}</div>
            <div>
              Types:{" "}
              {pokemon.types &&
                pokemon.types.map((t) => (
                  <div key={t}>
                    {" "}
                    <button className=" bg-slate-400 border-solid m-2 p-2">
                      {" "}
                      {t}
                    </button>
                  </div>
                ))}
            </div>
            <div>
              {pokemon.types && pokemon.similarPokemons && (
                <div>
                  More {pokemon.types[0]} type pokemons
                  <ul className="text-white">
                    {pokemon.similarPokemons.map((p) => (
                      <li key={p.pokemon.url}>{p.pokemon.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokeDetails;
