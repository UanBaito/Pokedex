import { Suspense, useState, useTransition } from "react";
import Navbar from "./Navbar";
import Pokelist from "./PokeList";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import { useRefetchableFragment } from "react-relay";
import { graphql } from "react-relay";
import SpriteLoader from "./SpriteLoader";
import { MainpageFragment$key } from "./__generated__/MainpageFragment.graphql";

const MainpageFragment = graphql`
  fragment MainpageFragment on query_root
  @refetchable(queryName: "MaximazedPokeInfoRefetchQuery")
  @argumentDefinitions(speciesName: { type: "String", defaultValue: "" }) {
    pokemon_v2_pokemon(
      order_by: { id: asc }
      where: { is_default: { _eq: true } }
    ) {
      ...PokeListFragment
    }

    pokemon_v2_pokemonspecies(where: { name: { _eq: $speciesName } }) {
      ...MaximazedPokeInfoFragment
    }
  }
`;

export default function Mainpage({
  queryData,
}: {
  queryData: MainpageFragment$key;
}) {
  const [isPending, startTransition] = useTransition();
  const [data, refetch] = useRefetchableFragment(MainpageFragment, queryData);
  const [isPokeInfoClosed, setIsPokeInfoClosed] = useState(true);

  if (!isPokeInfoClosed) {
    document.body.classList.add("hide-overflow");
    document.getElementById("root")?.classList.add("hide-overflow");
  } else {
    document.body.classList.remove("hide-overflow");
    document.getElementById("root")?.classList.remove("hide-overflow");
  }

  function handlePokecardClick(pokemonName: string) {
    startTransition(() => {
      refetch({ speciesName: pokemonName });
    });
    setIsPokeInfoClosed(false);
  }

  async function handleClickClosePKInfo() {
    const node = document.getElementById("pokeInfoID");
    document.body.classList.remove("hide-overflow");
    document.getElementById("root")?.classList.remove("hide-overflow");
    node?.classList.add("slide_up");
    document
      .getElementById("pokeInfoID")
      ?.addEventListener("animationend", () => {
        node?.classList.add("hidden");
        setIsPokeInfoClosed(true);
      });

    // function timeout(ms: number) {
    //   return new Promise((resolve) => setTimeout(resolve, ms));
    // }
    // document.getElementById("pokeInfoID")?.classList.add("slide_up");
    // await timeout(300);
    // setIsPokeInfoClosed(true);
  }

  return (
    <div className="relative flex flex-col">
      <Navbar />

      <Suspense fallback={<SpriteLoader />}>
        {!isPokeInfoClosed && (
          <MaximazedPokeInfo
            mainPokeQueryResults={data.pokemon_v2_pokemonspecies}
            handleClickClosePKInfo={handleClickClosePKInfo}
            isPokeInfoClosed={isPokeInfoClosed}
            isPending={isPending}
          />
        )}
      </Suspense>
      <Pokelist
        pokeList={data.pokemon_v2_pokemon}
        handlePokecardClick={handlePokecardClick}
      />
    </div>
  );
}
