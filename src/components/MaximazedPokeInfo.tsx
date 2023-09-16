import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineChevronDown,
  HiRefresh,
  HiOutlineSparkles,
  HiOutlineSwitchHorizontal,
} from "react-icons/hi";

export default function MaximazedPokeInfo({
  handleClickMinimize,
  selectedSpecies,
  isVariant,
  handleVariantToggle,
}: {
  handleClickMinimize: () => void;
  handleVariantToggle: () => void;
  isVariant: boolean;
  selectedSpecies: PokemonSpecies | undefined;
}) {
  const [spriteSettings, setSpriteSettings] = useState({
    facingFront: true,
    isShiny: false,
    isFemale: false,
  });
  const [isLoading, setIsLoading] = useState(true);

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

  function checkVariant(species: PokemonSpecies) {
    let hasVariant = false;
    if (species.varieties.length - 1 > 0) {
      hasVariant = true;
    }
    return hasVariant;
  }

  function handleReverseSprite() {
    setSpriteSettings({
      ...spriteSettings,
      facingFront: !spriteSettings.facingFront,
    });
  }

  function handleShinyToggle() {
    setSpriteSettings({
      ...spriteSettings,
      isShiny: !spriteSettings.isShiny,
    });
  }

  function createSpriteString(
    isShiny: boolean,
    isMale: boolean,
    isFacingFront: boolean
  ) {
    let spriteString = "";
    if (selectedPoke.current) {
      if (!isFacingFront) {
        if (isShiny && isMale) {
          spriteString = selectedPoke.current.sprites.back_shiny ?? "";
        } else if (isShiny && !isMale) {
          spriteString = selectedPoke.current.sprites.back_shiny_female ?? "";
        } else if (isMale) {
          spriteString = selectedPoke.current.sprites.back_default ?? "";
        } else {
          spriteString = selectedPoke.current.sprites.back_female ?? "";
        }
      } else {
        if (isShiny && isMale) {
          spriteString = selectedPoke.current.sprites.front_shiny ?? "";
        } else if (isShiny && !isMale) {
          spriteString = selectedPoke.current.sprites.front_shiny_female ?? "";
        } else if (isMale) {
          spriteString = selectedPoke.current.sprites.front_default ?? "";
        } else {
          spriteString = selectedPoke.current.sprites.front_female ?? "";
        }
      }
      return spriteString;
    }
    console.log(selectedPoke.current);
    console.log("Unable to create sprite, selectedPoke is undefined");
  }

  const selectedPoke = useRef<Pokemon>();

  useEffect(() => {
    console.log(isVariant);
    console.log(selectedSpecies?.varieties[1]);
    console.log(selectedSpecies?.varieties[0]);
    setIsLoading(true);
    const api = new PokemonClient();
    if (isVariant && selectedSpecies?.varieties[1]) {
      api
        .getPokemonByName(selectedSpecies.varieties[1].pokemon.name)
        .then((response) => {
          selectedPoke.current = response;
          setIsLoading(false);
        })
        .catch((e) => {
          console.log("error fetching variety sprite");
        });
    } else if (!isVariant && selectedSpecies?.varieties[0]) {
      api
        .getPokemonByName(selectedSpecies.varieties[0].pokemon.name)
        .then((response) => {
          selectedPoke.current = response;
          setIsLoading(false);
        })
        .catch((e) => {
          console.log("error fetching default sprite");
        });
    } else {
      console.log("error on fetch pokeeffect effect");
      setIsLoading(false);
    }
  }, [isVariant, selectedSpecies]);

  if (!isLoading && selectedPoke.current) {
    const spriteString = createSpriteString(
      spriteSettings.isShiny,
      !spriteSettings.isFemale,
      spriteSettings.facingFront
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
              <img className="h-full object-contain" src={spriteString}></img>
              <span
                onClick={shouldReverseGray() ? undefined : handleReverseSprite}
                className={
                  shouldReverseGray()
                    ? "bg-gray-900 rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 left-0"
                    : "bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 left-0"
                }
              >
                <HiRefresh />
              </span>
              <span
                onClick={shouldShinyGray() ? undefined : handleShinyToggle}
                className={
                  shouldShinyGray()
                    ? "bg-gray-900 rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 right-0"
                    : "bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-1/2 right-0"
                }
              >
                <HiOutlineSparkles />
              </span>
              <span
                className="bg-white rounded-full w-6 h-6 inline-flex justify-center items-center absolute top-0 right-1/2"
                onClick={() => {
                  clearSpriteSettings();
                  handleVariantToggle();
                }}
              >
                <HiOutlineSwitchHorizontal />
              </span>
            </div>
            <span className="capitalize font-bold text-lg absolute bottom-0 m-auto text-white">
              {selectedPoke.current.name}
            </span>
          </div>
          <h3 className="text-white">"{}"</h3>
        </div>
      </div>
    );
  } else if (!isLoading && !selectedPoke.current) {
    return (
      <div className="fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black z-40">
        <h3 className="text-white font-bold text-lg">
          error, selectedPoke appears to be undefined
        </h3>
      </div>
    );
  } else {
    return (
      <div className="fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black z-40">
        <h3 className="text-white font-bold text-lg">Loading...</h3>
      </div>
    );
  }
}
