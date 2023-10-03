/**
 * @generated SignedSource<<e1e660119e6c001e4b044fd70f660bf3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EvolutionChainFragment$data = {
  readonly pokemon_v2_evolutionchain: {
    readonly pokemon_v2_pokemonspecies: ReadonlyArray<{
      readonly evolves_from_species_id: number | null;
      readonly name: string;
      readonly pokeID: number;
      readonly pokemon_v2_pokemons: ReadonlyArray<{
        readonly pokemon_v2_pokemonsprites: ReadonlyArray<{
          readonly sprites: string;
        }>;
      }>;
    }>;
  } | null;
  readonly " $fragmentType": "EvolutionChainFragment";
};
export type EvolutionChainFragment$key = {
  readonly " $data"?: EvolutionChainFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EvolutionChainFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EvolutionChainFragment",
  "selections": [
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
              "name": "evolves_from_species_id",
              "storageKey": null
            },
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
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemonspecies",
  "abstractKey": null
};

(node as any).hash = "bf1b6e8b59f2cdf304ac25c982560cd1";

export default node;
