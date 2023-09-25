/**
 * @generated SignedSource<<a57a268200f06abd35892a0acf2c2144>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MaximazedPokeInfoRefetchQuery$variables = {
  speciesName?: string | null;
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
    "name": "speciesName"
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
            "name": "speciesName",
            "variableName": "speciesName"
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
                    "variableName": "speciesName"
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
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "height",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "weight",
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
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "where",
                "value": {
                  "language_id": {
                    "_eq": 9
                  }
                }
              }
            ],
            "concreteType": "pokemon_v2_pokemonspeciesflavortext",
            "kind": "LinkedField",
            "name": "pokemon_v2_pokemonspeciesflavortexts",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "flavor_text",
                "storageKey": null
              }
            ],
            "storageKey": "pokemon_v2_pokemonspeciesflavortexts(where:{\"language_id\":{\"_eq\":9}})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "75f3867b9d90b8dd72b850310c907de8",
    "id": null,
    "metadata": {},
    "name": "MaximazedPokeInfoRefetchQuery",
    "operationKind": "query",
    "text": "query MaximazedPokeInfoRefetchQuery(\n  $speciesName: String = \"\"\n) {\n  ...MaximazedPokeInfoFragment_1IjDk4\n}\n\nfragment MaximazedPokeInfoFragment_1IjDk4 on query_root {\n  pokemon_v2_pokemonspecies(where: {name: {_eq: $speciesName}}) {\n    pokemon_v2_pokemons {\n      name\n      height\n      weight\n      ...PokeInfoSpriteFragment\n    }\n    pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {\n      flavor_text\n    }\n  }\n}\n\nfragment PokeInfoSpriteFragment on pokemon_v2_pokemon {\n  pokemon_v2_pokemonsprites {\n    sprites\n    pokemon_id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e318393b6b08b82b4e63b7a2a8da344c";

export default node;
