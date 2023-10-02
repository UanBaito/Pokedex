/**
 * @generated SignedSource<<de86a5824ecc337a3ceea70e6e218028>>
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
  readonly " $fragmentSpreads": FragmentRefs<"MainpageFragment">;
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
],
v1 = {
  "is_default": {
    "_eq": true
  }
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": "pokeID",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v2/*: any*/)
],
v5 = {
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
      "selections": (v4/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "base_stat",
  "storageKey": null
};
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
        "name": "MainpageFragment"
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
            "kind": "Literal",
            "name": "order_by",
            "value": {
              "id": "asc"
            }
          },
          {
            "kind": "Literal",
            "name": "where",
            "value": (v1/*: any*/)
          }
        ],
        "concreteType": "pokemon_v2_pokemon",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemon",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "pokemon_v2_pokemonspecies",
            "kind": "LinkedField",
            "name": "pokemon_v2_pokemonspecy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "pokemon_v2_generation",
                "kind": "LinkedField",
                "name": "pokemon_v2_generation",
                "plural": false,
                "selections": (v4/*: any*/),
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
              (v2/*: any*/),
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
              (v5/*: any*/),
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
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "pokemon_v2_stat",
                    "kind": "LinkedField",
                    "name": "pokemon_v2_stat",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "where",
                            "value": {
                              "pokemon_v2_pokemon": (v1/*: any*/)
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
                                  (v6/*: any*/)
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "evolves_from_species_id",
                    "storageKey": null
                  },
                  (v3/*: any*/)
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
    "cacheID": "8297c7959411b7b463c3d470ac326867",
    "id": null,
    "metadata": {},
    "name": "MaximazedPokeInfoRefetchQuery",
    "operationKind": "query",
    "text": "query MaximazedPokeInfoRefetchQuery(\n  $speciesName: String = \"\"\n) {\n  ...MainpageFragment_1IjDk4\n}\n\nfragment EvolutionChainFragment on pokemon_v2_pokemonspecies {\n  pokemon_v2_evolutionchain {\n    pokemon_v2_pokemonspecies {\n      name\n      evolves_from_species_id\n      pokeID: id\n    }\n  }\n}\n\nfragment MainpageFragment_1IjDk4 on query_root {\n  pokemon_v2_pokemon(order_by: {id: asc}, where: {is_default: {_eq: true}}) {\n    ...PokeListFragment\n  }\n  pokemon_v2_pokemonspecies(where: {name: {_eq: $speciesName}}) {\n    ...MaximazedPokeInfoFragment\n  }\n}\n\nfragment MaximazedPokeInfoFragment on pokemon_v2_pokemonspecies {\n  pokemon_v2_pokemons {\n    name\n    height\n    weight\n    pokemon_v2_pokemontypes {\n      slot\n      pokemon_v2_type {\n        name\n      }\n    }\n    ...PokeInfoSpriteFragment\n    ...StatsFragment\n  }\n  pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {\n    flavor_text\n  }\n  ...VariantsFragment\n  ...EvolutionChainFragment\n}\n\nfragment PokeInfoSpriteFragment on pokemon_v2_pokemon {\n  pokemon_v2_pokemonsprites {\n    sprites\n    pokemon_id\n  }\n}\n\nfragment PokeListFragment on pokemon_v2_pokemon {\n  name\n  ...PokecardFragment\n  pokemon_v2_pokemontypes {\n    pokemon_v2_type {\n      name\n    }\n  }\n  pokemon_v2_pokemonspecy {\n    pokemon_v2_generation {\n      name\n    }\n  }\n}\n\nfragment PokecardFragment on pokemon_v2_pokemon {\n  name\n  pokeID: id\n  pokemon_v2_pokemontypes {\n    slot\n    pokemon_v2_type {\n      name\n    }\n  }\n  pokemon_v2_pokemonspecy {\n    name\n  }\n}\n\nfragment StatsFragment on pokemon_v2_pokemon {\n  pokemon_v2_pokemonstats {\n    base_stat\n    pokemon_v2_stat {\n      name\n      pokemon_v2_pokemonstats_aggregate(where: {pokemon_v2_pokemon: {is_default: {_eq: true}}}) {\n        aggregate {\n          max {\n            base_stat\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment VariantsFragment on pokemon_v2_pokemonspecies {\n  pokemon_v2_pokemons {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "f7c93dad26861b8586f56e8652397b3e";

export default node;
