import { PokeCardClickHandler } from "./typings";
import Pokecard from "./Pokecard";
import { useMemo, useState } from "react";
import Searchbar from "./Searchbar";
import { graphql, useFragment } from "react-relay";
import type { PokeListFragment$key } from "./__generated__/PokeListFragment.graphql";

const PokeListFragment = graphql`
  fragment PokeListFragment on pokemon_v2_pokemon @relay(plural: true) {
    name
    pokemon_v2_pokemontypes {
      slot
      type_id
    }
  }
`;

export default function Pokelist({
  handlePokecardClick,
  isMinimized,
  pokeList,
}: {
  handlePokecardClick: PokeCardClickHandler;
  isMinimized: boolean;
  pokeList: PokeListFragment$key;
}) {
  const data = useFragment(PokeListFragment, pokeList);
  console.log(data);

  const [searchState, setSearchState] = useState("");
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchState((e.target as HTMLInputElement).value);
  }

  const regSearch = new RegExp(`^${searchState}`);

  const MemoizedList = useMemo(() => {
    return data.map((v) => {
      return (
        <Pokecard
          key={v.name}
          name={v.name}
          handlePokecardClick={handlePokecardClick}
        />
      );
    });
  }, [data, handlePokecardClick]);

  const visiblePokeCards = MemoizedList.map((v) => {
    const { name } = v.props;
    if (!regSearch.test(name)) {
      return;
    }
    return v;
  });

  return (
    <div
      className={
        isMinimized ? "flex flex-col flex-wrap justify-center mb-14" : "hidden"
      }
    >
      <Searchbar searchState={searchState} handleInput={handleInput} />
      {visiblePokeCards}
    </div>
  );
}
