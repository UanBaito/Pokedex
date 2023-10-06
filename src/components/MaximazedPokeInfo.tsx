import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { RefetchFnDynamic, graphql, useFragment } from "react-relay";
import { MaximazedPokeInfoFragment$key } from "./__generated__/MaximazedPokeInfoFragment.graphql";
import { useRef, useState } from "react";
import Stats from "./Stats";
import SpriteLoader from "./SpriteLoader";
import { MainpageFragment$key } from "./__generated__/MainpageFragment.graphql";
import Variants from "./Variants";
import EvolutionChain from "./EvolutionChain";

const MaximazedPokeInfoFragment = graphql`
  fragment MaximazedPokeInfoFragment on pokemon_v2_pokemonspecies
  @relay(plural: true) {
    pokemon_v2_pokemons {
      name
      height
      weight
      pokeID: id
      pokemon_v2_pokemontypes {
        slot
        pokemon_v2_type {
          name
        }
      }
      ...PokeInfoSpriteFragment
      ...StatsFragment
    }

    pokemon_v2_pokemonspeciesflavortexts(where: { language_id: { _eq: 9 } }) {
      flavor_text
    }
    ...VariantsFragment
    ...EvolutionChainFragment
  }
`;

export default function MaximazedPokeInfo({
  mainPokeQueryResults,
  handleClickClosePKInfo,
  isPending,
  refetchQuery,
}: {
  mainPokeQueryResults: MaximazedPokeInfoFragment$key;
  handleClickClosePKInfo: () => void;
  isPending: boolean;
  refetchQuery: React.MutableRefObject<
    RefetchFnDynamic<any, MainpageFragment$key>
  >;
}) {
  const data = useFragment(MaximazedPokeInfoFragment, mainPokeQueryResults);
  const [spriteSettings, setSpriteSettings] = useState({
    facingFront: true,
    isShiny: false,
    isFemale: false,
  });
  const [currentPokemon, setCurrentPokemon] = useState(0);
  const spriteRef = useRef(null);

  function handleVariantClick(index: number) {
    handleClearSpriteSettings();
    setCurrentPokemon(index);
  }

  function handleReverseSprite() {
    setSpriteSettings((prevState) => ({
      ...prevState,
      facingFront: !prevState.facingFront,
    }));
  }

  function handleGenderToggle() {
    setSpriteSettings((prevState) => ({
      ...prevState,
      isFemale: !prevState.isFemale,
    }));
  }

  function handleShinyToggle() {
    setSpriteSettings((prevState) => ({
      ...prevState,
      isShiny: !prevState.isShiny,
    }));
  }

  function handleClearSpriteSettings() {
    setSpriteSettings({
      facingFront: true,
      isShiny: false,
      isFemale: false,
    });
  }

  function getPokemonInfo() {
    const dataResults = currentPokemonResults;

    const heightResult = dataResults.height;
    const weightResult = dataResults.weight;
    const name = dataResults.name;
    const typeOne =
      dataResults.pokemon_v2_pokemontypes[0].pokemon_v2_type?.name;

    let typeTwo = null;
    let height;
    let weight;

    if (heightResult) {
      height = heightResult / 10 + "m";
    } else {
      height = "???";
    }
    if (weightResult) {
      weight = weightResult / 10 + "kg";
    } else {
      weight = "???";
    }
    if (dataResults.pokemon_v2_pokemontypes[1]) {
      typeTwo = dataResults.pokemon_v2_pokemontypes[1].pokemon_v2_type?.name;
    }

    return {
      height: height,
      weight: weight,
      name: name,
      typeOne: typeOne,
      typeTwo: typeTwo,
    };
  }

  if (!data[0]) {
    return (
      <SpriteLoader
        handleClickClosePKInfo={handleClickClosePKInfo}
        handleClearSpriteSettings={handleClearSpriteSettings}
      />
    );
  }
  const currentPokemonResults = data[0].pokemon_v2_pokemons[currentPokemon];
  const flavorText =
    data[0].pokemon_v2_pokemonspeciesflavortexts[0].flavor_text;
  const replacedFlavorText = flavorText.replace(/\n|\f|\t/g, " ");
  const pokemonInfo = getPokemonInfo();

  return isPending ? (
    <SpriteLoader
      handleClickClosePKInfo={handleClickClosePKInfo}
      handleClearSpriteSettings={handleClearSpriteSettings}
    />
  ) : (
    <div className="bg-slate-300 overflow-y-scroll text-white flex flex-col poke-info">
      <button
        onClick={() => {
          handleClickClosePKInfo();
          handleClearSpriteSettings();
        }}
        className="minimize-button"
      >
        {/* fixed right-0 bg-white rounded-full text-black z-50 w-10 h-10
        inline-flex justify-center items-center text-2xl m-4 */}
        <HiOutlineChevronDown />
      </button>
      <PokeInfoSprite
        sprites={currentPokemonResults}
        spriteSettings={spriteSettings}
        handleShinyToggle={handleShinyToggle}
        handleReverseSprite={handleReverseSprite}
        spriteRef={spriteRef}
        handleGenderToggle={handleGenderToggle}
      />

      <h3 className="pokeID">
        N.º
        {data[0].pokemon_v2_pokemons[0].pokeID}
      </h3>
      <div className="info-box poke-info-misc">
        <div className="poke-info-name">
          <h1 className="text-center info-title">{pokemonInfo.name}</h1>
        </div>
        <div className="flex justify-center items-center poke-info-types info-title">
          <span
            className={`type-badge bg-${pokemonInfo.typeOne} flex items-center justify-center`}
          >
            {pokemonInfo.typeOne}
          </span>
          {pokemonInfo.typeTwo && (
            <span
              className={`type-badge bg-${pokemonInfo.typeTwo} flex items-center justify-center`}
            >
              {pokemonInfo.typeTwo}
            </span>
          )}
        </div>
        <div className="flex justify-between poke-info-weight-height ">
          <div className="w-1/2 text-center info-title">
            <h2 className="inline ">Height: </h2>
            <p className="inline">{pokemonInfo.height}</p>
          </div>
          <div className="w-1/2 text-center info-title">
            <h2 className="inline">Weight: </h2>
            <p className="inline">{pokemonInfo.weight}</p>
          </div>
        </div>
      </div>
      <div className="info-box poke-info-description ">
        <h2 className="info-title text-center">Description</h2>
        <p className="info-value">{replacedFlavorText}</p>
      </div>
      <Stats stats={data[0].pokemon_v2_pokemons[currentPokemon]} />
      <Variants
        pokemons={data}
        currentPokemon={currentPokemon}
        handleVariantClick={handleVariantClick}
      />
      <EvolutionChain
        spriteRef={spriteRef}
        evolutionChain={data[0]}
        refetchQuery={refetchQuery}
        handleVariantClick={handleVariantClick}
      />
      <form
        method="dialog"
        className="dialog-backdrop"
        onClick={handleClickClosePKInfo}
      ></form>
    </div>
  );
}

// bg-normal: "#A8A878",
// bg-fire: "#F08030",
// bg-water: "#6890F0",
// bg-electric: "#F8D030",
// bg-grass: "#78C850",
// bg-ice: "#98D8D8",
// bg-fighting: "#C03028",
// bg-poison: "#A040A0",
// bg-ground: "#E0C068",
// bg-flying: "#A890F0",
// bg-psychic: "#F85888",
// bg-bug: "#A8B820",
// bg-rock: "#B8A038",
// bg-ghost: "#705898",
// bg-dragon: "#7038F8",
// bg-dark: "#705848",
// bg-steel: "#B8B8D0",
// bg-fairy: "#EE99AC"
