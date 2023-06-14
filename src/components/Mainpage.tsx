import { MouseEventHandler, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";
import Pokelist from "./PokeList";
import Pokeinfo from "./Pokeinfo";

export default function Mainpage() {
  const [searchState, setSearchState] = useState("");
  const [pokemonList, setPokemonListState] = useState<NamedAPIResourceList>();
  const [selectedPoke, setSelectedPoke] = useState<Pokemon>();
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const api = new PokemonClient();
    const pokemon = api.listPokemons();
    pokemon
      .then((response) => {
        setPokemonListState(response);
      })
      .catch(() => console.log("error"));
  }, []);

  function handlePokecardClick(
    e: MouseEventHandler,
    pokemon: React.MutableRefObject<Pokemon>
  ) {
    setSelectedPoke(pokemon.current);
    return;
  }

  function handleClickMinimize() {
    setIsMinimized(true);
  }

  function handleClickMaximize() {
    setIsMinimized(false);
  }

  function handleInput(e) {
    setSearchState(e.target.value);
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
        {pokemonList ? (
          <Pokelist
            pokemonList={pokemonList}
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
