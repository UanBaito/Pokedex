import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { GameClient, Pokedex, Pokemon, PokemonSpecies } from "pokenode-ts";
import Pokelist from "./PokeList";
import Pokeinfo from "./Pokeinfo";

export default function Mainpage() {
  const [searchState, setSearchState] = useState("");
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [selectedPoke, setSelectedPoke] = useState<Pokemon>();
  const [selectedSpecies, setSelectedSpecies] = useState<PokemonSpecies>();
  const [isMinimized, setIsMinimized] = useState(true);

  useEffect(() => {
    const api = new GameClient({ logs: true, cacheOptions: {} });
    const pokedex = api.getPokedexByName("national");
    pokedex
      .then((response) => {
        setPokedex(response);
      })
      .catch(() => console.log("error"));
  }, []);

  function handlePokecardClick(
    _: EventTarget,
    pokemonData: Pokemon | undefined,
    speciesData: PokemonSpecies | undefined
  ) {
    if (pokemonData && speciesData) {
      setSelectedPoke(pokemonData);
      setSelectedSpecies(speciesData);
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
            selectedSpecies={selectedSpecies}
            setSelectedPoke={setSelectedPoke}
            isMinimized={isMinimized}
            handleClickMaximize={handleClickMaximize}
            handleClickMinimize={handleClickMinimize}
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
