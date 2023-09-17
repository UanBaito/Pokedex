import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { useEffect, useRef, useState } from "react";

export default function MaximazedPokeInfo({
  handleClickMinimize,
  isVariant,
  selectedPoke,
  handleVariantToggle,
}: {
  handleClickMinimize: () => void;
  handleVariantToggle: () => void;
  selectedPoke: Pokemon;
  isVariant: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const name = selectedPoke.name;
  const pokemonSpecies = useRef<PokemonSpecies>();
  useEffect(() => {
    const api = new PokemonClient();
    api
      .getPokemonSpeciesByName(`${name}`)
      .then((response) => {
        pokemonSpecies.current = response;
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
        setIsLoading(false);
      });
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed overflow-y-scroll bottom-0 left-0 w-full h-full bg-gray-800 z-40">
      <button
        onClick={handleClickMinimize}
        className="absolute top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
      >
        <HiOutlineChevronDown />
      </button>
      <PokeInfoSprite
        selectedSpecies={pokemonSpecies.current}
        isVariant={isVariant}
        handleVariantToggle={handleVariantToggle}
      />
    </div>
  );
}
