import { PokeCardClickHandler } from "./typings";
import Pokecard from "./Pokecard";
import { useState } from "react";
import Searchbar from "./Searchbar";
import { graphql, useFragment } from "react-relay";
import type { PokeListFragment$key } from "./__generated__/PokeListFragment.graphql";
import Filters from "./Filters";

const PokeListFragment = graphql`
  fragment PokeListFragment on pokemon_v2_pokemon @relay(plural: true) {
    name
    ...PokecardFragment
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
`;

export default function Pokelist({
  handlePokecardClick,
  isPokeInfoOpen,
  pokeList,
}: {
  handlePokecardClick: PokeCardClickHandler;
  isPokeInfoOpen: boolean;
  pokeList: PokeListFragment$key;
}) {
  const data = useFragment(PokeListFragment, pokeList);

  const [searchState, setSearchState] = useState("");
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchState((e.target as HTMLInputElement).value);
  }

  const regSearch = new RegExp(`^${searchState}`);

  const visiblePokeCards = data.map((v) => {
    if (!regSearch.test(v.name)) {
      return;
    }

    return (
      <Pokecard
        pokemon={v}
        key={v.name}
        handlePokecardClick={handlePokecardClick}
      />
    );
  });

  return (
    <div
      className={
        isPokeInfoOpen
          ? "flex flex-col flex-wrap justify-center mb-14"
          : "overflow-clip "
      }
    >
      <Searchbar searchState={searchState} handleInput={handleInput} />
      <Filters />
      {visiblePokeCards}
    </div>
  );
}
