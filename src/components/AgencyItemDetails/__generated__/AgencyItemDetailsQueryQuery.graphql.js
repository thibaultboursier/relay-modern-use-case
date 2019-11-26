/**
 * @flow
 * @relayHash 5952802749caff5ff9c1e4e82dbb1764
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AgencyItemDetails_agency$ref = any;
export type AgencyItemDetailsQueryQueryVariables = {|
  id: string
|};
export type AgencyItemDetailsQueryQueryResponse = {|
  +agency: ?{|
    +$fragmentRefs: AgencyItemDetails_agency$ref
  |}
|};
export type AgencyItemDetailsQueryQuery = {|
  variables: AgencyItemDetailsQueryQueryVariables,
  response: AgencyItemDetailsQueryQueryResponse,
|};
*/


/*
query AgencyItemDetailsQueryQuery(
  $id: String!
) {
  agency(id: $id) {
    ...AgencyItemDetails_agency
    id
  }
}

fragment AgencyItemDetails_agency on Agency {
  phone
  timezone
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AgencyItemDetailsQueryQuery",
    "type": "QueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agency",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Agency",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AgencyItemDetails_agency",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AgencyItemDetailsQueryQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "agency",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Agency",
        "plural": false,
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AgencyItemDetailsQueryQuery",
    "id": null,
    "text": "query AgencyItemDetailsQueryQuery(\n  $id: String!\n) {\n  agency(id: $id) {\n    ...AgencyItemDetails_agency\n    id\n  }\n}\n\nfragment AgencyItemDetails_agency on Agency {\n  phone\n  timezone\n  url\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf0ad9042b2a789a7c195fb32a1bb90e';
module.exports = node;
