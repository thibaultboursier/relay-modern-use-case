/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AgencyItem_agency$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AgencyList_agencies$ref: FragmentReference;
declare export opaque type AgencyList_agencies$fragmentType: AgencyList_agencies$ref;
export type AgencyList_agencies = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: AgencyItem_agency$ref,
  +$refType: AgencyList_agencies$ref,
|}>;
export type AgencyList_agencies$data = AgencyList_agencies;
export type AgencyList_agencies$key = $ReadOnlyArray<{
  +$data?: AgencyList_agencies$data,
  +$fragmentRefs: AgencyList_agencies$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AgencyList_agencies",
  "type": "Agency",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AgencyItem_agency",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3cae6ccbe629b54ae76e376db88bfbca';
module.exports = node;
