import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { GameClient, Pokedex, Pokemon, PokemonSpecies } from "pokenode-ts";
import Pokelist from "./PokeList";
import Pokeinfo from "./Pokeinfo";
import { PokeInfo } from "./typings";

export default function Mainpage() {
  const [searchState, setSearchState] = useState("");
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [selectedPoke, setSelectedPoke] = useState<PokeInfo>();
  const [isMinimized, setIsMinimized] = useState(true);

  useEffect(() => {
    const api = new GameClient();
    const pokedex = api.getPokedexByName("national");
    pokedex
      .then((response) => {
        setPokedex(response);
      })
      .catch(() => console.log("error"));
  }, []);

  function handlePokecardClick(
    _: EventTarget,
    pokemonData: React.MutableRefObject<Pokemon | undefined>,
    pokemonSpeciesData: React.MutableRefObject<PokemonSpecies | undefined>
  ) {
    if (pokemonData.current && pokemonSpeciesData.current) {
      setSelectedPoke({
        pokemon: pokemonData.current,
        species: pokemonSpeciesData.current,
      });
      setIsMinimized(false);
    } else {
      ("error trying to select pokemon");
    }
    return;
  }

  function handleClickMinimize() {
    setIsMinimized(true);
  }

  function handleClickMaximize() {
    setIsMinimized(false);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchState((e.target as HTMLInputElement).value);
  }

  return (
    <div className="bg-primary">
      <Navbar searchState={searchState} handleInput={handleInput} />
      <div className="relative">
        {selectedPoke && (
          <Pokeinfo
            selectedPoke={selectedPoke}
            isMinimized={isMinimized}
            handleClickMinimize={handleClickMinimize}
            handleClickMaximize={handleClickMaximize}
          />
        )}
        {pokedex ? (
          <Pokelist
            pokedex={pokedex}
            handlePokecardClick={handlePokecardClick}
            isMinimized={isMinimized}
          />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
