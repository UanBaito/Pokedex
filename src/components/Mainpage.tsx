import { useState } from "react";
import Navbar from "./Navbar";
import { Pokemon } from "pokenode-ts";
import Pokelist from "./PokeList";
import MinimizedPokeInfo from "./MinimizedPokeInfo";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";
import type { MainpageQuery as MainpageQueryType } from "./__generated__/MainpageQuery.graphql";

const MainpageQuery = graphql`
  query MainpageQuery {
    pokemon_v2_pokemon(limit: 50, order_by: { id: asc }) {
      ...PokeListFragment
    }
  }
`;

export default function Mainpage() {
  const data = useLazyLoadQuery<MainpageQueryType>(MainpageQuery, {});

  const [selectedPoke, setSelectedPoke] = useState<Pokemon>();
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVariant, setIsVariant] = useState(false);

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

  return (
    <div className="relative bg-primary">
      <Navbar />
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

        <Pokelist
          pokeList={data.pokemon_v2_pokemon}
          handlePokecardClick={handlePokecardClick}
          isMinimized={isMinimized}
        />
      </div>
    </div>
  );
}
