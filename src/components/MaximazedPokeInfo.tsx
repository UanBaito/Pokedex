import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { Suspense, useState } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { MaximazedPokeInfoFragment$key } from "./__generated__/MaximazedPokeInfoFragment.graphql";

const MaximazedPokeInfoFragment = graphql`
  fragment MaximazedPokeInfoFragment on query_root
  @refetchable(queryName: "MaximazedPokeInfoRefetchQuery")
  @argumentDefinitions(pokeName: { type: "String", defaultValue: "pikachu" }) {
    pokemon_v2_pokemonspecies(where: { name: { _eq: $pokeName } }) {
      pokemon_v2_pokemons {
        ...PokeInfoSpriteFragment
        name
      }
    }
  }
`;

export default function MaximazedPokeInfo({
  refetchMaxInfoQuery,
  pokeSpecies,
  handleClickMinimize,
  handleVariantToggle,
  isMinimized,
}: {
  refetchMaxInfoQuery: React.MutableRefObject<undefined | any>;
  pokeSpecies: MaximazedPokeInfoFragment$key;
  handleClickMinimize: () => void;
  handleVariantToggle: () => void;
  isMinimized: boolean;
}) {
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
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
        sprites={data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0]}
        selectedSpecies={pokemonSpecies}
        handleVariantToggle={handleVariantToggle}
      />

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        blanditiis excepturi assumenda cumque officia obcaecati, dolorem illo
        illum, atque at delectus iusto aperiam commodi amet eos quasi sit
        veritatis facilis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Blanditiis quisquam nihil iure illo iusto reprehenderit labore
        modi doloremque nobis. Accusantium incidunt deleniti corporis a, nobis
        repudiandae distinctio ea aperiam ad.
      </div>
    </div>
  );
}
