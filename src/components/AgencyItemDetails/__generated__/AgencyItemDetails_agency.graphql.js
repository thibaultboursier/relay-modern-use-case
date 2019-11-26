/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AgencyItemDetails_agency$ref: FragmentReference;
declare export opaque type AgencyItemDetails_agency$fragmentType: AgencyItemDetails_agency$ref;
export type AgencyItemDetails_agency = {|
  +phone: ?string,
  +timezone: string,
  +url: string,
  +$refType: AgencyItemDetails_agency$ref,
|};
export type AgencyItemDetails_agency$data = AgencyItemDetails_agency;
export type AgencyItemDetails_agency$key = {
  +$data?: AgencyItemDetails_agency$data,
  +$fragmentRefs: AgencyItemDetails_agency$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AgencyItemDetails_agency",
  "type": "Agency",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "phone",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "timezone",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f3b85a3c81bc6d3062a301317e6a75e8';
module.exports = node;
