import React from "react";
import AgencyListQuery from "./components/AgencyList/AgencyListQuery";
import AgencyList from "./components/AgencyList/AgencyList";

function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="display-4">Agency list</h1>
        <hr />
        <p className="lead">Click on an agency to see details</p>
      </div>
      <AgencyListQuery>
        {({ error, props }) => {
          if (error) {
            return <div>An error occured when fetching agencies.</div>;
          }

          if (!props) {
            return (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading agencies...</span>
                </div>
              </div>
            );
          }

          return <AgencyList agencies={props.agencies} />;
        }}
      </AgencyListQuery>
    </div>
  );
}

export default App;
