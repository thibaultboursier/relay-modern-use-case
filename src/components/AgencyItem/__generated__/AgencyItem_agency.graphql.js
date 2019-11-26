/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AgencyItem_agency$ref: FragmentReference;
declare export opaque type AgencyItem_agency$fragmentType: AgencyItem_agency$ref;
export type AgencyItem_agency = {|
  +gtfsId: string,
  +id: string,
  +name: string,
  +$refType: AgencyItem_agency$ref,
|};
export type AgencyItem_agency$data = AgencyItem_agency;
export type AgencyItem_agency$key = {
  +$data?: AgencyItem_agency$data,
  +$fragmentRefs: AgencyItem_agency$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AgencyItem_agency",
  "type": "Agency",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "gtfsId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1df16fc83ac2b7ed9e09cd7b83bed2b1';
module.exports = node;
