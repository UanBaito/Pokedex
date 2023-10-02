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
    }
  }
`;

export default function Variant({
  pokemons,
  currentPokemon,
  handleVariantClick,
}: props) {
  const data = useFragment(VariantsFragment, pokemons);
  const variants = data[0].pokemon_v2_pokemons;

  const mappedVariants = variants.map((v, i) => {
    return (
      <li
        key={v.name + "-variant"}
        className={currentPokemon === i ? "selected-variant" : ""}
      >
        <button
          onClick={() => {
            handleVariantClick(i);
          }}
        >
          <img src="/1.png"></img>
          <h3>{v.name}</h3>
        </button>
      </li>
    );
  });

  return <ul>{mappedVariants}</ul>;
}
