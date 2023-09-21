/**
 * @generated SignedSource<<36c89bd2979c08fcc39889d0361c4d74>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MaximazedPokeInfoRefetchQuery$variables = {
  pokeName?: string | null;
};
export type MaximazedPokeInfoRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MaximazedPokeInfoFragment">;
};
export type MaximazedPokeInfoRefetchQuery = {
  response: MaximazedPokeInfoRefetchQuery$data;
  variables: MaximazedPokeInfoRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "pokeName"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MaximazedPokeInfoRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "pokeName",
            "variableName": "pokeName"
          }
        ],
        "kind": "FragmentSpread",
        "name": "MaximazedPokeInfoFragment"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MaximazedPokeInfoRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "_eq",
                    "variableName": "pokeName"
                  }
                ],
                "kind": "ObjectValue",
                "name": "name"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "pokemon_v2_pokemonspecies",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemonspecies",
        "plural": true,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6712e198973228109882c2424c38a32c",
    "id": null,
    "metadata": {},
    "name": "MaximazedPokeInfoRefetchQuery",
    "operationKind": "query",
    "text": "query MaximazedPokeInfoRefetchQuery(\n  $pokeName: String = \"\"\n) {\n  ...MaximazedPokeInfoFragment_117dRO\n}\n\nfragment MaximazedPokeInfoFragment_117dRO on query_root {\n  pokemon_v2_pokemonspecies(where: {name: {_eq: $pokeName}}) {\n    ...PokeInfoSpriteFragment\n  }\n}\n\nfragment PokeInfoSpriteFragment on pokemon_v2_pokemonspecies {\n  pokemon_v2_pokemons {\n    pokemon_v2_pokemonsprites {\n      sprites\n      pokemon_id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a3daf2f669e2c93d7661d7512d434143";

export default node;
