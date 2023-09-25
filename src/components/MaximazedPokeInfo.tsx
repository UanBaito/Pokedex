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
        "fixed top-0 h-full w-full bg-gray-800 z-40 overflow-y-scroll text-white flex flex-col" +
        (isPokeInfoClosed ? " hidden" : "")
      }
    >
      <button
        onClick={handleClickClosePKInfo}
        className="fixed top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
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
        <p>
          {replacedFlavorText} Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequuntur exercitationem veritatis ea numquam
          maxime quas voluptates quo quasi dolorem, dolores ex deserunt quos,
          nesciunt, eos laudantium. Ipsum vel eos minima. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Corrupti distinctio neque deserunt
          nesciunt quia recusandae voluptates inventore atque numquam provident
          incidunt necessitatibus optio, quos, velit dolores! Nihil voluptas
          praesentium eveniet! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quisquam excepturi debitis ullam inventore eaque
          quos maxime, alias, provident, reprehenderit nobis expedita sed
          temporibus harum architecto enim voluptatum delectus? Eveniet,
          placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam illum, aspernatur quo quasi blanditiis unde tempore alias
          reprehenderit quibusdam incidunt laudantium, magni pariatur expedita
          harum architecto exercitationem error vero enim? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Fugit reprehenderit mollitia
          accusamus nulla saepe cumque, eum vero magnam, vitae laboriosam
          voluptates! Modi quibusdam corporis nam voluptatum dolore. Aspernatur,
          consequuntur iusto. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Qui quas adipisci, labore deserunt eius ipsa impedit
          dolor hic eligendi sit laudantium quod cumque architecto magni
          perferendis in corrupti, non vel! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum laborum quae nesciunt! Repellat
          minima nam dicta, eius ab nisi tempore similique veritatis incidunt
          minus ut in repellendus maxime omnis facilis. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Quas aut quisquam quae dolores
          incidunt. Eaque necessitatibus temporibus cupiditate accusamus optio
          est dicta possimus, illo vero ad ab libero cum. Numquam? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Non aut aliquid quis
          perspiciatis architecto hic facilis iure blanditiis alias voluptate
          delectus, ullam molestias repellendus ex? Omnis a iure labore sequi.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          vitae inventore necessitatibus debitis ipsum distinctio fugiat ducimus
          temporibus? Illo neque, voluptate distinctio culpa dolorem non illum
          rem. Nulla, numquam amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum laborum laudantium est maiores
          necessitatibus veritatis inventore! Itaque praesentium, asperiores,
          nisi deserunt sequi dolor assumenda adipisci neque dolores
          consequuntur ullam cum?
        </p>
      </div>
    </div>
  );
}

// ;
