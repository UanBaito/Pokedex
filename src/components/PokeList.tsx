import { NamedAPIResourceList } from "pokenode-ts";
import React from "react";
import Pokecard from "./Pokecard";

export default function Pokelist({
  pokemonList,
}: {
  pokemonList: React.MutableRefObject<NamedAPIResourceList | undefined>;
}) {
  const mappedPokeList = pokemonList.current?.results.map((v, i) => {
    return <Pokecard key={v.name} name={v.name} />;
  });

  return (
    <div className="flex flex-col flex-wrap justify-center">
      {mappedPokeList}
    </div>
  );
}
