import React, { useState } from "react";
import useDebounce from "../customHooks/useDebounce";

function Search({ updateSearchTerm }) {
  const debounceCallBack = useDebounce((e) => updateSearchTerm(e.target.value));
  return (
    <>
      <div className=" m-0-auto mt-4">
        <input
          type="text"
          placeholder="Pokemon name"
          className=" w-2/4 border border-solid p-4 text-black"
          onChange={debounceCallBack}
        />
      </div>
    </>
  );
}

export default Search;
