import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  GameClient,
  Pokedex,
  Pokemon,
  PokemonClient,
  PokemonSpecies,
} from "pokenode-ts";
import Pokelist from "./PokeList";

import MinimizedPokeInfo from "./MinimizedPokeInfo";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import PokeInfoSprite from "./PokeInfoSprite";

export default function Mainpage() {
  const [searchState, setSearchState] = useState("");
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [selectedPoke, setSelectedPoke] = useState<Pokemon>();
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVariant, setIsVariant] = useState(false);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
  const [isSpeciesLoading, setIsSpeciesLoading] = useState(true);

  useEffect(() => {
    const api = new GameClient({ logs: true });
    const pokedex = api.getPokedexByName("national");
    pokedex
      .then((response) => {
        setPokedex(response);
      })
      .catch((err) => console.log("error:", err));
  }, []);

  function handlePokecardClick(pokemonData: Pokemon | undefined) {
    if (pokemonData && pokemonData.name !== selectedPoke?.name) {
      setSelectedPoke(pokemonData);
      setIsVariant(false);
      console.log("species loading");
      const api = new PokemonClient();
      api
        .getPokemonSpeciesByName(`${pokemonData.name}`)
        .then((response) => {
          setPokemonSpecies(response);
          setIsSpeciesLoading(false);
        })
        .catch((err) => {
          console.log(`error: ${err}`);
          setIsSpeciesLoading(false);
        });
    } else {
      console.log("same poke selected");
    }
    setIsMinimized(false);
    return;
  }

  function handleClickMinimize() {
    setIsMinimized(true);
  }

  function handleClickMaximize() {
    setIsMinimized(false);
  }

  function handleVariantToggle() {
    if (pokemonSpecies?.varieties[0].pokemon.name);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchState((e.target as HTMLInputElement).value);
  }

  return (
    <div className="relative bg-primary">
      <Navbar searchState={searchState} handleInput={handleInput} />
      <div className="relative">
        {selectedPoke && (
          <>
            <MinimizedPokeInfo
              handleClickMaximize={handleClickMaximize}
              selectedPoke={selectedPoke}
              isMinimized={isMinimized}
            />
            <MaximazedPokeInfo
              handleClickMinimize={handleClickMinimize}
              isMinimized={isMinimized}
              isSpeciesLoading={isSpeciesLoading}
            >
              <PokeInfoSprite
                pokemon={pokemon}
                selectedSpecies={pokemonSpecies}
                isVariant={isVariant}
                handleVariantToggle={handleVariantToggle}
              />
            </MaximazedPokeInfo>
          </>
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
