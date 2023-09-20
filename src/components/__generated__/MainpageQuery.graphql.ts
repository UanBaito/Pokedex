/**
 * @generated SignedSource<<1897f904433edd162720de76180463cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MainpageQuery$variables = {};
export type MainpageQuery$data = {
  readonly pokemons: {
    readonly results: ReadonlyArray<{
      readonly name: string | null;
    } | null> | null;
  } | null;
};
export type MainpageQuery = {
  response: MainpageQuery$data;
  variables: MainpageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 151
      }
    ],
    "concreteType": "PokemonList",
    "kind": "LinkedField",
    "name": "pokemons",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PokemonItem",
        "kind": "LinkedField",
        "name": "results",
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
    "storageKey": "pokemons(limit:151)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainpageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainpageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d3d638927e482070640a92fc04c4b6cc",
    "id": null,
    "metadata": {},
    "name": "MainpageQuery",
    "operationKind": "query",
    "text": "query MainpageQuery {\n  pokemons(limit: 151) {\n    results {\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6ac934026a63b6b9ddb9a9bbd1dc828";

export default node;
