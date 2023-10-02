import { RefetchFnDynamic, graphql, useFragment } from "react-relay";
import { EvolutionChainFragment$key } from "./__generated__/EvolutionChainFragment.graphql";
import { MainpageFragment$key } from "./__generated__/MainpageFragment.graphql";

const EvolutionChainFragment = graphql`
  fragment EvolutionChainFragment on pokemon_v2_pokemonspecies {
    pokemon_v2_evolutionchain {
      pokemon_v2_pokemonspecies {
        name
        evolves_from_species_id
        pokeID: id
      }
    }
  }
`;

type props = {
  evolutionChain: EvolutionChainFragment$key;
  refetchQuery: React.MutableRefObject<
    RefetchFnDynamic<any, MainpageFragment$key>
  >;
  handleVariantClick: (index: number) => void;
};

export default function EvolutionChain({
  evolutionChain,
  refetchQuery,
  handleVariantClick,
}: props) {
  const data = useFragment(EvolutionChainFragment, evolutionChain);
  const evoChainResults =
    data.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies;

  function handleClickEvo(speciesName: string) {
    refetchQuery.current({ speciesName: speciesName });
  }

  type evo = {
    evolves_from_species_id: number | null;
    name: string;
    pokeID: number;
  };

  const sortedEvoChainResults: evo[] = [...(evoChainResults as [])]?.sort(
    (a: evo, b: evo) => a.pokeID - b.pokeID
  );

  const firstEvo: evo[] = [];
  const secondEvo: evo[] = [];
  const thirdEvo: evo[] = [];

  sortedEvoChainResults?.forEach((evolution) => {
    if (evolution.evolves_from_species_id === null) {
      firstEvo.push(evolution);
    } else if (
      firstEvo.some(
        (evolutionFirst) =>
          evolutionFirst.pokeID === evolution.evolves_from_species_id
      )
    ) {
      secondEvo.push(evolution);
    } else if (
      secondEvo.some(
        (evolutionSecond) =>
          evolutionSecond.pokeID === evolution.evolves_from_species_id
      )
    ) {
      thirdEvo.push(evolution);
    } else {
      console.log(evolution.name + " appears to not fit in this chan");
    }
  });

  const evoChainContainers = [firstEvo, secondEvo, thirdEvo];

  const mappedEvoStages = evoChainContainers?.map((stageContainer, i) => {
    const mappedEvoStage = stageContainer.map((v) => {
      return (
        <li key={v.name + "-evo"}>
          <button
            onClick={() => {
              handleVariantClick(0);
              handleClickEvo(v.name);
            }}
          >
            {v.name}
          </button>
        </li>
      );
    });
    if (evoChainContainers[i + 1]) {
      return (
        <div className={"evo-stage-" + i}>
          {mappedEvoStage}
          <div className="evolves-to"></div>
        </div>
      );
    } else {
      return mappedEvoStage;
    }
  });
  console.log(mappedEvoStages);

  return <ul>{mappedEvoStages}</ul>;
}
