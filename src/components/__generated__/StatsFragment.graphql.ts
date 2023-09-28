/**
 * @generated SignedSource<<9a9c4ae3c920c1024b924a360ed516c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatsFragment$data = {
  readonly pokemon_v2_pokemonstats: ReadonlyArray<{
    readonly base_stat: number;
    readonly pokemon_v2_stat: {
      readonly name: string;
      readonly pokemon_v2_pokemonstats_aggregate: {
        readonly aggregate: {
          readonly max: {
            readonly base_stat: number | null;
          } | null;
        } | null;
      };
    } | null;
  }>;
  readonly " $fragmentType": "StatsFragment";
};
export type StatsFragment$key = {
  readonly " $data"?: StatsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StatsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "base_stat",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StatsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "pokemon_v2_pokemonstat",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemonstats",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "pokemon_v2_stat",
          "kind": "LinkedField",
          "name": "pokemon_v2_stat",
          "plural": false,
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
              "args": [
                {
                  "kind": "Literal",
                  "name": "where",
                  "value": {
                    "pokemon_v2_pokemon": {
                      "is_default": {
                        "_eq": true
                      }
                    }
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
                        (v0/*: any*/)
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
  "type": "pokemon_v2_pokemon",
  "abstractKey": null
};
})();

(node as any).hash = "b2b416c35ecd7f67efecf07c6e38df26";

export default node;
