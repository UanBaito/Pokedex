import { HiRefresh, HiOutlineSparkles } from "react-icons/hi";
import { graphql, useFragment } from "react-relay";
import { PokeInfoSpriteFragment$key } from "./__generated__/PokeInfoSpriteFragment.graphql";
import SpriteLoader from "./SpriteLoader";

const PokeInfoSpriteFragment = graphql`
  fragment PokeInfoSpriteFragment on pokemon_v2_pokemon {
    pokemon_v2_pokemonsprites {
      sprites
      pokemon_id
    }
  }
`;

type spriteSettings = {
  facingFront: boolean;
  isShiny: boolean;
  isFemale: boolean;
};

type spritesList = {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
};

export default function PokeInfoSprite({
  sprites,
  spriteSettings,
  handleReverseSprite,
  handleShinyToggle,
}: {
  sprites: PokeInfoSpriteFragment$key;
  spriteSettings: spriteSettings;
  handleReverseSprite: () => void;
  handleShinyToggle: () => void;
}) {
  const data = useFragment(PokeInfoSpriteFragment, sprites);

  if (!data) {
    return;
  }

  const pokeID = data.pokemon_v2_pokemonsprites[0].pokemon_id;
  const spritesList: spritesList = JSON.parse(
    data.pokemon_v2_pokemonsprites[0].sprites
  );

  function shouldReverseGray() {
    if (
      isSpriteAvailable(
        !spriteSettings.facingFront,
        spriteSettings.isShiny,
        spriteSettings.isFemale
      )
    ) {
      return false;
    } else {
      return true;
    }
  }

  function shouldShinyGray() {
    if (
      isSpriteAvailable(
        spriteSettings.facingFront,
        !spriteSettings.isShiny,
        spriteSettings.isFemale
      )
    ) {
      return false;
    } else {
      return true;
    }
  }
  console.log(spriteSettings.isFemale);

  function isSpriteAvailable(
    facingFront: boolean,
    isShiny: boolean,
    isFemale: boolean
  ) {
    console.log("value2: " + isFemale);
    if (!facingFront) {
      if (isShiny && isFemale) {
        console.log("a");
        return spritesList.back_shiny_female;
      } else if (isShiny && !isFemale) {
        console.log("b");
        return spritesList.back_shiny;
      } else if (!isFemale) {
        console.log("c");
        return spritesList.back_default;
      } else {
        console.log("d");
        return spritesList.back_female;
      }
    } else {
      if (isShiny && isFemale) {
        console.log("value: " + isFemale);
        console.log("e");
        return spritesList.front_shiny_female;
      } else if (isShiny && !isFemale) {
        console.log("f");
        return spritesList.front_shiny;
      } else if (!isFemale) {
        console.log("g");
        return spritesList.front_default;
      } else {
        console.log("value: " + isFemale);
        console.log("h");
        return spritesList.front_female;
      }
    }
  }

  function createSpriteString(
    isShiny: boolean,
    isFemale: boolean,
    isFacingFront: boolean,
    sprites: unknown
  ) {
    let spriteString = "";
    if (sprites) {
      if (!isFacingFront) {
        if (isShiny && !isFemale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokeID}.png` ??
            "";
        } else if (isShiny && isFemale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/${pokeID}.png` ??
            "";
        } else if (!isFemale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeID}.png` ??
            "";
        } else {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/${pokeID}.png` ??
            "";
        }
      } else {
        if (isShiny && !isFemale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeID}.png` ??
            "";
        } else if (isShiny && isFemale) {
          spriteString =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokeID}.png` ??
            "";
        } else if (!isFemale) {
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
    spriteSettings.isFemale,
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
              "bg-white text-black text-xl rounded-full w-8 h-8 inline-flex justify-center items-center absolute top-1/2 -left-4 disabled:bg-gray-900"
            }
          >
            <HiRefresh />
          </button>
          <button
            onClick={handleShinyToggle}
            disabled={shouldShinyGray()}
            className={
              "bg-white text-black text-xl rounded-full w-8 h-8 inline-flex justify-center items-center absolute top-1/2 -right-4 disabled:bg-gray-900"
            }
          >
            <HiOutlineSparkles />
          </button>
        </div>
      </div>
    </div>
  );
}
