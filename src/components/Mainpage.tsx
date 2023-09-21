import { useRef, useState } from "react";
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
    ...MaximazedPokeInfoFragment
  }
`;

export default function Mainpage() {
  const data = useLazyLoadQuery<MainpageQueryType>(MainpageQuery, {});
  const pokeid = 19;

  const [selectedPoke, setSelectedPoke] = useState("");
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVariant, setIsVariant] = useState(false);
  const refetchMaxInfoQuery = useRef();

  function handlePokecardClick(pokemonName: string) {
    setSelectedPoke(pokemonName);
    refetchMaxInfoQuery.current({ pokeName: pokemonName });
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
        <>
          <MaximazedPokeInfo
            refetchMaxInfoQuery={refetchMaxInfoQuery}
            pokeSpecies={data}
            isVariant={isVariant}
            handleVariantToggle={handleVariantToggle}
            handleClickMinimize={handleClickMinimize}
            isMinimized={isMinimized}
          />
        </>

        <Pokelist
          pokeList={data.pokemon_v2_pokemon}
          handlePokecardClick={handlePokecardClick}
          isMinimized={isMinimized}
        />
      </div>
    </div>
  );
}
