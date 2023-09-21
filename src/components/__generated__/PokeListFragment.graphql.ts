/**
 * @generated SignedSource<<ab82c4da68e7d0eb00f7800c458e0205>>
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
    }
  ],
  "type": "pokemon_v2_pokemon",
  "abstractKey": null
};

(node as any).hash = "08e35c34c86a55df4031e0d95f538b25";

export default node;
