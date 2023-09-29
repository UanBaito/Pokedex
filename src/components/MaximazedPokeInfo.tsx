import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { graphql, useFragment } from "react-relay";
import { MaximazedPokeInfoFragment$key } from "./__generated__/MaximazedPokeInfoFragment.graphql";
import { useRef, useState } from "react";
import Stats from "./Stats";

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
  isPokeInfoClosed,
  isPending,
  handleBackdropClick,
}: {
  mainPokeQueryResults: MaximazedPokeInfoFragment$key;
  handleClickClosePKInfo: () => void;
  isPokeInfoClosed: boolean;
  isPending: boolean;
  handleBackdropClick: any;
}) {
  const data = useFragment(MaximazedPokeInfoFragment, mainPokeQueryResults);
  const [spriteSettings, setSpriteSettings] = useState({
    facingFront: true,
    isShiny: false,
    isFemale: false,
  });
  const backdropRefernce = useRef(null);

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

  if (!data[0]) {
    return;
  }

  const flavorText =
    data[0].pokemon_v2_pokemonspeciesflavortexts[0].flavor_text;
  const replacedFlavorText = flavorText.replace(/\n|\f|\t/g, " ");

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

  const pokemonInfo = getPokemonInfo();

  return (
    <div
      id="pokeInfoBgID"
      ref={backdropRefernce}
      onClick={(e) => {
        handleBackdropClick(e, backdropRefernce);
      }}
      className={
        "fixed w-screen top-0 h-screen bg-transparent z-30" +
        (isPokeInfoClosed ? " hidden" : "")
      }
    >
      <div
        className={
          "slide_down poke-info fixed top-0 h-full w-full bg-gray-800 z-40 overflow-y-scroll text-white flex flex-col max-w-5xl" +
          (isPokeInfoClosed ? " hidden" : "")
        }
      >
        <button
          onClick={() => {
            handleClickClosePKInfo();
            handleClearSpriteSettings();
          }}
          className="minimize-button fixed top-0 right-0 bg-white rounded-full text-black z-50 w-10 h-10 inline-flex justify-center items-center m-4 text-2xl"
        >
          <HiOutlineChevronDown />
        </button>
        {isPending ? (
          <div className="relative flex justify-center w-full h-full">
            <span className="loading loading-spinner loading-lg self-center"></span>
          </div>
        ) : (
          <>
            <PokeInfoSprite
              sprites={data[0].pokemon_v2_pokemons[0]}
              spriteSettings={spriteSettings}
              handleShinyToggle={handleShinyToggle}
              handleReverseSprite={handleReverseSprite}
            />
            <div className="self-center">
              <h1 className="capitalize mb-2 font-bold text-primary text-lg">
                {pokemonInfo.name}
              </h1>
            </div>
            <div className="flex justify-center ">
              <span className={`type-badge bg-${pokemonInfo.typeOne}`}>
                {pokemonInfo.typeOne}
              </span>
              {pokemonInfo.typeTwo && (
                <span className={`type-badge bg-${pokemonInfo.typeTwo}`}>
                  {pokemonInfo.typeTwo}
                </span>
              )}
            </div>
            <div className="bg-black bg-opacity-30 p-1 m-1 border flex justify-between">
              <div className="w-1/2">
                <h2 className="inline text-secondary font-semibold">
                  Height:{" "}
                </h2>
                <p className="inline">{pokemonInfo.height}</p>
              </div>
              <div className="w-1/2 text-right">
                <h2 className="inline text-secondary font-semibold">
                  Weight:{" "}
                </h2>
                <p className="inline">{pokemonInfo.weight}</p>
              </div>
            </div>
            <div className="info-box">
              <h2 className="font-semibold mb-1 text-secondary ">
                Description
              </h2>
              <p className="info-box">{replacedFlavorText}</p>
            </div>

            <Stats stats={data[0].pokemon_v2_pokemons[0]} />
          </>
        )}
      </div>
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
