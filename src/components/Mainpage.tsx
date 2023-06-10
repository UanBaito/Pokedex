import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Pokecard from "./Pokecard";
import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";

let pokemonList: NamedAPIResourceList | object = {};

export default function Mainpage() {
  const [pokeState, setPokestate] = useState<Pokemon>();
  const [SearchState, setSearchState] = useState("");

  useEffect(() => {
    const api = new PokemonClient();
    const pokemon = api.listPokemons();
    pokemon
      .then((response) => {
        pokemonList = response;
      })
      .catch(() => console.log("error"));
  }, []);

  return (
    <div>
      <Navbar />
      <label>
        searchbar:{" "}
        <input
          name="searchbar"
          value={SearchState}
          onChange={(e) => setSearchState(e.target.value)}
        />
      </label>
      <Pokecard pokeState={pokeState} />
    </div>
  );
}
