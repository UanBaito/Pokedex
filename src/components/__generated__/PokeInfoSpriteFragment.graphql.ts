/**
 * @generated SignedSource<<edc436042bb1b40088e2d1e361b32760>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PokeInfoSpriteFragment$data = ReadonlyArray<{
  readonly pokemon_v2_pokemons: ReadonlyArray<{
    readonly pokemon_v2_pokemonsprites: ReadonlyArray<{
      readonly pokemon_id: number | null;
      readonly sprites: string;
    }>;
  }>;
  readonly " $fragmentType": "PokeInfoSpriteFragment";
}>;
export type PokeInfoSpriteFragment$key = ReadonlyArray<{
  readonly " $data"?: PokeInfoSpriteFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PokeInfoSpriteFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "PokeInfoSpriteFragment",
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
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemonspecies",
  "abstractKey": null
};

(node as any).hash = "14c51fc780abebc5f869055cd0fd7fd1";

export default node;
