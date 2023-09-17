import { PokemonSpecies } from "pokenode-ts";
import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";

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
  return (
    <div className="fixed overflow-y-scroll bottom-0 left-0 w-full h-full bg-gray-800 z-40">
      <div
        onClick={handleClickMinimize}
        className="absolute top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
      >
        <HiOutlineChevronDown />
      </div>
      <PokeInfoSprite
        selectedSpecies={selectedSpecies}
        isVariant={isVariant}
        handleVariantToggle={handleVariantToggle}
      />
    </div>
  );
}
