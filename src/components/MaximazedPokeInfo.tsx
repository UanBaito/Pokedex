import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { useState } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { MaximazedPokeInfoFragment$key } from "./__generated__/MaximazedPokeInfoFragment.graphql";

const MaximazedPokeInfoFragment = graphql`
  fragment MaximazedPokeInfoFragment on query_root
  @refetchable(queryName: "MaximazedPokeInfoRefetchQuery")
  @argumentDefinitions(pokeName: { type: "String", defaultValue: "" }) {
    pokemon_v2_pokemonspecies(where: { name: { _eq: $pokeName } }) {
      ...PokeInfoSpriteFragment
    }
  }
`;

export default function MaximazedPokeInfo({
  refetchMaxInfoQuery,
  pokeSpecies,
  handleClickMinimize,
  isVariant,
  handleVariantToggle,
  isMinimized,
}: {
  refetchMaxInfoQuery: React.MutableRefObject<undefined | any>;
  pokeSpecies: MaximazedPokeInfoFragment$key;
  handleClickMinimize: () => void;
  handleVariantToggle: () => void;
  isVariant: boolean;
  isMinimized: boolean;
}) {
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [data, refetch] = useRefetchableFragment(
    MaximazedPokeInfoFragment,
    pokeSpecies
  );
  refetchMaxInfoQuery.current = refetch;

  return (
    <div
      className={
        "fixed overflow-y-scroll bottom-0 left-0 w-full h-full bg-gray-800 z-40 " +
        (isMinimized ? "hidden" : "")
      }
    >
      <button
        onClick={handleClickMinimize}
        className="absolute top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
      >
        <HiOutlineChevronDown />
      </button>
      <PokeInfoSprite
        sprites={data.pokemon_v2_pokemonspecies}
        pokemon={pokemon}
        selectedSpecies={pokemonSpecies}
        isVariant={isVariant}
        handleVariantToggle={handleVariantToggle}
      />
    </div>
  );
}
