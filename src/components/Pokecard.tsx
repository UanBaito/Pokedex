import { PokeCardClickHandler } from "./typings";
import { graphql, useFragment } from "react-relay";
import { PokecardFragment$key } from "./__generated__/PokecardFragment.graphql";

const PokecardFragment = graphql`
  fragment PokecardFragment on pokemon_v2_pokemon {
    name
    pokeID: id
    pokemon_v2_pokemontypes {
      slot
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonspecy {
      name
    }
  }
`;

export default function Pokecard({
  handlePokecardClick,
  pokemon,
}: {
  handlePokecardClick: PokeCardClickHandler;
  pokemon: PokecardFragment$key;
}) {
  const pokemonData = useFragment(PokecardFragment, pokemon);
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.pokeID}.png`;
  const typeOne = pokemonData.pokemon_v2_pokemontypes[0].pokemon_v2_type?.name;
  const typeOneString = `/types/${typeOne}.svg`;
  let typeTwo: undefined | string;
  let typeTwoString: undefined | string;

  // const pokemonRef = useRef<HTMLDivElement>(null);
  // const hasExecutedRef = useRef(false);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "10px",
  //     threshold: 0,
  //   };
  //   const observer = new IntersectionObserver(handleIntersection, options);
  //   if (pokemonRef.current) {
  //     observer.observe(pokemonRef.current);
  //   }
  // }, [pokemonRef]);

  // function handleIntersection(entries: IntersectionObserverEntry[]) {
  //   if (hasExecutedRef.current) {
  //     return;
  //   }
  //   entries.forEach((entry: IntersectionObserverEntry) => {
  //     if (entry.isIntersecting) {
  //       pokemonRef.current?.classList.add("slide_left");
  //       hasExecutedRef.current = true;
  //     }
  //   });
  //   return;
  // }

  if (pokemonData.pokemon_v2_pokemontypes[1]) {
    typeTwo = pokemonData.pokemon_v2_pokemontypes[1].pokemon_v2_type?.name;
    typeTwoString = `/types/${typeTwo}.svg`;
  }
  return (
    <li
      tabIndex={0}
      className={`relative grid justify-center grid-flow-col p-2 grid-cols-6 grid-rows-6 shadow-2xl h-52 mx-6 my-2 cursor-pointer poke-card bg-slate-300 border-4 hover:scale-105`}
      onClick={() => {
        handlePokecardClick(pokemonData.pokemon_v2_pokemonspecy?.name ?? "");
      }}
      // onKeyDown={() => {
      //   handlePokecardClick(pokemonData.pokemon_v2_pokemonspecy?.name ?? "");
      // }}
      // ref={pokemonRef}
    >
      <div className="relative col-span-4 row-span-5 col-start-2 flex justify-center">
        <img
          loading="lazy"
          src={sprite}
          className="z-10 h-40 w-40 object-cover text-transparent"
          alt={pokemonData.pokemon_v2_pokemonspecy?.name ?? "???"}
        ></img>
        <img
          src="/pokeball.svg"
          className="bg-transparent absolute h-full opacity-40"
        ></img>
      </div>
      <span className=" col-span-4 row-span-2 row-start-6 col-start-2 flex justify-center">
        <h1 className="align-middle inline-block text-center capitalize font-bold text-lg px-2 font-mono bg-slate-500 shadow-2xl text-white ">
          {pokemonData.pokemon_v2_pokemonspecy?.name ?? "???"}
        </h1>
      </span>
      <span className="absolute col-span-1 row-start-3">
        <h2 className="shadow-lg outline outline-1 bg-opacity-50 px-1 bg-white inline leading-5">
          N.º
          {pokemonData.pokeID}
        </h2>
      </span>

      <div className="col-start-6 row-start-1 row-span-3 col-span-3 flex justify-end min-h-12 min-w-min">
        <div
          className={`rounded-full shadow-black  outline outline-1 bg-${typeOne} h-12 w-12 self-center`}
        >
          <img
            src={typeOneString}
            alt={typeOne}
            className="z-10 h-auto p-2 "
          ></img>
        </div>
      </div>

      {typeTwo ? (
        <div className="col-start-6 row-start-4 row-span-3 col-span-3 flex justify-end min-w-min">
          <div
            className={`rounded-full shadow-black  outline outline-1 bg-${typeTwo} h-12 w-12`}
          >
            <img
              src={typeTwoString}
              alt={typeTwo}
              className="z-10 h-auto p-2 "
            ></img>
          </div>
        </div>
      ) : (
        ""
      )}
    </li>
  );

  /**
   * With dynamic classnames, Tailwind needs the class to be mentioned,
   * even if it is in a comment, to properly load the style.
   * 
   *  bg-normal: "#A8A878",
      bg-fire: "#F08030",
      bg-water: "#6890F0",
      bg-electric: "#F8D030",
      bg-grass: "#78C850",
      bg-ice: "#98D8D8",
      bg-fighting: "#C03028",
      bg-poison: "#A040A0",
      bg-ground: "#E0C068",
      bg-flying: "#A890F0",
      bg-psychic: "#F85888",
      bg-bug: "#A8B820",
      bg-rock: "#B8A038",
      bg-ghost: "#705898",
      bg-dragon: "#7038F8",
      bg-dark: "#705848",
      bg-steel: "#B8B8D0",
      bg-fairy: "#EE99AC" 
      
      from-normal: "#A8A878",
      from-fire: "#F08030",
      from-water: "#6890F0",
      from-electric: "#F8D030",
      from-grass: "#78C850",
      from-ice: "#98D8D8",
      from-fighting: "#C03028",
      from-poison: "#A040A0",
      from-ground: "#E0C068",
      from-flying: "#A890F0",
      from-psychic: "#F85888",
      from-bug: "#A8B820",
      from-rock: "#B8A038",
      from-ghost: "#705898",
      from-dragon: "#7038F8",
      from-dark: "#705848",
      from-steel: "#B8B8D0",
      from-fairy: "#EE99AC" 

      to-normal: "#A8A878",
      to-fire: "#F08030",
      to-water: "#6890F0",
      to-electric: "#F8D030",
      to-grass: "#78C850",
      to-ice: "#98D8D8",
      to-fighting: "#C03028",
      to-poison: "#A040A0",
      to-ground: "#E0C068",
      to-flying: "#A890F0",
      to-psychic: "#F85888",
      to-bug: "#A8B820",
      to-rock: "#B8A038",
      to-ghost: "#705898",
      to-dragon: "#7038F8",
      to-dark: "#705848",
      to-steel: "#B8B8D0",
      to-fairy: "#EE99AC" 
      */
}

/* <div className="relative my-1 col-start-6 row-start-1 row-span-3 col-span-3 rounded-full outline outline-1 shadow-black shadow-2xl">
        <img src={typeOneString} className="absolute z-10 w-12 h-12 p-2"></img>
        <span
          className={`absolute h-12 w-12 left-0 top-0 rounded-full bg-${typeOne} `}
        ></span>
      </div> */

// bg-gradient-to-r from-${typeOne} to-${typeTwo}
