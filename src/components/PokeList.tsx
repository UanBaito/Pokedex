import { NamedAPIResourceList } from "pokenode-ts";
import React from "react";
import Pokecard from "./Pokecard";

export default function Pokelist({
  pokemonList,
  handlePokecardClick,
  isMinimized,
}: {
  pokemonList: NamedAPIResourceList;
  handlePokecardClick: any;
  isMinimized: boolean;
}) {
  const mappedPokeList = pokemonList.results.map((v) => {
    return (
      <Pokecard
        key={v.name}
        name={v.name}
        handlePokecardClick={handlePokecardClick}
      />
    );
  });

  return (
    <div
      className={
        isMinimized ? "flex flex-col flex-wrap justify-center mb-14" : "hidden"
      }
    >
      {mappedPokeList}
    </div>
  );
}
