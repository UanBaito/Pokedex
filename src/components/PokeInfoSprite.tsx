import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { useState } from "react";
import {
  HiRefresh,
  HiOutlineSparkles,
  HiOutlineSwitchHorizontal,
} from "react-icons/hi";

export default function PokeInfoSprite({
  selectedSpecies,
  handleVariantToggle,
  pokemon,
}: {
  handleVariantToggle: () => void;
  isVariant: boolean;
  selectedSpecies: PokemonSpecies | undefined;
  pokemon: Pokemon | undefined;
}) {
  const [spriteSettings, setSpriteSettings] = useState({
    facingFront: true,
    isShiny: false,
    isFemale: false,
  });

  let spriteString: string | undefined = "";

  function shouldReverseGray() {
    if (
      createSpriteString(
        spriteSettings.isShiny,
        !spriteSettings.isFemale,
        !spriteSettings.facingFront
      )
    ) {
      return false;
    } else {
      return true;
    }
  }

  function shouldShinyGray() {
    if (
      createSpriteString(
        !spriteSettings.isShiny,
        !spriteSettings.isFemale,
        spriteSettings.facingFront
      )
    ) {
      return false;
    } else {
      return true;
    }
  }

  function clearSpriteSettings() {
    setSpriteSettings({
      facingFront: true,
      isShiny: false,
      isFemale: false,
    });
  }

  function checkVariant() {
    let hasVariant = false;
    if (selectedSpecies && selectedSpecies.varieties.length - 1 > 0) {
      hasVariant = true;
    }
    return hasVariant;
  }

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

  function createSpriteString(
    isShiny: boolean,
    isMale: boolean,
    isFacingFront: boolean
  ) {
    let spriteString = "";
    if (pokemon) {
      if (!isFacingFront) {
        if (isShiny && isMale) {
          spriteString = pokemon.sprites.back_shiny ?? "";
        } else if (isShiny && !isMale) {
          spriteString = pokemon.sprites.back_shiny_female ?? "";
        } else if (isMale) {
          spriteString = pokemon.sprites.back_default ?? "";
        } else {
          spriteString = pokemon.sprites.back_female ?? "";
        }
      } else {
        if (isShiny && isMale) {
          spriteString = pokemon.sprites.front_shiny ?? "";
        } else if (isShiny && !isMale) {
          spriteString = pokemon.sprites.front_shiny_female ?? "";
        } else if (isMale) {
          spriteString = pokemon.sprites.front_default ?? "";
        } else {
          spriteString = pokemon.sprites.front_female ?? "";
        }
      }
      return spriteString;
    }
  }

  spriteString = createSpriteString(
    spriteSettings.isShiny,
    !spriteSettings.isFemale,
    spriteSettings.facingFront
  );

  return (
    <div className="flex flex-col my-4">
      <div className="flex justify-center h-44 relative">
        <div className="w-3/5 inline-flex justify-center relative">
          <img className="h-full object-contain" src={spriteString}></img>
          <button
            onClick={handleReverseSprite}
            disabled={shouldReverseGray()}
            className={
              "bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 -left-2 disabled:bg-gray-900"
            }
          >
            <HiRefresh />
          </button>
          <button
            onClick={handleShinyToggle}
            disabled={shouldShinyGray()}
            className={
              "bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 -right-2 disabled:bg-gray-900"
            }
          >
            <HiOutlineSparkles />
          </button>
          <button
            className={
              "bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute -top-2 disabled:bg-gray-900"
            }
            onClick={() => {
              if (checkVariant()) {
                clearSpriteSettings();
                handleVariantToggle();
              }
            }}
            disabled={!checkVariant()}
          >
            <HiOutlineSwitchHorizontal />
          </button>
        </div>
      </div>
      <h3 className="text-white">"{}"</h3>
    </div>
  );
}
