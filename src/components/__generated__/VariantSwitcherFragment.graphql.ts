/**
 * @generated SignedSource<<0b5a4fd2032f731e4ff25c235da56ba3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VariantSwitcherFragment$data = ReadonlyArray<{
  readonly pokemon_v2_pokemons: ReadonlyArray<{
    readonly is_default: boolean;
    readonly name: string;
  }>;
  readonly " $fragmentType": "VariantSwitcherFragment";
}>;
export type VariantSwitcherFragment$key = ReadonlyArray<{
  readonly " $data"?: VariantSwitcherFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariantSwitcherFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "VariantSwitcherFragment",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "is_default",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemonspecies",
  "abstractKey": null
};

(node as any).hash = "f91c354d2d67f68a5e3d55ea51ce8a15";

export default node;
