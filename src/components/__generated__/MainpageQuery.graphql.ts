/**
 * @generated SignedSource<<b2d542035f0537d7db0cb8863964cd5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainpageQuery$variables = {};
export type MainpageQuery$data = {
  readonly pokemon_v2_pokemon: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"PokeListFragment">;
  }>;
};
export type MainpageQuery = {
  response: MainpageQuery$data;
  variables: MainpageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 5
  },
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "id": "asc"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainpageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "pokemon_v2_pokemon",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemon",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokeListFragment"
          }
        ],
        "storageKey": "pokemon_v2_pokemon(limit:5,order_by:{\"id\":\"asc\"})"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainpageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "pokemon_v2_pokemon",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemon",
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
        "storageKey": "pokemon_v2_pokemon(limit:5,order_by:{\"id\":\"asc\"})"
      }
    ]
  },
  "params": {
    "cacheID": "281e0a5d2957251563b626fd4e264fde",
    "id": null,
    "metadata": {},
    "name": "MainpageQuery",
    "operationKind": "query",
    "text": "query MainpageQuery {\n  pokemon_v2_pokemon(limit: 5, order_by: {id: asc}) {\n    ...PokeListFragment\n  }\n}\n\nfragment PokeListFragment on pokemon_v2_pokemon {\n  name\n  pokemon_v2_pokemontypes {\n    slot\n    type_id\n  }\n  pokemon_v2_pokemonsprites {\n    sprites\n  }\n}\n"
  }
};
})();

(node as any).hash = "c51eb7b2c6e292f5a15010e55fbf6c0c";

export default node;
