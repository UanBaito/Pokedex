import { HiRefresh, HiOutlineSparkles, HiAdjustments } from "react-icons/hi";
import { graphql, useFragment } from "react-relay";
import { PokeInfoSpriteFragment$key } from "./__generated__/PokeInfoSpriteFragment.graphql";
import { useState } from "react";

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
  spriteRef,
  handleGenderToggle,
}: {
  sprites: PokeInfoSpriteFragment$key;
  spriteSettings: spriteSettings;
  handleReverseSprite: () => void;
  handleShinyToggle: () => void;
  spriteRef: React.MutableRefObject<null | HTMLDivElement>;
  handleGenderToggle: () => void;
}) {
  const data = useFragment(PokeInfoSpriteFragment, sprites);
  const [isOpen, setIsOpen] = useState(false);

  if (!data) {
    return;
  }

  const pokeID = data.pokemon_v2_pokemonsprites[0].pokemon_id;
  const spritesList: spritesList = JSON.parse(
    data.pokemon_v2_pokemonsprites[0].sprites
  );

  function rotate180() {
    const icon = document.getElementById("rotate-icon");
    if (icon) {
      icon.classList.add("rotate180");
      icon.addEventListener("animationend", () => {
        icon.classList.remove("rotate180");
      });
    }
  }

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

  function shouldGenderGray() {
    if (
      isSpriteAvailable(
        spriteSettings.facingFront,
        spriteSettings.isShiny,
        !spriteSettings.isFemale
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

  function isSpriteAvailable(
    facingFront: boolean,
    isShiny: boolean,
    isFemale: boolean
  ) {
    if (!facingFront) {
      if (isShiny && isFemale) {
        return spritesList.back_shiny_female;
      } else if (isShiny && !isFemale) {
        return spritesList.back_shiny;
      } else if (!isFemale) {
        return spritesList.back_default;
      } else {
        return spritesList.back_female;
      }
    } else {
      if (isShiny && isFemale) {
        return spritesList.front_shiny_female;
      } else if (isShiny && !isFemale) {
        return spritesList.front_shiny;
      } else if (!isFemale) {
        return spritesList.front_default;
      } else {
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
    <div className="poke-info-sprite info-box" ref={spriteRef}>
      <button
        className="poke-info-spritesettings-button"
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <HiAdjustments />
      </button>

      <div
        className={`settings-buttons ${isOpen ? "settings-buttons-open" : ""}`}
      >
        <button
          onClick={handleGenderToggle}
          disabled={shouldGenderGray()}
          className={`poke-info-sprite-button gender-toggle ${
            spriteSettings.isFemale ? "female" : "male"
          }`}
        ></button>

        <button
          onClick={() => {
            handleReverseSprite();
            rotate180();
          }}
          disabled={shouldReverseGray()}
          className={"poke-info-sprite-button"}
        >
          <div id="rotate-icon">
            <HiRefresh />
          </div>
        </button>
        <button
          onClick={handleShinyToggle}
          disabled={shouldShinyGray()}
          className={`poke-info-sprite-button ${
            spriteSettings.isShiny ? "shiny-toggle" : ""
          }`}
        >
          <HiOutlineSparkles />
        </button>
      </div>

      <img
        className="poke-info-sprite-img"
        src={spriteString}
        onError={(e) => {
          e.currentTarget.src = "/static-assets-upload497003337259914719.webp";
        }}
      ></img>
    </div>
  );
}
