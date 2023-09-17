import { Pokemon } from "pokenode-ts";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import MinimizedPokeInfo from "./MinimizedPokeInfo";

export default function Pokeinfo({
  isVariant,
  selectedPoke,
  isMinimized,
  handleVariantToggle,
  handleClickMaximize,
  handleClickMinimize,
}: {
  isVariant: boolean;
  selectedPoke: Pokemon;
  isMinimized: boolean;
  setSelectedPoke: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  handleVariantToggle: () => void;
  handleClickMaximize: () => void;
  handleClickMinimize: () => void;
}) {
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
          selectedPoke={selectedPoke}
          handleClickMinimize={handleClickMinimize}
        />
      )}
    </>
  );
}
