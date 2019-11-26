/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React from "react";
import { createFragmentContainer } from "react-relay";
import classnames from "classnames";
import graphql from "babel-plugin-relay/macro";
import AgencyItemDetailsQuery from "../AgencyItemDetails/AgencyItemDetailsQuery";
import AgencyItemDetails from "../AgencyItemDetails/AgencyItemDetails";

const AgencyItem = ({ agency, index, isActive, onClick }) => (
  <a
    href="#"
    className={classnames("list-group-item", "list-group-item-action", {
      active: isActive
    })}
    onClick={e => {
      e.preventDefault();
      onClick(agency.id);
    }}
  >
    {index} - {agency.name.toLowerCase()}
    {isActive && (
      <AgencyItemDetailsQuery id={agency.gtfsId}>
        {({ error, props }) => {
          if (error) {
            return (
              <div>
                An error occured when fetching agency{" "}
                <strong>{agency.id}.</strong>
              </div>
            );
          }

          if (!props) {
            return (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading agency...</span>
                </div>
              </div>
            );
          }

          return <AgencyItemDetails agency={props.agency} />;
        }}
      </AgencyItemDetailsQuery>
    )}
  </a>
);

export default createFragmentContainer(AgencyItem, {
  agency: graphql`
    fragment AgencyItem_agency on Agency {
      gtfsId
      id
      name
    }
  `
});
