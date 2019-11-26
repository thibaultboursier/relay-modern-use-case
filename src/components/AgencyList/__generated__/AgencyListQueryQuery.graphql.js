/**
 * @flow
 * @relayHash d58dfbb29f8ae67f62933d390666bde4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AgencyList_agencies$ref = any;
export type AgencyListQueryQueryVariables = {||};
export type AgencyListQueryQueryResponse = {|
  +agencies: ?$ReadOnlyArray<?{|
    +$fragmentRefs: AgencyList_agencies$ref
  |}>
|};
export type AgencyListQueryQuery = {|
  variables: AgencyListQueryQueryVariables,
  response: AgencyListQueryQueryResponse,
|};
*/


/*
query AgencyListQueryQuery {
  agencies {
    ...AgencyList_agencies
    id
  }
}

fragment AgencyItem_agency on Agency {
  gtfsId
  id
  name
}

fragment AgencyList_agencies on Agency {
  id
  ...AgencyItem_agency
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AgencyListQueryQuery",
    "type": "QueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agencies",
        "storageKey": null,
        "args": null,
        "concreteType": "Agency",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AgencyList_agencies",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AgencyListQueryQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agencies",
        "storageKey": null,
        "args": null,
        "concreteType": "Agency",
        "plural": true,
        "selections": [
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
            "name": "gtfsId",
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AgencyListQueryQuery",
    "id": null,
    "text": "query AgencyListQueryQuery {\n  agencies {\n    ...AgencyList_agencies\n    id\n  }\n}\n\nfragment AgencyItem_agency on Agency {\n  gtfsId\n  id\n  name\n}\n\nfragment AgencyList_agencies on Agency {\n  id\n  ...AgencyItem_agency\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'de284f3e819d1046e687cc477c803d5d';
module.exports = node;
