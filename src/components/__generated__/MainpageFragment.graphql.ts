/**
 * @generated SignedSource<<18b2f5ddaf1fac5aa0d3c7d3cf0204f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainpageFragment$data = {
  readonly pokemon_v2_pokemon: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"PokeListFragment">;
  }>;
  readonly pokemon_v2_pokemonspecies: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"MaximazedPokeInfoFragment">;
  }>;
  readonly " $fragmentType": "MainpageFragment";
};
export type MainpageFragment$key = {
  readonly " $data"?: MainpageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainpageFragment">;
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
  "name": "MainpageFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "order_by",
          "value": {
            "id": "asc"
          }
        },
        {
          "kind": "Literal",
          "name": "where",
          "value": {
            "is_default": {
              "_eq": true
            }
          }
        }
      ],
      "concreteType": "pokemon_v2_pokemon",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemon",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PokeListFragment"
        }
      ],
      "storageKey": "pokemon_v2_pokemon(order_by:{\"id\":\"asc\"},where:{\"is_default\":{\"_eq\":true}})"
    },
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "MaximazedPokeInfoFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "query_root",
  "abstractKey": null
};

(node as any).hash = "f7c93dad26861b8586f56e8652397b3e";

export default node;
