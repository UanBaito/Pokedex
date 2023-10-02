/**
 * @generated SignedSource<<5fb341f67326f2561a1a5a2d4cf428fd>>
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

(node as any).hash = "40be37034a39fcaea338b18c46087eb1";

export default node;
