/**
 * @generated SignedSource<<20e7c017b8b34223853cd1499d5b3ddd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MainpageFragment">;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "is_default": {
    "_eq": true
  }
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": "pokeID",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v1/*: any*/)
],
v4 = {
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
      "selections": (v3/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "base_stat",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MainpageFragment"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": [
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
            "value": (v0/*: any*/)
          }
        ],
        "concreteType": "pokemon_v2_pokemon",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemon",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "pokemon_v2_pokemonspecies",
            "kind": "LinkedField",
            "name": "pokemon_v2_pokemonspecy",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "pokemon_v2_generation",
                "kind": "LinkedField",
                "name": "pokemon_v2_generation",
                "plural": false,
                "selections": (v3/*: any*/),
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
              (v4/*: any*/),
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "pokemon_v2_pokemonstat",
                "kind": "LinkedField",
                "name": "pokemon_v2_pokemonstats",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "pokemon_v2_stat",
                    "kind": "LinkedField",
                    "name": "pokemon_v2_stat",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "where",
                            "value": {
                              "pokemon_v2_pokemon": (v0/*: any*/)
                            }
                          }
                        ],
                        "concreteType": "pokemon_v2_pokemonstat_aggregate",
                        "kind": "LinkedField",
                        "name": "pokemon_v2_pokemonstats_aggregate",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "pokemon_v2_pokemonstat_aggregate_fields",
                            "kind": "LinkedField",
                            "name": "aggregate",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "pokemon_v2_pokemonstat_max_fields",
                                "kind": "LinkedField",
                                "name": "max",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "pokemon_v2_pokemonstats_aggregate(where:{\"pokemon_v2_pokemon\":{\"is_default\":{\"_eq\":true}}})"
                      }
                    ],
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "pokemon_v2_evolutionchain",
            "kind": "LinkedField",
            "name": "pokemon_v2_evolutionchain",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "pokemon_v2_pokemonspecies",
                "kind": "LinkedField",
                "name": "pokemon_v2_pokemonspecies",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "evolves_from_species_id",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
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
    "cacheID": "94e0f3d2033e68a4dc429535234dc8d9",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  ...MainpageFragment\n}\n\nfragment EvolutionChainFragment on pokemon_v2_pokemonspecies {\n  pokemon_v2_evolutionchain {\n    pokemon_v2_pokemonspecies {\n      name\n      evolves_from_species_id\n      pokeID: id\n    }\n  }\n}\n\nfragment MainpageFragment on query_root {\n  pokemon_v2_pokemon(order_by: {id: asc}, where: {is_default: {_eq: true}}) {\n    ...PokeListFragment\n  }\n  pokemon_v2_pokemonspecies(where: {name: {_eq: \"\"}}) {\n    ...MaximazedPokeInfoFragment\n  }\n}\n\nfragment MaximazedPokeInfoFragment on pokemon_v2_pokemonspecies {\n  pokemon_v2_pokemons {\n    name\n    height\n    weight\n    pokemon_v2_pokemontypes {\n      slot\n      pokemon_v2_type {\n        name\n      }\n    }\n    ...PokeInfoSpriteFragment\n    ...StatsFragment\n  }\n  pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {\n    flavor_text\n  }\n  ...VariantsFragment\n  ...EvolutionChainFragment\n}\n\nfragment PokeInfoSpriteFragment on pokemon_v2_pokemon {\n  pokemon_v2_pokemonsprites {\n    sprites\n    pokemon_id\n  }\n}\n\nfragment PokeListFragment on pokemon_v2_pokemon {\n  name\n  ...PokecardFragment\n  pokemon_v2_pokemontypes {\n    pokemon_v2_type {\n      name\n    }\n  }\n  pokemon_v2_pokemonspecy {\n    pokemon_v2_generation {\n      name\n    }\n  }\n}\n\nfragment PokecardFragment on pokemon_v2_pokemon {\n  name\n  pokeID: id\n  pokemon_v2_pokemontypes {\n    slot\n    pokemon_v2_type {\n      name\n    }\n  }\n  pokemon_v2_pokemonspecy {\n    name\n  }\n}\n\nfragment StatsFragment on pokemon_v2_pokemon {\n  pokemon_v2_pokemonstats {\n    base_stat\n    pokemon_v2_stat {\n      name\n      pokemon_v2_pokemonstats_aggregate(where: {pokemon_v2_pokemon: {is_default: {_eq: true}}}) {\n        aggregate {\n          max {\n            base_stat\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment VariantsFragment on pokemon_v2_pokemonspecies {\n  pokemon_v2_pokemons {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "d569bc5d2563f9288d5613a49e10249f";

export default node;
