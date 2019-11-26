/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const AgencyItemDetails = ({ agency }) => (
  <>
    <hr />
    <div>
      <span aria-label="phone" role="img">
        🔶
      </span>{" "}
      Phone: {agency.phone || "-"}
      <br />
      <span aria-label="Timezone" role="img">
        🔶
      </span>{" "}
      Timezone: {agency.timezone || "-"}
      <br />
      <span aria-label="url" role="img">
        🔶
      </span>{" "}
      URL: {agency.url || "-"}
    </div>
  </>
);

export default createFragmentContainer(AgencyItemDetails, {
  agency: graphql`
    fragment AgencyItemDetails_agency on Agency {
      phone
      timezone
      url
    }
  `
});
