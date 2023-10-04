import { RefetchFnDynamic, graphql, useFragment } from "react-relay";
import { EvolutionChainFragment$key } from "./__generated__/EvolutionChainFragment.graphql";
import { MainpageFragment$key } from "./__generated__/MainpageFragment.graphql";
import { useTransition } from "react";

const EvolutionChainFragment = graphql`
  fragment EvolutionChainFragment on pokemon_v2_pokemonspecies {
    pokemon_v2_evolutionchain {
      pokemon_v2_pokemonspecies {
        name
        evolves_from_species_id
        pokeID: id
        pokemon_v2_pokemons {
          pokemon_v2_pokemonsprites {
            sprites
          }
        }
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
  const [isPending, startTransition] = useTransition();
  const data = useFragment(EvolutionChainFragment, evolutionChain);
  const evoChainResults =
    data.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies;

  function handleClickEvo(speciesName: string) {
    startTransition(() => {
      refetchQuery.current({ speciesName: speciesName });
    });
  }

  type evo = {
    evolves_from_species_id: number | null;
    name: string;
    pokeID: number;
  };

  const sortedEvoChainResults: evo[] = [...(evoChainResults as [])]?.sort(
    (a: evo, b: evo) => a.pokeID - b.pokeID
  );

  const firstEvo: evo[] = sortedEvoChainResults.filter((pokemon: evo) => {
    return !pokemon.evolves_from_species_id;
  });
  const secondEvo: evo[] = [];
  const thirdEvo: evo[] = [];

  sortedEvoChainResults?.forEach((evolution) => {
    if (
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
      return;
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
            <img
              src={
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${v.pokeID}.png` ??
                ""
              }
            ></img>
          </button>
          <h3 className="info-value">{v.name}</h3>
        </li>
      );
    });

    // add arrow if the pokemon can evolve
    if (mappedEvoStage[0]) {
      if (evoChainContainers[i + 1]?.find((v) => v)) {
        return (
          <>
            {" "}
            <div key={"evo-stage-" + i} className="evo-container">
              {mappedEvoStage}
            </div>
            <img className="evolves-to" src="/EvolvesToArrow.svg"></img>
          </>
        );
      } else {
        return (
          <div key={"evo-stage-" + i} className="evo-container">
            {mappedEvoStage}
          </div>
        );
      }
    }
  });

  return (
    <div className="poke-info-evolution info-box">
      <div
        className={`opacity-0 refetch-poke-evo flex justify-center align-middle ${
          isPending ? "refetch-poke-evo-loading" : ""
        }`}
      >
        <img src="/Poke_Ball_icon.svg" className="w-32 animate-spin"></img>
      </div>
      <h2 className="info-title text-center">Evolution Chain</h2>
      <ul>{mappedEvoStages}</ul>
    </div>
  );
}
