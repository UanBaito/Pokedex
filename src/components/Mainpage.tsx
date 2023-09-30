import { Suspense, useRef, useState, useTransition } from "react";
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
  const pokeinfoRef = useRef<HTMLDialogElement>(null);

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
    pokeinfoRef.current?.classList.add("slide_up");
    pokeinfoRef.current?.showModal();
    setIsPokeInfoClosed(false);
    pokeinfoRef.current?.addEventListener("animationend", () => {
      pokeinfoRef.current?.classList.remove("slide_up");
    });
    setIsPokeInfoClosed(false);
  }

  function handleClickClosePKInfo() {
    pokeinfoRef.current?.classList.add("slide_down");
    pokeinfoRef.current?.addEventListener(
      "animationend",
      () => {
        pokeinfoRef.current?.classList.remove("slide_down");

        pokeinfoRef.current?.close();
        setIsPokeInfoClosed(true);
      },
      { once: true }
    );
  }

  return (
    <div className="relative flex flex-col">
      <Navbar />
      <dialog
        id="poke-info-dialog"
        ref={pokeinfoRef}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            handleClickClosePKInfo();
          }
        }}
      >
        {isPokeInfoClosed ? (
          <></>
        ) : (
          <Suspense fallback={<SpriteLoader />}>
            <MaximazedPokeInfo
              mainPokeQueryResults={data.pokemon_v2_pokemonspecies}
              handleClickClosePKInfo={handleClickClosePKInfo}
              isPending={isPending}
            />
          </Suspense>
        )}
      </dialog>
      <Pokelist
        pokeList={data.pokemon_v2_pokemon}
        handlePokecardClick={handlePokecardClick}
      />
    </div>
  );
}
