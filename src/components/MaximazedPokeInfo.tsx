import { PokemonSpecies } from "pokenode-ts";
import { useRef, useState } from "react";
import {
  HiOutlineChevronDown,
  HiRefresh,
  HiOutlineSparkles,
} from "react-icons/hi";
import { PokeInfo } from "./typings";

export default function MaximazedPokeInfo({
  handleClickMinimize,
  selectedPoke,
}: {
  handleClickMinimize: () => void;
  selectedPoke: PokeInfo;
}) {
  const [infoSettings, setInfoSettings] = useState({
    sprite: { hasBack: true, facingFront: true, isShiny: false },
    variants: { hasVariants: false, howManyVariants: 0 },
  });

  function checkVariants(species: PokemonSpecies) {
    let hasVariant = false;
    let howManyVariants = 0;
    if (species.varieties.length - 1 > 0) {
      hasVariant = true;
      for (let i = 0; i < species.varieties.length; i++) {
        howManyVariants++;
      }
      return { variantBoolean: hasVariant, foundVariants: howManyVariants };
    }
    return;
  }

  const spriteString = useRef("");
  const hasBack = useRef(false);

  function handleReverseSprite() {
    setInfoSettings({
      ...infoSettings,
      sprite: {
        ...infoSettings.sprite,
        facingFront: !infoSettings.sprite.facingFront,
      },
    });
  }

  function handleShinyToggle() {
    setInfoSettings({
      ...infoSettings,
      sprite: {
        ...infoSettings.sprite,
        isShiny: !infoSettings.sprite.isShiny,
      },
    });
  }

  if (selectedPoke.pokemon.sprites.back_default) {
    hasBack.current = true;
  }

  function createSpriteString(
    isShiny: boolean,
    isMale: boolean,
    hasBack: boolean,
    isFacingFront: boolean
  ) {
    let spriteString = "";
    if (!isFacingFront && hasBack) {
      if (isShiny && isMale) {
        spriteString =
          selectedPoke.pokemon.sprites.back_shiny ?? "no sprite available";
      } else if (isShiny && !isMale) {
        spriteString =
          selectedPoke.pokemon.sprites.back_shiny_female ??
          "no sprite available";
      } else if (isMale) {
        spriteString =
          selectedPoke.pokemon.sprites.back_default ?? "no sprite available";
      } else {
        spriteString =
          selectedPoke.pokemon.sprites.back_female ?? "no sprite available";
      }
    } else if (isFacingFront) {
      if (isShiny && isMale) {
        spriteString =
          selectedPoke.pokemon.sprites.front_shiny ?? "no sprite available";
      } else if (isShiny && !isMale) {
        spriteString =
          selectedPoke.pokemon.sprites.front_shiny_female ??
          "no sprite available";
      } else if (isMale) {
        spriteString =
          selectedPoke.pokemon.sprites.front_default ?? "no sprite available";
      } else {
        spriteString =
          selectedPoke.pokemon.sprites.front_female ?? "no sprite available";
      }
    } else {
      spriteString = "no sprite available";
    }
    return spriteString;
  }
  spriteString.current = createSpriteString(
    infoSettings.sprite.isShiny,
    true,
    hasBack.current,
    infoSettings.sprite.facingFront
  );
  return (
    <div className="fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black z-40">
      <div
        onClick={handleClickMinimize}
        className="sticky top-2 left-full bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-2"
      >
        <span className="">
          <HiOutlineChevronDown />
        </span>
      </div>

      <div className="flex flex-col m-2">
        <div className="flex justify-center h-44 relative">
          <div className="w-3/5 inline-flex justify-center relative">
            <img
              className="h-full object-contain"
              src={spriteString.current}
            ></img>
            <span
              onClick={handleReverseSprite}
              className="bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 left-0"
            >
              <HiRefresh />
            </span>
            <span
              onClick={handleShinyToggle}
              className="bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 right-0"
            >
              <HiOutlineSparkles />
            </span>
          </div>
          <span className="capitalize font-bold text-lg absolute bottom-0 m-auto text-white">
            {selectedPoke.pokemon.name}
          </span>
        </div>
        <h3 className="text-white">"{}"</h3>
      </div>
    </div>
  );
}
