/**
 * @generated SignedSource<<705921200f69d700755651a132adba80>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MaximazedPokeInfoFragment$data = {
  readonly pokemon_v2_pokemonspecies: ReadonlyArray<{
    readonly pokemon_v2_pokemons: ReadonlyArray<{
      readonly height: number | null;
      readonly name: string;
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
  }>;
  readonly " $fragmentType": "MaximazedPokeInfoFragment";
};
export type MaximazedPokeInfoFragment$key = {
  readonly " $data"?: MaximazedPokeInfoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MaximazedPokeInfoFragment">;
};

import MaximazedPokeInfoRefetchQuery_graphql from './MaximazedPokeInfoRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "speciesName"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": MaximazedPokeInfoRefetchQuery_graphql
    }
  },
  "name": "MaximazedPokeInfoFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "fields": [
            {
              "fields": [
                {
                  "kind": "Variable",
                  "name": "_eq",
                  "variableName": "speciesName"
                }
              ],
              "kind": "ObjectValue",
              "name": "name"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "pokemon_v2_pokemonspecies",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemonspecies",
      "plural": true,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "query_root",
  "abstractKey": null
};
})();

(node as any).hash = "a75692db1ede47aacba0bce0af6f180f";

export default node;
