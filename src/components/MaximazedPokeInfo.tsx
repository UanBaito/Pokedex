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
        height
        weight
        ...PokeInfoSpriteFragment
      }

      pokemon_v2_pokemonspeciesflavortexts(where: { language_id: { _eq: 9 } }) {
        flavor_text
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

  const flavorText =
    data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemonspeciesflavortexts[0]
      .flavor_text;
  const replacedFlavorText = flavorText.replace(/\n|\f|\t/g, " ");

  function getPokemonInfo() {
    const dataResults =
      data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0];

    const heightResult = dataResults.height;
    const weightResult = dataResults.weight;
    const name = dataResults.name;
    let a;
    let b;

    if (heightResult) {
      a = heightResult / 10 + "m";
    } else {
      a = "???";
    }
    if (weightResult) {
      b = weightResult / 10 + "kg";
    } else {
      b = "???";
    }

    return { height: a, weight: b, name: name };
  }

  const pokemonInfo = getPokemonInfo();

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

      <PokeInfoSprite
        sprites={data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0]}
      />
      <div className="self-center">
        <h1 className="capitalize mb-2 font-bold text-primary">
          {pokemonInfo.name}
        </h1>
      </div>
      <div className="bg-black bg-opacity-30 p-1 m-1 border flex justify-between">
        <div className="w-1/2">
          <h2 className="inline text-secondary font-semibold">Height: </h2>
          <p className="inline">{pokemonInfo.height}</p>
        </div>
        <div className="w-1/2 text-right">
          <h2 className="inline text-secondary font-semibold">Weight: </h2>
          <p className="inline">{pokemonInfo.weight}</p>
        </div>
      </div>
      <div className="bg-black bg-opacity-30 p-1 m-1 border">
        <h2 className="font-semibold mb-1 text-secondary">Description</h2>
        <p>{replacedFlavorText}</p>
      </div>
    </div>
  );
}

// ;
