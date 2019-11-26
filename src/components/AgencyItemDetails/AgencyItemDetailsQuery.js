import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../relay/environment";

const AgencyItemDetailsQuery = ({ children, id }) => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query AgencyItemDetailsQueryQuery($id: String!) {
        agency(id: $id) {
          ...AgencyItemDetails_agency
        }
      }
    `}
    variables={{
      id
    }}
    render={children}
  />
);

export default AgencyItemDetailsQuery;
