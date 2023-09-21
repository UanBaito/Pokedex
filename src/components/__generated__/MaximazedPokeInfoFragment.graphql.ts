/**
 * @generated SignedSource<<20eb5c31350880220c0d0d29a3f9ca4d>>
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
    readonly " $fragmentSpreads": FragmentRefs<"PokeInfoSpriteFragment">;
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "PokeInfoSpriteFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "query_root",
  "abstractKey": null
};

(node as any).hash = "a3daf2f669e2c93d7661d7512d434143";

export default node;
