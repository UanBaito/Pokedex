import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { graphql, useFragment } from "react-relay";
import { MaximazedPokeInfoFragment$key } from "./__generated__/MaximazedPokeInfoFragment.graphql";
import { useState } from "react";
import Stats from "./Stats";
import SpriteLoader from "./SpriteLoader";

const MaximazedPokeInfoFragment = graphql`
  fragment MaximazedPokeInfoFragment on pokemon_v2_pokemonspecies
  @relay(plural: true) {
    pokemon_v2_pokemons {
      name
      height
      weight
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
  }
`;

export default function MaximazedPokeInfo({
  mainPokeQueryResults,
  handleClickClosePKInfo,

  isPending,
}: {
  mainPokeQueryResults: MaximazedPokeInfoFragment$key;
  handleClickClosePKInfo: () => void;

  isPending: boolean;
}) {
  const data = useFragment(MaximazedPokeInfoFragment, mainPokeQueryResults);
  const [spriteSettings, setSpriteSettings] = useState({
    facingFront: true,
    isShiny: false,
    isFemale: false,
  });

  function handleReverseSprite() {
    setSpriteSettings((prevState) => ({
      ...prevState,
      facingFront: !prevState.facingFront,
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
    const dataResults = data[0].pokemon_v2_pokemons[0];

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
      <>
        <div className="relative bg-slate-300 text-white poke-info-loading">
          <span className="loading loading-spinner loading-lg"></span>

          <button
            onClick={() => {
              handleClickClosePKInfo();
              handleClearSpriteSettings();
            }}
            className="minimize-button fixed right-0 top-0 bg-white rounded-full text-black z-50 w-10 h-10 inline-flex justify-center items-center text-2xl m-4"
          >
            <HiOutlineChevronDown />
          </button>
        </div>

        <form
          method="dialog"
          className="dialog-backdrop"
          onClick={handleClickClosePKInfo}
        ></form>
      </>
    );
  }
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
        className="minimize-button fixed right-0 bg-white rounded-full text-black z-50 w-10 h-10 inline-flex justify-center items-center text-2xl m-4"
      >
        <HiOutlineChevronDown />
      </button>

      <>
        <PokeInfoSprite
          sprites={data[0].pokemon_v2_pokemons[0]}
          spriteSettings={spriteSettings}
          handleShinyToggle={handleShinyToggle}
          handleReverseSprite={handleReverseSprite}
        />
        <div className="self-center poke-info-name">
          <h1 className="text-center info-title info-box">
            {pokemonInfo.name}
          </h1>
        </div>
        <div className="flex justify-center items-center poke-info-types info-box">
          <span className={`type-badge bg-${pokemonInfo.typeOne}`}>
            {pokemonInfo.typeOne}
          </span>
          {pokemonInfo.typeTwo && (
            <span className={`type-badge bg-${pokemonInfo.typeTwo}`}>
              {pokemonInfo.typeTwo}
            </span>
          )}
        </div>
        <div className="p-1 m-1 border flex justify-between poke-info-weight-height info-box">
          <div className="w-1/2">
            <h2 className="inline info-title">Height: </h2>
            <p className="inline info-value">{pokemonInfo.height}</p>
          </div>
          <div className="w-1/2 text-right">
            <h2 className="inline  info-title">Weight: </h2>
            <p className="inline info-value">{pokemonInfo.weight}</p>
          </div>
        </div>
        <div className="info-box poke-info-description ">
          <h2 className="font-semibold mb-1 ">Description</h2>
          <p className="info-value">{replacedFlavorText}</p>
        </div>

        <Stats stats={data[0].pokemon_v2_pokemons[0]} />
        <form
          method="dialog"
          className="dialog-backdrop"
          onClick={handleClickClosePKInfo}
        ></form>
      </>
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
