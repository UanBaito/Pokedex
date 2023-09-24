import { Suspense, useRef, useState } from "react";
import Navbar from "./Navbar";
import Pokelist from "./PokeList";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import { RefetchFnDynamic, useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";
import type { MainpageQuery as MainpageQueryType } from "./__generated__/MainpageQuery.graphql";
import SpriteLoader from "./SpriteLoader";

const MainpageQuery = graphql`
  query MainpageQuery {
    pokemon_v2_pokemon(limit: 150, order_by: { id: asc }) {
      ...PokeListFragment
    }
    ...MaximazedPokeInfoFragment
  }
`;

export default function Mainpage() {
  const data = useLazyLoadQuery<MainpageQueryType>(MainpageQuery, {});
  const [isPokeInfoClosed, setIsPokeInfoClosed] = useState(true);
  const refetchMaxInfoQuery = useRef<RefetchFnDynamic<any, any>>(null);

  if (!isPokeInfoClosed) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  function handlePokecardClick(pokemonName: string) {
    if (refetchMaxInfoQuery.current)
      refetchMaxInfoQuery.current({ speciesName: pokemonName });
    setIsPokeInfoClosed(false);
    return;
  }

  function handleClickClosePKInfo() {
    setIsPokeInfoClosed(true);
  }

  return (
    <div className="relative overflow-y-clip">
      <Navbar />
      <div>
        <Suspense fallback={<SpriteLoader />}>
          <>
            <MaximazedPokeInfo
              refetchMaxInfoQuery={refetchMaxInfoQuery}
              mainPokeQueryResults={data}
              handleClickClosePKInfo={handleClickClosePKInfo}
              isPokeInfoClosed={isPokeInfoClosed}
            />
          </>
        </Suspense>
        <Pokelist
          pokeList={data.pokemon_v2_pokemon}
          handlePokecardClick={handlePokecardClick}
          isPokeInfoClosed={isPokeInfoClosed}
        />
      </div>
    </div>
  );
}
