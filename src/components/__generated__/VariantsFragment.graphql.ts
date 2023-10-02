/**
 * @generated SignedSource<<eb82c14b8bef27a607cdcdadd6d45e55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VariantsFragment$data = ReadonlyArray<{
  readonly pokemon_v2_pokemons: ReadonlyArray<{
    readonly name: string;
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemonspecies",
  "abstractKey": null
};

(node as any).hash = "2d92b2e4be3a1b4d0ef6c45a61effb45";

export default node;
