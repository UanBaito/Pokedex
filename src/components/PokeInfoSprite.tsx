import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { useState } from "react";
import {
  HiRefresh,
  HiOutlineSparkles,
  HiOutlineSwitchHorizontal,
} from "react-icons/hi";
import { graphql, useFragment } from "react-relay";
import { PokeInfoSpriteFragment$key } from "./__generated__/PokeInfoSpriteFragment.graphql";

const PokeInfoSpriteFragment = graphql`
  fragment PokeInfoSpriteFragment on pokemon_v2_pokemon {
    pokemon_v2_pokemonsprites {
      sprites
      pokemon_id
    }
  }
`;

export default function PokeInfoSprite({
  sprites,
}: {
  sprites: PokeInfoSpriteFragment$key;
}) {
  const data = useFragment(PokeInfoSpriteFragment, sprites);
  const [spriteSettings, setSpriteSettings] = useState({
    facingFront: true,
    isShiny: false,
    isFemale: false,
  });

  let spritesList: any;
  let pokeID: number | null;

  if (data) {
    pokeID = data.pokemon_v2_pokemonsprites[0].pokemon_id;
    spritesList = JSON.parse(data.pokemon_v2_pokemonsprites[0].sprites);
  }

  let spriteString: string | undefined = "";

  function shouldReverseGray() {
    if (
      createSpriteString(
        spriteSettings.isShiny,
        !spriteSettings.isFemale,
        !spriteSettings.facingFront,
        spritesList
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
        spriteSettings.facingFront,
        spritesList
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

  // function checkVariant() {
  //   let hasVariant = false;
  //   if (selectedSpecies && selectedSpecies.varieties.length - 1 > 0) {
  //     hasVariant = true;
  //   }
  //   return hasVariant;
  // }

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
    isFacingFront: boolean,
    sprites: any
  ) {
    let spriteString = "";
    if (sprites) {
      if (!isFacingFront) {
        if (isShiny && isMale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokeID}.png` ??
            "";
        } else if (isShiny && !isMale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/${pokeID}.png` ??
            "";
        } else if (isMale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeID}.png` ??
            "";
        } else {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/${pokeID}.png` ??
            "";
        }
      } else {
        if (isShiny && isMale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeID}.png` ??
            "";
        } else if (isShiny && !isMale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokeID}.png` ??
            "";
        } else if (isMale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png` ??
            "";
        } else {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokeID}.png` ??
            "";
        }
      }
      return spriteString;
    }
  }

  spriteString = createSpriteString(
    spriteSettings.isShiny,
    !spriteSettings.isFemale,
    spriteSettings.facingFront,
    spritesList
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
        </div>
      </div>
      <h3 className="text-white">"{}"</h3>
    </div>
  );
}
