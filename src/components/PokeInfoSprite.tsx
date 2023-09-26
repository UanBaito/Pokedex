import { HiRefresh, HiOutlineSparkles } from "react-icons/hi";
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
  spriteSettings,
  handleReverseSprite,
  handleShinyToggle,
}: {
  sprites: PokeInfoSpriteFragment$key;
  spriteSettings: any;
  handleReverseSprite: () => void;
  handleShinyToggle: () => void;
}) {
  const data = useFragment(PokeInfoSpriteFragment, sprites);

  if (!data) {
    return;
  }

  const pokeID = data.pokemon_v2_pokemonsprites[0].pokemon_id;
  const spritesList = JSON.parse(data.pokemon_v2_pokemonsprites[0].sprites);

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

  function createSpriteString(
    isShiny: boolean,
    isMale: boolean,
    isFacingFront: boolean,
    sprites: unknown
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

  const spriteString = createSpriteString(
    spriteSettings.isShiny,
    !spriteSettings.isFemale,
    spriteSettings.facingFront,
    spritesList
  );

  return (
    <div className="flex flex-col ">
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
    </div>
  );
}
