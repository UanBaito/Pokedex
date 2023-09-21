/**
 * @generated SignedSource<<588607155ff97a1fcac0704d407d3d2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PokecardFragment$data = {
  readonly name: string;
  readonly pokeID: number;
  readonly pokemon_v2_pokemontypes: ReadonlyArray<{
    readonly pokemon_v2_type: {
      readonly name: string;
    } | null;
    readonly slot: number;
  }>;
  readonly " $fragmentType": "PokecardFragment";
};
export type PokecardFragment$key = {
  readonly " $data"?: PokecardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PokecardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokecardFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "pokeID",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
          "concreteType": "pokemon_v2_type",
          "kind": "LinkedField",
          "name": "pokemon_v2_type",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemon",
  "abstractKey": null
};
})();

(node as any).hash = "e87ec8ab093331433cfe1a914ddbb10b";

export default node;
