/**
 * @generated SignedSource<<b6636f6ed79945aae7e44b11c8630b0a>>
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
      readonly name: string;
      readonly " $fragmentSpreads": FragmentRefs<"PokeInfoSpriteFragment">;
    }>;
    readonly pokemon_v2_pokemonspecies: ReadonlyArray<{
      readonly pokemon_v2_pokemonspeciesflavortexts: ReadonlyArray<{
        readonly flavor_text: string;
      }>;
    }>;
  }>;
  readonly " $fragmentType": "MaximazedPokeInfoFragment";
};
export type MaximazedPokeInfoFragment$key = {
  readonly " $data"?: MaximazedPokeInfoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MaximazedPokeInfoFragment">;
};

import MaximazedPokeInfoRefetchQuery_graphql from './MaximazedPokeInfoRefetchQuery.graphql';

const node: ReaderFragment = {
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "PokeInfoSpriteFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "pokemon_v2_pokemonspecies",
          "kind": "LinkedField",
          "name": "pokemon_v2_pokemonspecies",
          "plural": true,
          "selections": [
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
      "storageKey": null
    }
  ],
  "type": "query_root",
  "abstractKey": null
};

(node as any).hash = "b3d348ae0d364a0eb52001ac2d9d9ba9";

export default node;
