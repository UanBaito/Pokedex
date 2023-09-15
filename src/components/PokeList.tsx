import { Pokedex } from "pokenode-ts";
import Pokecard from "./Pokecard";
import { PokeCardClickHandler } from "./typings";

export default function Pokelist({
  pokedex,
  handlePokecardClick,
  isMinimized,
}: {
  pokedex: Pokedex;
  handlePokecardClick: PokeCardClickHandler;
  isMinimized: boolean;
}) {
  const mappedPokeList = pokedex.pokemon_entries.map((v, i) => {
    i++;
    if (i !== 1000) {
      return;
    }
    return (
      <Pokecard
        key={v.pokemon_species.name}
        name={v.pokemon_species.name}
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
