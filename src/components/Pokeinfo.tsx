import { Pokemon, PokemonSpecies } from "pokenode-ts";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import MinimizedPokeInfo from "./MinimizedPokeInfo";
import { useState } from "react";

export default function Pokeinfo({
  selectedPoke,
  selectedSpecies,
  isMinimized,
  handleClickMaximize,
  handleClickMinimize,
}: {
  selectedPoke: Pokemon;
  selectedSpecies: PokemonSpecies | undefined;
  isMinimized: boolean;
  setSelectedPoke: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  handleClickMaximize: () => void;
  handleClickMinimize: () => void;
}) {
  const [isVariant, setIsVariant] = useState(false);

  function handleVariantToggle() {
    setIsVariant(!isVariant);
  }

  return (
    <>
      {isMinimized ? (
        <MinimizedPokeInfo
          handleClickMaximize={handleClickMaximize}
          selectedPoke={selectedPoke}
        />
      ) : (
        <MaximazedPokeInfo
          isVariant={isVariant}
          handleVariantToggle={handleVariantToggle}
          selectedSpecies={selectedSpecies}
          handleClickMinimize={handleClickMinimize}
        />
      )}
    </>
  );
}
