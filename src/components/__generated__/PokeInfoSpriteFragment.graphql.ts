/**
 * @generated SignedSource<<0c013316780cddc77065ab85d27b3a89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PokeInfoSpriteFragment$data = {
  readonly pokemon_v2_pokemonsprites: ReadonlyArray<{
    readonly pokemon_id: number | null;
    readonly sprites: string;
  }>;
  readonly " $fragmentType": "PokeInfoSpriteFragment";
};
export type PokeInfoSpriteFragment$key = {
  readonly " $data"?: PokeInfoSpriteFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PokeInfoSpriteFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokeInfoSpriteFragment",
  "selections": [
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pokemon_id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemon",
  "abstractKey": null
};

(node as any).hash = "93eb82e2d7c77430a10fd9b201e3e6e6";

export default node;
