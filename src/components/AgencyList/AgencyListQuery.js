import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../relay/environment";

const AgencyListQuery = ({ children }) => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query AgencyListQueryQuery {
        agencies {
          ...AgencyList_agencies
        }
      }
    `}
    render={children}
  />
);

export default AgencyListQuery;
