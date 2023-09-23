import React from "react";
import Search from "../Search/Search";

function Pokedex() {
  return (
    <div className="flex flex-col align-middle justify-center text-center">
      <h1 className="text-2xl  tracking-wider font-bold">Pokedex</h1>
      <Search />
    </div>
  );
}

export default Pokedex;
