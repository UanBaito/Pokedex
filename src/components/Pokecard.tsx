import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { useEffect, useState, useRef } from "react";
import { PokeCardClickHandler } from "./typings";

export default function Pokecard({
  name,
  handlePokecardClick,
}: {
  name: string;
  handlePokecardClick: PokeCardClickHandler;
}) {
  const [isListLoading, setIsListLoading] = useState(true);
  const pokemon = useRef<Pokemon>();
  const pokemonSpecies = useRef<PokemonSpecies>();

  useEffect(() => {
    const api = new PokemonClient();
    api.getPokemonByName(`${name}`).then((response) => {
      pokemon.current = response;
      api.getPokemonSpeciesByName(`${name}`).then((response) => {
        pokemonSpecies.current = response;
        setIsListLoading(false);
      });
    });
  }, [name]);

  if (!isListLoading && pokemon.current) {
    const typeOne = pokemon.current.types[0].type.name;
    const typeOneString = `src/components/assets/types/${typeOne}.svg`;
    let typeTwo: undefined | string;
    let typeTwoString: undefined | string;
    if (pokemon.current.types[1]) {
      typeTwo = pokemon.current.types[1].type.name;
      typeTwoString = `src/components/assets/types/${typeTwo}.svg`;
    }
    return (
      <div
        className="bg-contrast grid justify-center grid-flow-col grid-cols-6 grid-rows-6 max-h-32 bg rounded-md shadow-2xl m-2"
        onClick={(e) => {
          handlePokecardClick(
            e.target,
            pokemon.current,
            pokemonSpecies.current
          );
        }}
      >
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

        <div className="relative my-1 col-start-6 row-start-1 row-span-3 col-span-3 mr-1">
          <img
            src={typeOneString}
            className="relative z-10 object-fit w-full h-full p-2"
          ></img>
          <span
            className={`absolute h-full w-full left-0 top-0 rounded-full bg-${typeOne} `}
          ></span>
        </div>

        {/* <span className={`z-10 col-start-6 row-start-4 m-2`}>
          {typeTwo ? <img src={typeTwoString}></img> : ""}
        </span> */}

        {typeTwo ? (
          <div className="relative my-1 col-start-6 row-start-4 row-span-3 col-span-3 mr-1">
            <img
              src={typeTwoString}
              className="relative z-10 object-fit w-full h-full p-2"
            ></img>
            <span
              className={`absolute h-full w-full left-0 top-0 rounded-full bg-${typeTwo} `}
            ></span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  /**
   * With dynamic classnames, Tailwind needs the class to be mentioned,
   * even if it is in a comment, to properly load the style.
   * 
   *  bg-normal: "#A8A878",
      bg-fire: "#F08030",
      bg-water: "#6890F0",
      bg-electric: "#F8D030",
      bg-grass: "#78C850",
      bg-ice: "#98D8D8",
      bg-fighting: "#C03028",
      bg-poison: "#A040A0",
      bg-ground: "#E0C068",
      bg-flying: "#A890F0",
      bg-psychic: "#F85888",
      bg-bug: "#A8B820",
      bg-rock: "#B8A038",
      bg-ghost: "#705898",
      bg-dragon: "#7038F8",
      bg-dark: "#705848",
      bg-steel: "#B8B8D0",
      bg-fairy: "#EE99AC" */
}
