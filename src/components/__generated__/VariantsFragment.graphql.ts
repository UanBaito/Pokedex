/**
 * @generated SignedSource<<931e5f6f4224b5a560a163da707e765b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VariantsFragment$data = ReadonlyArray<{
  readonly pokemon_shape_id: number | null;
  readonly pokemon_v2_pokemons: ReadonlyArray<{
    readonly name: string;
    readonly pokeID: number;
  }>;
  readonly " $fragmentType": "VariantsFragment";
}>;
export type VariantsFragment$key = ReadonlyArray<{
  readonly " $data"?: VariantsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariantsFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "VariantsFragment",
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
          "alias": "pokeID",
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pokemon_shape_id",
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemonspecies",
  "abstractKey": null
};

(node as any).hash = "2d001193bfe07e76fffcb1a6c9b08329";

export default node;
