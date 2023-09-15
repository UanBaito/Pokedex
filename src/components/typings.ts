import { Pokemon, PokemonSpecies } from "pokenode-ts";

export type PokeInfo = {
  pokemon: Pokemon;
  species: PokemonSpecies;
};

export type InfoSettings = {
  sprite: { hasBack: true; facingFront: true; isShiny: false };
};

export type PokeCardClickHandler = (
  e: EventTarget,
  pokemonData: React.MutableRefObject<Pokemon | undefined>,
  pokemonSpeciesData: React.MutableRefObject<PokemonSpecies | undefined>
) => void;
