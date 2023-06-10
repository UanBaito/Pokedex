import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";
import Pokelist from "./PokeList";

export default function Mainpage() {
  const [SearchState, setSearchState] = useState("");

  const pokemonList = useRef<NamedAPIResourceList>();

  useEffect(() => {
    const api = new PokemonClient();
    const pokemon = api.listPokemons();
    pokemon
      .then((response) => {
        pokemonList.current = response;
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
      <Pokelist pokemonList={pokemonList} />
    </div>
  );
}
