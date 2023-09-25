import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { graphql, useRefetchableFragment } from "react-relay";
import { MaximazedPokeInfoFragment$key } from "./__generated__/MaximazedPokeInfoFragment.graphql";

const MaximazedPokeInfoFragment = graphql`
  fragment MaximazedPokeInfoFragment on query_root
  @refetchable(queryName: "MaximazedPokeInfoRefetchQuery")
  @argumentDefinitions(speciesName: { type: "String", defaultValue: "" }) {
    pokemon_v2_pokemonspecies(where: { name: { _eq: $speciesName } }) {
      pokemon_v2_pokemons {
        name
        ...PokeInfoSpriteFragment
      }

      pokemon_v2_pokemonspecies {
        pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
        ) {
          flavor_text
        }
      }
    }
  }
`;

export default function MaximazedPokeInfo({
  refetchMaxInfoQuery,
  mainPokeQueryResults,
  handleClickClosePKInfo,
  isPokeInfoClosed,
}: {
  refetchMaxInfoQuery: React.MutableRefObject<undefined | any>;
  mainPokeQueryResults: MaximazedPokeInfoFragment$key;
  handleClickClosePKInfo: () => void;
  isPokeInfoClosed: boolean;
}) {
  const [data, refetch] = useRefetchableFragment(
    MaximazedPokeInfoFragment,
    mainPokeQueryResults
  );
  refetchMaxInfoQuery.current = refetch;

  if (!data.pokemon_v2_pokemonspecies[0]) {
    return;
  }
  const pokemonInfo = data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0];
  const flavorText =
    data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemonspecies[0]
      .pokemon_v2_pokemonspeciesflavortexts[0].flavor_text;
  return (
    <div
      className={
        "fixed bottom-0 left-0 w-full h-full bg-gray-800 z-40 overflow-y-scroll text-white flex flex-col" +
        (isPokeInfoClosed ? " hidden" : "")
      }
    >
      <button
        onClick={handleClickClosePKInfo}
        className="absolute top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
      >
        <HiOutlineChevronDown />
      </button>

      <PokeInfoSprite sprites={pokemonInfo} />
      <div className="self-center">
        <h1 className="capitalize mb-2 font-bold">{pokemonInfo.name}</h1>
      </div>
      <div>
        <p>{flavorText}</p>
      </div>
    </div>
  );
}
