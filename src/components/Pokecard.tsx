import { Pokemon } from "pokenode-ts";
import React from "react";

export default function Pokecard({
  pokeState,
}: {
  pokeState: Pokemon | undefined;
}) {
  console.log(pokeState);
  return (
    <div className="w-72 h-72 bg-cyan-900 rounded-md">
      <h3 className="text-center text-3xl ">{pokeState?.name}</h3>
      <img src=""></img>
    </div>
  );
}
