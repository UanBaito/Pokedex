import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { GameClient, Pokedex, Pokemon } from "pokenode-ts";
import Pokelist from "./PokeList";
import MinimizedPokeInfo from "./MinimizedPokeInfo";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";

const MainpageQuery = graphql`
  query MainpageQuery {
    pokemons(limit: 151) {
      results {
        name
      }
    }
  }
`;

export default function Mainpage() {
  const data = useLazyLoadQuery(MainpageQuery, {});
  console.log(data);

  const [searchState, setSearchState] = useState("");
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [selectedPoke, setSelectedPoke] = useState<Pokemon>();
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVariant, setIsVariant] = useState(false);

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
    setIsVariant((prevState) => !prevState);
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
              isVariant={isVariant}
              handleVariantToggle={handleVariantToggle}
              selectedPoke={selectedPoke}
              handleClickMinimize={handleClickMinimize}
              isMinimized={isMinimized}
            />
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
