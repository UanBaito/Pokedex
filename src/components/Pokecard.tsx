import { Pokemon, PokemonClient } from "pokenode-ts";
import { useEffect, useState, useRef } from "react";

export default function Pokecard({ name }: { name: string }) {
  const [isLoadingState, setIsLoadingState] = useState(true);
  const pokemon = useRef<Pokemon>();
  useEffect(() => {
    const api = new PokemonClient();
    api.getPokemonByName(`${name}`).then((response) => {
      pokemon.current = response;
      setIsLoadingState(false);
    });
    return;
  }, [name]);

  if (!isLoadingState && pokemon.current) {
    const typeOne = `src/components/assets/types/${pokemon.current.types[0].type.name}.svg`;
    let typeTwo: undefined | string;

    if (pokemon.current.types[1]) {
      typeTwo = `src/components/assets/types/${
        pokemon.current.types[1].type.name + ".svg"
      }`;
    }
    return (
      <div className="bg-blue-200 grid justify-center grid-flow-col grid-cols-6 grid-rows-6 max-h-32 bg rounded-md shadow-2xl m-2">
        <div className="col-span-2 row-span-4">
          <img
            className="object-contain mx-auto object-right"
            src={
              pokemon.current.sprites.front_default
                ? pokemon.current.sprites.front_default
                : ""
            }
          ></img>
        </div>
        <span className="text-center capitalize font-bold text-lg col-span-2 row-span-2">
          {name}
        </span>
        <span className="col-span-2 text-center row-start-6">
          N.º
          {pokemon.current.id}
        </span>

        <div className="col-start-6 row-start-1 m-2 ">
          <img src={typeOne} className=" bg-green-600 rounded-full p-1"></img>
        </div>
        <span className="col-start-6 row-start-4 m-2">
          {typeTwo ? <img src={typeTwo}></img> : ""}
        </span>
      </div>
    );
  }
  return;
}
