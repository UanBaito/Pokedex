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
        ...PokeInfoSpriteFragment
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
    console.log("elpepe");
    return;
  }

  return (
    <div
      className={
        "fixed bottom-0 left-0 w-full h-full bg-gray-800 z-40 overflow-y-scroll " +
        (isPokeInfoClosed ? "hidden" : "")
      }
    >
      <button
        onClick={handleClickClosePKInfo}
        className="absolute top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
      >
        <HiOutlineChevronDown />
      </button>

      <PokeInfoSprite
        sprites={data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0]}
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
