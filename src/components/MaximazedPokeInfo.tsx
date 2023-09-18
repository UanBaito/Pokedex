import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { HiOutlineChevronDown } from "react-icons/hi";
import PokeInfoSprite from "./PokeInfoSprite";
import { useEffect, useLayoutEffect, useState } from "react";

export default function MaximazedPokeInfo({
  handleClickMinimize,
  isVariant,
  selectedPoke,
  handleVariantToggle,
  isMinimized,
}: {
  handleClickMinimize: () => void;
  handleVariantToggle: () => void;
  selectedPoke: Pokemon;
  isVariant: boolean;
  isMinimized: boolean;
}) {
  const [isSpeciesLoading, setIsSpeciesLoading] = useState(true);
  const [isVariantLoading, setVariantIsLoading] = useState(true);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useLayoutEffect(() => {
    const fetchSpecies = async () => {
      setIsSpeciesLoading(true);
      console.log("species loading");
      const api = new PokemonClient();
      await api
        .getPokemonSpeciesByName(`${selectedPoke.name}`)
        .then((response) => {
          setPokemonSpecies(response);
          setIsSpeciesLoading(false);
        })
        .catch((err) => {
          console.log(`error: ${err}`);
          setIsSpeciesLoading(false);
        });
    };
    fetchSpecies();
  }, [selectedPoke]);

  useLayoutEffect(() => {
    const fetchVariant = async () => {
      setVariantIsLoading(true);
      const api = new PokemonClient();
      if (isVariant && pokemonSpecies) {
        await api
          .getPokemonByName(pokemonSpecies.varieties[1].pokemon.name)
          .then((response) => {
            setPokemon(response);
            setVariantIsLoading(false);
          })
          .catch((err) => {
            console.log(`error: ${err}`);
            setVariantIsLoading(false);
          });
      } else {
        setPokemon(selectedPoke);
        console.log("elpepe");
        setVariantIsLoading(false);
      }
    };

    fetchVariant();
  }, [isVariant, pokemonSpecies, selectedPoke]);

  if (isSpeciesLoading || !pokemonSpecies || isVariantLoading || !pokemon) {
    return (
      <>
        <div
          className={
            "fixed overflow-y-scroll bottom-0 left-0 w-full h-full bg-gray-800 z-40 " +
            (isMinimized ? "hidden" : "")
          }
        >
          Loading...
          <button
            onClick={handleClickMinimize}
            className="absolute top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
          >
            <HiOutlineChevronDown />
          </button>
        </div>
      </>
    );
  }
  return (
    <div
      className={
        "fixed overflow-y-scroll bottom-0 left-0 w-full h-full bg-gray-800 z-40 " +
        (isMinimized ? "hidden" : "")
      }
    >
      <button
        onClick={handleClickMinimize}
        className="absolute top-0 right-0 bg-white rounded-full z-50 w-6 h-6 inline-flex justify-center items-center m-4"
      >
        <HiOutlineChevronDown />
      </button>
      <PokeInfoSprite
        pokemon={pokemon}
        selectedSpecies={pokemonSpecies}
        isVariant={isVariant}
        handleVariantToggle={handleVariantToggle}
      />
    </div>
  );
}
