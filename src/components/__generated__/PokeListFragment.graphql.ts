/**
 * @generated SignedSource<<0ecdecffdb8803c00fd5104b555843f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PokeListFragment$data = ReadonlyArray<{
  readonly name: string;
  readonly pokemon_v2_pokemonsprites: ReadonlyArray<{
    readonly sprites: string;
  }>;
  readonly pokemon_v2_pokemontypes: ReadonlyArray<{
    readonly slot: number;
    readonly type_id: number | null;
  }>;
  readonly " $fragmentType": "PokeListFragment";
}>;
export type PokeListFragment$key = ReadonlyArray<{
  readonly " $data"?: PokeListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PokeListFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "PokeListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
          "kind": "ScalarField",
          "name": "type_id",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "pokemon_v2_pokemonsprites",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemonsprites",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "sprites",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemon",
  "abstractKey": null
};

(node as any).hash = "aa31c20683ecdfbe175e572f98547db8";

export default node;
