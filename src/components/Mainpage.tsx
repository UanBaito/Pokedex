import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { GameClient, Pokedex, Pokemon } from "pokenode-ts";
import Pokelist from "./PokeList";
import Pokeinfo from "./Pokeinfo";

export default function Mainpage() {
  const [searchState, setSearchState] = useState("");
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [selectedPoke, setSelectedPoke] = useState<Pokemon>();
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVariant, setIsVariant] = useState(false);

  function handleVariantToggle() {
    setIsVariant(!isVariant);
  }
  useEffect(() => {
    const api = new GameClient({ logs: true });
    const pokedex = api.getPokedexByName("national");
    pokedex
      .then((response) => {
        setPokedex(response);
      })
      .catch(() => console.log("error"));
  }, []);

  function handlePokecardClick(pokemonData: Pokemon | undefined) {
    if (pokemonData) {
      setSelectedPoke(pokemonData);
      setIsMinimized(false);
      setIsVariant(false);
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
    <div className="relative bg-primary">
      <Navbar searchState={searchState} handleInput={handleInput} />
      <div className="relative">
        {selectedPoke && (
          <Pokeinfo
            isVariant={isVariant}
            selectedPoke={selectedPoke}
            setSelectedPoke={setSelectedPoke}
            isMinimized={isMinimized}
            handleVariantToggle={handleVariantToggle}
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
