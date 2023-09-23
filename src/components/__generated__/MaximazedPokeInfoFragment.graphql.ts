/**
 * @generated SignedSource<<a7686dea9601b64ee4821eb90a7e1ff2>>
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
      "defaultValue": "pikachu",
      "kind": "LocalArgument",
      "name": "pokeName"
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
                  "variableName": "pokeName"
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "PokeInfoSpriteFragment"
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
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

(node as any).hash = "bb587500d2286642dd8c054b5c04dbb2";

export default node;
