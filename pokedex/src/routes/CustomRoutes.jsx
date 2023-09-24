import React from "react";
import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokeDetails from "../components/PokemonDetails/PokeDetails";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokeDetails />} />
    </Routes>
  );
}

export default CustomRoutes;
