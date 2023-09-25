/**
 * @generated SignedSource<<c53597a75c4abc2d028650a2368f0e70>>
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
  readonly " $fragmentSpreads": FragmentRefs<"MaximazedPokeInfoFragment">;
};
export type MainpageQuery = {
  response: MainpageQuery$data;
  variables: MainpageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "id": "asc"
    }
  },
  {
    "kind": "Literal",
    "name": "where",
    "value": {
      "is_default": {
        "_eq": true
      }
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
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
        "storageKey": "pokemon_v2_pokemon(order_by:{\"id\":\"asc\"},where:{\"is_default\":{\"_eq\":true}})"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MaximazedPokeInfoFragment"
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
          (v1/*: any*/),
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
                "selections": (v2/*: any*/),
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
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "pokemon_v2_pokemon(order_by:{\"id\":\"asc\"},where:{\"is_default\":{\"_eq\":true}})"
      },
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "fields": [
                  {
                    "kind": "Literal",
                    "name": "_eq",
                    "value": ""
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
              (v1/*: any*/),
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
            "args": null,
            "concreteType": "pokemon_v2_pokemonspecies",
            "kind": "LinkedField",
            "name": "pokemon_v2_pokemonspecies",
            "plural": true,
            "selections": [
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
        ],
        "storageKey": "pokemon_v2_pokemonspecies(where:{\"name\":{\"_eq\":\"\"}})"
      }
    ]
  },
  "params": {
    "cacheID": "6bd62d04d09cd8b5db505fc36144fd5b",
    "id": null,
    "metadata": {},
    "name": "MainpageQuery",
    "operationKind": "query",
    "text": "query MainpageQuery {\n  pokemon_v2_pokemon(order_by: {id: asc}, where: {is_default: {_eq: true}}) {\n    ...PokeListFragment\n  }\n  ...MaximazedPokeInfoFragment\n}\n\nfragment MaximazedPokeInfoFragment on query_root {\n  pokemon_v2_pokemonspecies(where: {name: {_eq: \"\"}}) {\n    pokemon_v2_pokemons {\n      name\n      ...PokeInfoSpriteFragment\n    }\n    pokemon_v2_pokemonspecies {\n      pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {\n        flavor_text\n      }\n    }\n  }\n}\n\nfragment PokeInfoSpriteFragment on pokemon_v2_pokemon {\n  pokemon_v2_pokemonsprites {\n    sprites\n    pokemon_id\n  }\n}\n\nfragment PokeListFragment on pokemon_v2_pokemon {\n  name\n  ...PokecardFragment\n  pokemon_v2_pokemontypes {\n    pokemon_v2_type {\n      name\n    }\n  }\n  pokemon_v2_pokemonspecy {\n    pokemon_v2_generation {\n      name\n    }\n  }\n}\n\nfragment PokecardFragment on pokemon_v2_pokemon {\n  name\n  pokeID: id\n  pokemon_v2_pokemontypes {\n    slot\n    pokemon_v2_type {\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1e4b71aeeab8b584e98d658972f0c757";

export default node;
