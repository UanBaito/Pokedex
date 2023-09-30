import { useRef, useState, useTransition } from "react";
import Navbar from "./Navbar";
import Pokelist from "./PokeList";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import { useRefetchableFragment } from "react-relay";
import { graphql } from "react-relay";
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

  function handlePokecardClick(pokemonName: string) {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    document.body.classList.add("hide-overflow");
    startTransition(() => {
      refetch({ speciesName: pokemonName });
    });
    pokeinfoRef.current?.showModal();
    pokeinfoRef.current?.classList.add("slide_up");
    pokeinfoRef.current?.addEventListener("animationend", () => {
      pokeinfoRef.current?.classList.remove("slide_up");
    });
    setIsPokeInfoClosed(false);
  }

  function handleClickClosePKInfo() {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    document.body.classList.remove("hide-overflow");
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
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center">
        <dialog
          aria-label="Pokemon info"
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
            <MaximazedPokeInfo
              mainPokeQueryResults={data.pokemon_v2_pokemonspecies}
              handleClickClosePKInfo={handleClickClosePKInfo}
              isPending={isPending}
            />
          )}
        </dialog>
        <Pokelist
          pokeList={data.pokemon_v2_pokemon}
          handlePokecardClick={handlePokecardClick}
        />
      </main>
    </>
  );
}
