import { Pokedex } from "pokenode-ts";
import { PokeCardClickHandler } from "./typings";
import Pokecard from "./Pokecard";

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
    if (i !== 1010) {
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
