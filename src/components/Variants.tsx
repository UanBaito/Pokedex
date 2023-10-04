import { graphql, useFragment } from "react-relay";

import { VariantsFragment$key } from "./__generated__/VariantsFragment.graphql";

type props = {
  pokemons: VariantsFragment$key;
  currentPokemon: number;
  handleVariantClick: (index: number) => void;
};

const VariantsFragment = graphql`
  fragment VariantsFragment on pokemon_v2_pokemonspecies @relay(plural: true) {
    pokemon_v2_pokemons {
      name
      pokeID: id
    }

    pokemon_shape_id
  }
`;

export default function Variant({
  pokemons,
  currentPokemon,
  handleVariantClick,
}: props) {
  const data = useFragment(VariantsFragment, pokemons);
  const variants = data[0].pokemon_v2_pokemons;
  let shape: number | string | null = data[0].pokemon_shape_id;

  if (shape && shape < 10) {
    shape = "0" + shape;
  }

  const mappedVariants = variants.map((v, i) => {
    return (
      <li
        key={v.name + "-variant"}
        className={`${currentPokemon === i ? "selected-variant" : ""}`}
      >
        <button
          onClick={() => {
            handleVariantClick(i);
          }}
        >
          <img
            onError={(e) => {
              e.currentTarget.onerror = null;
              const shapeID = shape;
              if (shapeID) {
                e.currentTarget.src = `/shapes/Body${shape}VI.png`;
              } else {
                e.currentTarget.src = `/shapes/Body01VI.png`;
              }
            }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${v.pokeID}.png`}
          ></img>
          <h3>{v.name}</h3>
        </button>
      </li>
    );
  });

  return (
    <div className="info-box poke-info-variants">
      <h2 className=" info-title text-center">Variants</h2>

      <ul>{mappedVariants}</ul>
    </div>
  );
}
