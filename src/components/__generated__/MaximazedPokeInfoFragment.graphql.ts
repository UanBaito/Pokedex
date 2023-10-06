/**
 * @generated SignedSource<<93fda391c7b687c198a160bebddb7611>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MaximazedPokeInfoFragment$data = ReadonlyArray<{
  readonly pokemon_v2_pokemons: ReadonlyArray<{
    readonly height: number | null;
    readonly name: string;
    readonly pokeID: number;
    readonly pokemon_v2_pokemontypes: ReadonlyArray<{
      readonly pokemon_v2_type: {
        readonly name: string;
      } | null;
      readonly slot: number;
    }>;
    readonly weight: number | null;
    readonly " $fragmentSpreads": FragmentRefs<"PokeInfoSpriteFragment" | "StatsFragment">;
  }>;
  readonly pokemon_v2_pokemonspeciesflavortexts: ReadonlyArray<{
    readonly flavor_text: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"EvolutionChainFragment" | "VariantsFragment">;
  readonly " $fragmentType": "MaximazedPokeInfoFragment";
}>;
export type MaximazedPokeInfoFragment$key = ReadonlyArray<{
  readonly " $data"?: MaximazedPokeInfoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MaximazedPokeInfoFragment">;
}>;

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "MaximazedPokeInfoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "pokemon_v2_pokemon",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemons",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "height",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "weight",
          "storageKey": null
        },
        {
          "alias": "pokeID",
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "pokemon_v2_pokemontype",
          "kind": "LinkedField",
          "name": "pokemon_v2_pokemontypes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slot",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "pokemon_v2_type",
              "kind": "LinkedField",
              "name": "pokemon_v2_type",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PokeInfoSpriteFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StatsFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "where",
          "value": {
            "language_id": {
              "_eq": 9
            }
          }
        }
      ],
      "concreteType": "pokemon_v2_pokemonspeciesflavortext",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemonspeciesflavortexts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "flavor_text",
          "storageKey": null
        }
      ],
      "storageKey": "pokemon_v2_pokemonspeciesflavortexts(where:{\"language_id\":{\"_eq\":9}})"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VariantsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EvolutionChainFragment"
    }
  ],
  "type": "pokemon_v2_pokemonspecies",
  "abstractKey": null
};
})();

(node as any).hash = "a8ab6dd827b72350ae2adf806c06fefb";

export default node;
