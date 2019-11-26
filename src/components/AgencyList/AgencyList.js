import React, { useCallback, useState } from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import AgencyItem from "../AgencyItem/AgencyItem";

const AgencyList = ({ agencies }) => {
  const [activeAgency, setActiveAgency] = useState();
  const onClick = useCallback(id => setActiveAgency(id), []);

  return (
    <div className="list-group">
      {agencies.map((agency, index) => (
        <AgencyItem
          agency={agency}
          key={agency.id}
          index={index + 1}
          isActive={agency.id === activeAgency}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default createFragmentContainer(AgencyList, {
  agencies: graphql`
    fragment AgencyList_agencies on Agency @relay(plural: true) {
      id
      ...AgencyItem_agency
    }
  `
});
