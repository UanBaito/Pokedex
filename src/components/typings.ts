import { Pokemon, PokemonSpecies } from "pokenode-ts";

export type PokeInfo = {
  pokemon: Pokemon;
  species: PokemonSpecies;
};

export type InfoSettings = {
  sprite: { hasBack: true; facingFront: true; isShiny: false };
};

export type PokeCardClickHandler = (pokemonData: Pokemon | undefined) => void;

export type SpriteHas = {
  shiny: false;
  female: false;
  shinyPlusFemale: false;
};
