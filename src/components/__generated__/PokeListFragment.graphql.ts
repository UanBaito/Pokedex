/**
 * @generated SignedSource<<6b5fcdccfeb60118d7c9116f164ab118>>
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
  readonly pokemon_v2_pokemonspecy: {
    readonly pokemon_v2_generation: {
      readonly name: string;
    } | null;
  } | null;
  readonly pokemon_v2_pokemontypes: ReadonlyArray<{
    readonly pokemon_v2_type: {
      readonly name: string;
    } | null;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"PokecardFragment">;
  readonly " $fragmentType": "PokeListFragment";
}>;
export type PokeListFragment$key = ReadonlyArray<{
  readonly " $data"?: PokeListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PokeListFragment">;
}>;

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "PokeListFragment",
  "selections": [
    (v0/*: any*/),
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PokecardFragment"
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
          "concreteType": "pokemon_v2_type",
          "kind": "LinkedField",
          "name": "pokemon_v2_type",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "pokemon_v2_pokemonspecies",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemonspecy",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "pokemon_v2_generation",
          "kind": "LinkedField",
          "name": "pokemon_v2_generation",
          "plural": false,
          "selections": (v1/*: any*/),
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

(node as any).hash = "81e83f6b91bec83efc5405e61e008788";

export default node;
